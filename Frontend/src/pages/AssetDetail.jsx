import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { cryptoAssets } from "../data/cryptoData";
import { getCoinImageUrl } from "../data/coinImages";
import bitcoinGraph from "../assets/images/bitcoinGraph.png";
import keepExploringImg from "../assets/images/keepExploring.svg";
import marketBytesImg from "../assets/AVIF/Market_bytes.avif";

const GHS_RATE = 10.93;

const coinMeta = {
  bitcoin: {
    about:
      "The world's first cryptocurrency, Bitcoin is stored and exchanged securely on the internet through a digital ledger known as a blockchain. Bitcoins are divisible into smaller units known as satoshis — each satoshi is worth 0.00000001 bitcoin.",
    tags: ["mineable", "pow", "sha-256", "store-of-value"],
    circSupply: "20M BTC",
    totalSupply: "20M BTC",
    maxSupply: "21M BTC",
    dominance: "60.04%",
    vsMarket: "+3.7%",
    vsETH: "+14.71%",
    popularity: "#1",
    allTimeHighGHS: "GHS 1.56M",
    buyers: "57K",
    sellers: "13K",
    traders: "47K",
    searched: "8.5K",
    buyerRatio: 81,
    vol7d: "GHS 2.32T",
    vol30d: "GHS 8.6B",
    dilutedVal: "GHS 14.49T",
    priceHistory: [
      { label: "Today", price: "GHS 723,558.30", change: -0.23 },
      { label: "1 Day", price: "GHS 725,559.42", change: -0.23 },
      { label: "1 Week", price: "GHS 694,925.11", change: 2.98 },
      { label: "1 Month", price: "GHS 791,334.04", change: -5.89 },
      { label: "1 Year", price: "GHS 1,252,623.06", change: -16.7 },
    ],
    networkAddresses: [
      { label: "Arbitrum", addr: "0xc6f…5a9b8a" },
      { label: "Optimism", addr: "0xbb4…fb2a8e3" },
      { label: "Ethereum", addr: "0xc6f…5a9b8a" },
      { label: "Base", addr: "0x0cf…5a9b8a" },
    ],
  },
  ethereum: {
    about:
      "Ethereum is a decentralized computing platform that uses ETH (also called Ether) to pay transaction fees (or 'gas'). Developers can use Ethereum to run decentralized applications (DApps) and issue new crypto assets, known as Ethereum tokens.",
    tags: ["pos", "smart-contracts", "layer-1", "ftx-bankruptcy-estate"],
    circSupply: "121M ETH",
    totalSupply: "121M ETH",
    maxSupply: "Not enough data",
    dominance: "12.494%",
    vsMarket: "+26.47%",
    vsETH: "+21.56%",
    popularity: "#2",
    allTimeHighGHS: "GHS 53,39K",
    buyers: "15K",
    sellers: "5K",
    traders: "22K",
    searched: "4.5K",
    buyerRatio: 70,
    vol7d: "GHS 5,537",
    vol30d: "GHS 5,777",
    dilutedVal: "GHS 2,641",
    priceHistory: [
      { label: "Today", price: "GHS 21,808.74", change: 4.34 },
      { label: "1 Day", price: "GHS 20,923.44", change: 3.90 },
      { label: "1 Week", price: "GHS 21,240.35", change: 2.19 },
      { label: "1 Month", price: "GHS 22,662.37", change: -1.89 },
      { label: "1 Year", price: "GHS 28,923.37", change: 8.42 },
    ],
    networkAddresses: [
      { label: "Abstract", addr: "NA" },
      { label: "Ink", addr: "NA" },
      { label: "MegaETH", addr: "NA" },
      { label: "Worldchain", addr: "NA" },
    ],
  },
};

function defaultMeta(asset) {
  return {
    about: `${asset.name} (${asset.symbol}) is a digital asset that can be traded on Coinbase and hundreds of other exchanges worldwide. It operates on a decentralized blockchain network.`,
    tags: [],
    circSupply: "—",
    totalSupply: "—",
    maxSupply: "—",
    dominance: "—",
    vsMarket: "—",
    vsETH: "—",
    popularity: "—",
    allTimeHighGHS: "—",
    buyers: "—",
    sellers: "—",
    traders: "—",
    searched: "—",
    buyerRatio: 50,
    vol7d: "—",
    vol30d: "—",
    dilutedVal: "—",
    priceHistory: [],
    networkAddresses: [],
  };
}

const TABS = ["About", "Info", "Insights", "FAQ", "News", "Social"];
const TIME_PERIODS = ["1H", "4H", "1W", "1M", "1Y", "ALL"];

const faqDataMap = {
  bitcoin: [
    {
      q: "What is Bitcoin?",
      a: "Bitcoin (BTC) is a decentralized digital asset introduced in 2008 through a whitepaper by an anonymous individual or creator known as Satoshi Nakamoto and officially launched in January 2009. Bitcoin is designed as a peer-to-peer payment system, enabling users to send, receive, and store value without traditional banks or central authorities.\n\nAll transactions are recorded on a public blockchain, a secure, transparent, and decentralized ledger maintained by thousands of independent computers worldwide. The total supply is capped at 21 million BTC, which cannot be increased, making Bitcoin scarce. Each Bitcoin can be divided into 100 million satoshis (0.00000001 BTC), allowing both microtransactions and large transfers.\n\nBitcoin trades globally against the U.S. dollar in the BTC/USD market. The Bitcoin price today changes in real time depending on global demand and supply across cryptocurrency exchanges.",
    },
    {
      q: "How does Bitcoin work?",
      a: "Bitcoin operates through a decentralized peer-to-peer network in which participants can transfer BTC to each other without relying on intermediaries. The history of all transactions is stored on the Bitcoin blockchain, a public ledger secured and updated by a distributed network of computers called nodes.\n\nThe process of adding new transactions to the blockchain is called mining. Miners use specialized hardware to solve mathematical problems that confirm transaction validity. When a block of transactions is successfully verified, the miner receives a block reward in newly issued BTC along with transaction fees. This process also controls the rate at which new Bitcoin enters circulation.\n\nThe BTC/USD price changes continuously in response to market activity. Individuals can buy, sell, and store Bitcoin using wallets that are secured by cryptographic keys, giving them control over their holdings.",
    },
    { q: "What are the potential use cases for Bitcoin?", a: "" },
    { q: "What is the history of Bitcoin?", a: "" },
    { q: "How can I buy Bitcoin?", a: "" },
    { q: "What is Bitcoin mining?", a: "" },
    { q: "Who are the founders of Bitcoin?", a: "" },
    { q: "Why is the Bitcoin price so volatile?", a: "" },
    { q: "How much will I get if I put $1 in Bitcoin?", a: "" },
    { q: "What was the price of 1 Bitcoin in 2009?", a: "" },
    { q: "Who owns the most Bitcoin?", a: "" },
    { q: "How much Bitcoin is in circulation?", a: "" },
  ],
  ethereum: [
    {
      q: "What is Ethereum?",
      a: "Ethereum is a decentralized blockchain platform launched in 2015 that allows developers to build applications using smart contracts, which are programs that run automatically when conditions are met. It is powered by its native cryptocurrency, Ether (ETH), which is used to pay for transactions and network activity. Unlike Bitcoin, which is focused on digital payments, Ethereum aims to support a wide range of use cases including decentralized finance (DeFi), NFTs, gaming, and identity systems. As one of the largest blockchains by market cap, Ethereum plays a central role in the crypto ecosystem. Users frequently track metrics like ETH to USD, ETH price, or Ethereum price in USD to monitor network performance. The value of Ether reacts to changes in network demand, technical upgrades, and community engagement, all of which shape broader sentiment around the platform.",
    },
    {
      q: "How does Ethereum work?",
      a: "Ethereum works as a decentralized, open-source blockchain that supports smart contracts and decentralized applications. Transactions on Ethereum are validated using a proof-of-stake consensus mechanism, where participants stake ETH to help secure the network and process transactions. Before 2022, Ethereum used proof-of-work mining, but it transitioned to staking to improve energy efficiency. Smart contracts allow Ethereum to operate like a global computer, supporting apps in finance, gaming, identity, and more. Today, metrics such as ETH price reflect how network changes impact value. Observers monitor on-chain activity and improvements, including protocol upgrades, to better understand how ecosystem development may influence Ethereum price behavior.",
    },
    { q: "What are the potential use cases for Ethereum?", a: "" },
    { q: "What is the history of Ethereum?", a: "" },
    { q: "What is the difference between Bitcoin and Ethereum?", a: "" },
    { q: "How can I stake Ethereum?", a: "" },
    { q: "Why does the Ethereum price fluctuate?", a: "" },
    { q: "How can I buy Ethereum?", a: "" },
    { q: "Why is the Ethereum price so volatile?", a: "" },
    { q: "How much will I get if I put $1 in Ethereum?", a: "" },
    { q: "Who owns the most Ethereum?", a: "" },
    { q: "How much Ethereum is in circulation?", a: "" },
  ],
};

const newsDataMap = {
  bitcoin: [
    { source: "CoinDesk", date: "Mar 8, 2026 04:00PM", text: "Bitcoin is still a great way to diversify portfolio even if it trades like a tech stock, analyst says — The central debate has shifted from whether bitcoin can survive to if it can function as a sovereign reserve asset." },
    { source: "CoinDesk", date: "Mar 8, 2026 01:47PM", text: "Oil leaving Middle East trades over $100 a barrel. Here's How it could affect bitcoin — Murban crude, a key benchmark for barrels that can bypass the Strait of Hormuz, now trades at $123 per barrel." },
    { source: "DL News", date: "Mar 5, 2026 06:17PM", text: "Bitcoin recovers from $66,000 shock as experts predict volatility — and silver linings — Bitcoin prices are climbing back towards $70,000 after a gradual March 7 slide resulted in a dramatic but short-lived drop to $66,000." },
    { source: "CoinDesk", date: "Mar 7, 2026 06:15AM", text: "Bitcoin slips below $65,000 as dollar posts sharpest weekly gain in a year — Most majors gave back Friday's gains, with solana down 4%, ether falling 4.4%, and 43% of bitcoin's supply now sitting at a loss." },
  ],
  ethereum: [
    { source: "CoinDesk", date: "Mar 9, 2026 05:35PM", text: "'Mini crypto winter' nearly over, says Tom Lee as Bitmine ramps up pace of ether acquisition — The company now holds more than 4.5 billion ETH, worth over $9 billion, though it is sitting on a loss of nearly $8 billion." },
    { source: "Decrypt", date: "Mar 9, 2026 05:36PM", text: "Ethereum Rises to $2,000 as Tom Lee's BitMine Tops Up $9 Billion ETH Treasury — The price of Ethereum is up 4% over the last day, rebounding after a weekend slump under $2,000 as BitMine reveals its latest ETH buy." },
    { source: "Decrypt", date: "Mar 7, 2026 06:27PM", text: "Inside the Quest of Colossus to Replace Visa and Mastercard With KYC-Less Crypto Cards — With a 'box of goodies' and a team of four, the firm is trying to replace payment incumbents with an Ethereum layer-2." },
    { source: "CoinDesk", date: "Mar 7, 2026 06:15AM", text: "Bitcoin slips below $65,000 as dollar posts sharpest weekly gain in a year — Most majors gave back Friday's gains, with solana down 4%, ether falling 4.4%, and 43% of bitcoin's supply now sitting at a loss." },
  ],
};

const relatedCoinsMap = {
  bitcoin: ["Bitcoin Cash", "Bonk", "Dogecoin", "Ethereum", "Jeanny", "Monad", "Ondo", "Pump.fun", "Pudgy Penguins", "Starknet Token", "U.S. Oil Reserve (USDR)", "Venice Token"],
  ethereum: ["Aerodrome Finance", "Chainlink", "Filecoin", "Flare", "Hedera", "Litecoin", "Monero", "Starknet Token", "Subaquid", "Uniswap", "USDC", "XRP"],
};
const similarMarketCapMap = {
  bitcoin: ["Ethereum", "Tether", "BNB", "XRP", "USDC", "Solana", "TRON", "Dogecoin", "Cardano", "Bitcoin Cash", "UNUS SED LEO", "HyperLiquid"],
  ethereum: ["Bitcoin", "Tether", "BNB", "XRP", "USDC", "Solana", "TRON", "Dogecoin", "Cardano", "Bitcoin Cash", "UNUS SED LEO", "HyperLiquid"],
};
const popularPredictionsMap = {
  bitcoin: ["sBTC", "Lightchain AI", "Bitcoin", "Chainlink", "Flare", "Hedera", "Kaspa", "PepeNode", "SHIBA INU", "TEXITcoin", "World Liberty Financial", "XDC Network"],
  ethereum: ["THE PLAYERS Championship Winner?", "What will Trump say this week?", "Men's College Basketball Champion", "Fed decision in Mar 2026?", "Masters Tournament Champion", "Bitcoin price on Mar 9, 2026 at 5pm EDT?", "World Baseball Classic Winner?", "Will Iran effectively close the Strait of Hormuz for 7+ days?", "St. Francis (PA) at FDU", "Pro Basketball Champion?"],
};
const discoverMoreMap = {
  bitcoin: ["Bitcoin II", "Crypto Royale", "CryptoTradingFund", "GALA", "GameStop Coin", "Golden Dome Reserve", "Matter", "Housecoin", "RIGLRS", "Strategic Critical Minerals Reserve", "Weedcoin", "Zilk.com"],
  ethereum: ["XRP is the star of the show.", "aerocitne", "Aukl", "Morse Code", "Beast Financial Services", "DOGE-1", "Ethiy AI", "Hachiko", "Housecoin", "Orca", "The Big Trout", "The Berg Collective"],
};
const popularPricePredictionsMap = {
  bitcoin: ["sBTC", "Lightchain AI", "Bitcoin", "Chainlink", "Flare", "Hedera", "Kaspa", "PepeNode", "SHIBA INU", "TEXITcoin", "World Liberty Financial", "XDC Network"],
  ethereum: ["Avante", "Lightchain AI", "xidra coin", "Cardano", "Ethereum", "Kaspa", "Midnight (midnight.vip)", "Polkadot", "SHIBA INU", "Solana", "Toncoin", "TRON"],
};

const coinbaseBytesMap = {
  bitcoin: {
    date: "Jul 16, 2025",
    headline: "Market Bytes: Bitcoin hit a new all-time high above $123,000",
    paragraphs: [
      "As it has over and over in 2025, bitcoin just hit a new all-time high, spiking from around $108,000 last week to above $123,000 on Monday. The rally pushed BTC's market capitalization past $2.4 trillion, making bitcoin the fifth-largest asset by market cap (behind only gold, NVIDIA, Microsoft, and Apple).",
      "→ Driving the surge was a combination of factors, including optimism over Congress tackling a suite of crypto rules this week; a wave of institutional investment via crypto exchange-traded funds (ETFs), and analysts' belief that the Federal Reserve will resume cutting interest rates this year.",
      "→ By Tuesday, BTC settled to around $117,000 as some traders sold to lock in profits and U.S. inflation figures began to rise (although by less than many market watchers expected). Prices ticked back upward towards $120,000 on Wednesday. Speaking to Bloomberg, one analyst described the dip as a \"standard pullback\" that often follows a rapid increase in prices.",
    ],
  },
  ethereum: {
    date: "Jul 10, 2025",
    headline: "Market Bytes: Ethereum dominated crypto ETF inflows last week",
    paragraphs: [
      "Since spot crypto ETFs launched in the U.S. last year, bitcoin funds have attracted the majority of capital flowing into the asset class. But last week, according to CoinShares' latest report, ETH funds flipped that dynamic in dramatic fashion, with ether ETFs tallying $1.6 billion in inflows, while BTC ETFs saw around $175 million in outflows.",
      "→ ETH's recent run, which included 10 straight days in the green, has helped push the funds' year-to-date inflows to nearly $8 billion — more than they saw over the entirety of 2024.",
      "→ The second-largest crypto by market cap has gotten a boost from a combination of factors: the recent passage of bipartisan stablecoin legislation; the growing trend of publicly traded companies purchasing ETH for their corporate treasuries; and the rapid runup of bitcoin prices this year, which has traders looking for additional opportunities.",
      "\"Ethereum is the second-largest digital asset, and the only other one available in [spot] ETF format, making it very easy to include it in one's effort to improve their portfolio's diversification,\" said Ric Edelman, founder of the Digital Assets Council of Financial Professionals.",
    ],
  },
};

const coinbaseInsightsMap = {
  bitcoin: {
    happeningNow: "BTC surged ↑21% in daily volume since Sunday afternoon, representing roughly 60% of total cryptocurrency market cap.",
    marketPosition: [
      "Daily volume outpaced ETH and SOL with ↑21% increase vs market ↑20%",
      "Weekly price gains ↑3% exceeded market's ↓0.2% decline performance",
      "Active traders dropped ↓11% to roughly 47,000 daily participants",
    ],
    latestStories: [
      { text: "Strike receives BitLicense approval for bitcoin services in New York." },
      { text: "Analysts discuss bitcoin's evolving perspective as sovereign reserve asset." },
    ],
    recentTrends: [
      "The latest BTC price is GHS 723,227.04. Compared to Bitcoin's value of GHS 725,559.42 from 24 hours ago, there's been a ~0% decrease, while the current price is 3% up from GHS 694,925.11 which was recorded one week ago. Bitcoin's all time high is GHS 1,359,930.33, which was recorded on October 6, 2025. This is a -47% change from its price today.",
      "The current circulating supply of bitcoin is 19,999,040. This is 95% of its max supply of 21,000,000 BTC and 100% of its total supply of 19,999,040. The market cap is currently GHS 14.49T, which is a result of multiplying the current price of Bitcoin (GHS 723,227.04) by the total supply (19,999,040 BTC). The fully diluted valuation of Bitcoin is GHS 15.21T.",
      "Bitcoin had 54,976 buyers, 13,399 sellers and total 40,585 trades in the last 24h. Bitcoin was searched 8,468 times in the last 24h.",
    ],
  },
  ethereum: {
    happeningNow: "ETH surged ↑4% since Monday afternoon, outpacing both BTC and SOL in recent sessions.",
    marketPosition: [
      "Ranks second in trading volume with ↑63% daily increase, exceeding average market ↑58%",
      "Weekly gains ↑2% show upward momentum despite monthly decline ↓2%",
      "Trading activity climbed ↑13% with roughly 22,000 participants showing buyer dominance",
    ],
    latestStories: [
      { text: "BitMine increases its Ethereum treasury to $9 billion." },
      { text: "Colossus aims to disrupt traditional payment systems with Ethereum." },
    ],
    recentTrends: [
      "The cost of one ETH right now is GHS 21,774.00. The price is seeing a 4% increase from Ethereum's 24-hour mark of GHS 20,923.44, while being 2% up from its week-ago level of GHS 21,240.35. The all-time high for Ethereum was GHS 53,390.32, achieved on August 24, 2025. This represents a -59% change from the current value.",
      "Currently, the market cap stands at GHS 2,641, derived from the product of Ethereum's price (GHS 21,774.00) and its total supply (120,692,045 ETH). The fully diluted market value of Ethereum stands at GHS 2,641. The value of Ethereum on a fully diluted basis is GHS 2,641.",
      "In the last 24h, Ethereum trading activity showed 15,310 active buyers and 7,430 sellers, with 21,806 total trades. Ethereum search volume reached 4,634 queries in the past 24 hours.",
    ],
  },
};

const socialStatsMap = {
  bitcoin: {
    stats: [
      { label: "POPULARITY IN POSTS", value: "#1" },
      { label: "CONTRIBUTORS", value: "83,381" },
      { label: "POSTS", value: "440,413" },
      { label: "% ABOUT BITCOIN", value: "38.599%" },
      { label: "ARTICLES", value: "1,352" },
      { label: "X (TWITTER)", value: "50.92% bullish" },
      { label: "SENTIMENT", value: "4.1 ★" },
    ],
    highlights: [
      "83,381 unique individuals are talking about Bitcoin and it is ranked #1 in most mentions and activity from collected posts. In the last 24 hours, across all social media platforms, Bitcoin has an average sentiment score of 4.1 out of 5. Finally, Bitcoin is becoming less newsworthy, with 1382 news articles published about Bitcoin.",
      "On Twitter, people are mostly bullish about Bitcoin. There were 56.34% of tweets with bullish sentiment compared to 10.04% with bearish sentiment.",
    ],
  },
  ethereum: {
    stats: [
      { label: "POPULARITY IN POSTS", value: "#2" },
      { label: "CONTRIBUTORS", value: "39,664" },
      { label: "POSTS", value: "101,356" },
      { label: "% ABOUT ETHEREUM", value: "14.999%" },
      { label: "ARTICLES", value: "574" },
      { label: "X (TWITTER)", value: "55.94% bullish" },
      { label: "SENTIMENT", value: "4.4 ★" },
    ],
    highlights: [
      "39,664 unique individuals are talking about Ethereum and it is ranked #2 in most mentions and activity from collected posts. In the last 24 hours, across all social media platforms, Ethereum has an average sentiment score of 4.4 out of 5. Finally, Ethereum is becoming less newsworthy, with 374 news articles published about Ethereum.",
      "On Twitter, people are mostly bullish about Ethereum. There were 60.08% of tweets with bullish sentiment compared to 7.38% with bearish sentiment. 39.94% of tweets were neutral about Ethereum. These sentiments are based on 140021 tweets.",
      "On Reddit, Ethereum was mentioned in 33489 Reddit posts and there were 2541092 comments about Ethereum. On average, there were less upvotes compared to downvotes on Reddit posts and more upvotes compared to downvotes on Reddit comments.",
      "Powered by LunarCrush",
    ],
  },
};

const analysisMap = {
  bitcoin: {
    bulls: "Bitcoin, as the original blockchain and cryptocurrency, has achieved an unparalleled level of recognition and trust.",
    bears: "While Bitcoin pioneered blockchain technology, it now faces challenges from newer digital currencies prioritizing faster and cheaper transactions.",
  },
  ethereum: {
    bulls: "Ethereum stands as the dominant player in the realm of smart contract platforms, boasting the largest base of users and developers. This widespread developer adoption fosters a robust environment that could nurture growth and innovation.",
    bears: "Despite Ethereum's significant market capitalization, it faces intensifying competition from newer networks, prioritizing faster and more cost-effective solutions.",
  },
};

export default function AssetDetail() {
  const { id } = useParams();
  const asset = cryptoAssets.find((a) => a.id === id);
  const [activeTab, setActiveTab] = useState("About");
  const [timePeriod, setTimePeriod] = useState("4H");
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showAllFaq, setShowAllFaq] = useState(false);

  if (!asset) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-500 text-lg mb-4">Asset not found.</p>
        <Link to="/explore" className="text-[#1652F0] hover:underline">Back to Explore</Link>
      </div>
    );
  }

  const meta = coinMeta[asset.id] || defaultMeta(asset);
  const isPositive = asset.change24h >= 0;
  const ghsPrice = asset.price / 100;
  const ghsChange = ghsPrice * Math.abs(asset.change24h) / 100;
  const marketCapGHS = asset.marketCap * GHS_RATE;
  const volumeGHS = asset.volume * GHS_RATE;

  const faqData = faqDataMap[asset.id] || faqDataMap.bitcoin;
  const newsData = newsDataMap[asset.id] || newsDataMap.bitcoin;
  const relatedCoins = relatedCoinsMap[asset.id] || relatedCoinsMap.bitcoin;
  const similarMarketCap = similarMarketCapMap[asset.id] || similarMarketCapMap.bitcoin;
  const popularPredictions = popularPredictionsMap[asset.id] || popularPredictionsMap.bitcoin;
  const discoverMore = discoverMoreMap[asset.id] || discoverMoreMap.bitcoin;
  const bytesData = coinbaseBytesMap[asset.id] || coinbaseBytesMap.bitcoin;
  const insightsData = coinbaseInsightsMap[asset.id] || coinbaseInsightsMap.bitcoin;
  const socialData = socialStatsMap[asset.id] || socialStatsMap.bitcoin;
  const analysisData = analysisMap[asset.id] || analysisMap.bitcoin;

  const fmtCompact = (v) => {
    if (v >= 1e12) return `GHS ${(v / 1e12).toFixed(2)}T`;
    if (v >= 1e9) return `GHS ${(v / 1e9).toFixed(1)}B`;
    if (v >= 1e6) return `GHS ${(v / 1e6).toFixed(1)}M`;
    return `GHS ${v.toFixed(2)}`;
  };

  const visibleFaqs = showAllFaq ? faqData : faqData.slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      {/* ── Asset sub-header ─────────────────────────────────────── */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2">
          <div className="flex items-center gap-2 flex-shrink-0 py-3">
            <img src={getCoinImageUrl(asset.symbol)} alt={asset.name} className="w-5 h-5 rounded-full" onError={(e) => { e.target.style.display = "none"; }} />
            <span className="font-semibold text-sm text-gray-900">{asset.name} Price ({asset.symbol})</span>
            <button className="text-gray-400 hover:text-yellow-400 transition-colors">☆</button>
            <button className="text-gray-400 hover:text-gray-700 text-sm leading-none">↓</button>
            <button className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:bg-gray-50 text-[10px]">⊕</button>
            <button className="flex items-center gap-0.5 border border-gray-200 rounded-full px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-50">
              GHS <span className="text-gray-400 text-[9px] ml-0.5">▾</span>
            </button>
          </div>
          <div className="w-px h-5 bg-gray-200 mx-1 flex-shrink-0" />
          <div className="flex items-center overflow-x-auto flex-1" style={{ scrollbarWidth: "none" }}>
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-4 text-xs font-medium whitespace-nowrap border-b-2 transition-colors ${activeTab === tab ? "border-[#1652F0] text-[#1652F0]" : "border-transparent text-gray-500 hover:text-gray-800"}`}
              >
                {tab}
              </button>
            ))}
            <button className="ml-1 text-gray-400 text-xs flex-shrink-0 px-1">›</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* ── Two-column layout ────────────────────────────────── */}
        <div className="flex gap-6">

          {/* LEFT SIDEBAR */}
          <div className="w-52 flex-shrink-0 space-y-4">
            <div>
              <h2 className="font-bold text-sm text-gray-900 mb-2">About {asset.name}</h2>
              <p className="text-xs text-gray-600 leading-relaxed">{meta.about}</p>
              <div className="flex gap-2 mt-3 flex-wrap">
                <a href="#" className="flex items-center gap-1 border border-gray-200 rounded-full px-2.5 py-1 text-xs text-gray-600 hover:bg-gray-50">
                  📄 Whitepaper
                </a>
                <a href="#" className="flex items-center gap-1 border border-gray-200 rounded-full px-2.5 py-1 text-xs text-gray-600 hover:bg-gray-50">
                  🌐 Official website
                </a>
              </div>
            </div>

            <Link to="/signup" className="flex items-center justify-between w-full bg-[#1652F0] text-white font-semibold text-sm rounded-full px-5 py-3 hover:bg-blue-700 transition-colors">
              Buy {asset.name} <span>→</span>
            </Link>

            <div className="border border-gray-100 rounded-xl p-3">
              <div className="flex items-center gap-1.5 mb-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-800">Happening now</span>
                <span className="text-[10px] text-gray-400 ml-auto whitespace-nowrap">AI generated 1m ago</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {insightsData.happeningNow}
              </p>
              <button className="text-xs text-[#1652F0] hover:underline mt-2 font-medium">See more</button>
            </div>

            <div className="bg-yellow-400 rounded-xl p-4 relative overflow-hidden">
              <p className="text-sm font-bold text-gray-900 mb-1">Keep exploring</p>
              <p className="text-xs text-gray-800 leading-relaxed mb-4 max-w-[60%]">View assets on the same network and more with search</p>
              <Link to="/explore" className="inline-flex items-center gap-2 bg-[#1652F0] text-white text-xs font-semibold rounded-full px-4 py-2 hover:bg-blue-700 transition-colors">
                Explore <span aria-hidden="true">→</span>
              </Link>
              <img
                src={keepExploringImg}
                alt="Keep exploring"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-16 h-16 object-contain"
              />
            </div>
          </div>

          {/* RIGHT MAIN */}
          <div className="flex-1 min-w-0">
            <div className="mb-3">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-4xl font-bold text-gray-900">
                  GHS {ghsPrice.toLocaleString("en-GH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className={`text-sm font-medium ${isPositive ? "text-green-500" : "text-red-500"}`}>
                  {isPositive ? "↑" : "↓"}GHS {ghsChange.toLocaleString("en-GH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ({isPositive ? "+" : "-"}{Math.abs(asset.change24h).toFixed(2)}%)
                </span>
              </div>
            </div>

            <div className="border border-gray-100 rounded-xl p-4 mb-4">
              <div className="flex justify-end mb-2">
                <div className="flex gap-0.5">
                  {TIME_PERIODS.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTimePeriod(t)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${timePeriod === t ? "bg-gray-100 text-gray-900 font-semibold" : "text-gray-400 hover:text-gray-700"}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-64">
                <img src={bitcoinGraph} alt="Bitcoin price chart" className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between mt-1 px-0.5">
                {["10:09 PM", "1:15 AM", "4:25 AM", "7:32 AM", "10:42 AM", "1:52 PM", "4:55 PM", "8:02 PM"].map((t) => (
                  <span key={t} className="text-[10px] text-gray-400">{t}</span>
                ))}
              </div>
            </div>

            {/* Trading Insights / Market Stats / Performance */}
            <div className="grid grid-cols-3 gap-4">
              {/* Trading Insights */}
              <div className="border border-gray-100 rounded-xl p-4">
                <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3">Trading Insights</h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#e5e7eb" strokeWidth="4" />
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#1652F0" strokeWidth="4"
                        strokeDasharray={`${(meta.buyerRatio / 100) * 87.96} ${87.96 - (meta.buyerRatio / 100) * 87.96}`}
                        strokeLinecap="round" />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-gray-800">{meta.buyerRatio}%</span>
                  </div>
                  <div>
                    <p className="text-[9px] text-gray-400 uppercase">BUYER RATIO</p>
                    <p className="text-xs font-semibold text-green-500">{meta.buyers} ↑{meta.buyerRatio}%</p>
                  </div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[10px] text-gray-400 uppercase">SELLERS</span>
                    <span className="font-semibold text-red-500">{meta.sellers} ↓{100 - meta.buyerRatio}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[10px] text-gray-400 uppercase">TRADERS</span>
                    <span className="font-semibold text-[#1652F0]">{meta.traders} ↑1.17%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[10px] text-gray-400 uppercase">SEARCHED</span>
                    <span className="font-semibold text-gray-800">{meta.searched}</span>
                  </div>
                </div>
              </div>

              {/* Market Stats */}
              <div className="border border-gray-100 rounded-xl p-4">
                <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3">Market Stats</h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-[9px] text-gray-400 uppercase">MARKET CAP</p>
                    <p className="text-xs font-semibold text-gray-900">{fmtCompact(marketCapGHS)} <span className="text-red-500 font-normal text-[10px]">↓0.36%</span></p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-[9px] text-gray-400 uppercase">CIRC. SUPPLY</p>
                      <p className="text-xs font-semibold text-gray-900">{meta.circSupply}</p>
                    </div>
                    <div>
                      <p className="text-[9px] text-gray-400 uppercase">MAX SUPPLY</p>
                      <p className="text-xs font-semibold text-gray-900">{meta.maxSupply}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[9px] text-gray-400 uppercase">TOTAL SUPPLY</p>
                    <p className="text-xs font-semibold text-gray-900">{meta.totalSupply}</p>
                  </div>
                  <div>
                    <p className="text-[9px] text-gray-400 uppercase">DILUTED VALUATION</p>
                    <p className="text-xs font-semibold text-gray-900">{meta.dilutedVal}</p>
                  </div>
                </div>
              </div>

              {/* Performance */}
              <div className="border border-gray-100 rounded-xl p-4">
                <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3">Performance</h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-[9px] text-gray-400 uppercase">POPULARITY</p>
                      <p className="text-xs font-semibold text-gray-900">{meta.popularity}</p>
                    </div>
                    <div>
                      <p className="text-[9px] text-gray-400 uppercase">DOMINANCE</p>
                      <p className="text-xs font-semibold text-gray-900">{meta.dominance}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[9px] text-gray-400 uppercase">VOLUME (24h)</p>
                    <p className="text-xs font-semibold text-gray-900">{fmtCompact(volumeGHS)} <span className="text-[#1652F0] font-normal text-[10px]">↑0.23%</span></p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-[9px] text-gray-400 uppercase">VOLUME (7D)</p>
                      <p className="text-xs font-semibold text-gray-900">{meta.vol7d}</p>
                    </div>
                    <div>
                      <p className="text-[9px] text-gray-400 uppercase">VOLUME (30D)</p>
                      <p className="text-xs font-semibold text-gray-900">{meta.vol30d}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[9px] text-gray-400 uppercase">ALL TIME HIGH</p>
                    <p className="text-xs font-semibold text-gray-900">{meta.allTimeHighGHS}</p>
                  </div>
                  <div>
                    <p className="text-[9px] text-gray-400 uppercase">PRICE CHANGE (1Y)</p>
                    <p className="text-xs font-semibold text-red-500">↓19.7%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Additional details ────────────────────────────────── */}
        <div className="mt-8 border-t border-gray-100 pt-6">
          <div className="grid grid-cols-4 gap-8">
            {/* Row label */}
            <div>
              <h2 className="text-xl font-bold text-gray-900">Additional details</h2>
            </div>
            {/* Market details */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Market details</h3>
              <div className="flex gap-6 mb-4">
                <div>
                  <p className="text-[9px] text-gray-400 uppercase">{asset.symbol} VS MARKETS</p>
                  <p className={`text-sm font-semibold ${meta.vsMarket?.startsWith("+") ? "text-green-500" : "text-red-500"}`}>{meta.vsMarket}</p>
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 uppercase">{asset.symbol} VS ETH</p>
                  <p className={`text-sm font-semibold ${meta.vsETH?.startsWith("+") ? "text-green-500" : "text-red-500"}`}>{meta.vsETH}</p>
                </div>
              </div>
              {meta.tags?.length > 0 && (
                <div>
                  <p className="text-[9px] text-gray-400 uppercase mb-2">TAGS</p>
                  <div className="flex flex-wrap gap-1.5">
                    {meta.tags.map((tag) => (
                      <span key={tag} className="border border-gray-200 rounded-full px-2 py-0.5 text-[10px] text-gray-600">{tag}</span>
                    ))}
                    <span className="border border-gray-200 rounded-full px-2 py-0.5 text-[10px] text-gray-600">+6</span>
                  </div>
                </div>
              )}
            </div>
            {/* Network & Addresses */}
            {meta.networkAddresses?.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Network &amp; Addresses</h3>
                <p className="text-[9px] text-gray-400 uppercase mb-2">Network Address</p>
                <div className="space-y-2.5">
                  {meta.networkAddresses.map((n) => (
                    <div key={n.label} className="text-xs">
                      <span className="text-gray-600 font-medium">{n.label} </span>
                      <span className="text-[#1652F0] font-mono text-[10px] break-all">{n.addr}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-3 border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-600 hover:bg-gray-50">See all</button>
              </div>
            )}
            {/* Price history */}
            {meta.priceHistory?.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Price history</h3>
                <table className="w-full text-xs">
                  <thead>
                    <tr>
                      <th className="text-left text-[9px] text-gray-400 font-medium pb-1.5">Time</th>
                      <th className="text-right text-[9px] text-gray-400 font-medium pb-1.5">Price</th>
                      <th className="text-right text-[9px] text-gray-400 font-medium pb-1.5">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {meta.priceHistory.map((row) => (
                      <tr key={row.label} className="border-t border-gray-50">
                        <td className="py-2 text-gray-600">{row.label}</td>
                        <td className="py-2 text-right text-gray-900 font-medium">{row.price}</td>
                        <td className={`py-2 text-right font-medium ${row.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                          {row.change >= 0 ? "↑" : "↓"} {Math.abs(row.change).toFixed(2)}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* ── Coinbase insights ─────────────────────────────────── */}
        <div className="mt-8 border-t border-gray-100 pt-6">
          <div className="grid grid-cols-4 gap-8">
            {/* Row label */}
            <div>
              <h2 className="text-xl font-bold text-gray-900">Coinbase insights</h2>
            </div>
            {/* Happening now */}
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                <span className="text-sm font-semibold text-gray-900">Happening now</span>
                <span className="text-[10px] text-gray-400 ml-auto">AI generated 1m ago</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                {insightsData.happeningNow}
              </p>
              <p className="text-xs font-semibold text-gray-900 mb-1.5">Market Position</p>
              <ul className="text-xs text-gray-600 space-y-1 mb-3 list-disc list-inside">
                {insightsData.marketPosition.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
              <p className="text-xs font-semibold text-gray-900 mb-1.5">Latest Stories</p>
              <ul className="text-xs text-gray-600 space-y-1.5">
                {insightsData.latestStories.map((s, i) => (
                  <li key={i}>• {s.text} <span className="text-[#1652F0] cursor-pointer">Source ↗</span></li>
                ))}
              </ul>
            </div>
            {/* Recent trends */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Recent trends</h3>
              {insightsData.recentTrends.map((para, i) => (
                <p key={i} className={`text-xs leading-relaxed mb-2 ${i === 0 ? "text-[#1652F0]" : "text-gray-600"}`}>{para}</p>
              ))}
              <button className="mt-3 border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-600 hover:bg-gray-50">See all</button>
            </div>
          </div>
        </div>

        {/* ── FAQ ───────────────────────────────────────────────── */}
        <div className="mt-8 border-t border-gray-100 pt-6">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900">FAQ</h2>
            </div>
            <div className="col-span-3">
              <div className="grid grid-cols-2 gap-x-8">
                {visibleFaqs.map((item, i) => (
                  <div key={i} className="border-b border-gray-100">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                      className="w-full flex items-center justify-between py-3 text-left gap-4"
                    >
                      <span className="text-xs font-medium text-gray-800">{item.q}</span>
                      <span className="text-gray-400 flex-shrink-0">{expandedFaq === i ? "−" : "—"}</span>
                    </button>
                    {expandedFaq === i && item.a && (
                      <div className="pb-3">
                        {item.a.split("\n\n").map((para, j) => (
                          <p key={j} className="text-xs text-gray-600 leading-relaxed mb-2">{para}</p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {!showAllFaq && faqData.length > 6 && (
                <button
                  onClick={() => setShowAllFaq(true)}
                  className="mt-4 border border-gray-200 rounded-full px-4 py-1.5 text-xs text-gray-600 hover:bg-gray-50"
                >
                  See all
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ── Bitcoin news ─────────────────────────────────────── */}
        <div className="mt-8 border-t border-gray-100 pt-6">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900">{asset.name} news</h2>
            </div>
            <div className="col-span-3">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Trending articles</h3>
              <div className="space-y-3">
                {newsData.map((n, i) => (
                  <div key={i} className="flex items-start gap-2 border-b border-gray-50 pb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-semibold text-gray-600">{n.source}</span>
                        <span className="text-[10px] text-gray-400">{n.date}</span>
                      </div>
                      <p className="text-xs text-gray-700 leading-relaxed">{n.text}</p>
                    </div>
                    <span className="text-gray-300 flex-shrink-0">›</span>
                  </div>
                ))}
              </div>
              <button className="mt-3 border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-600 hover:bg-gray-50">See all</button>
            </div>
          </div>
        </div>

        {/* ── Social stats ─────────────────────────────────────── */}
        <div className="mt-8 border-t border-gray-100 pt-6">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Social stats</h2>
            </div>
            <div className="col-span-3 grid grid-cols-2 gap-8">
              <div>
                <div className="space-y-2 text-xs mb-5">
                  {socialData.stats.map((s) => (
                    <div key={s.label} className="flex justify-between">
                      <span className="text-[9px] text-gray-400 uppercase">{s.label}</span>
                      <span className="text-xs font-medium text-gray-800">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Highlights</h3>
                {socialData.highlights.map((para, i) => (
                  <p key={i} className="text-xs text-gray-600 leading-relaxed mb-2">{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Analysis ─────────────────────────────────────────── */}
        <div className="mt-8 border-t border-gray-100 pt-6">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Analysis</h2>
            </div>
            <div className="col-span-3 grid grid-cols-2 gap-6">
              <div className="border border-gray-100 rounded-xl p-4">
                <p className="text-xs font-semibold text-green-600 mb-2">Bulls say</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {analysisData.bulls}
                </p>
                <button className="mt-2 text-xs text-[#1652F0] hover:underline">Read more</button>
              </div>
              <div className="border border-gray-100 rounded-xl p-4">
                <p className="text-xs font-semibold text-red-500 mb-2">Bears say</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {analysisData.bears}
                </p>
                <button className="mt-2 text-xs text-[#1652F0] hover:underline">Read more</button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Guides ───────────────────────────────────────────── */}
        <div className="mt-8 border-t border-gray-100 pt-6">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Guides</h2>
            </div>
            <div className="col-span-3">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: `How to Buy ${asset.name}`, desc: `Good news! You can buy ${asset.name} on Coinbase's centralized exchange. We've included detailed instructions to make it easier for y...` },
                  { title: `How to Stake ${asset.name}`, desc: `You can earn rewards for ${asset.name} through DeFi yield. DeFi yield lets eligible customers earn yield by lending their crypto to third-party...` },
                ].map((g) => (
                  <div key={g.title} className="border border-gray-100 rounded-xl p-4 flex items-start gap-4">
                    <div className="flex-1">
                      <p className="text-[9px] text-gray-400 uppercase mb-1">Coinbase</p>
                      <p className="text-sm font-semibold text-gray-900 mb-1">{g.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{g.desc}</p>
                      <button className="mt-2 text-xs text-[#1652F0] hover:underline">Read more</button>
                    </div>
                    <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden" style={{ backgroundColor: asset.color }}>
                      <img src={getCoinImageUrl(asset.symbol)} alt={asset.symbol} className="w-8 h-8 object-contain" onError={(e) => { e.target.style.display = "none"; }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Calculator ───────────────────────────────────────── */}
        <div className="mt-8 border-t border-gray-100 pt-6">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900">{asset.name} calculator</h2>
            </div>
            <div className="col-span-3">
          <div className="grid grid-cols-2 gap-x-12">
            {[
              { to: "United States Dollar (USD)", rate: 1 / GHS_RATE, prefix: "$" },
              { to: "Canadian Dollar (CAD)", rate: 1.37 / GHS_RATE, prefix: "CA$" },
              { to: "British Pound (GBP)", rate: 0.79 / GHS_RATE, prefix: "£" },
              { to: "Japanese Yen (JPY)", rate: 149 / GHS_RATE, prefix: "¥", dec: 0 },
              { to: "Indian Rupee (INR)", rate: 83 / GHS_RATE, prefix: "₹", dec: 0 },
              { to: "Brazilian Real (BRL)", rate: 4.97 / GHS_RATE, prefix: "R$" },
              { to: "Euro (EUR)", rate: 0.92 / GHS_RATE, prefix: "€" },
              { to: "Nigerian Naira (NGN)", rate: 1610 / GHS_RATE, prefix: "NGN ", dec: 0 },
              { to: "South Korean Won (KRW)", rate: 1334 / GHS_RATE, prefix: "₩", dec: 0 },
              { to: "Singapore Dollar (SGD)", rate: 1.35 / GHS_RATE, prefix: "S$" },
            ].map((row, i) => (
              <div key={i} className="flex justify-between py-2 text-xs border-b border-gray-50">
                <span className="text-gray-600">1 {asset.name} ({asset.symbol}) to {row.to}</span>
                <span className="font-semibold text-gray-900 ml-4 flex-shrink-0">
                  {row.prefix}{(ghsPrice * row.rate).toLocaleString("en-US", { minimumFractionDigits: row.dec ?? 2, maximumFractionDigits: row.dec ?? 2 })}
                </span>
              </div>
            ))}
          </div>
          <button className="mt-4 border border-gray-200 rounded-full px-4 py-1.5 text-xs text-gray-600 hover:bg-gray-50">Try calculator</button>
            </div>
          </div>
        </div>

        {/* ── Coinbase Bytes ───────────────────────────────────── */}
        <div className="mt-8 border-t border-gray-100 pt-6">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Coinbase Bytes</h2>
            </div>
            <div className="col-span-3">
              <div className="flex items-start gap-4 border border-gray-100 rounded-xl p-4">
                {asset.id === "ethereum" ? (
                  <div className="w-36 h-28 rounded-lg flex-shrink-0 bg-blue-600 flex items-center justify-center overflow-hidden">
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-white text-4xl font-bold">10</span>
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-6 h-1 bg-white/70 rounded" />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={marketBytesImg}
                    alt="Market Bytes"
                    className="w-36 h-28 rounded-lg flex-shrink-0 object-cover"
                  />
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#1652F0] flex-shrink-0" />
                    <span className="text-[10px] text-[#1652F0] font-semibold">Coinbase Bytes</span>
                    <span className="text-[10px] text-gray-400">{bytesData.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{bytesData.headline}</h3>
                  {bytesData.paragraphs.map((para, i) => (
                    <p key={i} className="text-xs text-gray-600 leading-relaxed mb-2">{para}</p>
                  ))}
                  <button className="border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-600 hover:bg-gray-50">Full story</button>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50">‹</button>
                <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50">›</button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Related assets ───────────────────────────────────── */}
        <div className="mt-8 border-t border-gray-100 pt-6">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Related assets</h2>
            </div>
            <div className="col-span-3">
          <div className="space-y-5">
            {[
              { heading: "Popular cryptocurrencies", items: relatedCoins },
              {
                heading: "Learn how to buy popular cryptocurrencies",
                items: asset.id === "ethereum"
                  ? ["How to buy BEAST SELLER", "How to buy silver", "How to buy Stable Coin", "How to buy XPR NETWORK", "How to buy Flare", "How to buy OFFICIAL TRUMP", "How to buy PAX Gold", "How to buy SHIBA INU", "How to buy Stargate Finance", "How to buy Tether", "How to buy USENR", "How to buy Zcash"]
                  : ["How to buy 🔥", "How to buy Bitcoin USD", "How to buy Hype", "How to buy HyperLiquid", "How to buy Polymarket", "How to buy TRON", "How to buy BNB", "How to buy J.P. Morgan Deposit Token", "How to buy Solana", "How to buy SUI", "How to buy USRX", "How to buy WAR"],
              },
              {
                heading: "Most popular conversions",
                items: asset.id === "ethereum"
                  ? ["IRR - usd", "Stellar Lumens - kes", "Wanchain - usd", "USDC - eur", "handleFOREX - lqd", "Tether - pkr", "Solana - eur", "XRP - usd", "Gram Silver - usd", "Litecoin - usd", "IRR - pkr", "usd - IRR"]
                  : ["Tether - cry", "USDC - usd", "REX - php", "Satoshi Nakamoto - usd", "Tether - bdt", "Polygon - usd", "Monero - usd", "Ethereum - eur", "Tether - thb", "Tether - php", "usd - IRR"],
              },
              { heading: "Popular prediction markets", items: popularPredictions },
              { heading: "Popular price predictions", items: popularPricePredictionsMap[asset.id] || popularPricePredictionsMap.bitcoin },
              { heading: "Cryptocurrencies with similar market cap", items: similarMarketCap },
              { heading: "Discover more assets", items: discoverMore },
            ].map((section) => (
              <div key={section.heading}>
                <h3 className="text-xs font-semibold text-gray-700 mb-2">{section.heading}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {section.items.map((c) => (
                    <span key={c} className="border border-gray-200 rounded-full px-2.5 py-1 text-xs text-gray-600 hover:bg-gray-50 cursor-pointer">{c}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
            </div>
          </div>
        </div>

        {/* ── Legal ────────────────────────────────────────────── */}
        <div className="mt-8 border-t border-gray-100 pt-6 mb-6">
          <h2 className="text-sm font-bold text-gray-700 mb-3">Legal</h2>
          <p className="text-xs text-gray-500 leading-relaxed mb-2">
            Information is provided for informational purposes only and is not investment advice. This is not a recommendation to buy or sell a particular digital asset or to employ a particular investment strategy. Coinbase makes no representation on the accuracy, suitability, or validity of any information provided or for a particular asset.
          </p>
          <p className="text-xs text-gray-500 leading-relaxed">
            Certain content has been prepared by third parties not affiliated with Coinbase Inc. or any of its affiliates and Coinbase is not responsible for such content. Coinbase is not liable for any errors or delays in content, or for any actions taken in reliance on any content. Information is provided for informational purposes only and is not investment advice. This is not a recommendation to buy or sell a particular digital asset or to employ a particular investment strategy. Coinbase makes no representation on the accuracy, suitability, or validity of any information provided or for a particular asset. Prices shown are for illustrative purposes only. Actual cryptocurrency prices and associated state may vary. Data presented may reflect assets traded on Coinbase's exchange and select other cryptocurrency exchanges.
          </p>
        </div>
      </div>
    </div>
  );
}

