import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import coinbaseLogo from "../../assets/images/coinbase logo.svg";
import systemUpdate2025 from "../../assets/images/system_update2025.png";
import commercePayments from "../../assets/images/commercePayments.png";
import ourClients from "../../assets/images/ourClients.png";
import infrastructure from "../../assets/images/infrastructure.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (name) => setOpenDropdown(name);
  const handleMouseLeave = () => setOpenDropdown(null);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src={coinbaseLogo} alt="Coinbase" width="38" height="38" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/explore" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Cryptocurrencies
            </Link>
            {/* Individuals dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("individuals")}
              onMouseLeave={handleMouseLeave}
            >
              <span className={`text-sm font-medium transition-colors cursor-pointer ${openDropdown === "individuals" ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}`}>
                Individuals
              </span>

              {openDropdown === "individuals" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[820px] bg-white border border-gray-100 rounded-2xl shadow-xl p-6 flex gap-8">
                  {/* Left column — 6 items */}
                  <div className="flex flex-col gap-5 flex-1">
                    {[
                      { title: "Buy and sell", desc: "Buy, sell, and use crypto", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-1.536 1.5-3.355 1.532-5.25H7.5M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /> },
                      { title: "Base App", desc: "Post, earn, trade, and chat, all in one place", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-9-9V18h18V3H3Z" /> },
                      { title: "Coinbase One", desc: "Get zero trading fees and more", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" /> },
                      { title: "Private Client", desc: "For trusts, family offices, UHNWIs", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /> },
                      { title: "Onchain", desc: "Dive into the world of onchain apps", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /> },
                      { title: "Learn", desc: "Crypto tips and guides", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /> },
                    ].map(({ title, desc, icon }) => (
                      <div key={title} className="flex items-start gap-3 cursor-pointer group">
                        <div className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#374151" className="w-4 h-4">{icon}</svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600">{title}</p>
                          <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right column — 5 items */}
                  <div className="flex flex-col gap-5 flex-1">
                    {[
                      { title: "Advanced", desc: "Professional-grade trading tools", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /> },
                      { title: "Earn", desc: "Stake your crypto and earn rewards", icon: <path strokeLinecap="round" strokeLinejoin="round" d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /> },
                      { title: "Coinbase Wealth", desc: "Institutional-grade services for UHNW", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" /> },
                      { title: "Credit Card", desc: "Earn up to 4% bitcoin back", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /> },
                      { title: "Debit Card", desc: "Spend crypto, get crypto back", icon: <><rect x="2" y="5" width="20" height="14" rx="2" strokeWidth={1.5} stroke="#374151" fill="none"/><path strokeLinecap="round" strokeLinejoin="round" d="M2 10h20" /></> },
                    ].map(({ title, desc, icon }) => (
                      <div key={title} className="flex items-start gap-3 cursor-pointer group">
                        <div className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#374151" className="w-4 h-4">{icon}</svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600">{title}</p>
                          <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Featured panel */}
                  <div className="w-52 flex-shrink-0 flex flex-col">
                    <img src={systemUpdate2025} alt="System Update 2025" className="w-full aspect-square object-cover rounded-2xl mb-3" />
                    <p className="text-sm font-bold text-gray-900 leading-snug mb-1">System Update 2025</p>
                    <p className="text-xs text-gray-500 leading-relaxed mb-2">The next chapter of Coinbase. Live on X 12/17.</p>
                    <a href="#" className="text-sm font-semibold text-gray-900 underline underline-offset-2 hover:text-blue-600">Learn more</a>
                  </div>
                </div>
              )}
            </div>

            {/* Businesses dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("businesses")}
              onMouseLeave={handleMouseLeave}
            >
              <span className={`text-sm font-medium transition-colors cursor-pointer ${openDropdown === "businesses" ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}`}>
                Businesses
              </span>

              {openDropdown === "businesses" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[680px] bg-white border border-gray-100 rounded-2xl shadow-xl p-6 flex gap-6">
                  {/* Left: menu items */}
                  <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-5">
                    {/* Business */}
                    <div className="flex items-start gap-3 cursor-pointer group">
                      <div className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#374151" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600">Business</p>
                        <p className="text-xs text-gray-500 leading-relaxed mt-0.5">Crypto trading and payments for startups and SMBs</p>
                      </div>
                    </div>

                    {/* Payments */}
                    <div className="flex items-start gap-3 cursor-pointer group">
                      <div className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#374151" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600">Payments</p>
                        <p className="text-xs text-gray-500 leading-relaxed mt-0.5">The stablecoin payments stack for commerce platforms</p>
                      </div>
                    </div>

                    {/* Asset Listings */}
                    <div className="flex items-start gap-3 cursor-pointer group">
                      <div className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#374151" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600">Asset Listings</p>
                        <p className="text-xs text-gray-500 leading-relaxed mt-0.5">List your asset on Coinbase</p>
                      </div>
                    </div>

                    {/* Token Manager */}
                    <div className="flex items-start gap-3 cursor-pointer group">
                      <div className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#374151" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600">Token Manager</p>
                        <p className="text-xs text-gray-500 leading-relaxed mt-0.5">The platform for token distributions, vesting, and lockups</p>
                      </div>
                    </div>
                  </div>

                  {/* Right: featured card */}
                  <div className="w-56 flex-shrink-0 flex flex-col">
                    <img src={commercePayments} alt="Commerce Payments" className="w-full rounded-xl mb-3 object-cover" />
                    <p className="text-sm font-bold text-gray-900 leading-snug mb-1">Commerce Payments Protocol</p>
                    <p className="text-xs text-gray-500 leading-relaxed mb-2">A new standard for onchain payments.</p>
                    <a href="#" className="text-sm font-semibold text-gray-900 underline underline-offset-2 hover:text-blue-600">Go to Payments</a>
                  </div>
                </div>
              )}
            </div>

            {/* Institutions dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("institutions")}
              onMouseLeave={handleMouseLeave}
            >
              <span className={`text-sm font-medium transition-colors cursor-pointer ${openDropdown === "institutions" ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}`}>
                Institutions
              </span>

              {openDropdown === "institutions" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[760px] bg-white border border-gray-100 rounded-2xl shadow-xl p-6 flex gap-8">
                  {/* Left column — Prime */}
                  <div className="flex flex-col flex-1">
                    <div className="flex items-center gap-1 mb-4">
                      <span className="text-sm font-semibold text-gray-900">Prime</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#111827" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-5">
                      {[
                        { title: "Trading and Financing", desc: "Professional prime brokerage services", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /> },
                        { title: "Custody", desc: "Securely store all your digital assets", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /> },
                        { title: "Staking", desc: "Explore staking across our products", icon: <path strokeLinecap="round" strokeLinejoin="round" d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /> },
                        { title: "Onchain Wallet", desc: "Institutional-grade wallet to get onchain", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" /> },
                      ].map(({ title, desc, icon }) => (
                        <div key={title} className="flex items-start gap-3 cursor-pointer group">
                          <div className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#374151" className="w-4 h-4">{icon}</svg>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600">{title}</p>
                            <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right column — Markets */}
                  <div className="flex flex-col flex-1">
                    <p className="text-sm font-semibold text-gray-900 mb-4">Markets</p>
                    <div className="flex flex-col gap-5">
                      {[
                        { title: "Exchange", desc: "Spot markets for high-frequency trading", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /> },
                        { title: "International Exchange", desc: "Access perpetual futures markets", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3.157 7.582A8.959 8.959 0 0 0 3 12c0 .778.099 1.533.284 2.253" /> },
                        { title: "Derivatives Exchange", desc: "Trade an accessible futures market", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /> },
                        { title: "Verified Pools", desc: "Transparent, verified liquidity pools", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /> },
                      ].map(({ title, desc, icon }) => (
                        <div key={title} className="flex items-start gap-3 cursor-pointer group">
                          <div className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#374151" className="w-4 h-4">{icon}</svg>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600">{title}</p>
                            <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Featured panel */}
                  <div className="w-52 flex-shrink-0 flex flex-col">
                    <img src={ourClients} alt="Our clients" className="w-full aspect-square object-cover rounded-2xl mb-3" />
                    <p className="text-sm font-bold text-gray-900 leading-snug mb-1">Our clients</p>
                    <p className="text-xs text-gray-500 leading-relaxed mb-2">Trusted by institutions and government.</p>
                    <a href="#" className="text-sm font-semibold text-gray-900 underline underline-offset-2 hover:text-blue-600">Learn more</a>
                  </div>
                </div>
              )}
            </div>
            {/* Developers dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("developers")}
              onMouseLeave={handleMouseLeave}
            >
              <span className={`text-sm font-medium transition-colors cursor-pointer ${openDropdown === "developers" ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}`}>
                Developers
              </span>

              {openDropdown === "developers" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[820px] bg-white border border-gray-100 rounded-2xl shadow-xl p-6 flex gap-8">
                  {/* Left column — Coinbase Developer Platform */}
                  <div className="flex flex-col flex-1">
                    <div className="flex items-center gap-1 mb-4">
                      <span className="text-sm font-semibold text-gray-900">Coinbase Developer Platform</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#111827" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-5">
                      {[
                        { title: "Payments", desc: "Fast and global stablecoin payments with a single integration", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3.157 7.582A8.959 8.959 0 0 0 3 12c0 .778.099 1.533.284 2.253" /> },
                        { title: "Trading", desc: "Launch crypto trading and custody for your users", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /> },
                        { title: "Wallets", desc: "Deploy customizable and scalable wallets for your business", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /> },
                        { title: "Stablecoins", desc: "Access USDC and Coinbase Custom Stablecoins", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /> },
                      ].map(({ title, desc, icon }) => (
                        <div key={title} className="flex items-start gap-3 cursor-pointer group">
                          <div className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#374151" className="w-4 h-4">{icon}</svg>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600">{title}</p>
                            <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right column — Solutions for any company */}
                  <div className="flex flex-col flex-1">
                    <p className="text-sm font-semibold text-gray-900 mb-4">Solutions for any company</p>
                    <div className="flex flex-col gap-5">
                      {[
                        { title: "Banks & Brokerages", desc: "Secure, regulated offerings for retail, private banking, & institutional clients", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" /> },
                        { title: "Payment Firms", desc: "Near-instant, low-cost, global payment rails for modern providers", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /> },
                        { title: "Startups", desc: "Launch your business with the world's leader in crypto", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" /> },
                      ].map(({ title, desc, icon }) => (
                        <div key={title} className="flex items-start gap-3 cursor-pointer group">
                          <div className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#374151" className="w-4 h-4">{icon}</svg>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#1652F0] group-hover:text-blue-700">{title}</p>
                            <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Featured panel */}
                  <div className="w-52 flex-shrink-0 flex flex-col">
                    <img src={infrastructure} alt="World class crypto infrastructure" className="w-full h-36 object-cover rounded-2xl mb-3" />
                    <p className="text-sm font-bold text-gray-900 leading-snug mb-1">
                      World class crypto infrastructure.{" "}
                      <span className="text-[#1652F0]">Discover Coinbase's complete crypto-as-a-service platform.</span>
                    </p>
                    <a href="#" className="text-sm font-semibold text-gray-900 underline underline-offset-2 hover:text-blue-600 mt-2">Learn more</a>
                  </div>
                </div>
              )}
            </div>
            {/* Company dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={handleMouseLeave}
            >
              <span className={`text-sm font-medium transition-colors cursor-pointer ${openDropdown === "company" ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}`}>
                Company
              </span>

              {openDropdown === "company" && (
                <div className="absolute top-full right-0 mt-3 w-[720px] bg-white border border-gray-100 rounded-2xl shadow-xl p-6 flex gap-8">
                  {/* Left column */}
                  <div className="flex flex-col flex-1 gap-5">
                    {[
                      { title: "About", desc: "Powering the crypto economy", icon: <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" /> },
                      { title: "Affiliates", desc: "Help introduce the world to crypto", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /> },
                      { title: "Blog", desc: "Read the latest from Coinbase", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" /> },
                    ].map(({ title, desc, icon }) => (
                      <div key={title} className="flex items-start gap-3 cursor-pointer group">
                        <div className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#374151" className="w-4 h-4">{icon}</svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600">{title}</p>
                          <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right column */}
                  <div className="flex flex-col flex-1 gap-5">
                    {[
                      { title: "Careers", desc: "Work with us", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" /> },
                      { title: "Support", desc: "Find answers to your questions", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /> },
                      { title: "Security", desc: "The most trusted & secure", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /> },
                    ].map(({ title, desc, icon }) => (
                      <div key={title} className="flex items-start gap-3 cursor-pointer group">
                        <div className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#374151" className="w-4 h-4">{icon}</svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600">{title}</p>
                          <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Featured panel */}
                  <div className="w-52 flex-shrink-0 flex flex-col">
                    <div className="w-full aspect-square rounded-2xl overflow-hidden mb-3 flex items-center justify-center"
                      style={{ background: "linear-gradient(145deg, #1a56f0 0%, #0a2fa8 100%)", position: "relative" }}>
                      {/* Dot-grid texture */}
                      <div className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                          backgroundSize: "6px 6px",
                        }}
                      />
                      <p className="relative z-10 text-white text-xs font-bold tracking-widest text-center px-4 leading-relaxed uppercase">
                        Crypto moves<br />money forward
                      </p>
                    </div>
                    <p className="text-sm font-bold text-gray-900 leading-snug mb-1">Learn all about Coinbase:</p>
                    <p className="text-xs text-gray-500 leading-relaxed mb-2">We're building the open financial system.</p>
                    <a href="#" className="text-sm font-semibold text-gray-900 underline underline-offset-2 hover:text-blue-600">Create your account</a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              aria-label="Search"
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#111827" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
            <button
              aria-label="Language"
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#374151"/>
              </svg>
            </button>
            <Link
              to="/signin"
              className="px-4 py-2 text-sm font-medium text-gray-800 border border-gray-300 rounded-full hover:border-gray-400 transition-colors"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 text-sm font-medium text-white bg-[#1652F0] rounded-full hover:bg-blue-700 transition-colors"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 pt-2 pb-4 space-y-2">
          <Link to="/explore" className="block py-2 text-sm font-medium text-gray-700" onClick={() => setMenuOpen(false)}>Cryptocurrencies</Link>
          <span className="block py-2 text-sm font-medium text-gray-700">Individuals</span>
          <span className="block py-2 text-sm font-medium text-gray-700">Businesses</span>
          <span className="block py-2 text-sm font-medium text-gray-700">Institutions</span>
          <span className="block py-2 text-sm font-medium text-gray-700">Developers</span>
          <span className="block py-2 text-sm font-medium text-gray-700">Company</span>
          <div className="pt-2 flex flex-col space-y-2">
            <Link to="/signin" className="w-full text-center px-4 py-2 text-sm font-medium text-gray-800 border border-gray-300 rounded-full" onClick={() => setMenuOpen(false)}>Sign in</Link>
            <Link to="/signup" className="w-full text-center px-4 py-2 text-sm font-medium text-white bg-[#1652F0] rounded-full" onClick={() => setMenuOpen(false)}>Sign up</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
