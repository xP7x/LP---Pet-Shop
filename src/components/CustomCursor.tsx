import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorVariant = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        setCursorVariant('hover');
      } else if (target.closest('.gallery-track')) {
        setCursorVariant('drag');
      } else {
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', updateCursorVariant);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', updateCursorVariant);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'transparent',
      border: '2px solid rgba(45, 55, 72, 0.5)',
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: 'rgba(104, 211, 145, 0.2)',
      border: '2px solid #68D391',
    },
    drag: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: '#2D3748',
      border: '0px solid #2D3748',
    }
  };

  return (
    <>
      <motion.div
        variants={variants}
        animate={cursorVariant}
        transition={{ type: 'spring', damping: 28, mass: 0.5, stiffness: 200 }}
        className="fixed top-0 left-0 z-50 rounded-full pointer-events-none flex items-center justify-center font-sans font-medium text-[10px] tracking-wider"
      >
        <AnimatePresence>
          {cursorVariant === 'drag' && (
            <motion.span
              key="drag-text"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-white"
            >
              DRAG
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />
    </>
  );
}
