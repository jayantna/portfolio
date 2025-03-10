interface Project {
  title: string;
  description: string;
  href?: string;
  imgSrc?: string;
  blog?: string;
}

const projectsData: Project[] = [
  {
    title: 'Chainlink Functions Weather Dapp',
    description: `A simple weather decentalised app that uses Chainlink Functions to get the weather data.`,
    imgSrc: '/static/images/chainlink-functions-weather-dapp.png',
    href: '',
    blog: '/blog/chainlink-functions-weather-dapp',
  },
  {
    title: 'Ethereum Blockchain Indexer',
    description: `A indexer for the Ethereum blockchain.`,
    imgSrc: '/static/images/ethereum-indexer.jpg',
    href: '',
    blog: '/blog/ethereum-indexer',
  },
  {
    title: 'Coincrafter',
    description: `A simple web app that allows you to mint custom ERC20 tokens on Ethereum.`,
    imgSrc: '/static/images/coincrafter.png',
    href: '',
    blog: '/blog/coincrafter',
  },
  {
    title: 'Foundry Lottery',
    description:
      'A decentralised app on Ethereum blockchain which enable users to participate in a lottery. It uses Chainlink VRF to generate random winners and Chainlink Keepers to automate the process.',
    imgSrc: '/static/images/foundry-lottery.jpeg',
    href: '',
    blog: '/blog/foundry-lottery',
  },
  {
    title: 'MerkleTree GiftList',
    description: `An application which gives out gifts, 
    but only to names on the list. The catch is that on the server you are only 
    allowed to store one 32 byte value in the server memory. 
    This 32 byte value has to be enough for the server to be able to determine who is on the list.`,
    imgSrc: '/static/images/merkletree-giftlist.webp',
    href: '',
    blog: '/blog/merkletree-giftlist',
  },
  {
    title: 'ECDSA-Node',
    description: `ECDSA (Elliptic Curve Digital Signature Algorithm) is the 
    cryptographic method used in Ethereum for secure key generation, message signing, 
    and transaction verification. Ethereum nodes rely on ECDSA for several fundamental security functions, 
    especially in managing user identities and securing transactions.`,
    imgSrc: '/static/images/ecdsa.jpeg',
    href: '',
    blog: '/blog/ecdsa-node',
  },
  {
    title: 'Perky Pandas',
    description: `Perky Pandas is a Collection of 5555 random generative NFTs on Ethereum Blockchain`,
    imgSrc: '/static/images/perky-pandas.png',
    href: 'https://perky-panda-website.vercel.app/',
    blog: '/blog/perky-panda',
  },
  {
    title: `Jayant's Developer Portfolio`,
    description: `Portfolio highlights my journey in software development, 
    showcasing projects across technologies.`,
    imgSrc: '/static/images/jayantdevhub.jpeg',
    href: 'https://www.jayantdevhub.in',
    blog: '/blog/portfolio-website',
  },
];

export default projectsData;
