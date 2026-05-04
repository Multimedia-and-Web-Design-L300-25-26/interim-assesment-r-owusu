import { Link } from "react-router-dom";
import { getCoinImageUrl } from "../../data/coinImages";

// A single row in the crypto assets table used in the Explore page
export default function CryptoRow({ asset, index }) {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="py-4 text-sm text-gray-400">{index + 1}</td>
      <td className="py-4">
        <Link
          to={`/price/${asset.id}`}
          className="flex items-center space-x-3 hover:text-[#1652F0] transition-colors"
        >
          <img
              src={getCoinImageUrl(asset.symbol)}
              alt={asset.name}
              className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
            />
            <div
              className="w-9 h-9 rounded-full items-center justify-center text-white font-bold text-sm flex-shrink-0 hidden"
              style={{ backgroundColor: asset.color }}
            >
              {asset.symbol.charAt(0)}
            </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm">{asset.name}</p>
            <p className="text-gray-400 text-xs">{asset.symbol}</p>
          </div>
        </Link>
      </td>
      <td className="py-4 text-right">
        <span className="font-semibold text-gray-900 text-sm">
          GHS {(asset.price / 100).toLocaleString("en-GH", { minimumFractionDigits: 2 })}
        </span>
      </td>
      <td className="py-4 text-right hidden sm:table-cell">
        <span
          className={`text-sm font-medium ${
            asset.change1h >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {asset.change1h >= 0 ? "↑" : "↓"} {Math.abs(asset.change1h).toFixed(2)}%
        </span>
      </td>
      <td className="py-4 text-right hidden md:table-cell">
        <span
          className={`text-sm font-medium ${
            asset.change24h >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {asset.change24h >= 0 ? "↑" : "↓"} {Math.abs(asset.change24h).toFixed(2)}%
        </span>
      </td>
      <td className="py-4 text-right hidden lg:table-cell">
        <span className="text-sm text-gray-600">
          ${(asset.marketCap / 1e9).toFixed(2)}B
        </span>
      </td>
      <td className="py-4 text-right hidden lg:table-cell">
        <span className="text-sm text-gray-600">
          ${(asset.volume / 1e9).toFixed(2)}B
        </span>
      </td>
      <td className="py-4 text-right">
        <button className="px-4 py-1.5 bg-[#1652F0] text-white text-xs font-medium rounded-full hover:bg-blue-700 transition-colors">
          Buy
        </button>
      </td>
    </tr>
  );
}
