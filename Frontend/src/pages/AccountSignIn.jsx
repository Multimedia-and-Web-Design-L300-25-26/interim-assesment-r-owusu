import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import coinbaseLogo from "../assets/images/coinbase logo.svg";

export default function AccountSignIn() {
  const { state } = useLocation();
  const email = state?.email || "";
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [toastVisible, setToastVisible] = useState(true);
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
          <img
            src={coinbaseLogo}
            alt="Coinbase"
            width="32"
            height="32"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </Link>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pb-24">
        <div className="w-full max-w-sm">
          <h1 className="text-white text-2xl font-bold mb-6">
            Sign in to Coinbase
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email display */}
            <div className="flex items-center gap-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3">
              <div className="w-8 h-8 rounded-full bg-[#2a2a2a] flex items-center justify-center flex-shrink-0">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="8" r="4" fill="#9ca3af" />
                  <path
                    d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
                    stroke="#9ca3af"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="text-white text-sm">{email}</span>
            </div>

            {/* Password */}
            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent border border-[#1652F0] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#1652F0] pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 3l18 18M10.5 10.5A3 3 0 0013.5 13.5M6.3 6.3C4.3 7.7 2.8 9.7 2 12c1.7 4.4 6 7.5 10 7.5 1.8 0 3.5-.5 5-1.4M9.9 4.8C10.6 4.6 11.3 4.5 12 4.5c4 0 8.3 3.1 10 7.5-.5 1.3-1.2 2.4-2.1 3.4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 12c1.7-4.4 6-7.5 10-7.5S20.3 7.6 22 12c-1.7 4.4-6 7.5-10 7.5S3.7 16.4 2 12z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Forgot password */}
            <div>
              <Link
                to="/signin"
                className="text-[#1652F0] text-sm hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Continue button */}
            <button
              type="submit"
              className="w-full bg-[#1a2a5e] hover:bg-[#1e3270] text-white font-semibold py-4 rounded-full transition-colors mt-2"
            >
              Continue
            </button>
          </form>

          {/* Cancel */}
          <div className="text-center mt-6">
            <Link
              to="/signin"
              className="text-[#1652F0] text-sm hover:underline"
            >
              Cancel signing in
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom toast */}
      {toastVisible && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-md bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl px-5 py-4 flex items-center justify-between shadow-xl">
          <span className="text-white text-sm font-medium">
            An account already exists for this email. Please sign in.
          </span>
          <button
            onClick={() => setToastVisible(false)}
            className="text-gray-400 hover:text-white ml-4 flex-shrink-0"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
