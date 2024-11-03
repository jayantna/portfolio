import { useEffect, useState } from 'react';

const InfiniteLoop = ({ items, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('animate-fade-in');

  useEffect(() => {
    // Trigger fade-out after the first half of the interval
    const fadeOutTimer = setTimeout(() => {
      setAnimationClass('animate-fade-out');
    }, interval / 2);

    // Change the text and reset to fade-in after the second half of the interval
    const textChangeTimer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      setAnimationClass('animate-fade-in');
    }, interval);

    // Cleanup timers on component unmount
    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(textChangeTimer);
    };
  }, [currentIndex, items.length, interval]);

  return <div className={`fade-container ${animationClass}`}>{items[currentIndex]}</div>;
};

export default InfiniteLoop;
