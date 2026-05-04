import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cryptoAssets, learnArticles } from "../data/cryptoData";
import heroImage from "../assets/Heros/Hero__4_.avif";
import advancedTraderImage from "../assets/AVIF/AdvancedTrader.avif";
import coinbaseOneImage from "../assets/AVIF/coinbaseOne.avif";
import baseAppImage from "../assets/AVIF/baseApp.avif";
import controlImage from "../assets/AVIF/control.avif";
import learnImg1 from "../assets/images/image1.png";
import learnImg2 from "../assets/images/image2.png";
import learnImg3 from "../assets/images/image3.png";
import CryptoCard from "../components/crypto/CryptoCard";

// ── Phone Mockup Card (Hero) ────────────────────────────────────────────────
const assetRows = [
  {
    label: "Crypto",
    value: "$14,186.12",
    green: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 text-gray-600">
        <circle cx="12" cy="12" r="4" />
        <path strokeLinecap="round" d="M12 2v2M12 20v2M2 12h2M20 12h2" />
        <circle cx="12" cy="12" r="9" strokeDasharray="2 3" />
      </svg>
    ),
  },
  {
    label: "Stocks",
    value: "$8,133.98",
    green: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 text-gray-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
      </svg>
    ),
  },
  {
    label: "Derivatives",
    value: "$148.84",
    green: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 text-gray-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h3v10H3zM10 10h3v7h-3zM17 4h3v13h-3z" />
      </svg>
    ),
  },
  {
    label: "Predictions",
    value: "$42.69",
    green: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 text-gray-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.7.7m13.16 13.16.7.7M3 12h1m16 0h1M4.22 19.78l.7-.7M18.36 5.64l.7-.7" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    label: "Cash",
    value: "$10,124.22",
    green: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 text-gray-600">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path strokeLinecap="round" d="M16 3H8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2Z" />
        <circle cx="12" cy="14" r="2" />
      </svg>
    ),
  },
];

function PhoneMockup() {
  return (
    <div className="bg-white p-4 w-full">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-5">
        {/* Hamburger */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#374151" className="w-5 h-5 flex-shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        {/* Search pill */}
        <div className="flex-1 mx-3 flex items-center bg-gray-100 rounded-full px-3 py-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#9CA3AF" className="w-3 h-3 mr-2 flex-shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <span className="text-gray-400 text-xs">Search</span>
        </div>
        {/* Right icons */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          {/* Coinbase C */}
          <div className="w-7 h-7 rounded-full bg-[#1652F0] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 32 32" fill="none">
              <path d="M16 7C11.029 7 7 11.029 7 16C7 20.971 11.029 25 16 25C19.804 25 23.058 22.729 24.507 19.5H20.378C19.257 21.044 17.742 22 16 22C12.686 22 10 19.314 10 16C10 12.686 12.686 10 16 10C17.742 10 19.257 10.956 20.378 12.5H24.507C23.058 9.271 19.804 7 16 7Z" fill="white"/>
            </svg>
          </div>
          {/* Candlestick / bars icon */}
          <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth={2} className="w-3.5 h-3.5">
              <path strokeLinecap="round" d="M4 4v4M4 12v4M4 8h4M4 16h4M12 2v6M12 12v6M12 8h4M12 18h4M20 6v4M20 14v4M20 10h-3M20 18h-3" />
            </svg>
          </div>
          {/* Bell */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#374151" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
        </div>
      </div>

      {/* Price row */}
      <div className="flex items-start justify-between mb-1">
        <div>
          <span className="text-gray-900 text-3xl font-bold">$33,683.80</span>
          <div className="flex items-center mt-1 text-green-500 text-sm font-medium">
            <span className="mr-1">↗</span>
            <span>$131.36 (1.38%) 1D</span>
            <span className="ml-1 text-gray-400">›</span>
          </div>
        </div>
        {/* Chevron up button */}
        <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#374151" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Chart */}
      <div className="relative h-28 my-3">
        <svg viewBox="0 0 300 90" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="dots" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#93C5FD" opacity="0.6" />
            </pattern>
            <clipPath id="chartClip">
              <path d="M0,72 C20,68 40,76 60,63 C80,50 100,60 120,50 C140,40 155,55 175,42 C195,28 215,38 235,22 C255,9 275,20 300,6 L300,90 L0,90 Z" />
            </clipPath>
          </defs>
          {/* Dotted area fill */}
          <rect x="0" y="0" width="300" height="90" fill="url(#dots)" clipPath="url(#chartClip)" />
          {/* Line */}
          <path
            d="M0,72 C20,68 40,76 60,63 C80,50 100,60 120,50 C140,40 155,55 175,42 C195,28 215,38 235,22 C255,9 275,20 300,6"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2.5"
          />
          {/* End dot */}
          <circle cx="298" cy="6" r="5" fill="#3B82F6" />
          <circle cx="298" cy="6" r="9" fill="#3B82F6" opacity="0.2" />
        </svg>
      </div>

      {/* Time filters */}
      <div className="flex items-center justify-between mb-5">
        {["1H", "1D", "1W", "1M", "1Y", "ALL"].map((t) => (
          <button
            key={t}
            className={`text-xs px-2.5 py-1 rounded-full font-medium transition-colors ${
              t === "1D"
                ? "bg-blue-100 text-blue-700"
                : "text-gray-400 hover:text-gray-700"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Asset rows */}
      <div className="space-y-4">
        {assetRows.map((row) => (
          <div key={row.label} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                {row.icon}
              </div>
              <span className="text-gray-900 text-sm font-semibold">{row.label}</span>
            </div>
            <span className={`text-sm font-medium ${row.green ? "text-green-500" : "text-gray-800"}`}>
              {row.green && "↗ "}{row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Crypto Price Card (Explore section) ────────────────────────────────────
// ── Trading Tools Mockup ────────────────────────────────────────────────────
function TradingMockup() {
  return (
    <div className="bg-gray-900 rounded-2xl p-4 w-full max-w-sm shadow-xl">
      <div className="flex items-center justify-between mb-3">
        <span className="text-white/60 text-xs">BTC/USD</span>
        <div className="flex space-x-2">
          {["1m", "5m", "1h", "1D"].map((t) => (
            <span key={t} className="text-white/40 text-xs hover:text-white cursor-pointer">{t}</span>
          ))}
        </div>
      </div>
      {/* Candlestick chart placeholder */}
      <div className="h-32 flex items-end space-x-1 mb-3">
        {[40, 55, 35, 65, 45, 70, 50, 80, 60, 75, 55, 85, 65, 72, 68, 78].map((h, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end">
            <div
              className={`w-full rounded-sm ${i % 3 === 0 ? "bg-red-500" : "bg-green-500"}`}
              style={{ height: `${h}%` }}
            />
          </div>
        ))}
      </div>
      {/* Order book rows */}
      <div className="space-y-1">
        {[
          { price: "33,720", size: "0.245", side: "sell" },
          { price: "33,710", size: "0.188", side: "sell" },
          { price: "33,683", size: "—", side: "spread" },
          { price: "33,670", size: "0.312", side: "buy" },
          { price: "33,655", size: "0.476", side: "buy" },
        ].map((row) => (
          <div key={row.price} className={`flex justify-between text-xs px-1 py-0.5 rounded ${row.side === "spread" ? "bg-white/5" : ""}`}>
            <span className={row.side === "sell" ? "text-red-400" : row.side === "buy" ? "text-green-400" : "text-white/40"}>
              {row.price}
            </span>
            <span className="text-white/40">{row.size}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Trade Success Mockup ────────────────────────────────────────────────────
function TradeSuccessMockup() {
  return (
    <div className="bg-gray-100 rounded-3xl p-6 w-full max-w-xs shadow-lg">
      {/* Status bar */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-gray-400 text-xs">3:57</span>
        <div className="flex space-x-1">
          <div className="w-3 h-2 bg-gray-400 rounded-sm" />
          <div className="w-2 h-2 bg-gray-400 rounded-full" />
          <div className="w-3 h-2 bg-gray-400 rounded-sm" />
        </div>
      </div>
      {/* Success icon */}
      <div className="flex justify-center mb-3">
        <div className="w-16 h-16 rounded-full bg-[#1652F0] flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
      </div>
      <p className="text-center text-gray-900 font-semibold text-sm mb-1">Trade successful!</p>
      <p className="text-center text-gray-500 text-xs mb-4">You got 0.012423 BTC</p>
      {/* No fee banner */}
      <div className="bg-white rounded-xl p-3 mb-3 flex items-center space-x-2 shadow-sm">
        <span className="text-gray-900 text-xs font-medium">$14.68</span>
        <div className="flex items-center space-x-1">
          <div className="w-4 h-4 rounded-full bg-[#1652F0] flex items-center justify-center">
            <span className="text-white text-xs font-bold">C</span>
          </div>
          <span className="text-gray-600 text-xs">No trading fees with Coinbase One</span>
        </div>
      </div>
      {/* Member benefits */}
      <div className="bg-white rounded-xl p-3 shadow-sm">
        <p className="text-gray-900 text-xs font-semibold mb-1">Exclusive member benefits</p>
        <p className="text-gray-500 text-xs mb-2">Coinbase One members get boosted staking rewards.</p>
        <span className="text-[#1652F0] text-xs font-medium">Learn more</span>
      </div>
    </div>
  );
}

// ── Base App Mockup ─────────────────────────────────────────────────────────
function BaseAppMockup() {
  return (
    <div className="bg-gray-100 rounded-3xl p-4 w-full max-w-xs shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <div className="flex space-x-4">
          <span className="text-gray-900 text-sm font-semibold border-b-2 border-gray-900">Trade</span>
          <span className="text-gray-400 text-sm">Tails</span>
        </div>
      </div>
      {/* Profile row */}
      <div className="flex items-center space-x-2 mb-3">
        <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white text-xs font-bold">J</div>
        <div>
          <p className="text-xs font-medium text-gray-900">jasmine</p>
          <p className="text-xs text-gray-500">Setup my new painting</p>
        </div>
      </div>
      {/* Image placeholder */}
      <div className="w-full h-24 bg-gradient-to-br from-pink-400 to-orange-300 rounded-xl mb-3 flex items-center justify-center">
        <span className="text-white text-2xl">🎨</span>
      </div>
      {/* Stats row */}
      <div className="flex items-center space-x-3 mb-3">
        <div className="flex items-center space-x-1 bg-white rounded-full px-2 py-1">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-xs text-gray-600">100k</span>
          <span className="text-xs text-gray-400">|</span>
          <span className="text-xs text-gray-600">84k</span>
        </div>
        <span className="text-green-500 text-xs font-medium">$1.00</span>
      </div>
      {/* Transaction */}
      <div className="flex items-center space-x-2 bg-white rounded-xl p-2 mb-2">
        <div className="w-6 h-6 rounded-full bg-gray-200" />
        <div className="flex-1">
          <p className="text-xs text-gray-600">@he bought 89k of @VirtualP...</p>
        </div>
      </div>
      {/* Chart mini */}
      <div className="flex items-center space-x-2 bg-white rounded-xl p-2">
        <div>
          <p className="text-xs font-medium text-gray-900">Virtual Protocol</p>
          <p className="text-xs text-gray-400">VIRTUAL</p>
        </div>
        <div className="ml-auto flex items-center space-x-2">
          <span className="text-xs text-gray-900 font-medium">$740M</span>
          <div className="h-8 w-16">
            <svg viewBox="0 0 60 30" className="w-full h-full">
              <path d="M0,25 C15,20 30,10 45,15 C50,17 55,12 60,5" fill="none" stroke="#22c55e" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Crypto Logo Cluster ─────────────────────────────────────────────────────
function CryptoCluster() {
  const logos = [
    { color: "#1652F0", label: "C", top: "35%", left: "25%", size: "w-16 h-16" },
    { color: "#F7931A", label: "₿", top: "45%", left: "45%", size: "w-20 h-20" },
    { color: "#627EEA", label: "Ξ", top: "65%", left: "35%", size: "w-16 h-16" },
    { color: "#C2A633", label: "Ð", top: "60%", left: "10%", size: "w-16 h-16" },
    { color: "#0033AD", label: "₳", top: "60%", left: "60%", size: "w-14 h-14" },
    { color: "#1A1A1A", label: "Ⓐ", top: "10%", left: "55%", size: "w-14 h-14" },
    { color: "#F3BA2F", label: "→", top: "30%", left: "68%", size: "w-14 h-14" },
  ];
  return (
    <div className="relative w-80 h-80">
      {logos.map((l, i) => (
        <div
          key={i}
          className={`absolute ${l.size} rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg`}
          style={{ backgroundColor: l.color, top: l.top, left: l.left }}
        >
          {l.label}
        </div>
      ))}
    </div>
  );
}

// ── Main Home Page ──────────────────────────────────────────────────────────
export default function Home() {
  const [email, setEmail] = useState("");
  const [heroEmail, setHeroEmail] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <div className="bg-white">

      {/* ── SECTION 1: Hero ─────────────────────────────────────────────── */}
      <section className="overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left: Hero Image — fills column, no cap */}
          <div className="flex flex-col">
            <img
              src={heroImage}
              alt="Coinbase app"
              className="w-full h-full object-cover rounded-3xl"
            />
            <p className="text-gray-400 text-xs mt-3 px-4">
              Stocks and prediction markets not available in your jurisdiction.
            </p>
          </div>

          {/* Right: Hero text */}
          <div className="flex flex-col justify-center px-8 lg:px-16 py-20 lg:py-32">
            <h1 className="text-6xl lg:text-8xl font-semibold text-gray-900 leading-[1.05] mb-6">
              The future of finance is here.
            </h1>
            <p className="text-gray-600 text-xl mb-8">
              Trade crypto and more on a platform you can trust.
            </p>
            <form onSubmit={handleSignup} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                value={heroEmail}
                onChange={(e) => setHeroEmail(e.target.value)}
                placeholder="satoshi@nakamoto.com"
                className="flex-1 px-5 py-4 border border-gray-300 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[#1652F0] text-white font-semibold rounded-full hover:bg-blue-700 transition-colors text-base whitespace-nowrap"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Explore Crypto ───────────────────────────────────── */}
      <section className="bg-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* Left: Text with padding */}
          <div className="px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col justify-center">
              <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
                Explore crypto like Bitcoin, Ethereum, and Dogecoin.
              </h2>
              <p className="text-[#1652F0] text-lg mb-8">
                Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
              </p>
              <Link
                to="/explore"
                className="inline-block px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors text-base w-fit"
              >
                See more assets
              </Link>
          </div>
          {/* Right: Card — no right padding, bleeds to edge */}
          <div className="flex items-stretch">
            <CryptoCard />
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Advanced Trader ──────────────────────────────────── */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Advanced Trader image */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={advancedTraderImage}
                alt="Advanced trading interface"
                className="w-full rounded-2xl object-cover shadow-xl"
              />
            </div>
            {/* Right: Text */}
            <div>
              <h2 className="text-6xl lg:text-7xl font-semibold text-gray-900 mb-6">
                Powerful tools, designed for the advanced trader.
              </h2>
              <p className="text-gray-600 text-xl mb-8 leading-relaxed">
                Powerful analytical tools with the safety and security of Coinbase deliver the ultimate trading experience. Tap into sophisticated charting capabilities, real-time order books, and deep liquidity across hundreds of markets.
              </p>
              <button className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors text-base">
                Start trading
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Coinbase One ─────────────────────────────────────── */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center space-x-2 border border-gray-300 rounded-full px-3 py-1 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#1652F0]" />
                <span className="text-gray-700 text-xs font-medium tracking-wide uppercase">Coinbase One</span>
              </div>
              <h2 className="text-6xl lg:text-7xl font-semibold text-gray-900 mb-6">
                Zero trading fees, more rewards.
              </h2>
              <p className="text-[#1652F0] text-xl mb-8 leading-relaxed">
                Get more out of crypto with one membership: zero trading fees, boosted rewards, priority support, and more.
              </p>
              <button className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors text-base">
                Claim free trial
              </button>
            </div>
            {/* Right: Coinbase One image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={coinbaseOneImage}
                alt="Coinbase One trade successful"
                className="w-full rounded-2xl object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Base App ─────────────────────────────────────────── */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Base App image */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={baseAppImage}
                alt="Base App"
                className="w-full rounded-2xl object-cover shadow-xl"
              />
            </div>
            {/* Right: Text */}
            <div>
              <div className="inline-flex items-center space-x-2 border border-gray-300 rounded-full px-3 py-1 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#1652F0]" />
                <span className="text-gray-700 text-xs font-medium tracking-wide uppercase">Base App</span>
              </div>
              <h2 className="text-6xl lg:text-7xl font-semibold text-gray-900 mb-6">
                Countless ways to earn crypto with the Base App.
              </h2>
              <p className="text-[#1652F0] text-xl mb-8 leading-relaxed">
                An everything app to trade, create, discover, and chat, all in one place.
              </p>
              <button className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors text-base">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: Learn Crypto Basics ─────────────────────────────── */}
      <section className="bg-gray-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
            <div>
              <h2 className="text-6xl lg:text-7xl font-semibold text-gray-900">
                New to crypto? Learn some crypto basics
              </h2>
            </div>
            <div className="flex flex-col justify-between lg:pt-4">
              <p className="text-gray-600 text-xl mb-6">
                Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between
              </p>
              <div>
                <Link
                  to="/learn"
                  className="inline-block px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors text-base"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          {/* Article cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[learnImg1, learnImg2, learnImg3].map((img, i) => {
              const article = learnArticles[i];
              return (
                <Link
                  to="/learn"
                  key={article.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-64 overflow-hidden">
                    <img src={img} alt={article.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className={`font-bold text-xl mb-2 transition-colors ${
                      i === 0 ? "text-[#1652F0]" : "text-gray-900 group-hover:text-[#1652F0]"
                    }`}>
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-lg leading-relaxed">{article.excerpt}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: Take Control CTA ─────────────────────────────────── */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: CTA */}
            <div>
              <h2 className="text-6xl lg:text-7xl font-semibold text-gray-900 mb-6">
                Take control of your money
              </h2>
              <p className="text-gray-600 text-xl mb-8">
                Start your portfolio today and discover crypto
              </p>
              <form onSubmit={handleSignup} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="satoshi@nakamoto.com"
                  className="flex-1 px-5 py-4 border border-gray-300 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#1652F0] text-white font-semibold rounded-full hover:bg-blue-700 transition-colors text-base whitespace-nowrap"
                >
                  Sign up
                </button>
              </form>
            </div>
            {/* Right: Control image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={controlImage}
                alt="Take control of your money"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Disclaimer ──────────────────────────────────────────────────── */}
      <section className="py-8 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-xs text-gray-400 mb-2">
            DEX trading is offered by Coinbase Bermuda Technologies Ltd.
          </p>
          <p className="text-xs text-gray-400 leading-relaxed">
            Products and features may not be available in all regions. Information is for or informational purposes only, and is not (i) an offer, or solicitation of an offer, to invest in, or to buy or sell any interests or shares, or to participate in any investment or trading strategy or (ii) intended to provide accounting, legal, or tax advice, or investment recommendations. Trading cryptocurrency comes with risk.
          </p>
        </div>
      </section>
    </div>
  );
}

