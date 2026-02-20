'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const memories = [
  {
    emoji: '🍜',
    title: '大家樂馬年飛躍餐',
    description: '年初四既晚餐，好味既叉燒飯',
    photo: '/meal-photo.jpg',
  },
  {
    emoji: '🥢',
    title: '一齊食飯',
    description: '每秒鐘都咁開心',
  },
  {
    emoji: '💕',
    title: '陪伴',
    description: '有你就夠',
  },
  {
    emoji: '🏮',
    title: '新年',
    description: '馬年飛躍，步步高升',
  },
  {
    emoji: '✨',
    title: '回憶',
    description: '珍惜每一刻',
  },
];

export default function MemoryLane() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-rose-50 to-pink-50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-pink-600 text-center mb-12 font-['Ma_Shan_Zheng']"
        >
          📸 美好回憶
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-100 cursor-pointer hover:border-pink-300 transition-colors"
            >
              <motion.div
                animate={{ 
                  rotate: [0, -5, 5, -5, 0],
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="text-5xl text-center mb-4"
              >
                {memory.photo ? (
                  <div className="relative w-full h-48 rounded-xl overflow-hidden border-4 border-pink-200">
                    <Image
                      src={memory.photo}
                      alt={memory.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  memory.emoji
                )}
              </motion.div>
              
              <h3 className="text-xl font-bold text-pink-600 text-center mb-2">
                {memory.title}
              </h3>
              
              <p className="text-gray-600 text-center">
                {memory.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Photo frame decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-pink-200 via-rose-200 to-gold-200 p-1 rounded-3xl">
            <div className="bg-white rounded-3xl px-8 py-6">
              <p className="text-2xl md:text-3xl text-pink-500 font-['Ma_Shan_Zheng']">
                👫 我哋既故事...
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
