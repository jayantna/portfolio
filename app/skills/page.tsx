import { genPageMetadata } from 'app/seo';

export const metadata = genPageMetadata({ title: 'Experience' });

export default function Page() {
  const skills = [
    'JavaScript',
    'HTML',
    'CSS',
    'ReactJS',
    'Tailwind CSS',
    'Node.js',
    'TypeScript',
    'Redux',
    'UI/UX',
    'ExpressJS',
    'GraphQL',
    'Git',
    'Solidity',
    'Java',
    'Springboot',
    'Microservice',
    'DSA',
    'Python',
    'Pandas',
    'Blockchain',
    'Ethereum',
    'web3.js',
    'Hardhat',
    'NFTs',
    'Bootstrap',
    'C++',
    'NextJS',
    'Docker',
    'aws',
    'VScode',
    'RemixIDE',
    'Postman',
    'API',
    'Websockets',
    'HTTP Streaming',
  ];

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-6 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            Skills
          </h1>
        </div>
        <div className="py-5">
          <div className="flex flex-wrap gap-2 p-4 px-20">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="cursor-pointer rounded-full border border-gray-200 bg-gray-100 px-3 py-1
                text-sm font-medium text-gray-800 hover:animate-border-pulse  hover:bg-primary-200
                dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-primary-950"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
