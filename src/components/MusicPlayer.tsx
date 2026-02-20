'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControl, setShowControl] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          alert('請點擊播放按鈕開始播放音樂 🎵');
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Note: In production, you would need an actual audio file
  // This is a placeholder - the actual song is 劉德華《恭喜發財》
  
  return (
    <>
      {/* Hidden audio element - would need actual audio file in production */}
      <audio
        ref={audioRef}
        src="/gongxi-facai.mp3"  // Placeholder - user would need to add this file
        loop
      />
      
      {/* Music control button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        onClick={togglePlay}
        onMouseEnter={() => setShowControl(true)}
        onMouseLeave={() => setShowControl(false)}
        className="fixed top-4 right-4 z-50 bg-gradient-to-br from-pink-400 to-rose-500 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        <motion.div
          animate={isPlaying ? { rotate: 360 } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <span className="text-2xl">
            {isPlaying ? '🎵' : '🔇'}
          </span>
        </motion.div>
        
        {/* Tooltip */}
        <AnimatePresence>
          {showControl && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-full top-1/2 -translate-y-1/2 mr-2 bg-white px-3 py-1 rounded-lg shadow-md whitespace-nowrap text-sm"
            >
              {isPlaying ? '暫停音樂' : '播放《恭喜發財》'}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
      
      {/* Now playing indicator */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
          >
            <div className="flex items-center gap-2">
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-pink-500"
              >
                🎵
              </motion.span>
              <span className="text-sm text-gray-700">
                劉德華 - 恭喜發財
              </span>
              <motion.div className="flex gap-0.5">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [4, 12, 4] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                    className="w-1 bg-pink-500 rounded-full"
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
