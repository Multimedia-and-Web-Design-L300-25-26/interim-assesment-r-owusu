import { useState } from "react";
import coinbaseLogo from "../assets/images/coinbase logo.svg";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/verify-email", { state: { email } });
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <Link to="/">
          <img src={coinbaseLogo} alt="Coinbase" width="32" height="32" style={{ filter: "brightness(0) invert(1)" }} />
        </Link>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pb-12">
        <div className="w-full max-w-sm">
          <h1 className="text-white text-2xl font-bold mb-6">Sign in to Coinbase</h1>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="email" className="block text-white text-sm font-medium mb-1">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full px-4 py-3.5 bg-transparent border border-[#3a3a3a] rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#4a4a5a]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#2c3e7a] hover:bg-[#1652F0] text-white font-semibold rounded-full transition-colors text-sm"
            >
              Continue
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-5">
            <div className="flex-1 border-t border-[#2a2a2a]" />
            <span className="px-4 text-xs text-gray-500 uppercase tracking-widest">or</span>
            <div className="flex-1 border-t border-[#2a2a2a]" />
          </div>

          {/* Auth buttons */}
          <div className="space-y-3">
            {/* Passkey */}
            <button className="w-full flex items-center px-5 py-3.5 bg-[#1a1a1a] hover:bg-[#222] border border-[#2a2a2a] rounded-full transition-colors">
              <span className="w-8 flex-shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="1.8" />
                  <path d="M2 21v-2a7 7 0 0 1 10.57-6.02" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="18" cy="16" r="3" stroke="white" strokeWidth="1.8" />
                  <path d="m21.5 19.5-1.5-1.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M18 19v2" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
              <span className="flex-1 text-center text-white text-sm font-semibold">Sign in with Passkey</span>
            </button>

            {/* Google */}
            <button className="w-full flex items-center px-5 py-3.5 bg-[#1a1a1a] hover:bg-[#222] border border-[#2a2a2a] rounded-full transition-colors">
              <span className="w-8 flex-shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </span>
              <span className="flex-1 text-center text-white text-sm font-semibold">Sign in with Google</span>
            </button>

            {/* Apple */}
            <button className="w-full flex items-center px-5 py-3.5 bg-[#1a1a1a] hover:bg-[#222] border border-[#2a2a2a] rounded-full transition-colors">
              <span className="w-8 flex-shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.39-1.32 2.76-2.54 4zm-3.1-17.6c.06 2.06-1.52 3.72-3.42 3.57-.27-1.92 1.47-3.74 3.42-3.57z" />
                </svg>
              </span>
              <span className="flex-1 text-center text-white text-sm font-semibold">Sign in with Apple</span>
            </button>
          </div>

          {/* Don't have an account */}
          <p className="mt-8 text-center text-sm text-white font-semibold">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#4f8ef7] hover:underline">
              Sign up
            </Link>
          </p>

          {/* Privacy note */}
          <p className="mt-4 text-center text-xs text-gray-500 leading-relaxed">
            Not your device? Use a private window. See our{" "}
            <span className="underline cursor-pointer">Privacy Policy</span> for more info.
          </p>

          {/* Cancel */}
          <div className="mt-6 text-center">
            <Link to="/" className="text-[#4f8ef7] text-sm hover:underline">
              Cancel signing in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
