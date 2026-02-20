'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const wishes = [
  '新一年日日開心 ❤️',
  '身体健康 🍊',
  '樣靚身材正 🌟',
  '搵多啲錢 💰',
  '年年有今日 🎂',
  '同Alan永遠一齊 💕',
  '馬年飛黃騰達 🐴',
  '日日都笑騎騎 😄',
];

export default function WishTree() {
  const [showWishes, setShowWishes] = useState(false);
  const [selectedWish, setSelectedWish] = useState<string | null>(null);

  const handleTreeClick = () => {
    setShowWishes(true);
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    setSelectedWish(randomWish);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-rose-50 to-pink-100">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-pink-600 mb-8 font-['Ma_Shan_Zheng']"
        >
          🌳 願望樹
        </motion.h2>
        
        <div className="relative">
          <motion.button
            onClick={handleTreeClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <motion.div
              animate={{ 
                rotate: [0, 2, -2, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-9xl md:text-[12rem]"
            >
              🌳
            </motion.div>
            
            {/* Glow effect */}
            <motion.div
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-gold-200 rounded-full blur-3xl -z-10"
            />
            
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-4 py-2 rounded-full text-sm whitespace-nowrap"
            >
              撳下許願 ✨
            </motion.div>
          </motion.button>
        </div>
        
        {/* Wish display */}
        <AnimatePresence>
          {showWishes && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: -30 }}
              className="mt-12"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-gold-300 inline-block">
                <motion.div
                  animate={{ 
                    textShadow: ['0 0 10px #ffd700', '0 0 20px #ffd700', '0 0 10px #ffd700'],
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-2xl md:text-3xl font-bold text-gold-600 mb-4"
                >
                  ✨ {selectedWish} ✨
                </motion.div>
                
                <div className="flex justify-center gap-2">
                  {wishes.slice(0, 4).map((wish, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i }}
                      className="text-2xl"
                    >
                      🌟
                    </motion.span>
                  ))}
                </div>
                
                <button
                  onClick={() => setShowWishes(false)}
                  className="mt-6 text-pink-500 hover:text-pink-700 underline"
                >
                  再許多次願望 🔄
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
