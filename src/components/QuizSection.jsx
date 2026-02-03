import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { destinations } from '../data';

const QuizSection = ({ onOpenModal }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [resultDestination, setResultDestination] = useState(null);

  const questions = [
    {
      id: 1,
      text: "Quel type d'expérience recherchez-vous ?",
      options: [
        { id: 'A', text: "Culturelle et artistique", type: 'culture' },
        { id: 'B', text: "Aventure et nature", type: 'adventure' },
        { id: 'C', text: "Élégance et raffinement", type: 'elegance' }
      ]
    },
    {
      id: 2,
      text: "Votre période préférée ?",
      options: [
        { id: 'A', text: "Renaissance et classicisme", type: 'culture' },
        { id: 'B', text: "Temps anciens et origines", type: 'adventure' },
        { id: 'C', text: "Histoire moderne (XIXe siècle)", type: 'elegance' }
      ]
    },
    {
      id: 3,
      text: "Vous préférez :",
      options: [
        { id: 'A', text: "L'art et l'architecture", type: 'culture' },
        { id: 'B', text: "La nature sauvage", type: 'adventure' },
        { id: 'C', text: "L'effervescence urbaine", type: 'elegance' }
      ]
    },
    {
      id: 4,
      text: "Votre activité idéale :",
      options: [
        { id: 'A', text: "Explorer des musées", type: 'culture' },
        { id: 'B', text: "Observer la faune", type: 'adventure' },
        { id: 'C', text: "Visiter des monuments", type: 'elegance' }
      ]
    }
  ];

  const handleAnswer = (optionId) => {
    const newAnswers = [...answers, optionId];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers) => {
    // Count occurrences
    const counts = finalAnswers.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

    let winnerType = 'elegance'; // Default to Paris (C)
    const countA = counts['A'] || 0;
    const countB = counts['B'] || 0;
    const countC = counts['C'] || 0;

    if (countA > countB && countA > countC) winnerType = 'culture';     // Florence
    else if (countB > countA && countB > countC) winnerType = 'adventure'; // Cretaceous
    else if (countC >= countA && countC >= countB) winnerType = 'elegance'; // Paris (wins tie)

    // Map winners logic
    // A -> Florence (culture)
    // B -> Cretaceous (adventure)
    // C -> Paris (elegance)

    // Actually, mapping by Type in data.js makes it cleaner
    // My data.js has types: 'culture', 'adventure', 'elegance'

    // WAIT: I need to map "Majority A" -> Florence, etc.
    // Let's rely on the counts logic above which maps A/B/C to type.

    let targetId = 'paris';
    if (winnerType === 'culture') targetId = 'florence';
    if (winnerType === 'adventure') targetId = 'cretace';

    const matchedDestination = destinations.find(d => d.id === targetId);
    setResultDestination(matchedDestination);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setResultDestination(null);
  };

  const getResultExplanation = () => {
    if (!resultDestination) return "";

    let keyword = "";
    let advantage = "";

    if (resultDestination.id === 'florence') {
      keyword = "Culture et Art";
      advantage = "une immersion totale dans le berceau de la beauté occidentale";
    } else if (resultDestination.id === 'cretace') {
      keyword = "Aventure Brute";
      advantage = "des sensations fortes au contact d'une nature indomptée";
    } else {
      keyword = "Élégance et Raffinement";
      advantage = "le prestige de la société mondaine et le progrès technologique";
    }

    return `D'après vos réponses, vous semblez en quête de ${keyword}. Cette époque est faite pour vous car elle offre ${advantage}.`;
  };

  return (
    <section id="custom-quiz" className="py-24 bg-dark-800 border-t border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-400 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900 rounded-full blur-[128px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm tracking-[0.2em] uppercase font-bold">Personnalisation</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4">Trouvez votre époque idéale</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key="question-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-dark-900 border border-gold-500/20 p-8 md:p-12 rounded-sm shadow-2xl relative"
              >
                {/* Progress Bar */}
                <div className="w-full h-1 bg-dark-800 mb-8 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gold-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                <h3 className="text-2xl font-serif text-white mb-8 text-center">
                  {questions[currentQuestion].text}
                </h3>

                <div className="grid gap-4">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleAnswer(option.id)}
                      className="w-full text-left p-6 bg-dark-800 border border-white/5 hover:border-gold-400 hover:bg-dark-800/80 transition-all group flex items-center justify-between"
                    >
                      <span className="text-lg text-gray-300 group-hover:text-white transition-colors">{option.text}</span>
                      <ArrowRight className="text-gold-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </button>
                  ))}
                </div>

                <div className="mt-8 text-center text-gray-500 text-sm tracking-widest uppercase">
                  Question {currentQuestion + 1} / {questions.length}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-dark-900 border border-gold-500/50 p-8 md:p-12 rounded-sm shadow-2xl text-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>

                <div className="w-20 h-20 bg-gold-400/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-gold-400/30">
                  <Sparkles className="text-gold-400 w-10 h-10" />
                </div>

                <h3 className="text-3xl font-serif text-white mb-4">
                  Votre voyage idéal est : <span className="text-gold-400">{resultDestination?.title}</span>
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                  {getResultExplanation()}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={() => onOpenModal(resultDestination, 'form')}
                    className="px-8 py-4 bg-gold-400 text-dark-900 font-bold uppercase tracking-widest text-sm hover:bg-gold-300 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] rounded-sm"
                  >
                    Réserver ce voyage
                  </button>
                  <button
                    onClick={resetQuiz}
                    className="px-8 py-4 bg-transparent border border-white/20 text-gray-400 uppercase tracking-widest text-sm font-semibold hover:border-white/50 hover:text-white transition-colors rounded-sm"
                  >
                    Recommencer le test
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
