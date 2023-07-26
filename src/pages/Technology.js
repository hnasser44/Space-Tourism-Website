import { useState } from "react";

const Technology = ({ data }) => {
  const [technology] = useState(data);
  const [currentTechnology, setCurrentTechnology] = useState(data[0]);
  return (
    <section className="mt-[30px] text-white flex flex-col items-center justify-center tablet:mt-[40px] desktop:ml-[200px]">
      <h1 className="font-barlow text-[16px] font-normal tracking-[2.7px] tablet:text-[20px] tablet:tracking-[3.375px] tablet:self-start desktop:text-[28px] desktop:tracking-[4.725px]">
        <span className="font-bold opacity-25 mr-[16px]">03</span> SPACE LAUNCH
        101
      </h1>
      <div className="flex flex-col desktop:flex-row-reverse desktop:items-center desktop:justify-start desktop:gap-[157px] desktop:mt-6">
        <img
          src={currentTechnology.images?.landscape}
          alt={currentTechnology.name}
          key={currentTechnology.name}
          className="w-full h-[220px] flex-shrink-0 mt-[44px] animate-slide tablet:h-[330px] tablet:aspect-auto desktop:w-[552px]"
        />
        <div className="mt-[32px] flex flex-col items-center justify-center desktop:mt-0 desktop:items-center desktop:justify-center desktop:flex-row desktop:gap-[30px]">
          <div className="flex items-center justify-center mt-[15px] gap-[20px] desktop:flex-col desktop:gap-[50px]">
            {technology.map((technology) => (
              <button
                key={technology.id}
                className={`text-black font-bellefair text-[16px] rounded-full w-[50px] h-[50px] flex items-center justify-center bg-white desktop:w-[60px] desktop:h-[60px] desktop:text-[20px] ${
                  technology.name === currentTechnology.name
                    ? "opacity-100"
                    : "opacity-[0.174363]"
                }`}
                onClick={() => setCurrentTechnology(technology)}
              >
                {technology.id}
              </button>
            ))}
          </div>
          <div className="mt-[32px] flex flex-col items-center justify-center desktop:items-start">
            <h1 className="font-barlow text-[14px] font-normal uppercase tracking-[2.362px] tablet:text-[16px] tablet:tracking-[2.7px]">
              THE TERMINOLOGY ...
            </h1>
            <h1 className="font-bellefair text-[24px] font-normal uppercase mt-[9px] tablet:text-[40px] tablet:mt-[16px] desktop:text-[56px]">
              {currentTechnology.name}
            </h1>
            <p className="font-barlowNormal text-Pink text-center text-[15px] font-normal mt-[16px] leading-[25px] tablet:text-[16px] tablet:w-[458px] tablet:leading-[28px] tablet:h-[140px] desktop:text-left desktop:text-[18px] desktop:leading-[32px] desktop:w-[444px] desktop:h-[192px]">
              {currentTechnology.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
