# TimeTravel Agency - Webapp Interactive

Webapp immersive pour une agence de voyage temporel de luxe, permettant de découvrir des époques historiques et de réserver son séjour.

## 🛠️ Stack Technique

*   **Frontend** : React + Tailwind CSS (Vite)
*   **Backend** : Node.js + Express
*   **IA** : Groq API (Llama 3.3 70B)
*   **Icônes** : Lucide React
*   **Animations** : Framer Motion
*   **Déploiement** : Vercel / Netlify (Compatible)

## ✨ Features Implémentées

*   **Landing Page Immersive** : Hero section avec vidéo d'ambiance et présentation agence "Luxe".
*   **Galerie Destinations** : Cards interactives pour **Paris 1889**, **Crétacé (-65M)** et **Florence 1504**.
*   **Modales de Détails** : Pop-ups fluides avec informations approfondies (points forts, description immersive) et prix.
*   **Chatbot IA Groq** : Widget conversationnel **"Chronos"** propulsé par **Groq AI (Llama 3.3 70B)** - Répond intelligemment aux questions sur les destinations avec contexte conversationnel.
*   **Quiz de Recommandation** : Algorithme interactif (4 questions) suggérant la destination idéale selon le profil utilisateur (Culture vs Aventure vs Élégance).
*   **Système de Réservation** : Formulaire intégré dans la modale avec validation automatique simulée et message de succès.

## 🤖 Transparence IA (Outils utilisés)

*   **Génération de Code** : Antigravity / Gemini 2.0 (Google Deepmind)
*   **Assets Visuels** : Unsplash / Génération IA (Session 1)
*   **Textes & Scénarios** : Générés par IA

## 🚀 Installation

1.  **Cloner le repo**
    ```bash
    git clone https://github.com/Oubay-mdn/TimeTravel-Agency.git
    cd TimeTravel-Agency
    ```

2.  **Installer les dépendances**
    ```bash
    npm install
    ```

3.  **Configurer l'API Groq (pour le chatbot IA)**
    
    a. Créer un compte gratuit sur [console.groq.com](https://console.groq.com)
    
    b. Obtenir votre clé API gratuite
    
    c. Créer un fichier `.env` à la racine du projet :
    ```bash
    cp .env.example .env
    ```
    
    d. Modifier `.env` et ajouter votre clé :
    ```env
    GROQ_API_KEY=votre_cle_api_ici
    PORT=3001
    ```

4.  **Lancer le projet**
    
    **Option 1 - Tout en une commande (recommandé) :**
    ```bash
    npm run dev:full
    ```
    
    **Option 2 - Frontend et Backend séparément :**
    ```bash
    # Terminal 1 - Backend (Groq API)
    npm run server
    
    # Terminal 2 - Frontend
    npm run dev
    ```

5.  **Accéder à l'application**
    - Frontend : `http://localhost:5173`
    - Backend API : `http://localhost:3001`

## 📄 Crédits & Licence

Projet pédagogique - M1/M2 Digital & IA.
Concept original : **TimeTravel Agency**.
Membres : 
* Oubay MOUDDEN
* Adam CHOUAG
* Ryad MURAD

