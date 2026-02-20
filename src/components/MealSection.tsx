'use client';

import { motion } from 'framer-motion';

export default function MealSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-rose-50 to-orange-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-8 font-['Ma_Shan_Zheng']">
            🍽️ 馬年飛躍餐
          </h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative inline-block"
          >
            {/* Photo frame decoration */}
            <div className="absolute -inset-4 bg-gradient-to-br from-pink-300 via-red-300 to-orange-300 rounded-3xl transform rotate-2"></div>
            <div className="absolute -inset-4 bg-gradient-to-br from-pink-300 via-red-300 to-orange-300 rounded-3xl transform -rotate-2"></div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/meal-photo.jpg"
                alt="馬年飛躍餐"
                className="w-full max-w-md mx-auto object-cover"
              />
            </motion.div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg text-pink-500 font-medium"
          >
            ✨ 美味時刻 ✨
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
