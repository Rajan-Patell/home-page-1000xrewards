
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <header className="bg-white fixed z-50 w-full border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto">
        <nav className="flex items-center justify-between h-20 px-4 md:px-6">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-[#AA3700] font-bold text-2xl"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/c1cc0aa78e5a342af12ab57ed52ffe6c3974c6d7?placeholderIfAbsent=true"
              className="w-8 h-8"
              alt="1000XRewards Logo"
            />
            <span>1000XRewards</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            <Link
              to="/"
              className="text-[#AA3700] font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-500 hover:text-[#AA3700] transition-colors"
            >
              About
            </Link>
            <Link
              to="/help"
              className="text-gray-500 hover:text-[#AA3700] transition-colors"
            >
              Help
            </Link>
            <Link
              to="/contact"
              className="text-gray-500 hover:text-[#AA3700] transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/legal"
              className="text-gray-500 hover:text-[#AA3700] transition-colors"
            >
              Legal
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              className="rounded-full border-[#AA3700] text-[#AA3700] hover:bg-[#AA3700]/5"
            >
              Login
            </Button>
            <Button 
              className="rounded-full bg-[#AA3700] text-white hover:bg-[#AA3700]/90"
            >
              Register
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
