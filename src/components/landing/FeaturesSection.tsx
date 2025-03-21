export const FeaturesSection = () => {
  return (
    <section className="z-0 w-full p-60 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <h2 className="text-[80px] font-bold tracking-[-1.6px] max-md:max-w-full max-md:text-[40px]">
        Why Choose
        <br />
        1000XRewards
      </h2>

      <div className="w-full mt-12 max-md:max-w-full">
        <div className="flex w-full items-center gap-8 flex-wrap max-md:max-w-full">
          {/* Coins Feature */}
          <div className="bg-[rgba(255,241,236,1)] self-stretch flex min-w-60 items-stretch gap-[40px_100px] overflow-hidden flex-1 shrink basis-[0%] my-auto pl-[38px] pr-[76px] py-[35px] rounded-[28px] max-md:max-w-full max-md:px-5">
            <div>
              <div className="w-[140px] max-w-full">
                <h3 className="text-[rgba(39,24,19,1)] text-[52px] font-bold max-md:text-[40px]">
                  Coins
                </h3>
                <p className="w-full text-base text-[#271813] font-normal text-center tracking-[0.5px] mt-2">
                  Coin are your{" "}
                  <span className="text-[rgba(39,24,19,1)]">key</span>
                </p>
              </div>
              <div className="text-[rgba(91,65,56,1)] text-2xl font-bold mt-[146px] max-md:mt-10">
                1 coin = 1 rupess
              </div>
            </div>
            <div className="relative flex h-[223px] flex-col justify-center my-auto">
              <div className="self-center z-0 flex min-h-[251px] max-w-full w-[251px]" />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/7f04e5b2d76ab7a5b15f5a26a4e576521ee36490?placeholderIfAbsent=true"
                alt="Coin"
                className="aspect-[1] object-contain w-[135px] absolute z-0 max-w-full h-[135px] rounded-[0px_0px_0px_0px] left-10 top-10"
              />
            </div>
          </div>

          {/* Play Game Feature */}
          <div className="bg-[rgba(255,241,236,1)] self-stretch min-w-60 overflow-hidden w-[632px] my-auto pl-[53px] pr-3.5 pt-12 rounded-[28px] max-md:max-w-full max-md:pl-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-6/12 max-md:w-full max-md:ml-0">
                <div className="text-[rgba(39,24,19,1)] whitespace-nowrap max-md:mt-10">
                  <h3 className="text-[46px] font-extralight max-md:text-[40px]">
                    Play
                  </h3>
                  <h3 className="text-5xl font-normal max-md:text-[40px]">
                    Game
                  </h3>
                  <h3 className="text-[50px] font-semibold max-md:text-[40px]">
                    Earn
                  </h3>
                  <h3 className="text-[52px] font-bold max-md:text-[40px]">
                    Rewards
                  </h3>
                </div>
              </div>
              <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/746b2728-1ee4-42e1-ab1f-cd8721cebecb?placeholderIfAbsent=true"
                  alt="Gaming Rewards"
                  className="aspect-[0.98] object-contain w-full grow mt-[42px] rounded-[0px_0px_0px_0px] max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="flex w-full items-center gap-8 flex-wrap mt-8 max-md:max-w-full">
          <div className="bg-[rgba(255,241,236,1)] self-stretch min-w-60 overflow-hidden w-[664px] my-auto px-[43px] py-9 rounded-[28px] max-md:max-w-full max-md:px-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-[61%] max-md:w-full max-md:ml-0">
                <div className="mr-[-46px] max-md:mt-8">
                  <h3 className="text-[rgba(39,24,19,1)] text-[32px] font-bold">
                    Secure and Fast Transactions
                  </h3>
                  <p className="text-[#5B4138] text-sm font-normal leading-5 tracking-[0.25px] mt-2">
                    "Instant deposits, quick withdrawals, and trusted payment
                    gateways."
                  </p>
                </div>
              </div>
              <div className="w-[39%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/4935739540217f36e0c71ab8cdfc3d2b6c3b8ddb?placeholderIfAbsent=true"
                  alt="Secure Transactions"
                  className="aspect-[1.15] object-contain w-full grow mt-[59px] max-md:mt-10"
                />
              </div>
            </div>
          </div>

          <div className="bg-[rgba(255,241,236,1)] self-stretch min-w-60 overflow-hidden flex-1 shrink basis-[0%] my-auto pt-8 px-[43px] rounded-[28px] max-md:max-w-full max-md:px-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-[37%] max-md:w-full max-md:ml-0">
                <h3 className="text-[rgba(39,24,19,1)] text-4xl font-bold max-md:mt-10">
                  Unlock Exclusive Rewards and Win Big!
                </h3>
              </div>
              <div className="w-[63%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/3397906486ffc2734a3d928b3d57080d95045589?placeholderIfAbsent=true"
                  alt="Rewards"
                  className="aspect-[1.82] object-contain w-full shadow-[0px_0px_37px_rgba(83,22,0,0.25)] grow mt-[90px] max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
