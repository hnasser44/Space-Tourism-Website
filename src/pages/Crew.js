import { useState } from "react";

const Crew = ({ data }) => {
  const [crew] = useState(data);
  const [currentCrew, setCurrentCrew] = useState(data[0]);

  return (
    <section className="mt-[30px] text-white flex flex-col items-center justify-center tablet:mt-[40px] desktop:ml-[200px]">
      <h1 className="font-barlow text-[16px] font-normal tracking-[2.7px] tablet:text-[20px] tablet:tracking-[3.375px] tablet:self-start desktop:text-[28px] desktop:tracking-[4.725px]">
        <span className="font-bold opacity-25 mr-[16px]">02</span> MEET YOUR
        CREW
      </h1>
      <div className="flex flex-col items-center justify-center desktop:flex-row desktop:items-center desktop:justify-start desktop:gap-[157px] desktop:mt-0">
        <img
          src={currentCrew.images?.png}
          alt={currentCrew.name}
          key={currentCrew.name}
          className="w-[177.123px] h-[222px] flex-shrink-0 mt-[44px] animate-slide tablet:order-last tablet:w-[456.372px] tablet:h-[572px] desktop:w-[568.072px] desktop:h-[712px]"
        />
        <div className="mt-[32px] flex flex-col items-center justify-center desktop:mt-0 desktop:items-start desktop:justify-start">
          <div className="flex items-center justify-center gap-[20px] tablet:order-last tablet:mt-[50px] desktop:mt-[200px]">
            {crew.map((crew) => (
              <button
                key={crew.name}
                className={`rounded-full w-[10px] h-[10px] bg-white tablet:w-[15px] tablet:h-[15px] ${
                  crew.name === currentCrew.name
                    ? "opacity-100"
                    : "opacity-[0.174363]"
                }`}
                onClick={() => setCurrentCrew(crew)}
              ></button>
            ))}
          </div>
          <div className="mt-[32px] flex flex-col items-center justify-center desktop:items-start">
            <h1 className="font-bellefair text-[16px] font-normal uppercase opacity-50 tablet:text-[24px] desktop:text-[32px]">
              {currentCrew.role}
            </h1>
            <h1 className="font-bellefair text-[24px] font-normal uppercase tablet:text-[40px] desktop:text-[56px] desktop:mt-[15px]">
              {currentCrew.name}
            </h1>
            <p className="font-barlowNormal text-Pink text-center text-[15px] font-normal mt-[16px] leading-[25px] tablet:text-[16px] tablet:w-[458px] tablet:h-[84px] tablet:leading-[28px] desktop:text-[18px] desktop:w-[444px] desktop:h-[128px] desktop:leading-[32px] desktop:text-left desktop:mt-[27px]">
              {currentCrew.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crew;
