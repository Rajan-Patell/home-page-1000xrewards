export const HeroSection = () => {
  return <section className="z-0 flex w-full gap-[40px_48px] flex-wrap pt-[260px] pb-60 max-md:max-w-full px-[24px] py-[24px]">
      <div className="min-w-80 flex-1 shrink basis-[0%] max-w-[1128px] p-4 max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <h1 className="text-[84px] font-bold leading-[90px] tracking-[-1.68px] max-md:max-w-full max-md:text-[40px] max-md:leading-[47px]">
            Play Games <br />
            Win Real Cash <br />
            Rewards
          </h1>
          <p className="text-[rgba(91,65,56,1)] text-lg font-medium leading-[26px] tracking-[0.18px] mt-6 max-md:max-w-full">
            Don't Miss Out on the Future of Lotteries. Be Among the First to
            Play 1000xrewards.
          </p>
        </div>
        <button className="bg-[rgba(170,55,0,1)] flex min-h-10 w-[170px] max-w-full flex-col overflow-hidden items-stretch text-sm text-white font-medium text-center tracking-[0.1px] leading-none justify-center mt-8 rounded-[100px]">
          <div className="self-stretch w-full gap-2 flex-1 h-full px-6 py-2.5 max-md:px-5">
            Start Playing Now
          </div>
        </button>
      </div>
      <div className="flex min-w-60 gap-2.5 justify-center w-[494px] max-md:max-w-full">
        <img src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/4152792ca87ee3167fea85b5d3b02f700dde8d49?placeholderIfAbsent=true" alt="Coin Illustration" className="aspect-[0.92] object-contain w-full min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full" />
      </div>
    </section>;
};