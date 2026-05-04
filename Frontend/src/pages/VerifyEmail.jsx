import { useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import coinbaseLogo from "../assets/images/coinbase logo.svg";

export default function VerifyEmail() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "your email";

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
    if (newCode.every((d) => d !== "") && value) {
      navigate("/account-signin", { state: { email } });
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (pasted.length === 6) {
      setCode(pasted.split(""));
      inputRefs.current[5]?.focus();
    }
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
      <div className="flex-1 flex flex-col items-center justify-center px-4 pb-16">
        <div className="w-full max-w-sm">
          <h1 className="text-white text-2xl font-bold leading-tight mb-3">
            Enter the 6-digit code we emailed you
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Verify your email{" "}
            <span className="text-white font-medium">{email}</span>. This helps
            us keep your account secure by verifying that it's really you.
          </p>

          {/* Code inputs */}
          <label className="block text-white text-sm font-semibold mb-3">
            Enter code
          </label>
          <div className="flex space-x-3 mb-8" onPaste={handlePaste}>
            {code.map((digit, i) => (
              <input
                key={i}
                ref={(el) => (inputRefs.current[i] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                className="w-12 h-14 bg-transparent border border-[#3a3a3a] rounded-xl text-center text-white text-xl font-semibold focus:outline-none focus:border-gray-400 caret-white"
              />
            ))}
          </div>

          {/* Resend */}
          <button
            type="button"
            onClick={() => setCode(["", "", "", "", "", ""])}
            className="w-full py-3.5 bg-[#1e1e2a] hover:bg-[#2a2a3a] text-white font-semibold rounded-full transition-colors text-sm mb-4"
          >
            Resend code
          </button>

          {/* Go back */}
          <div className="text-center">
            <Link to="/signin" className="text-[#4f8ef7] text-sm hover:underline font-medium">
              Go back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
