export const TrustedBySection = () => {
  return (
    <section className="bg-[rgba(255,241,236,1)] relative z-0 flex min-h-[819px] w-full gap-2.5 overflow-hidden justify-center pt-[203px] pb-[434px] px-[281px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/8af63889a7ad882355410120bc3e0aa09077a794?placeholderIfAbsent=true"
        alt="Decorative Left"
        className="aspect-[0.93] object-contain w-[258px] absolute z-0 min-w-60 shrink-0 h-[276px] left-[244px] top-[134px]"
      />
      <h2 className="text-center text-7xl font-bold tracking-[-1.44px] bg-clip-text bg-[linear-gradient(90deg,var(--1000x-On-Surface,#271813)_22.05%,var(--1000x-Primary,#AA3700)_76.53%)] z-0 max-md:text-[40px]">
        Trusted by <br />
        100K+ users
      </h2>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/2688d8d556ba15f5331bd6b116ee7ef9d0765664?placeholderIfAbsent=true"
        alt="Decorative Right"
        className="aspect-[1.42] object-contain w-[257px] absolute z-0 min-w-60 shrink-0 h-[181px] right-[228px] top-[188px]"
      />

      <div className="absolute z-0 flex min-w-60 items-center gap-[40px_74px] flex-wrap -translate-x-2/4 translate-y-[0%] left-2/4 bottom-[151px] max-md:max-w-full">
        {/* Testimonial 1 */}
        <div className="self-stretch flex min-w-60 items-center gap-6 justify-center w-[348px] my-auto">
          <div className="self-stretch flex min-w-60 w-full flex-col items-center justify-center flex-1 shrink basis-[0%] my-auto">
            <div className="flex items-center gap-4">
              <div className="self-stretch flex w-[46px] my-auto">
                <div className="bg-gray-500 flex min-h-[46px] w-[46px] items-center justify-center h-[46px] rounded-[999px]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/2f3a07bebf3e6741c7229758e5d8314ed1bab386?placeholderIfAbsent=true"
                    alt="User Avatar"
                    className="aspect-[1] object-contain w-[46px] self-stretch my-auto rounded-[999px]"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col text-center my-auto">
                <div className="text-[#261813] text-base font-bold tracking-[0.08px]">
                  A.K
                </div>
                <div className="text-[#5B4138] text-sm font-medium leading-none tracking-[0.07px]">
                  Mumbai
                </div>
              </div>
            </div>
            <p className="text-[#5B4138] text-center text-base font-normal leading-6 tracking-[0.5px] mt-5">
              "I won ₹50,000 in my first tournament! - A.K. from, Mumbai"
            </p>
          </div>
        </div>

        <div className="rotate-[8.742277657347563e-8rad] self-stretch flex min-h-[120px] flex-col overflow-hidden items-center w-px my-auto pt-4">
          <div className="border min-h-[104px] w-0 flex-1 border-[rgba(228,190,178,1)] border-solid" />
        </div>

        {/* Testimonial 2 */}
        <div className="self-stretch flex min-w-60 items-center gap-6 justify-center w-[372px] my-auto">
          <div className="self-stretch relative flex min-w-60 w-full flex-col items-center justify-center flex-1 shrink basis-[0%] my-auto">
            <div className="absolute z-0 flex min-h-16 w-16 left-[-25px] top-[-30px] h-16" />
            <div className="z-0 flex items-center gap-4">
              <div className="self-stretch flex w-[46px] my-auto">
                <div className="bg-gray-500 flex min-h-[46px] w-[46px] items-center justify-center h-[46px] rounded-[999px]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/e61c8defbb3b3f166e44e84303cb293fd509d537?placeholderIfAbsent=true"
                    alt="User Avatar"
                    className="aspect-[1] object-contain w-[46px] self-stretch my-auto rounded-[999px]"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col text-center my-auto">
                <div className="text-[#261813] text-base font-bold tracking-[0.08px]">
                  Payal Shah
                </div>
                <div className="text-[#5B4138] text-sm font-medium leading-none tracking-[0.07px]">
                  Ahmedabad
                </div>
              </div>
            </div>
            <p className="text-[#5B4138] text-center text-base font-normal leading-6 tracking-[0.5px] z-0 mt-5">
              "I won ₹10,000 in my first tournament! - Payal Shah, Ahemdabad"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
