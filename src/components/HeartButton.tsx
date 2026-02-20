'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeartButton() {
  const [liked, setLiked] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; x: number }[]>([]);

  const handleClick = () => {
    setLiked(!liked);
    
    if (!liked) {
      setShowMessage(true);
      
      // Add floating hearts
      const newHearts = Array.from({ length: 8 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100 - 50,
      }));
      setHearts(newHearts);
      
      setTimeout(() => {
        setShowMessage(false);
        setHearts([]);
      }, 2000);
    }
  };

  return (
    <div className="relative inline-block">
      <motion.button
        onClick={handleClick}
        whileTap={{ scale: 0.9 }}
        className="relative"
      >
        <motion.div
          animate={liked ? { 
            scale: [1, 1.3, 1],
          } : {}}
          transition={{ duration: 0.3 }}
        >
          <span className="text-5xl md:text-6xl">
            {liked ? '❤️' : '🤍'}
          </span>
        </motion.div>
        
        {/* Floating hearts animation */}
        <AnimatePresence>
          {hearts.map((heart) => (
            <motion.span
              key={heart.id}
              initial={{ opacity: 1, y: 0, x: 0, scale: 0 }}
              animate={{ 
                opacity: 0, 
                y: -100, 
                x: heart.x,
                scale: [0, 1.5, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute left-1/2 top-0 text-2xl"
            >
              ❤️
            </motion.span>
          ))}
        </AnimatePresence>
      </motion.button>
      
      {/* Message popup */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-4 bg-white px-6 py-3 rounded-2xl shadow-xl border-2 border-pink-200 whitespace-nowrap z-10"
          >
            <p className="text-pink-600 font-medium">
              I Love You Too! 💕
            </p>
            <p className="text-gray-500 text-sm text-center">
              — Alan
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Hint text */}
      {!liked && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 text-sm text-pink-400 whitespace-nowrap"
        >
          撳下話愛你 💕
        </motion.p>
      )}
    </div>
  );
}
