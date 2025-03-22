export const PaymentMethodsSection = () => {
  return <section className="z-0 flex w-full items-center justify-between flex-wrap py-40 max-md:max-w-full max-md:py-[100px] px-[24px]">
      <div className="flex-1 max-w-[50%] pr-16 max-md:max-w-full max-md:pr-0">
        <div className="w-full">
          <h2 className="text-[80px] font-bold tracking-[-1.6px] bg-clip-text bg-[linear-gradient(90deg,var(--1000x-On-Surface,#271813)_22.05%,var(--1000x-Primary,#AA3700)_76.53%)] max-md:max-w-full max-md:text-[40px]">
            Safe & Secure Transactions
          </h2>
          <p className="text-[rgba(91,65,56,1)] text-2xl font-normal mt-4 max-md:max-w-full">
            Safe and Reliable Payment Solution with Razerpay
          </p>
        </div>

        <div className="flex flex-col text-2xl text-[rgba(39,24,19,1)] font-semibold mt-12 space-y-4 max-md:max-w-full max-md:mt-10">
          <div className="flex items-center gap-4">
            <span className="w-6 h-6 bg-[rgba(170,55,0,1)] rounded-full"></span>
            100% accurate to win
          </div>
          <div className="flex items-center gap-4">
            <span className="w-6 h-6 bg-[rgba(170,55,0,1)] rounded-full"></span>
            safe and secure
          </div>
          <div className="flex items-center gap-4">
            <span className="w-6 h-6 bg-[rgba(170,55,0,1)] rounded-full"></span>
            seamless experience
          </div>
          <div className="flex items-center gap-4">
            <span className="w-6 h-6 bg-[rgba(170,55,0,1)] rounded-full"></span>
            Instant Withdraw
          </div>
        </div>
      </div>
      <div className="w-[460px] max-md:w-full flex justify-end">
        <img src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/85a96c28abe473d7bf0ce51911ed308e68790998?placeholderIfAbsent=true" alt="Payment Security" className="aspect-[1.07] object-contain max-w-full rounded-[0px_0px_0px_0px]" />
      </div>
    </section>;
};