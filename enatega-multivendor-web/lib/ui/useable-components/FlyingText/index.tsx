import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

const AnimatedText = () => {
  const t = useTranslations();
  const texts = [t('burgers'), t('gifts'), t('desserts'), t('pizza')];

  const textVariants = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { y: -40, opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setVisible(true);
      }, 300);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [index]);

  const currentText = texts[index];

  return (
    <div className='w-[280px] md:w-[580px] h-[5rem] flex justify-center items-center relative'>
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={currentText}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute text-[40px] md:text-[80px] font-extrabold text-white"
            style={{ direction: 'rtl', textAlign: 'center' }} // مهم للنص العربي
          >
            {currentText}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedText;
