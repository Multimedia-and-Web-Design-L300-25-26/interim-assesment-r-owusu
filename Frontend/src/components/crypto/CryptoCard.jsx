import { useState } from "react";
import { Link } from "react-router-dom";
import { cryptoAssets } from "../../data/cryptoData";
import { getCoinImageUrl } from "../../data/coinImages";

// Dark card showing crypto prices with Tradable/Top gainers/New tabs
export default function CryptoCard() {
  const [activeTab, setActiveTab] = useState("Tradable");
  const tabs = ["Tradable", "Top gainers", "New on Coinbase"];

  const displayed =
    activeTab === "Top gainers"
      ? cryptoAssets.filter((a) => a.tag === "top-gainer")
      : activeTab === "New on Coinbase"
      ? cryptoAssets.filter((a) => a.tag === "new").slice(0, 6)
      : cryptoAssets.slice(0, 6);

  return (
    <div className="bg-black rounded-3xl p-8 w-full shadow-xl">
      {/* Tabs */}
      <div className="flex items-center space-x-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === tab
                ? "bg-[#2a2a2a] text-white"
                : "text-white/50 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Rows */}
      <div className="space-y-6">
        {displayed.map((asset) => (
          <Link
            key={asset.id}
            to={`/price/${asset.id}`}
            className="flex items-center justify-between hover:bg-white/5 rounded-xl px-3 py-2 -mx-3 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <img
                src={getCoinImageUrl(asset.symbol)}
                alt={asset.name}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
              />
              <div
                className="w-12 h-12 rounded-full items-center justify-center text-white font-bold text-sm hidden flex-shrink-0"
                style={{ backgroundColor: asset.color }}
              >
                {asset.symbol.charAt(0)}
              </div>
              <span className="text-white text-xl font-medium">{asset.name}</span>
            </div>
            <div className="text-right">
              <div className="text-white text-lg font-semibold">
                GHS {(asset.price / 100).toLocaleString("en-GH", { minimumFractionDigits: 2, maximumFractionDigits: 4 })}
              </div>
              <div className={`text-sm font-medium ${asset.change24h >= 0 ? "text-green-400" : "text-red-400"}`}>
                {asset.change24h >= 0 ? "↗" : "↙"} {Math.abs(asset.change24h).toFixed(2)}%
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
