'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const interactiveItems = [
  { id: 1, emoji: '🧧', text: '利是逗來', color: 'bg-red-100 border-red-300' },
  { id: 2, emoji: '🍊', text: '大吉大利', color: 'bg-orange-100 border-orange-300' },
  { id: 3, emoji: '🐟', text: '年年有餘', color: 'bg-blue-100 border-blue-300' },
  { id: 4, emoji: '🥬', text: '財源廣進', color: 'bg-green-100 border-green-300' },
  { id: 5, emoji: '🍬', text: '甜甜蜜蜜', color: 'bg-pink-100 border-pink-300' },
  { id: 6, emoji: '🍚', text: '豐衣足食', color: 'bg-yellow-100 border-yellow-300' },
];

export default function Interactive() {
  const [clickedItem, setClickedItem] = useState<number | null>(null);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = (id: number) => {
    setClickedItem(id);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
      setClickedItem(null);
    }, 2000);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-rose-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-pink-600 text-center mb-4 font-['Ma_Shan_Zheng']"
        >
          🎮 一齊玩啦
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mb-8"
        >
          點擊下面既元素有驚喜 ✨
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {interactiveItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleClick(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${item.color} border-4 rounded-2xl p-6 text-center transition-all hover:shadow-xl`}
            >
              <motion.div
                animate={clickedItem === item.id ? { 
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0]
                } : {}}
                transition={{ duration: 0.5 }}
                className="text-5xl mb-2"
              >
                {item.emoji}
              </motion.div>
              <p className="text-lg font-medium text-gray-700">
                {item.text}
              </p>
            </motion.button>
          ))}
        </div>
        
        {/* Message popup */}
        <AnimatePresence>
          {showMessage && clickedItem && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.8 }}
              className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-pink-300 text-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: 2 }}
                  className="text-6xl mb-4"
                >
                  {interactiveItems.find(i => i.id === clickedItem)?.emoji}
                </motion.div>
                <p className="text-2xl font-bold text-pink-600">
                  {interactiveItems.find(i => i.id === clickedItem)?.text} 💕
                </p>
                <p className="text-gray-500 mt-2">
                  Unmui，新年快樂！
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
