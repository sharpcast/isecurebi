import { m as metamask, c as coinbase, b as binance } from "./binance-8a9ae9f5.js";
import { a as avatar2 } from "./avatar-2-5b5618a1.js";
import { a as avatar5 } from "./avatar-5-c7d43f40.js";
import { a as avatar8 } from "./avatar-8-f9de7a45.js";
import { a as avatar9 } from "./avatar-9-f5d371f4.js";
import { a as avatar10 } from "./avatar-10-def8cdb7.js";
import { c as Img05, I as Img03, a as Img02, b as Img01, d as Img06 } from "./img-06-fae769a6.js";
var wallet = "/_app/assets/wallet-793454e8.png";
var money = "/_app/assets/money-d269b55f.png";
var add = "/_app/assets/add-57ba14aa.png";
var sell = "/_app/assets/sell-339c8e1e.png";
const connectData = [
  {
    img: metamask,
    title: "Metamask",
    textContent: "MetaMask is a popular cryptocurrency wallet known for its ease of use, availability on both desktops."
  },
  {
    img: coinbase,
    title: "Coinbase Wallet",
    textContent: "Coinbase Wallet is a self-custody wallet that gives you complete control of your crypto for your Wallet.",
    bgColor: true
  },
  {
    img: binance,
    title: "Binance",
    textContent: "Binance is considered a safe exchange that allows user account protection via the use of Two Authentication."
  }
];
const discoverItemsData = [
  {
    id: 1,
    cardImg: avatar2,
    author: "Nancy Martino",
    title: "Owners",
    img: Img05,
    likes: "19.29k",
    price: "97.8 ETH",
    category: "Patterns arts & culture"
  },
  {
    id: 2,
    cardImg: avatar9,
    author: "Henry Baird",
    title: "Creators",
    img: Img03,
    likes: "31.64k",
    price: "475.23 ETH",
    category: "Evolved Reality",
    isIcon: true
  },
  {
    id: 3,
    cardImg: avatar10,
    author: "Diana Kohler",
    title: "Owners",
    img: "https://img.themesbrand.com/velzon/images/img-1.gif",
    likes: "8.34k",
    price: "701.38 ETH",
    category: "Long-tailed macaque"
  }
];
const featuresData = [
  {
    img: wallet,
    title: "Set up your wallet",
    textConent: "You have to choose whether to use a hot wallet a cold wallet."
  },
  {
    img: money,
    title: "Create your collection",
    textConent: "Create a collection in Opensea and give it a proper art."
  },
  {
    img: add,
    title: "Add your NFT's",
    textConent: "Go to your profile icon and top right corner creation page."
  },
  {
    img: sell,
    title: "Sell Your NFT's",
    textConent: "Create a collection in Opensea and give Add items and art."
  }
];
const productData = [
  {
    id: 1,
    img: Img03,
    likes: "19.29k",
    title: "Creative Filtered Portrait",
    category: "Photography",
    highest: "75.3ETH",
    price: "67.36 ETH",
    isClass: "artwork crypto-card 3d-style",
    categories: "artwork"
  },
  {
    id: 2,
    img: Img02,
    likes: "23.63k",
    title: "The Chirstoper",
    category: "Music",
    highest: "412.30ETH",
    price: "394.7 ETH",
    isClass: "music crypto-card games",
    categories: "crypto-card"
  },
  {
    id: 3,
    img: "https://img.themesbrand.com/velzon/images/img-4.gif",
    likes: "15.93k",
    title: "Evolved Reality",
    category: "Video",
    highest: "2.75ETH",
    price: "3.167 ETH",
    isClass: "artwork music games",
    categories: "artwork"
  },
  {
    id: 4,
    img: Img01,
    likes: "14.85k",
    title: "Abstract Face Painting",
    category: "Collectibles",
    highest: "122.34ETH",
    price: "97.8 ETH",
    isClass: "crypto-card 3d-style",
    categories: "3d-style"
  },
  {
    id: 5,
    img: Img05,
    likes: "64.10k",
    title: "Long-tailed Macaque",
    category: "Artwork",
    highest: "874.01ETH",
    price: "745.14 ETH",
    isClass: "games music 3d-style",
    categories: "music"
  },
  {
    id: 6,
    img: Img06,
    likes: "36.42k",
    title: "Robotic Body Art",
    category: "Artwork",
    highest: "41.658 ETH",
    price: "34.81 ETH",
    isClass: "artwork music crypto-card",
    categories: "games"
  }
];
const topCreatorData = [
  {
    id: 1,
    img: Img01,
    title: "Timothy Smith",
    price: "4,754 ETH"
  },
  {
    id: 2,
    img: avatar5,
    title: "Alexis Clarke",
    price: "81,369 ETH"
  },
  {
    id: 3,
    img: Img06,
    title: "Glen Matney",
    price: "13,156 ETH"
  },
  {
    id: 4,
    img: Img05,
    title: "Herbert Stokes",
    price: "34,754 ETH"
  },
  {
    id: 5,
    img: avatar8,
    title: "Michael Morris",
    price: "13,841 ETH"
  },
  {
    id: 6,
    img: Img02,
    title: "James Morris",
    price: "63,710 ETH"
  }
];
const MOCK_DATA = {
  connectData,
  discoverItemsData,
  featuresData,
  productData,
  topCreatorData
};
export { MOCK_DATA as M };
