import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import AssetDetail from "./pages/AssetDetail";
import Learn from "./pages/Learn";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SignUpForm from "./pages/SignUpForm";
import VerifyEmail from "./pages/VerifyEmail";
import AccountSignIn from "./pages/AccountSignIn";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Routes>
          {/* Sign in/up use their own full-page layout (no Navbar/Footer) */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup/form" element={<SignUpForm />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/account-signin" element={<AccountSignIn />} />
          {/* All other pages share the Navbar + Footer shell */}
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/price/:id" element={<AssetDetail />} />
                    <Route path="/learn" element={<Learn />} />
                  </Routes>
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
