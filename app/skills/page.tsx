import { genPageMetadata } from 'app/seo';

export const metadata = genPageMetadata({ title: 'Experience' });

export default function Page() {
  const skills = {
    Blockchain: [
      'EVM (Solidity)',
      'Solana (Anchor)',
      'Stellar(Soroban)',
      'Hardhat',
      'Foundry',
      'DeFi',
      'NFTs',
      'IPFS',
      'Ethers.js',
      'Web3.js',
      'Flashbot Bundler',
      'Wallet Integration',
      'Consensus Algorithms',
    ],
    Frontend: [
      'ReactJS',
      'NextJS',
      'TypeScript',
      'JavaScript',
      'HTML/CSS',
      'Shadcn-ui',
      'Tailwind CSS',
      'Bootstrap',
    ],
    Backend: ['NodeJS', 'Python', 'Rust', 'C++'],
    Database: ['SQL Database', 'GraphQL', 'MongoDB'],
    'Tools and Frameworks': ['Git', 'Redux', 'Postman', 'Pandas', 'ExpressJS'],
    Misc: ['Problem Solving', 'Analytical', 'Leadership', 'Product Development'],
  };

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-6 pt-6 md:space-y-5">
          <h1 className="text-4xl font-extrabold leading-9 text-primary-600 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            Skills
          </h1>
        </div>
        <div className="py-2">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="text-l px-6 py-3 text-left font-bold uppercase text-primary-600 dark:text-primary-400">
                  Category
                </th>
                <th className="text-l px-6 py-3 text-left font-bold uppercase text-primary-600 dark:text-primary-400">
                  Skills
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(skills).map(([category, skillList]) => (
                <tr key={category} className="border-b border-gray-200 dark:border-gray-700">
                  <td className="text-l whitespace-nowrap px-6 py-4 font-bold text-gray-600 dark:text-gray-100">
                    {category}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex flex-wrap">
                      {skillList.map((skill, index) => (
                        <span
                          key={index}
                          className="my-1 mr-2 cursor-default rounded-xl border
                          border-gray-200 bg-gray-100 px-3 py-1
                          font-sourceCode text-sm font-medium text-gray-800 hover:bg-primary-200 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-primary-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
