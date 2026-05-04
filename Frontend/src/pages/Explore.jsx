import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cryptoAssets } from "../data/cryptoData";
import { getCoinImageUrl } from "../data/coinImages";
import graph1 from "../assets/images/graph1.png";
import startTradingImage from "../assets/images/startTrading.png";
import graph2 from "../assets/images/graph2.png";
import graph3 from "../assets/images/graph3.png";
import graph4 from "../assets/images/graph4.png";
import bitcoinGraph from "../assets/images/bitcoinGraph.png";
import ethereumGraph from "../assets/images/ethereumGraph.png";
import bnbGraph from "../assets/images/BNBGraph.png";
import xrpGraph from "../assets/images/XRPGraph.png";
import solanaGraph from "../assets/images/solanaGraph.png";
import tronGraph from "../assets/images/tronGraph.png";
import dogecoinGraph from "../assets/images/dogecoinGraph.png";
import cardanoGraph from "../assets/images/cardanoGraph.png";

const coinGraphs = {
  BTC: bitcoinGraph,
  ETH: ethereumGraph,
  BNB: bnbGraph,
  XRP: xrpGraph,
  SOL: solanaGraph,
  TRX: tronGraph,
  DOGE: dogecoinGraph,
  ADA: cardanoGraph,
};

const GHS_RATE = 10.93;

function formatGHSCompact(valueUSD) {
  const v = valueUSD * GHS_RATE;
  if (v >= 1e12) return `GHS ${(v / 1e12).toFixed(1)}T`;
  if (v >= 1e9) return `GHS ${(v / 1e9).toFixed(1)}B`;
  if (v >= 1e6) return `GHS ${(v / 1e6).toFixed(1)}M`;
  return `GHS ${v.toFixed(2)}`;
}

function Sparkline({ color, points, positive }) {
  const fallback = positive
    ? [24, 20, 22, 16, 19, 13, 15, 10, 12, 6, 9, 3]
    : [3, 7, 5, 11, 8, 14, 10, 17, 13, 20, 16, 23];
  const pts = points && points.length ? points : fallback;
  const stroke = color || (positive ? "#22c55e" : "#ef4444");
  const w = 60, h = 26;
  const step = w / (pts.length - 1);
  const max = Math.max(...pts), min = Math.min(...pts);
  const range = max - min || 1;
  const sy = (v) => (h - ((v - min) / range) * h).toFixed(1);
  const d = pts.map((v, i) => `${i === 0 ? "M" : "L"}${(i * step).toFixed(1)},${sy(v)}`).join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <path d={d} fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const marketStats = [
  { label: "Total market cap", value: "GHS 24.02T", change: "1.16%", positive: false, graph: graph1 },
  { label: "Trade volume", value: "GHS 1.28T", change: "19.49%", positive: true, graph: graph2 },
  { label: "Buy-sell ratio", value: "GHS 0.76", change: "1.77%", positive: false, graph: graph3 },
  { label: "BTC dominance", value: "60.13%", change: "0.09%", positive: true, graph: graph4 },
];

const topMovers = [
  { symbol: "SPRING", name: "Spring", change: -21.58, price: "GHS 0.0145", color: "#e53e3e" },
  { symbol: "ALCX", name: "Alchemix", change: -20.05, price: "GHS 64.43", color: "#1a1a1a" },
];

export default function Explore() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(new Set());
  const [statsExpanded, setStatsExpanded] = useState(false);
  const [pricesExpanded, setPricesExpanded] = useState(false);
  const navigate = useNavigate();

  const mainAssets = cryptoAssets.filter((a) => !a.tag);
  const newAssets = cryptoAssets.filter((a) => a.tag === "new").slice(0, 2);

  const filtered = search
    ? mainAssets.filter(
        (a) =>
          a.name.toLowerCase().includes(search.toLowerCase()) ||
          a.symbol.toLowerCase().includes(search.toLowerCase())
      )
    : mainAssets;

  const toggleFav = (id) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className="bg-white">
      {/* Page header */}
      <div className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Explore crypto</h1>
            <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
              Coinbase 50 index is down{" "}
              <span className="text-red-500 font-medium">↓ 1.64%</span> (24hr)
              <span className="text-gray-400 cursor-help" title="More info">ⓘ</span>
            </p>
          </div>
          <div className="relative w-64 flex-shrink-0">
            <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for an asset"
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-full text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Main two-column layout */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex gap-6 items-start">
        {/* ── Left main ─────────────────────────────────────────────── */}
        <div className="flex-1 min-w-0">

          {/* Market stats */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-base font-bold text-gray-900">Market stats</h2>
              <div className="flex gap-1">
                <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 text-sm">‹</button>
                <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 text-sm">›</button>
              </div>
            </div>
            <div className="text-xs text-gray-500 mb-3 leading-relaxed">
              <p className="mb-2">The overall crypto market is growing this week. As of today, the total crypto market capitalization is 24.03 trillion, representing a 0.62% increase from last week.</p>
              {statsExpanded && (
                <p className="mb-2">The 24-hour crypto market trading volume has also seen a 1.14% decrease over the past day. The top performing cryptocurrencies by price are Ocean Protocol, Plume and Parcl. Bitcoin remains the largest cryptocurrency by market capitalization of GHS 14,445,261,987,338.66. Its 24-hour trading volume has seen a 20.26% increase over the past day. Ethereum, the second largest cryptocurrency by market cap of GHS 2,518,431,136,817.47, has seen its 24-hour trading volume increase 25.44% in the last day.</p>
              )}
              <button onClick={() => setStatsExpanded((v) => !v)} className="text-[#1652F0] hover:underline font-medium">{statsExpanded ? "Read less" : "Read more"}</button>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {marketStats.map((stat) => (
                <div key={stat.label} className="border border-gray-100 rounded-xl p-3 bg-white overflow-hidden">
                  <p className="text-xs text-gray-500 mb-0.5">{stat.label}</p>
                  <p className="text-sm font-bold text-gray-900">
                    {stat.value}{" "}
                    <span className={`font-medium ${stat.positive ? "text-green-500" : "text-red-500"}`}>
                      {stat.positive ? "↑" : "↓"} {stat.change}
                    </span>
                  </p>
                  <div className="mt-2 -mx-3 -mb-3">
                    <img src={stat.graph} alt={stat.label} className="w-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Crypto market prices */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-base font-bold text-gray-900">Crypto market prices</h2>
              <span className="text-xs text-gray-400">15,561 assets</span>
            </div>
            <div className="text-xs text-gray-500 mb-3 leading-relaxed">
              <p className="mb-2">The overall crypto market is growing this week. As of today, the total crypto market capitalization is 24.03 trillion, representing a 0.62% increase from last week.</p>
              {pricesExpanded && (
                <p className="mb-2">The 24-hour crypto market trading volume has also seen a 1.14% decrease over the past day. The top performing cryptocurrencies by price are Ocean Protocol, Plume and Parcl. Bitcoin remains the largest cryptocurrency by market capitalization of GHS 14,445,261,987,338.66. Its 24-hour trading volume has seen a 20.26% increase over the past day. Ethereum, the second largest cryptocurrency by market cap of GHS 2,518,431,136,817.47, has seen its 24-hour trading volume increase 25.44% in the last day.</p>
              )}
              <button onClick={() => setPricesExpanded((v) => !v)} className="text-[#1652F0] hover:underline font-medium">{pricesExpanded ? "Read less" : "Read more"}</button>
            </div>

            {/* Filter dropdowns */}
            <div className="flex items-center gap-2 mb-4">
              {["All assets", "1D", "GHS", "10 rows"].map((f) => (
                <button key={f} className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-full text-xs font-medium text-gray-700 hover:bg-gray-50">
                  {f} <span className="text-gray-400 text-[10px]">▾</span>
                </button>
              ))}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 text-xs text-gray-400 font-medium">
                    <th className="pb-3 w-6 text-left"></th>
                    <th className="pb-3 text-left">
                      Asset <span className="text-gray-300 cursor-pointer">⇅</span>
                    </th>
                    <th className="pb-3 text-right">Market price</th>
                    <th className="pb-3 text-center hidden md:table-cell">Chart</th>
                    <th className="pb-3 text-right">
                      Change <span className="text-gray-300 cursor-pointer">⇅</span>
                    </th>
                    <th className="pb-3 text-right hidden lg:table-cell">
                      Mkt cap <span className="text-gray-300 cursor-pointer">⇅</span>
                    </th>
                    <th className="pb-3 text-right hidden lg:table-cell">Volume</th>
                    <th className="pb-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((asset) => (
                    <tr key={asset.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="py-3 pr-2">
                        <button
                          onClick={() => toggleFav(asset.id)}
                          className={`transition-colors text-base leading-none ${favorites.has(asset.id) ? "text-yellow-400" : "text-gray-300 hover:text-gray-400"}`}
                        >
                          {favorites.has(asset.id) ? "★" : "☆"}
                        </button>
                      </td>
                      <td className="py-3">
                        <Link to={`/price/${asset.id}`} className="flex items-center gap-2.5 group">
                          <img
                            src={getCoinImageUrl(asset.symbol)}
                            alt={asset.name}
                            className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                            onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
                          />
                          <div
                            className="w-8 h-8 rounded-full items-center justify-center text-white font-bold text-xs hidden flex-shrink-0"
                            style={{ backgroundColor: asset.color }}
                          >
                            {asset.symbol.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm leading-tight group-hover:text-[#1652F0]">{asset.name}</p>
                            <p className="text-gray-400 text-xs">{asset.symbol}</p>
                          </div>
                        </Link>
                      </td>
                      <td className="py-3 text-right font-semibold text-gray-900 text-sm tabular-nums">
                        GHS {(asset.price / 100).toLocaleString("en-GH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </td>
                      <td className="py-3 text-center hidden md:table-cell">
                        <div className="flex justify-center items-center">
                          {coinGraphs[asset.symbol]
                            ? <img src={coinGraphs[asset.symbol]} alt={`${asset.symbol} chart`} className="h-7 w-16 object-contain" />
                            : <Sparkline color={asset.color} points={asset.sparkline} positive={asset.change24h >= 0} />}
                        </div>
                      </td>
                      <td className="py-3 text-right">
                        <span className={`font-medium text-sm ${asset.change24h >= 0 ? "text-green-500" : "text-red-500"}`}>
                          {asset.change24h >= 0 ? "↑" : "↓"} {Math.abs(asset.change24h).toFixed(2)}%
                        </span>
                      </td>
                      <td className="py-3 text-right text-gray-600 text-sm hidden lg:table-cell tabular-nums">
                        {formatGHSCompact(asset.marketCap)}
                      </td>
                      <td className="py-3 text-right text-gray-600 text-sm hidden lg:table-cell tabular-nums">
                        {formatGHSCompact(asset.volume)}
                      </td>
                      <td className="py-3 text-right">
                        <button className="px-4 py-1.5 bg-[#1652F0] text-white text-xs font-semibold rounded-full hover:bg-blue-700 transition-colors">
                          Trade
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-5">
              <div className="flex items-center gap-1">
                {[1, 2, 3].map((p) => (
                  <button
                    key={p}
                    className={`w-8 h-8 rounded-full text-sm font-medium ${p === 1 ? "bg-[#1652F0] text-white" : "text-gray-500 hover:bg-gray-100"}`}
                  >
                    {p}
                  </button>
                ))}
                <span className="text-gray-400 text-sm px-1">...</span>
                <button className="px-3 h-8 rounded-full text-sm font-medium text-gray-500 hover:bg-gray-100">1,857</button>
                <button className="w-8 h-8 rounded-full text-sm font-medium text-gray-500 hover:bg-gray-100">›</button>
              </div>
              <p className="text-xs text-gray-400">1–10 of 15,561</p>
            </div>
          </div>
        </div>

        {/* ── Right sidebar ──────────────────────────────────────────── */}
        <div className="w-72 flex-shrink-0 space-y-4">
          {/* Get started */}
          <div className="bg-[#1652F0] rounded-2xl p-5 text-white relative overflow-hidden min-h-[120px]">
            <p className="text-xs font-semibold opacity-70 mb-1">Get started</p>
            <p className="text-base font-bold leading-snug mb-4 max-w-[60%]">Create your account today</p>
            <button
              onClick={() => navigate("/signup")}
              className="px-5 py-2 bg-white text-[#1652F0] text-sm font-bold rounded-full hover:bg-blue-50 transition-colors"
            >
              Sign up
            </button>
            <div className="absolute right-4 top-4 w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center text-3xl shadow-lg">
              ⊕
            </div>
          </div>

          {/* Top movers */}
          <div className="border border-gray-100 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-bold text-gray-900">Top movers</h3>
              <div className="flex gap-1">
                <button className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-xs text-gray-500 hover:bg-gray-50">‹</button>
                <button className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-xs text-gray-500 hover:bg-gray-50">›</button>
              </div>
            </div>
            <p className="text-xs text-gray-400 mb-3">24hr change</p>
            <div className="grid grid-cols-2 gap-2">
              {topMovers.map((m) => (
                <div key={m.symbol} className="border border-gray-100 rounded-xl p-3">
                  <img
                    src={getCoinImageUrl(m.symbol)}
                    alt={m.symbol}
                    className="w-8 h-8 rounded-full object-cover mb-2"
                    onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
                  />
                  <div
                    className="w-8 h-8 rounded-full items-center justify-center text-white text-xs font-bold mb-2 hidden"
                    style={{ backgroundColor: m.color }}
                  >
                    {m.symbol.charAt(0)}
                  </div>
                  <p className="text-xs font-bold text-gray-900">{m.symbol}</p>
                  <p className="text-sm font-bold text-red-500">{m.change.toFixed(2)}%</p>
                  <p className="text-xs text-gray-500 mt-0.5">{m.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* New on Coinbase */}
          <div className="border border-gray-100 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-gray-900">New on Coinbase</h3>
              <div className="flex gap-1">
                <button className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-xs text-gray-500 hover:bg-gray-50">‹</button>
                <button className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-xs text-gray-500 hover:bg-gray-50">›</button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {newAssets.map((a, i) => (
                <div key={a.id} className="border border-gray-100 rounded-xl p-3">
                  <img
                    src={getCoinImageUrl(a.symbol)}
                    alt={a.name}
                    className="w-8 h-8 rounded-full object-cover mb-2"
                    onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "block"; }}
                  />
                  <div
                    className="w-8 h-8 rounded-full items-center justify-center text-white font-bold text-xs hidden mb-2"
                    style={{ backgroundColor: a.color }}
                  >
                    {a.symbol.charAt(0)}
                  </div>
                  <p className="text-xs font-bold text-gray-900 uppercase">{a.symbol}</p>
                  <p className="text-xs text-gray-500">{a.name}</p>
                  <p className="text-xs text-gray-400 mt-1">{i === 0 ? "Added Feb 5" : "Added Dec 9"}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA banner */}
      <div className="bg-[#1652F0] mt-8">
        <div className="max-w-7xl mx-auto px-6 py-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-5 max-w-sm leading-snug">
              Create a Coinbase account to trade crypto. It's quick, easy, and secure.
            </h2>
            <button
              onClick={() => navigate("/signup")}
              className="flex items-center gap-2 px-6 py-3 bg-white text-[#1652F0] font-bold rounded-full text-sm hover:bg-blue-50 transition-colors"
            >
              Start Trading <span>→</span>
            </button>
          </div>
          <div className="hidden lg:block">
            <img
              src={startTradingImage}
              alt="Start trading chart"
              className="h-32 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
