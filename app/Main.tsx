'use client';
import Button from '@/components/Button';
import Link from '@/components/Link';
import Logo from '@/data/logo50px.svg';
import Image from '@/components/Image';
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

export default function Home() {
  const name: string = 'Jayant.devhub';
  const [nextRender, setNextRender] = useState(false);
  const handleTypingComplete = () => {
    setNextRender(true);
  };
  const devRoles = [
    'SOFTWARE DEVELOPER',
    'FULL-STACK DEVELOPER',
    'FRONT-END DEVELOPER',
    'UI/UX DESIGNER',
    'BLOCKCHAIN DEVELOPER',
    'WEB3 DEVELOPER',
  ];
  return (
    <>
      <div className="mb-6 mt-12 flex items-center justify-center text-center text-4xl font-semibold sm:block">
        <Logo className="relative top-[-0.75rem] mr-3 hidden sm:inline-block" />
        <span className="text-gray-900 dark:text-gray-100">
          <TypingEffect
            text={'Jayant.'}
            onComplete={handleTypingComplete}
            className="'text-gray-900 dark:text-gray-100"
          />
          {nextRender && (
            <TypingEffect
              text={'devhub'}
              onComplete={() => {}}
              className="text-primary-600 dark:text-primary-500"
            />
          )}
        </span>
        <span className="cursor text-primary-600">_</span>
      </div>
      <div className="scroll-container">
        <div className="text-center font-sourceCode text-lg tracking-widest">
          <InfiniteLoop items={devRoles} interval={1500} />
        </div>
      </div>
      <div className="my-5 cursor-pointer text-center font-sourceCode text-lg ">
        <span className="hover:text-primary-500">I learn. </span>
        <span className="hover:text-primary-500">I buidl. </span>
        <span className="hover:text-primary-500">I ship. </span>
      </div>
      <div className="flex flex-wrap justify-between py-12">
        <div className="flex-1 text-gray-700 ">
          Hiring for Tech Roles?
          <Link href="/" className="px-4 py-2 text-primary-500">
            Hire Me
          </Link>
        </div>
        <div className="flex-1 text-right text-gray-500">
          résumé
          <Link href="/" className="px-4 py-2 text-primary-500">
            ⇩
          </Link>
        </div>
      </div>
    </>
  );
}
