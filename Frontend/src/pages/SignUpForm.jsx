import { useState } from "react";
import coinbaseLogo from "../assets/images/coinbase logo.svg";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

export default function SignUpForm() {
  const [searchParams] = useSearchParams();
  const accountType = searchParams.get("type") || "personal";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <Link to="/">
          <img src={coinbaseLogo} alt="Coinbase" width="32" height="32" style={{ filter: "brightness(0) invert(1)" }} />
        </Link>
      </div>

      {/* Form */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-md w-full">
          <h1 className="text-white text-3xl font-bold mb-2">Create your account</h1>
          <p className="text-gray-400 text-sm mb-8 capitalize">
            {accountType} account
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="w-full px-4 py-3.5 bg-[#161616] border border-[#2a2a2a] rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#1652F0]"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              minLength={8}
              className="w-full px-4 py-3.5 bg-[#161616] border border-[#2a2a2a] rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#1652F0]"
            />

            <button
              type="submit"
              className="w-full py-3.5 bg-[#1652F0] hover:bg-blue-700 text-white font-semibold rounded-full transition-colors text-sm mt-2"
            >
              Create account
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-[#2a2a2a]" />
            <span className="px-4 text-sm text-gray-500">or</span>
            <div className="flex-1 border-t border-[#2a2a2a]" />
          </div>

          {/* Social */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center space-x-3 py-3.5 border border-[#2a2a2a] rounded-full hover:bg-[#1a1a1a] transition-colors text-sm font-medium text-white">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span>Continue with Google</span>
            </button>
            <button className="w-full flex items-center justify-center space-x-3 py-3.5 border border-[#2a2a2a] rounded-full hover:bg-[#1a1a1a] transition-colors text-sm font-medium text-white">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.39-1.32 2.76-2.54 4zm-3.1-17.6c.06 2.06-1.52 3.72-3.42 3.57-.27-1.92 1.47-3.74 3.42-3.57z" />
              </svg>
              <span>Continue with Apple</span>
            </button>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/signin" className="text-[#1652F0] hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
