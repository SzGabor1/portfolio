import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/education.css';

import ME from '../assets/me.jpg'
import PROFILE from '../assets/profile_pics.jpg'

interface Item {
  id: number;
  image: string;
}

const IMAGES = {
  image1:  ME,
  image2:  PROFILE,
};

const Education: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const items: Item[] = [
    { id: 1, image: IMAGES.image1 },
    { id: 2, image: IMAGES.image2 },
  ];

  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);

  const indexInArrayScope = ((activeIndex % items.length) + items.length) % items.length;

  const visibleItems = [...items, ...items].slice(
    indexInArrayScope,
    indexInArrayScope + (isMobile ? 3 : 3)
  );

  const handleClick = (newDirection: number) => {
    setActiveIndex((prevIndex) => [
      (prevIndex[0] + newDirection + items.length) % items.length,
      newDirection,
    ]);
  };

  return (
    <div className="main-wrapper">
      <div className="wrapper">
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleItems.map((item) => (
            <motion.div
              className="card"
              key={item.id}
              layout
              custom={{
                direction,
                position: () => {
                  if (item === visibleItems[0]) {
                    return 'left';
                  } else if (isMobile ? item === visibleItems[1] : item === visibleItems[2]) {
                    return 'center';
                  } else {
                    return 'right';
                  }
                },
              }}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 1 }}
            >
              <img src={item.image} alt={`Kép ${item.id}`} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="buttons">
        <motion.button whileTap={{ scale: 0.8 }} onClick={() => handleClick(-1)}>
          ◀︎
        </motion.button>
        <motion.button whileTap={{ scale: 0.8 }} onClick={() => handleClick(1)}>
          ▶︎
        </motion.button>
      </div>
    </div>
  );
};

const variants = {
  enter: ({ direction }: { direction: number }) => {
    return { scale: 0.2, x: direction < 1 ? 50 : -50, opacity: 0 };
  },
  center: ({ position, direction }: { position: () => string; direction: number }) => {
    return {
      scale: position() === 'center' ? 1 : 0.7,
      x: 0,
      zIndex: getZIndex({ position, direction }),
      opacity: 1,
    };
  },
  exit: ({ direction }: { direction: number }) => {
    return { scale: 0.2, x: direction < 1 ? -50 : 50, opacity: 0 };
  },
};

function getZIndex({ position, direction }: { position: () => string; direction: number }) {
    const indexes: { [key: string]: number } = {
      left: direction > 0 ? 2 : 1,
      center: 3,
      right: direction > 0 ? 1 : 2,
    };
    return indexes[position()];
  }

export default Education;