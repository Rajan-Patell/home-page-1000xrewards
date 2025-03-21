export const Footer = () => {
  return (
    <footer className="bg-[rgba(255,226,217,1)] z-0 flex min-h-[381px] w-full items-stretch gap-[40px_48px] flex-wrap p-16 max-md:max-w-full max-md:px-5">
      <div className="flex min-w-60 flex-col justify-between flex-1 shrink basis-[0%] max-md:max-w-full">
        <div className="flex min-h-[69px] items-center gap-[9px] text-[52px] text-[rgba(170,55,0,1)] font-bold whitespace-nowrap tracking-[-2.07px] leading-none max-md:max-w-full max-md:text-[40px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/94886cb363af6ce8004717e41d413c478895cb98?placeholderIfAbsent=true"
            alt="Logo"
            className="aspect-[1] object-contain w-[69px] self-stretch shrink-0 my-auto"
          />
          <div className="self-stretch my-auto max-md:text-[40px]">
            1000XRewards
          </div>
        </div>
        <div className="flex gap-3 mt-[140px] max-md:mt-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/765eba5b97ad23313de388adc14437c234e56070?placeholderIfAbsent=true"
            alt="Social Media 1"
            className="aspect-[1] object-contain w-11 shrink-0"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/789a7c8ffd9c6918dd8f43e9b0b5032a3081f860?placeholderIfAbsent=true"
            alt="Social Media 2"
            className="aspect-[1.02] object-contain w-[45px] shrink-0"
          />
        </div>
      </div>

      <nav className="flex min-w-60 items-stretch gap-6 text-sm text-[#5B4138] font-medium tracking-[0.1px] leading-none flex-wrap h-full max-md:max-w-full">
        <div className="w-48">
          <h3 className="text-[#271813] text-[22px] font-bold leading-none tracking-[0px]">
            Company
          </h3>
          <a href="#" className="block mt-2">
            About Us
          </a>
          <a href="#" className="block mt-2">
            Careers
          </a>
        </div>

        <div className="w-48">
          <h3 className="text-[#271813] text-[22px] font-bold leading-none tracking-[0px]">
            Support
          </h3>
          <a href="#" className="block mt-2">
            Help Center
          </a>
          <a href="#" className="block mt-2">
            Contact Us
          </a>
        </div>

        <div className="w-48">
          <h3 className="text-[#271813] text-[22px] font-bold leading-none tracking-[0px]">
            Legal
          </h3>
          <a href="#" className="block mt-2">
            Terms of Condition
          </a>
          <a href="#" className="block mt-2">
            Privacy Policy
          </a>
          <a href="#" className="block mt-2">
            Security
          </a>
          <a href="#" className="block mt-2">
            Guidelines
          </a>
          <a href="#" className="block mt-2">
            Community guidelines
          </a>
        </div>
      </nav>
    </footer>
  );
};
