import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="bg-white fixed z-50 w-full">
      <nav className="flex min-h-[72px] items-center gap-[40px_100px] text-sm font-medium whitespace-nowrap tracking-[0.1px] leading-none justify-between flex-wrap h-[72px] px-7 py-4 max-md:max-w-full max-md:px-5">
        <Link
          to="/"
          className="self-stretch flex min-w-60 min-h-9 items-center gap-1 text-[27px] text-[rgba(170,55,0,1)] font-bold tracking-[-1.08px] leading-none my-auto"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/c1cc0aa78e5a342af12ab57ed52ffe6c3974c6d7?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-9 self-stretch shrink-0 my-auto"
            alt="1000XRewards Logo"
          />
          <span className="self-stretch w-[209px] my-auto">1000XRewards</span>
        </Link>

        <div className="self-stretch flex min-w-60 gap-[34px] text-[#271813] text-center my-auto max-md:max-w-full">
          <Link
            to="/"
            className="flex min-h-10 flex-col overflow-hidden items-stretch text-[#AA3700] justify-center w-16 rounded-[100px]"
          >
            <div className="self-stretch w-full gap-2 flex-1 h-full px-3 py-2.5">
              Home
            </div>
          </Link>
          <Link
            to="/about"
            className="flex min-h-10 flex-col overflow-hidden items-stretch justify-center w-[65px] rounded-[100px]"
          >
            <div className="flex w-full items-center gap-2 justify-center flex-1 h-full px-3 py-2.5">
              <span className="opacity-[0.38] self-stretch my-auto">About</span>
            </div>
          </Link>
          <Link
            to="/help"
            className="flex min-h-10 flex-col overflow-hidden items-stretch justify-center w-14 rounded-[100px]"
          >
            <div className="flex w-full items-center gap-2 justify-center flex-1 h-full px-3 py-2.5">
              <span className="opacity-[0.38] self-stretch my-auto">Help</span>
            </div>
          </Link>
          <Link
            to="/contact"
            className="flex min-h-10 flex-col overflow-hidden items-stretch justify-center w-[79px] rounded-[100px]"
          >
            <div className="flex w-full items-center gap-2 justify-center flex-1 h-full px-3 py-2.5">
              <span className="opacity-[0.38] self-stretch my-auto">
                Contact
              </span>
            </div>
          </Link>
          <Link
            to="/legal"
            className="flex min-h-10 flex-col overflow-hidden items-stretch justify-center w-[61px] rounded-[100px]"
          >
            <div className="flex w-full items-center gap-2 justify-center flex-1 h-full px-3 py-2.5">
              <span className="opacity-[0.38] self-stretch my-auto">Legal</span>
            </div>
          </Link>
        </div>

        <div className="self-stretch flex items-center gap-2 text-center my-auto">
          <button className="border self-stretch flex min-h-10 flex-col overflow-hidden items-stretch text-[#AA3700] justify-center w-[86px] my-auto rounded-[100px] border-[rgba(142,112,103,1)] border-solid">
            <div className="self-stretch w-full gap-2 flex-1 h-full px-6 py-2.5 max-md:px-5">
              Login
            </div>
          </button>
          <button className="bg-[rgba(170,55,0,1)] self-stretch flex min-h-10 flex-col overflow-hidden items-stretch text-white justify-center w-[97px] my-auto rounded-[100px]">
            <div className="self-stretch w-full gap-2 flex-1 h-full px-6 py-2.5 max-md:px-5">
              Register
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};
