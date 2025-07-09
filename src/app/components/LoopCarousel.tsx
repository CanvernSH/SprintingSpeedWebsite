'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const images = [
  '/images/sprintingspeedimage.png',
  '/images/slide2.jpg',
  '/images/slide3.jpg',
  '/images/slide4.jpg',
];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir < 0 ? 300 : -300, opacity: 0 }),
};

export default function LoopCarousel() {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const imageIndex = ((page % images.length) + images.length) % images.length;

  const paginate = (newDir: number) => {
    setPage([page + newDir, newDir]);
  };

  return (
    <div className="relative w-full h-320 mx-auto overflow-hidden rounded-2xl shadow-lg">
      <AnimatePresence custom={direction} initial={false}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
          }}
          className="absolute w-full h-full object-cover"
          alt={`Slide ${imageIndex + 1}`}
        />
      </AnimatePresence>

      <motion.button
        onClick={() => paginate(-1)}
        whileTap={{ scale: 0.9 }}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 rounded-full p-2"
      >
        <FaAngleLeft size={24} />
      </motion.button>

      <motion.button
        onClick={() => paginate(1)}
        whileTap={{ scale: 0.9 }}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 rounded-full p-2"
      >
        <FaAngleRight size={24} />
      </motion.button>
    </div>
  );
}