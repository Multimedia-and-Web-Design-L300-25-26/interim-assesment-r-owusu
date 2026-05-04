export default function Learn() {
  /* ── data ── */
  const popular = [
    { tag: "BEGINNER'S GUIDE", title: "What is cryptocurrency?" },
    { tag: "GETTING STARTED",  title: "How to earn crypto rewards" },
    { tag: "GETTING STARTED",  title: "How to add crypto to your Coinbase Wallet" },
    { tag: "YOUR CRYPTO",      title: "Tax forms, explained: A guide to U.S. tax forms and crypto reports" },
    { tag: "GETTING STARTED",  title: "Beginner's guide to dapps" },
    { tag: "MARKET UPDATE",    title: "Everything you need to know about the first-ever U.S. Bitcoin ETF" },
  ];

  const cryptoBasicsLarge = [
    { bg: "bg-[#b0bec5]", title: "What is Bitcoin?", tag: "BEGINNER'S GUIDE", desc: "Bitcoin is the world's first widely adopted cryptocurrency — it allows for secure and seamless peer-to-peer transactions on the internet." },
    { bg: "bg-black",     title: "Guide to DeFi tokens and altcoins", tag: "BEGINNER'S GUIDE", desc: "From Aave to Zcash, decide what to trade with our beginner's guide", blue: true },
  ];

  const cryptoBasicsSmall = [
    { bg: "bg-[#1652F0]", title: "What is Ethereum?",   tag: "BEGINNER'S GUIDE" },
    { bg: "bg-[#d0d9e8]", title: "What is DeFi?",        tag: "KEY TERM" },
    { bg: "bg-[#90aabf]", title: "What is a stablecoin?", tag: "BEGINNER'S GUIDE" },
    { bg: "bg-[#2d7a3a]", title: "Don't let FUD give you FOMO or you'll end up REKT — crypto slang, explained", tag: "GLOSSARY" },
  ];

  const whatIsTags = [
    "Bitcoin","Blockchain","Cardano","Crypto wallet","DeFi","Ethereum",
    "Fork","Inflation","Market cap","NFT","Private key","Protocol",
    "Smart contract","Token","Volatility memecoin",
  ];

  const tips = [
    { bg: "bg-[#b0bec5]", tag: "GETTING STARTED",  title: "How to donate crypto" },
    { bg: "bg-[#1652F0]", tag: "VIDEO TUTORIAL",   title: "How to set up a crypto wallet" },
    { bg: "bg-[#b0bec5]", tag: "VIDEO TUTORIAL",   title: "When is the best time to invest in crypto?" },
    { bg: "bg-black",     tag: "YOUR CRYPTO",      title: "How to invest in crypto via your retirement account" },
  ];

  const advanced = [
    { bg: "bg-[#c5d5e8]", tag: "KEY TERM",        title: "What is technical analysis?" },
    { bg: "bg-black",     tag: "ADVANCED GUIDE",  title: "How can I use crypto futures market data for spot trading?" },
    { bg: "bg-[#1a7a3a]", tag: "ADVANCED GUIDE",  title: "How to read advanced trading charts" },
    { bg: "bg-[#1652F0]", tag: "KEY TERM",        title: "What is an order book?" },
  ];

  const futures = [
    { title: "Futures: Introductions and origins", blue: true },
    { title: "Futures fundamentals: Understanding the basics" },
    { title: "Opening, holding, and closing a position in the futures market" },
    { title: "Trading strategies: Speculating, hedging, and spreading in the futures market" },
  ];

  const wallet = [
    { bg: "bg-[#b0bec5]", tag: "", title: "What's the difference between Coinbase and Coinbase Wallet?", desc: "And how can a wallet help me access NFTs or DeFi? Your self-custody wallet questions, answered" },
    { bg: "bg-[#1652F0]", tag: "VIDEO TUTORIAL", title: "How to set up a crypto wallet", desc: "Learn how to setup and get started with a crypto wallet." },
    { bg: "bg-[#c8a84b]", tag: "GETTING STARTED", title: "How to add crypto to your Coinbase Wallet", desc: "A quick guide on how to add crypto to your Coinbase self-custody wallet." },
    { bg: "bg-[#1652F0]", tag: "", title: "How to send or receive crypto using Coinbase Wallet", desc: "Coinbase Wallet helps you unlock one of the most significant features of crypto: the ability to send or receive peer-to-peer transfers without any financial intermediaries." },
  ];

  /* ── helpers ── */
  const PlayIcon = () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-14 h-14 bg-black/60 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6 ml-1">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );

  const SeeMoreBtn = ({ label }) => (
    <div className="flex justify-center mt-10">
      <button className="px-6 py-3 bg-[#1652F0] text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors flex items-center gap-1">
        {label} <span>›</span>
      </button>
    </div>
  );

  const SmallTag = ({ text }) => (
    <p className="text-[10px] font-semibold tracking-widest text-gray-500 uppercase mb-1">{text}</p>
  );

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="py-14 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Crypto questions, answered</h1>
        <p className="text-gray-500 text-sm max-w-xl mx-auto">
          Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between
        </p>
      </section>

      {/* ── Featured + Popular ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Featured */}
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900 mb-4">Featured</p>
            <div className="relative rounded-xl overflow-hidden bg-[#b0bec5] aspect-video cursor-pointer">
              <div className="absolute inset-0 flex items-end justify-end p-4 opacity-40">
                <div className="w-16 h-16 bg-[#1652F0] rounded-full" />
              </div>
              <PlayIcon />
            </div>
            <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mt-3 mb-1">Video Tutorial</p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">When is the best time to invest in crypto?</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              When prices are fluctuating, how do you know when to buy?{" "}
              <span className="text-[#1652F0] cursor-pointer hover:underline">Learn more</span>{" "}
              about using dollar-cost averaging to weather price volatility.
            </p>
          </div>

          {/* Popular */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <p className="text-sm font-semibold text-gray-900 mb-4">Popular</p>
            <div className="divide-y divide-gray-100">
              {popular.map((item, i) => (
                <div key={i} className="py-3 cursor-pointer group">
                  <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-0.5">{item.tag}</p>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-[#1652F0] transition-colors leading-snug">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Category nav ── */}
      <section className="border-t border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-8">
            {[
              { label: "Crypto basics",      icon: "🧠" },
              { label: "Tips and tutorials", icon: "📋" },
              { label: "Advanced trading",   icon: "📊" },
              { label: "Futures",            icon: "⏱" },
            ].map(({ label, icon }) => (
              <div key={label} className="flex items-center gap-2 cursor-pointer group">
                <span className="text-xl">{icon}</span>
                <div>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-[#1652F0]">{label}</p>
                  <p className="text-xs text-[#1652F0]">See more →</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Crypto basics ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-1">Crypto basics</h2>
        <p className="text-center text-sm text-gray-500 mb-10">New to crypto? Not for long — start with these guides and explainers</p>

        {/* 2 large cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {cryptoBasicsLarge.map((a, i) => (
            <div key={i} className="cursor-pointer group">
              <div className={`${a.bg} rounded-xl h-52 mb-3 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "12px 12px" }} />
              </div>
              <SmallTag text={a.tag} />
              <h3 className={`text-base font-bold leading-snug group-hover:underline ${a.blue ? "text-[#1652F0]" : "text-gray-900"}`}>{a.title}</h3>
              {a.desc && <p className="text-xs text-gray-500 mt-1 leading-relaxed">{a.desc}</p>}
            </div>
          ))}
        </div>

        {/* 4 small cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {cryptoBasicsSmall.map((a, i) => (
            <div key={i} className="cursor-pointer group">
              <div className={`${a.bg} rounded-xl h-32 mb-3 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "10px 10px" }} />
              </div>
              <SmallTag text={a.tag} />
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#1652F0] leading-snug">{a.title}</h3>
            </div>
          ))}
        </div>

        <SeeMoreBtn label="See more crypto basics" />
      </section>

      {/* ── What is… ── */}
      <section className="bg-gray-100 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What is…</h2>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {whatIsTags.map((tag) => (
              <button key={tag} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-800 hover:border-[#1652F0] hover:text-[#1652F0] transition-colors">
                {tag}
              </button>
            ))}
          </div>
          <button className="px-6 py-3 bg-[#1652F0] text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors">
            See more
          </button>
        </div>
      </section>

      {/* ── Tips and tutorials ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-1">Tips and tutorials</h2>
        <p className="text-center text-sm text-[#1652F0] mb-10">Get practical, step-by-step answers to all things crypto</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((a, i) => (
            <div key={i} className="cursor-pointer group">
              <div className={`${a.bg} rounded-xl h-44 mb-3 relative overflow-hidden`}>
                {a.tag === "VIDEO TUTORIAL" && <PlayIcon />}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "12px 12px" }} />
              </div>
              {a.tag && <SmallTag text={a.tag} />}
              <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1652F0] leading-snug">{a.title}</h3>
            </div>
          ))}
        </div>
        <SeeMoreBtn label="See more tips and tutorials" />
      </section>

      {/* ── Advanced trading ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-1">Advanced trading</h2>
        <p className="text-center text-sm text-gray-500 mb-10">Ready to advance? Learn the tools and terminology you need to take control of your trades.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advanced.map((a, i) => (
            <div key={i} className="cursor-pointer group">
              <div className={`${a.bg} rounded-xl h-44 mb-3 relative overflow-hidden`}>
                {a.tag === "VIDEO TUTORIAL" && <PlayIcon />}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "12px 12px" }} />
              </div>
              {a.tag && <SmallTag text={a.tag} />}
              <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1652F0] leading-snug">{a.title}</h3>
            </div>
          ))}
        </div>
        <SeeMoreBtn label="See more advanced trading" />
      </section>

      {/* ── Futures ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-1">Futures</h2>
        <p className="text-center text-sm text-[#1652F0] mb-10">New to futures trading? Get up to speed on the basics.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {futures.map((a, i) => (
            <div key={i} className="cursor-pointer group">
              <div className="bg-black rounded-xl h-44 mb-3 relative overflow-hidden flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-4 border-[#1652F0]" />
                <div className="absolute w-16 h-16 rounded-full border-4 border-white" />
              </div>
              <h3 className={`text-base font-bold leading-snug group-hover:underline ${a.blue ? "text-[#1652F0]" : "text-gray-900"}`}>{a.title}</h3>
            </div>
          ))}
        </div>
        <SeeMoreBtn label="See more about futures" />
      </section>

      {/* ── All Things Wallet ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-1">All Things Wallet</h2>
        <p className="text-center text-sm text-gray-500 mb-10">Earn yield, dive into crypto apps, control your holdings, and much more</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wallet.map((a, i) => (
            <div key={i} className="cursor-pointer group">
              <div className={`${a.bg} rounded-xl h-44 mb-3 relative overflow-hidden`}>
                {a.tag === "VIDEO TUTORIAL" && <PlayIcon />}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "12px 12px" }} />
              </div>
              {a.tag && <SmallTag text={a.tag} />}
              <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1652F0] leading-snug mb-1">{a.title}</h3>
              {a.desc && <p className="text-xs text-gray-500 leading-relaxed">{a.desc}</p>}
            </div>
          ))}
        </div>
        <SeeMoreBtn label="See more Wallet articles" />
      </section>

    </div>
  );
}
