import { useEffect, useState } from 'react';

const TypingEffect = ({ text, className, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) {
        clearInterval(interval);
        onComplete();
      }
    }, 130);
    return () => clearInterval(interval);
  }, [text]);
  return <span className={className}>{displayedText}</span>;
};

export default TypingEffect;
