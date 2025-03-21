export const PaymentMethodsSection = () => {
  return (
    <section className="z-0 flex w-full items-center flex-wrap p-60 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="self-stretch min-w-60 min-h-[511px] flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <h2 className="text-[80px] font-bold tracking-[-1.6px] bg-clip-text bg-[linear-gradient(90deg,var(--1000x-On-Surface,#271813)_22.05%,var(--1000x-Primary,#AA3700)_76.53%)] max-md:max-w-full max-md:text-[40px]">
            Safe & Secure Transactions
          </h2>
          <p className="text-[rgba(91,65,56,1)] text-2xl font-normal mt-4 max-md:max-w-full">
            Safe and Reliable Payment Solution with Razerpay
          </p>
        </div>

        <div className="flex w-full flex-col text-2xl text-[rgba(39,24,19,1)] font-semibold text-center mt-12 max-md:max-w-full max-md:mt-10">
          <div className="self-stretch gap-7">100% accurate to win</div>
          <div className="self-stretch gap-7 mt-4">safe and secure</div>
          <div className="self-stretch gap-7 mt-4">seamless experience</div>
          <div className="self-stretch gap-7 mt-4">Instant Withdraw</div>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/85a96c28abe473d7bf0ce51911ed308e68790998?placeholderIfAbsent=true"
        alt="Payment Security"
        className="aspect-[1.07] object-contain w-[460px] self-stretch min-w-60 my-auto rounded-[0px_0px_0px_0px] max-md:max-w-full"
      />
    </section>
  );
};
