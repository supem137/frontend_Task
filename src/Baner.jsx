const Baner = () => {
  return (
    <>
      <div className="relative w-full  lg:h-[763px] md:h-[489px] h-[293px] bg-[url(./assets/baner.jpeg)] bg-cover bg-center lg:mb-0  mb-[350px]">
        <div className="absolute xl:w-[630px]  xl:h-[306px] xl:ml-[80px] lg:w-[622px] lg:h-[306px] lg:ml-[60px] lg:translate-y-[-110%] md:w-full md:h-[258px] md:translate-y-[0%] md:top-full w-full h-[294px] ml-0  translate-y-[100%] bg-gradient-to-br from-[#1CBDDD] via-[#4DCA79] to-white bg-opacity-75">
          <div className="grid grid-cols-1 gap-4 md:mx-[40px] mx-[20px] mt-[24px] mb-[32px]">
            <p className="lg:w-[556px] lg:h-[192px] md:w-[688px] md:h-[144px] md:text-[48px] text-[36px] font-bold text-white font-inter  leading-[100%]">
              We Crush Your Competitors, Goals, And Sales Records - Without The
              B.S.
            </p>

            <div className="w-[214px] h-[38px] bg-[#F28D35] rounded flex items-center justify-center ">
              <p className="text-sm font-bold text-white font-Inter">
                GET FREE CONSULTATION
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Baner;
