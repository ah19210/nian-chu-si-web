'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Firework {
  id: number;
  x: number;
  delay: number;
}

export default function Firework() {
  const [fireworks, setFireworks] = useState<Firework[]>([]);

  useEffect(() => {
    // Create random fireworks
    const newFireworks = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setFireworks(newFireworks);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {fireworks.map((firework) => (
        <motion.div
          key={firework.id}
          className="absolute"
          style={{ left: `${firework.x}%`, top: '10%' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1.5, 0],
          }}
          transition={{
            duration: 3,
            delay: firework.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 5 + 3,
          }}
        >
          {/* Firework explosion */}
          <div className="relative">
            {/* Center */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"
              animate={{ scale: [1, 2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: firework.delay }}
            />
            
            {/* Particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 w-1 h-1 rounded-full"
                style={{
                  backgroundColor: ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3', '#ff1493'][i],
                }}
                animate={{
                  x: Math.cos((i * 45 * Math.PI) / 180) * 80,
                  y: Math.sin((i * 45 * Math.PI) / 180) * 80,
                  opacity: [1, 1, 0],
                  scale: [1, 0.5, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: firework.delay,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 5 + 3,
                }}
              />
            ))}
          </div>
        </motion.div>
      ))}
      
      {/* Floating sparkles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute text-lg"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 5,
            repeat: Infinity,
          }}
        >
          {['✨', '⭐', '💫', '🌟'][i % 4]}
        </motion.div>
      ))}
    </div>
  );
}
