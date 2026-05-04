import coinbaseLogo from "../../assets/images/coinbase logo.svg";
import { Link } from "react-router-dom";

const footerLinks = {
  Company: [
    "About", "Careers", "Affiliates", "Blog", "Press",
    "Security", "Investors", "Vendors", "Legal & privacy",
    "Cookie policy", "Cookie preferences", "Digital Asset Disclosures",
  ],
  Learn: [
    "Explore", "Market statistics", "Coinbase Bytes newsletter",
    "Crypto basics", "Tips & tutorials", "Crypto glossary",
    "Market updates", "What is Bitcoin?", "What is crypto?",
    "What is a blockchain?", "How to set up a crypto wallet?",
    "How to send crypto?", "Taxes",
  ],
  Individuals: [
    "Buy & sell", "Earn free crypto", "Base App",
    "Coinbase One", "Server Wallets", "Debit Card",
  ],
  Businesses: [
    "Asset Listings", "Coinbase Business", "Payments",
    "Commerce", "Token Manager",
  ],
  Institutions: [
    "Prime", "Staking", "Exchange", "International Exchange",
    "Derivatives Exchange", "Verified Pools",
  ],
  Developers: [
    "Developer Platform", "Base", "Server Wallets", "Embedded Wallets",
    "Base Accounts (Smart Wallets)", "Onramp & Offramp", "x402",
    "Trade API", "Paymaster", "OnchainKit", "Data API",
    "Verifications", "Node", "AgentKit", "Staking", "Faucet",
    "Exchange API", "International Exchange API", "Prime API",
    "Derivatives API",
  ],
  Support: [
    "Help center", "Contact us", "Create account", "ID verification",
    "Account information", "Payment methods", "Account access",
    "Supported crypto", "Status",
  ],
  "Asset prices": [
    "Bitcoin price", "Ethereum price", "Solana price", "XRP price",
  ],
  "Stock prices": [
    "NVIDIA price", "Apple price", "Microsoft price", "Amazon price",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo */}
        <div className="mb-10">
          <img src={coinbaseLogo} alt="Coinbase" width="32" height="32" />
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Company</h3>
            <ul className="space-y-2">
              {footerLinks.Company.map((item) => (
                <li key={item}>
                  <span className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer transition-colors">{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold text-gray-900 mt-6 mb-3">Learn</h3>
            <ul className="space-y-2">
              {footerLinks.Learn.map((item) => (
                <li key={item}>
                  {item === "Explore" ? (
                    <Link to="/explore" className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer transition-colors">{item}</Link>
                  ) : (
                    <span className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer transition-colors">{item}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Individuals + Businesses + Institutions */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Individuals</h3>
            <ul className="space-y-2">
              {footerLinks.Individuals.map((item) => (
                <li key={item}>
                  <span className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer transition-colors">{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold text-gray-900 mt-6 mb-3">Businesses</h3>
            <ul className="space-y-2">
              {footerLinks.Businesses.map((item) => (
                <li key={item}>
                  <span className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer transition-colors">{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold text-gray-900 mt-6 mb-3">Institutions</h3>
            <ul className="space-y-2">
              {footerLinks.Institutions.map((item) => (
                <li key={item}>
                  <span className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Developers</h3>
            <ul className="space-y-2">
              {footerLinks.Developers.map((item) => (
                <li key={item}>
                  <span className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Support + Asset prices + Stock prices */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Support</h3>
            <ul className="space-y-2">
              {footerLinks.Support.map((item) => (
                <li key={item}>
                  <span className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer transition-colors">{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold text-gray-900 mt-6 mb-3">Asset prices</h3>
            <ul className="space-y-2">
              {footerLinks["Asset prices"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer transition-colors">{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold text-gray-900 mt-6 mb-3">Stock prices</h3>
            <ul className="space-y-2">
              {footerLinks["Stock prices"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4 mb-6">
          {/* X / Twitter */}
          <a href="#" aria-label="X" className="text-gray-600 hover:text-gray-900 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-gray-900 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-gray-900 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
          </a>
          {/* TikTok */}
          <a href="#" aria-label="TikTok" className="text-gray-600 hover:text-gray-900 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <span>© 2026 Coinbase</span>
            <span>•</span>
            <span className="hover:text-gray-700 cursor-pointer transition-colors">Privacy</span>
            <span>•</span>
            <span className="hover:text-gray-700 cursor-pointer transition-colors">Terms & Conditions</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253" />
            </svg>
            <span>Global</span>
            <span>•</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
