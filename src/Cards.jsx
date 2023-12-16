const Cards = () => {
  return (
    <>
      <div className="xl:mx-[188px] lg:mx-[152px] md:mx-[40px] sm:mx-[20px] ">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="flex-none xl:w-[414px] lg:w-[346px] md:w-[275px] w-[275px]">
            <img className="object-cover" src="./assets/img1.png"></img>
          </div>
          <div className="xl:ml-[108px] lg:ml-[20px] md:ml-[20px] xl:w-[1064px] lg:w-[896px] md:w-[393px] w-[335px]">
            <p className="text-[#6B3CC9] text-[27px] font-poppins leading-[33px] tracking-[0.4px] md:text-start text-center ">
              Web & Mobile App Development
            </p>
            <p className="text-[#000] font-inter text-[16px] font-normal flex-initial my-[20px] md:text-start text-center">
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <div className="flex items-center justify-center w-[129px] h-[38px] bg-[#F28D35] rounded text-[#FFF] font-inter text-[14px] font-bold md:mx-0 mx-auto">
              LEARN MORE
            </div>
          </div>
        </div>
      </div>

      <div className="xl:mx-[188px] lg:mx-[152px] md:mx-[40px] mx-[20px]  mt-20">
        <div className="flex flex-col items-center sm:justify-center md:flex-row">
          <div className="xl:mr-[108px] lg:mr-[20px] md:mr-[20px] xl:w-[1064px] lg:w-[896px] md:w-[393px] w-[335px] md:order-1 order-2">
            <p className="text-[#6B3CC9] text-[27px] font-poppins leading-[33px] tracking-[0.4px] md:text-start text-center ">
              Digital Strategy Consulting
            </p>
            <p className="text-[#000] font-inter text-[16px] font-normal flex-initial my-[20px] md:text-start text-center">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <div className="flex items-center justify-center w-[129px] h-[38px] bg-[#F28D35] rounded text-[#FFF] font-inter text-[14px] font-bold md:mx-0 mx-auto">
              LEARN MORE
            </div>
          </div>
          <div className="flex-none xl:w-[414px] lg:w-[346px] md:w-[275px] w-[275px] md:order-2 order-1">
            <img className="object-cover" src="./assets/baner.jpeg"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
