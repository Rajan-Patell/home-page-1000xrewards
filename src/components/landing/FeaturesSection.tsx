
export const FeaturesSection = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-[1440px] px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-[-1.6px] max-md:max-w-full">
          Why Choose
          <br />
          1000XRewards
        </h2>

        <div className="w-full mt-8 md:mt-12 lg:mt-16 space-y-6 md:space-y-8">
          <div className="flex w-full flex-col md:flex-row items-center gap-4 md:gap-8 flex-wrap max-md:max-w-full">
            {/* Coins Feature */}
            <div className="bg-[rgba(255,241,236,1)] self-stretch flex w-full md:w-auto min-w-60 items-stretch gap-6 md:gap-[40px_100px] overflow-hidden flex-1 shrink basis-[0%] my-auto p-6 md:pl-[38px] md:pr-[76px] md:py-[35px] rounded-[28px] max-md:max-w-full">
              <div>
                <div className="w-[140px] max-w-full">
                  <h3 className="text-[rgba(39,24,19,1)] text-3xl md:text-4xl lg:text-[52px] font-bold max-md:text-[40px]">
                    Coins
                  </h3>
                  <p className="w-full text-base text-[#271813] font-normal text-center tracking-[0.5px] mt-2">
                    Coin are your{" "}
                    <span className="text-[rgba(39,24,19,1)]">key</span>
                  </p>
                </div>
                <div className="text-[rgba(91,65,56,1)] text-xl md:text-2xl font-bold mt-10 md:mt-[146px]">
                  1 coin = 1 rupess
                </div>
              </div>
              <div className="relative flex h-[180px] md:h-[223px] flex-col justify-center my-auto">
                <div className="self-center z-0 flex min-h-[180px] md:min-h-[251px] max-w-full w-[180px] md:w-[251px]" />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/7f04e5b2d76ab7a5b15f5a26a4e576521ee36490?placeholderIfAbsent=true"
                  alt="Coin"
                  className="aspect-[1] object-contain w-[100px] md:w-[135px] absolute z-0 max-w-full h-[100px] md:h-[135px] rounded-[0px_0px_0px_0px] left-8 md:left-10 top-8 md:top-10"
                />
              </div>
            </div>

            {/* Play Game Feature */}
            <div className="bg-[rgba(255,241,236,1)] self-stretch w-full md:w-[632px] min-w-60 overflow-hidden my-auto p-6 md:pl-[53px] md:pr-3.5 md:pt-12 rounded-[28px] max-md:max-w-full">
              <div className="gap-5 flex flex-col md:flex-row">
                <div className="w-full md:w-6/12">
                  <div className="text-[rgba(39,24,19,1)] whitespace-nowrap">
                    <h3 className="text-3xl md:text-[46px] font-extralight">
                      Play
                    </h3>
                    <h3 className="text-3xl md:text-5xl font-normal">
                      Game
                    </h3>
                    <h3 className="text-3xl md:text-[50px] font-semibold">
                      Earn
                    </h3>
                    <h3 className="text-4xl md:text-[52px] font-bold">
                      Rewards
                    </h3>
                  </div>
                </div>
                <div className="w-full md:w-6/12 mt-4 md:mt-0 md:ml-5">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/746b2728-1ee4-42e1-ab1f-cd8721cebecb?placeholderIfAbsent=true"
                    alt="Gaming Rewards"
                    className="aspect-[0.98] object-contain w-full mt-4 md:mt-[42px] rounded-[0px_0px_0px_0px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="flex w-full flex-col md:flex-row items-center gap-4 md:gap-8 flex-wrap mt-4 md:mt-8 max-md:max-w-full">
            <div className="bg-[rgba(255,241,236,1)] self-stretch w-full md:w-[664px] min-w-60 overflow-hidden my-auto p-6 md:px-[43px] md:py-9 rounded-[28px] max-md:max-w-full">
              <div className="gap-5 flex flex-col md:flex-row">
                <div className="w-full md:w-[61%]">
                  <div className="md:mr-[-46px]">
                    <h3 className="text-[rgba(39,24,19,1)] text-2xl md:text-[32px] font-bold">
                      Secure and Fast Transactions
                    </h3>
                    <p className="text-[#5B4138] text-sm font-normal leading-5 tracking-[0.25px] mt-2">
                      "Instant deposits, quick withdrawals, and trusted payment
                      gateways."
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-[39%] mt-4 md:mt-0 md:ml-5">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/4935739540217f36e0c71ab8cdfc3d2b6c3b8ddb?placeholderIfAbsent=true"
                    alt="Secure Transactions"
                    className="aspect-[1.15] object-contain w-full mt-4 md:mt-[59px]"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[rgba(255,241,236,1)] self-stretch w-full md:flex-1 min-w-60 overflow-hidden my-auto p-6 md:pt-8 md:px-[43px] rounded-[28px] max-md:max-w-full">
              <div className="gap-5 flex flex-col md:flex-row">
                <div className="w-full md:w-[37%]">
                  <h3 className="text-[rgba(39,24,19,1)] text-2xl md:text-4xl font-bold">
                    Unlock Exclusive Rewards and Win Big!
                  </h3>
                </div>
                <div className="w-full md:w-[63%] mt-4 md:mt-0 md:ml-5">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/3397906486ffc2734a3d928b3d57080d95045589?placeholderIfAbsent=true"
                    alt="Rewards"
                    className="aspect-[1.82] object-contain w-full shadow-[0px_0px_37px_rgba(83,22,0,0.25)] mt-4 md:mt-[90px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
