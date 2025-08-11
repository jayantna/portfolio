import { genPageMetadata } from 'app/seo';

export const metadata = genPageMetadata({ title: 'Experience' });

export default function Page() {
  const timelineData = [
    {
      date: 'Apr 2025 - Present',
      title: 'Autowhale GmbH',
      role: 'Fullstack Blockchain Developer',
      location: 'Remote, Austria',
      description: (
        <ul className="list-disc px-4">
          <li>
            Led the architecture and development of a decentralized exchange (DEX) designed to
            integrate with a portfolio management system. The project was built on the Stellar
            blockchain, utilizing Soroban smart contracts to power a secure smart vault and
            integrating with the Soroswap DEX router to facilitate token swaps and
            liquidity management.
          </li>
          <li>
            Leveraged the SubQuery SDK to develop custom Blockchain Indexer, to efficiently query, filter,
            and store blockchain data, enabling live data fetching for an application.
          </li>
          <li>
            Conducted code reviews to maintain high code quality and implemented TDD practices with
            Jest and React Testing library achieving 90% code coverage and reduce defects.
          </li>
          <li>
            Implemented Soroban smart contract wallet to manage on-chain assets, utilizing the Stellar SDK for transaction
            building and interaction.
          </li>
        </ul>
      ),
    },
    {
      date: 'Dec 2021 - Dec 2024',
      title: 'Tata Consultancy Services (TCS)',
      role: 'Product Engineer',
      location: 'Pune, India',
      description: (
        <ul className="list-disc px-4">
          <li>
            Collaborated with a cross-functional team of application to implement new features, fix
            defects, and enhance product capabilities, technical documenting, improving overall
            quality and functionality.
          </li>
          <li>
            Participated in the Agile development lifecycle, utilizing CI / CD pipelines to
            streamline deployments and ensure continuous improvement.
          </li>
          <li>
            Conducted code reviews to maintain high code quality and implemented TDD practices with
            Jest and React Testing library achieving 90% code coverage and reduce defects.
          </li>
          <li>
            Developed REST APIs using a proprietary framework built on Java Spring Boot and Python
            scripting.
          </li>
          <li>
            Designed authentication service utilizing the O Auth2 standard to support multiuser
            experience.
          </li>
          <li>
            Enabled client to migrate their legacy VBA application to a modern web app with over 140
            screens, using Redux-toolkit for state management and integrating multiple APIs,
            increasing effi ciency by over 30%.
          </li>
          <li>
            Identified and resolved security vulnerabilities in packages, enhancing the safety of
            web applications.
          </li>
        </ul>
      ),
    },
    {
      date: 'Aug 2022',
      title: 'Musse - NFT Marketplace',
      role: 'Opensource Contributor',
      location: 'Remote, Part time',
      description: (
        <ul className="list-disc px-4">
          <li>
            Developed frontend for a multi-chain NFT marketplace, integrating Ethereum, Polygon, and
            other EVM.
          </li>
          <li>
            Utilized Ethers.js & Hardhat for blockchain integration, enabling on-chain NFT minting,
            trading, and metadata management.
          </li>
          <li>
            Advised NFT rarity farming mechanics inspired by Aavegotchi, allowing users to compete
            for rewards based on dynamic trait evaluation.
          </li>
          <li>
            Contributed smart contracts development for NFT staking mechanism, allowing users to
            lock NFTs and earn on-chain rewards based on predefined rarity attributes.
          </li>
        </ul>
      ),
    },
    {
      date: 'Feb 2021 - Nov 2021',
      title: 'Tata Consultancy Services (TCS)',
      role: 'System Engineer',
      location: 'Pune, India',
      description: (
        <ul className="list-disc px-4">
          <li>
            Assisted developer team in managing application incidents. Used JIRA to track and
            resolve over 150 tickets per month and ensuring uninterrupted business operations as L3
            support.
          </li>
          <li>
            Retrieving vehicle statistics for an insurance claim requested by the policyholder.
          </li>
          <li>
            Monitoring application's performance metrics, such as response time, server load, and
            user interactions, during periods of peak usage.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-6 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            Experience
          </h1>
        </div>
        <div className="py-5">
          {timelineData.map((event, index) => (
            <div
              className="relative pb-8 flex before:absolute before:bottom-0 before:left-2.5 before:top-5 before:w-[1px] before:bg-gray-500 before:content-['']"
              key={index}
            >
              {/* Timeline Dot */}
              <div className="h-5 w-5 flex-shrink-0 rounded-full bg-primary-500"></div>

              {/* Timeline Content */}
              <div className="ml-6 w-full">
                <p className="text-gray-500 dark:text-gray-400">{event.date}</p>
                <div className="flex flex-row items-baseline justify-between">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <h6 className="text-md text-gray-500 dark:text-gray-400">{event.location}</h6>
                </div>
                <p className="text-primary-500">{event.role}</p>
                <div className="text-gray-700 dark:text-gray-100">{event.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
