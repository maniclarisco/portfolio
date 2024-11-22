import {
  creator,
  hardhat,
  solidity,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  vbitcake,
  vastake,
  salespad,
  proplex,
  dswap,
  lottery
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];



const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Hardhat",
    icon: hardhat,
  },
  {
    name: "git",
    icon: git,
  }
];

const experiences = [
  {
    title: "Blockchain Team Lead",
    company_name: "Clarisco solutions",
    icon: creator,
    iconBg: "#383E56",
    date: "December 2023 - Present",
    points: [
      "Designing and testing smart contracts",
      "Conducting comprehensive security audits of smart contracts to identify and fix vulnerabilities.",
      "Working on integrating smart contracts with other blockchain technologies and external services",
      "Collaborating with developers, designers, and project managers for seamless project integration.",
    ],
  },
  {
    title: "Blockchain Developer",
    company_name: "Clarisco solutions",
    icon: creator,
    iconBg: "#383E56",
    date: "Feb 2022 - December 2023",
    points: [
      "Worked to create a pancakswap lottery based smart contract.",
      "Developed a NFT creator’s portal using Solidity,  IPFS, pinata and third-party app integrations for analytics.",
      "Vbit is a decentralized mlm platform. In this project we develop a Staking based smartcontract such as Time lock and MLM based Time Lock.",
    ],
  },
  {
    title: "MEAN Stack Developer",
    company_name: "Clarisco solutions",
    icon: creator,
    iconBg: "#383E56",
    date: "Feb 2021 - Feb 2022",
    points: [
      "As I worked Angular developer in Fibit Pro Admin panel to add or change the crypto tokens.",
      "As I worked Angular developer in BitPro Admin panel and this application is a centralized platform like binance.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  }
];

const projects = [
  {
    name: "swap",
    description:
      "This is a direct exchange of one token for another on a blockchain. This can occur on decentralized exchanges (DEXs) like Uniswap, where users provide liquidity and can trade tokens directly from their wallets.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Node Js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: dswap
  },
  {
    name: "vbitcake",
    description:
      "Multi-Level Marketing (MLM) is a business model where individuals earn commissions not only for selling products but also for recruiting new members into the business.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Node Js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: vbitcake
  },
  {
    name: "lottery",
    description:
      "Similar to traditional lotteries, participants buy tickets, often using cryptocurrencies, for a chance to win various prizes. The drawing can be conducted through smart contracts, ensuring transparency and fairness.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Node Js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: lottery
  },
  {
    name: "vbitstake",
    description:
      "Staking using crypto tokens involves locking up your tokens in a blockchain network.Staking rewards are typically distributed at regular intervals (daily, weekly, etc.) based on the amount staked and the network’s rules.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Node Js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: vastake
  },
  {
    name: "salespad",
    description:
      "A crypto bridge enables interoperability between different blockchain networks, allowing users to move assets seamlessly from one chain to another. This can include transferring tokens, NFTs, or other assets.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Node Js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: salespad
  },
  {
    name: "propelx",
    description:
      "This is another method of mlm based smart contract applications like forsage.io",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Node Js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: proplex
  },
];

export { technologies, experiences, projects };
