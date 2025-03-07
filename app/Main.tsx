'use client';
import { useCallback, useState } from 'react';
import Logo from '@/data/logo50px.svg';
import Image from '@/components/Image';
import InfiniteLoop from '@/components/InfiniteLoop';
import TypingEffect from '@/components/TypingEffect';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import only the main Swiper CSS
import { Autoplay } from 'swiper/modules';
import './swiper.css';
import { FaEnvelope, FaComments, FaFileDownload } from 'react-icons/fa'; // Import icons

export default function Home() {
  const name: string = 'Jayant.devhub';
  const [nextRender, setNextRender] = useState(false);
  const handleTypingComplete = useCallback(() => {
    setNextRender(true);
  }, []);

  const devRoles = [
    'SOFTWARE DEVELOPER',
    'FULL-STACK DEVELOPER',
    'FRONT-END DEVELOPER',
    'UI/UX DESIGNER',
    'BLOCKCHAIN DEVELOPER',
    'WEB3 DEVELOPER',
  ];

  const logoList = [
    'HTML',
    'CSS',
    'TypeScript',
    'JavaScript',
    'ReactJS',
    'Redux',
    'Bootstrap',
    'Git',
    'Python',
    'C++',
    'NextJS',
    'MongoDB',
    'Ethereum',
    'Docker',
    'Solidity',
    'AWS',
    'ExpressJS',
    'SQL',
  ];

  return (
    <>
      <div className="mb-6 mt-12 flex items-center justify-center text-center text-4xl font-semibold sm:block">
        <Logo className="relative top-[-0.75rem] mr-3 hidden sm:inline-block" />
        <span className="cursor-default text-gray-900 dark:text-gray-100">
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
      <div className="scroll-container cursor-default">
        <div className="text-center font-sourceCode text-xl tracking-widest">
          <InfiniteLoop items={devRoles} interval={1500} />
        </div>
      </div>
      <div className="my-5 cursor-default text-center font-sourceCode text-lg ">
        <span className="hover:text-primary-500">I learn. </span>
        <span className="hover:text-primary-500">I buidl. </span>
        <span className="hover:text-primary-500">I ship. </span>
      </div>

      <div className="flex flex-col items-center justify-between py-8 sm:flex-row">
        <a
          href="/contact"
          className="m-4 flex w-full cursor-pointer flex-col justify-between rounded-lg border border-gray-300 bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg dark:border-gray-600 dark:bg-gray-900 sm:w-1/3 md:min-h-[130px] lg:min-h-[130px]"
        >
          <div className="flex items-center">
            <FaEnvelope className="mr-2 text-3xl text-primary-500 dark:text-primary-500" />
            <h3 className="whitespace-nowrap text-lg font-semibold text-gray-900 dark:text-gray-100">
              Get in touch
            </h3>
          </div>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Reach out for collaborations or inquiries.
          </p>
        </a>

        <a
          href="/testimonials"
          className="m-4 flex w-full cursor-pointer flex-col justify-between rounded-lg border border-gray-300 bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg dark:border-gray-600 dark:bg-gray-900 sm:w-1/3 md:min-h-[130px] lg:min-h-[130px]"
        >
          <div className="flex items-center">
            <FaComments className="mr-2 text-3xl text-primary-500 dark:text-primary-500" />
            <h3 className="whitespace-nowrap text-lg font-semibold text-gray-900 dark:text-gray-100">
              Testimonials
            </h3>
          </div>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            See what others say about my work.
          </p>
        </a>

        <a
          href="/files/resume.pdf"
          className="m-4 flex w-full cursor-pointer flex-col justify-between rounded-lg border border-gray-300 bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg dark:border-gray-600 dark:bg-gray-900 sm:w-1/3 md:min-h-[130px] lg:min-h-[130px]"
          download
        >
          <div className="flex items-center">
            <FaFileDownload className="mr-2 text-3xl text-primary-500 dark:text-primary-500" />
            <h3 className="whitespace-nowrap text-lg font-semibold text-gray-900 dark:text-gray-100">
              Download Resume
            </h3>
          </div>
          <p className="mt-2 text-gray-500 dark:text-gray-400">Get a copy of my resume.</p>
        </a>
      </div>

      <div className="relative my-4 hidden lg:block">
        <div className="absolute left-0 top-0 z-10 h-full w-[20%] bg-gradient-to-r from-white to-transparent dark:from-gray-950"></div>
        {/* Right overlay with gradient from right to transparent */}
        <div className="absolute right-0 top-0 z-10 h-full w-[20%] bg-gradient-to-l from-white to-transparent dark:from-gray-950"></div>
        {/* Left overlay with gradient from left to transparent */}
        <Swiper
          className="swiper-container"
          loop={true}
          freeMode={true}
          spaceBetween={30}
          grabCursor={true}
          slidesPerView={9}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={4000}
          modules={[Autoplay]}
        >
          {Array.from({ length: 18 }, (_, index) => (
            <SwiperSlide key={index}>
              <div key={index} className="logo-container p-4">
                <Image
                  src={`/static/images/logo/${index}.png`}
                  alt={index.toString()}
                  width={80}
                  height={80}
                  key={index}
                />
              </div>
              <div className="p-2 text-center font-sourceCode text-sm text-gray-700 dark:border-gray-900 dark:text-gray-600">
                {logoList[index]}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
