import { useState } from "react";

// Custom hook for filtering and sorting crypto assets in the Explore page
export function useAssetFilter(assets) {
  const [activeTab, setActiveTab] = useState("Top assets");
  const [search, setSearch] = useState("");

  const filtered = assets.filter(
    (a) =>
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const sorted =
    activeTab === "Gainers"
      ? [...filtered].sort((a, b) => b.change24h - a.change24h)
      : activeTab === "Losers"
      ? [...filtered].sort((a, b) => a.change24h - b.change24h)
      : filtered;

  return { activeTab, setActiveTab, search, setSearch, sorted };
}
