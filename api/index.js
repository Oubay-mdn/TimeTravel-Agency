import express from 'express';
import cors from 'cors';
import Groq from 'groq-sdk';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Groq client
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

// Middleware
// Important pour Vercel : on autorise toutes les origines ou on spécifie le frontend
app.use(cors({
    origin: '*', // Tu pourras restreindre à ton URL Vercel plus tard si besoin
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// System prompt for the TimeTravel Agency chatbot
const SYSTEM_PROMPT = `Tu es Chronos, l'assistant personnel de l'agence de voyage temporelle TimeTravel-Agency. Tu es élégant, enthousiaste et très professionnel.

Informations sur l'agence :
- Destinations principales :
  * Florence en 1504 (Renaissance, art, Michel-Ange, Léonard de Vinci)
  * Paris en 1889 (Inauguration Tour Eiffel, Belle Époque, romantisme)
  * Crétacé (-65M années) (Dinosaures, T-Rex, aventure extrême)

- Prix : À partir de 12 500 €
- Sécurité : Capsules temporelles certifiées "Zero-Paradox", gardes du corps invisibles
- Service : Conciergerie temporelle 24h/24

Ton rôle :
- Aider les clients à choisir leur destination temporelle selon leurs goûts
- Répondre aux questions sur la sécurité, les prix, les expériences
- Être enthousiaste et inspirant
- Utiliser un ton élégant et premium

Réponds toujours en français et sois concis mais engageant.`;

// Chat endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { message, conversationHistory = [] } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message requis' });
        }

        // Build messages array with history
        const messages = [
            { role: 'system', content: SYSTEM_PROMPT },
            ...conversationHistory,
            { role: 'user', content: message }
        ];

        // Call Groq API
        const completion = await groq.chat.completions.create({
            model: 'llama-3.3-70b-versatile',
            messages: messages,
            temperature: 0.7,
            max_tokens: 500,
            top_p: 1,
            stream: false
        });

        const response = completion.choices[0]?.message?.content || 'Désolé, je n\'ai pas pu générer une réponse.';

        res.json({
            response,
            success: true
        });

    } catch (error) {
        console.error('Erreur Groq API:', error);
        res.status(500).json({
            error: 'Erreur lors de la communication avec l\'IA',
            details: error.message
        });
    }
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Serveur Groq AI fonctionnel sur Vercel' });
});

// Route par défaut pour éviter les 404 sur la racine de l'API
app.get('/api', (req, res) => {
    res.json({ message: 'API TimeTravel Agency Ready' });
});

// --- MODIFICATION CRUCIALE POUR VERCEL ---

// On ne lance le serveur avec app.listen QUE si on est en local.
// Sur Vercel, c'est Vercel qui gère ça via l'export.
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`🚀 Serveur backend démarré sur http://localhost:${PORT}`);
        console.log(`✅ Groq API configurée`);
    });
}

// On exporte l'app pour que Vercel puisse l'utiliser comme une fonction Serverless
export default app;