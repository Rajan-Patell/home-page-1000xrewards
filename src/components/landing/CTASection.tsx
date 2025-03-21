export const CTASection = () => {
  return (
    <section className="bg-[rgba(255,233,227,1)] z-0 flex w-full items-center gap-[40px_48px] justify-center flex-wrap px-64 py-40 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="self-stretch flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <h2 className="text-[80px] font-extrabold tracking-[-0.8px] bg-clip-text bg-[linear-gradient(90deg,var(--1000x-On-Surface,#271813)_22.05%,var(--1000x-Primary,#AA3700)_76.53%)] max-md:max-w-full max-md:text-[40px]">
            Get your chance to Win Mega rewards now
          </h2>
          <p className="text-[rgba(91,65,56,1)] text-lg font-medium leading-none tracking-[0.18px] mt-[34px] max-md:max-w-full">
            Don't Miss Out on the Future of Lotteries. Be Among the First to
            Play 1000xrewards.
          </p>
        </div>
        <button className="bg-[rgba(170,55,0,1)] flex min-h-[63px] w-[271px] max-w-full flex-col overflow-hidden items-stretch text-sm text-white font-medium text-center tracking-[0.1px] leading-5 justify-center mt-12 rounded-[157px] max-md:mt-10">
          <span className="self-stretch w-full gap-[13px] flex-1 h-full pl-[38px] pr-[37px] py-4 max-md:px-5">
            Play game Win Big
          </span>
        </button>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/9664406657a35b6c81c5bc0779223ee63a5ce69f?placeholderIfAbsent=true"
        alt="Mega Rewards"
        className="aspect-[0.95] object-contain w-[613px] self-stretch min-w-60 my-auto max-md:max-w-full"
      />
    </section>
  );
};
