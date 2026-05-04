import { Link, useNavigate } from "react-router-dom";
import coinbaseLogo from "../assets/images/coinbase logo.svg";
import personalSvg from "../assets/images/personal.svg";
import businessSvg from "../assets/images/Business.svg";
import developerSvg from "../assets/images/Developer.svg";

const accountTypes = [
  {
    id: "personal",
    title: "Personal",
    description: "Trade crypto as an individual.",
    icon: <img src={personalSvg} alt="Personal" className="w-14 h-14" />,
  },
  {
    id: "business",
    title: "Business",
    description: "Manage teams and portfolios, accept crypto payments, access APIs, and more",
    icon: <img src={businessSvg} alt="Business" className="w-14 h-14" />,
  },
  {
    id: "developer",
    title: "Developer",
    description: "Build onchain using developer tooling.",
    icon: <img src={developerSvg} alt="Developer" className="w-14 h-14" />,
  },
];

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Logo - top left */}
      <div className="p-6">
        <Link to="/">
          <img src={coinbaseLogo} alt="Coinbase" width="32" height="32" style={{ filter: "brightness(0) invert(1)" }} />
        </Link>
      </div>

      {/* Centered content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-md w-full">
          <h1 className="text-white text-3xl font-bold leading-tight mb-8">
            What kind of account are you creating?
          </h1>

          <div className="space-y-3">
            {accountTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => navigate(`/signup/form?type=${type.id}`)}
                className="w-full flex items-center space-x-5 p-5 rounded-2xl border border-[#2a2a2a] bg-[#161616] hover:border-blue-500 hover:bg-[#1a1a2e] text-left transition-all"
              >
                <div className="flex-shrink-0">{type.icon}</div>
                <div>
                  <p className="text-white font-bold text-base mb-0.5">{type.title}</p>
                  <p className="text-gray-400 text-sm leading-snug">{type.description}</p>
                </div>
              </button>
            ))}
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
