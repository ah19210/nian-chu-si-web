'use client';

import { motion } from 'framer-motion';

export default function Message() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-rose-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-pink-100 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-4 -right-4 text-8xl opacity-10"
          >
            🐴
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 text-center mb-8 font-['Ma_Shan_Zheng']">
            💌 心底話
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              親愛的 Unmui：
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              感謝你喺呢個特別既日子——年初四，同我一齊去咗大家樂食馬年飛躍餐 🥢
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              雖然只係一餐普通既飯，但對我嚟講意義非凡 🥰
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              同你一齊，既使係平凡既小事，都變得格外開心同難忘 ✨
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center font-medium text-pink-500"
            >
              新一年，我會陪你食多啲飯 ❤️
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="text-right"
            >
              — Alan 敬上
            </motion.p>
          </div>
          
          {/* Heart decorations */}
          <div className="flex justify-center gap-4 mt-8">
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="text-2xl"
              >
                ❤️
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
