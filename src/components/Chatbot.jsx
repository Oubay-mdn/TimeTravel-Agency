import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Bonjour ! Je suis Chronos, votre assistant personnel. Quelle époque rêvez-vous d'explorer aujourd'hui ?",
      sender: 'bot'
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateResponse = (text) => {
    const lowerText = text.toLowerCase();

    // Florence Logic
    if (lowerText.match(/art|peinture|renaissance|italie|florence|michel|vinci|culture|musée/)) {
      return "Ah, une âme sensible à la beauté ! Pour les amateurs d'art et de raffinement, je ne peux que recommander **Florence en 1504**. C'est l'apogée de la Renaissance, vous y croiserez Michel-Ange et Léonard de Vinci en personne !";
    }

    // Paris Logic
    if (lowerText.match(/paris|eiffel|tour|1889|romantique|amour|fête|exposition|lumière/)) {
      return "Excellent choix ! **Paris en 1889** est magique. L'inauguration de la Tour Eiffel, les bals fastueux... C'est l'époque idéale pour le romantisme et l'émerveillement technologique.";
    }

    // Dino Logic
    if (lowerText.match(/dino|action|aventure|nature|t-rex|danger|saurien|jurassique|crétacé/)) {
      return "Vous cherchez le grand frisson ? Le **Crétacé (-65M d'années)** est notre destination la plus sauvage. Face-à-face avec un T-Rex garanti, en toute sécurité bien sûr grâce à nos dômes invisibles.";
    }

    // Safety/Price Logic
    if (lowerText.match(/prix|cher|tarif|coût/)) {
      return "Nos expériences débutent à **12 500 €**. C'est le prix de l'exclusivité, d'une sécurité absolue et d'un service de conciergerie temporelle disponible 24h/24.";
    }

    if (lowerText.match(/sécurité|dangereux|risque|peur/)) {
      return "La sécurité est notre priorité absolue. Nos capsules temporelles sont certifiées 'Zero-Paradox' et nos gardes du corps sont invisibles mais omniprésents. Vous ne courrez aucun risque, même face à un dinosaure.";
    }

    if (lowerText.match(/bonjour|salut|hello|coucou/)) {
      return "Bonjour à vous ! Prêt à voyager dans le temps ?";
    }

    // Default Fallback
    return "C'est fascinant. Dites-m'en plus sur ce que vous recherchez. Êtes-vous plutôt **Art et Culture**, **Romantisme**, ou **Aventure Extrême** ?";
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate thinking delay
    setTimeout(() => {
      const responseText = generateResponse(userMessage.text);
      const botMessage = { id: Date.now() + 1, text: responseText, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="absolute bottom-20 right-0 w-[350px] h-[500px] bg-dark-900 border border-gold-500/30 rounded-lg shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="bg-dark-800 p-4 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold-400 p-1 flex items-center justify-center text-dark-900">
                    <Bot size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-serif font-bold text-sm">Chronos</h3>
                    <p className="text-gold-400 text-xs">Assistant Temporel</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-dark-950/50">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                          ? 'bg-gold-500 text-dark-900 rounded-br-none font-medium'
                          : 'bg-dark-800 text-gray-200 border border-white/10 rounded-bl-none'
                        }`}
                    >
                      {/* Parse bold text */}
                      {msg.text.split('**').map((part, i) =>
                        i % 2 === 1 ? <strong key={i} className="font-bold">{part}</strong> : part
                      )}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-dark-800 border border-white/10 rounded-2xl rounded-bl-none p-3 flex items-center gap-1">
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <form onSubmit={handleSend} className="p-3 bg-dark-800 border-t border-white/5 flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Posez vos questions..."
                  className="flex-1 bg-dark-900 border border-white/10 text-white text-sm rounded-full px-4 py-2 focus:outline-none focus:border-gold-400/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="p-2 bg-gold-400 text-dark-900 rounded-full hover:bg-gold-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-gold-400 text-dark-900 rounded-full shadow-lg shadow-gold-400/20 flex items-center justify-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full"></div>
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </motion.button>
      </div>
    </>
  );
};

export default Chatbot;
