
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

// Simple response database for the chatbot
const chatResponses = {
  fr: {
    default: "Je suis désolé, je ne peux pas vous aider avec cette demande. Veuillez contacter notre équipe pour plus d'informations.",
    hello: "Bonjour! Comment puis-je vous aider aujourd'hui?",
    help: "Je peux vous aider avec des informations sur nos programmes, les dons, ou vous mettre en contact avec notre équipe.",
    donation: "Vous pouvez faire un don en cliquant sur la section 'Faire un Don' de notre site web. Nous acceptons des dons financiers ainsi que des dons matériels.",
    contact: "Vous pouvez nous contacter par email à pionniersfr@yahoo.fr ou par téléphone au +1 438 866 1964.",
    about: "La Colonie des Pionniers du Développement (CPD) est une organisation caritative à but non lucratif axée sur l'éducation pour la paix et la non-violence, ainsi que sur le développement.",
  },
  en: {
    default: "I'm sorry, I can't help with that request. Please contact our team for more information.",
    hello: "Hello! How can I help you today?",
    help: "I can help you with information about our programs, donations, or connect you with our team.",
    donation: "You can make a donation by clicking on the 'Donate' section of our website. We accept financial donations as well as material donations.",
    contact: "You can contact us via email at pionniersfr@yahoo.fr or by phone at +1 438 866 1964.",
    about: "The Colony of Development Pioneers (CPD) is a non-profit, charitable organization focused on education for peace and non-violence, as well as development.",
  }
};

// Helper function to find a response
const findResponse = (message: string, language: 'en' | 'fr') => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('bonjour') || lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return chatResponses[language].hello;
  }
  if (lowerMessage.includes('help') || lowerMessage.includes('aide')) {
    return chatResponses[language].help;
  }
  if (lowerMessage.includes('don') || lowerMessage.includes('donation') || lowerMessage.includes('donate')) {
    return chatResponses[language].donation;
  }
  if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
    return chatResponses[language].contact;
  }
  if (lowerMessage.includes('about') || lowerMessage.includes('propos') || lowerMessage.includes('qui')) {
    return chatResponses[language].about;
  }
  
  return chatResponses[language].default;
};

type Message = {
  id: number;
  text: string;
  isUser: boolean;
};

const Chatbot: React.FC = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: t('chatbot.greeting'), isUser: false }
  ]);
  const [input, setInput] = useState('');
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    // Add user message
    const newUserMessage = { id: Date.now(), text: input, isUser: true };
    setMessages(prev => [...prev, newUserMessage]);
    
    // Clear input
    setInput('');
    
    // Generate bot response (with a small delay to simulate thinking)
    setTimeout(() => {
      const botResponse = { 
        id: Date.now() + 1, 
        text: findResponse(input, language), 
        isUser: false 
      };
      setMessages(prev => [...prev, botResponse]);
    }, 600);
  };
  
  return (
    <>
      {/* Chat button */}
      <motion.button
        className="fixed bottom-5 right-5 rounded-full p-4 bg-primary text-white shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <MessageCircle size={24} />
      </motion.button>
      
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-5 w-80 sm:w-96 h-96 bg-white rounded-lg shadow-xl z-50 flex flex-col overflow-hidden border border-gray-200"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          >
            {/* Header */}
            <div className="p-3 bg-primary text-white flex justify-between items-center">
              <h3 className="font-medium">{t('chatbot.title')}</h3>
              <button onClick={() => setIsOpen(false)} className="text-white hover:bg-primary/80 p-1 rounded">
                <X size={18} />
              </button>
            </div>
            
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`mb-2 max-w-[80%] ${message.isUser ? 'ml-auto' : 'mr-auto'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`p-3 rounded-lg ${
                      message.isUser 
                        ? 'bg-primary text-white rounded-br-none' 
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              <div ref={endOfMessagesRef} />
            </div>
            
            {/* Input */}
            <div className="p-3 border-t border-gray-200">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={t('chatbot.placeholder')}
                  className="flex-1"
                />
                <Button size="icon" onClick={handleSendMessage}>
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
