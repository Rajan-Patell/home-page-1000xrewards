
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

export const Navbar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white fixed z-50 w-full border-b border-gray-100">
      <div className="container mx-auto max-w-[1440px]">
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

          {/* Desktop Navigation Links */}
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

          {/* Auth Buttons & Mobile Menu */}
          <div className="flex items-center gap-3">
            {!isMobile && (
              <>
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
              </>
            )}

            {isMobile && (
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b">
                      <Link
                        to="/"
                        className="flex items-center gap-2 text-[#AA3700] font-bold text-xl"
                        onClick={() => setIsOpen(false)}
                      >
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/c1cc0aa78e5a342af12ab57ed52ffe6c3974c6d7?placeholderIfAbsent=true"
                          className="w-6 h-6"
                          alt="1000XRewards Logo"
                        />
                        <span>1000XRewards</span>
                      </Link>
                      <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                        <X className="h-5 w-5" />
                      </Button>
                    </div>
                    <div className="flex flex-col p-4 space-y-4">
                      <Link
                        to="/"
                        className="py-2 text-[#AA3700] font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        Home
                      </Link>
                      <Link
                        to="/about"
                        className="py-2 text-gray-500 hover:text-[#AA3700] transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        About
                      </Link>
                      <Link
                        to="/help"
                        className="py-2 text-gray-500 hover:text-[#AA3700] transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Help
                      </Link>
                      <Link
                        to="/contact"
                        className="py-2 text-gray-500 hover:text-[#AA3700] transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Contact
                      </Link>
                      <Link
                        to="/legal"
                        className="py-2 text-gray-500 hover:text-[#AA3700] transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Legal
                      </Link>
                    </div>
                    <div className="mt-auto border-t p-4 space-y-3">
                      <Button 
                        variant="outline" 
                        className="w-full rounded-full border-[#AA3700] text-[#AA3700] hover:bg-[#AA3700]/5"
                      >
                        Login
                      </Button>
                      <Button 
                        className="w-full rounded-full bg-[#AA3700] text-white hover:bg-[#AA3700]/90"
                      >
                        Register
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};
