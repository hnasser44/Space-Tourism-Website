import { useState } from "react";

const Destination = ({ data }) => {
  const [destinations] = useState(data);
  const [currentDestination, setCurrentDestination] = useState(data[0]);
  const [shouldSlide, setShouldSlide] = useState(false);

  const handleDestinationClick = (destination) => {
    if (destination.name === currentDestination.name) return;
    setCurrentDestination(destination);
    setShouldSlide(true);
    setTimeout(() => {
      setShouldSlide(false);
    }, 500);
  };

  return (
    <section className="mt-[30px] text-white flex flex-col items-center justify-center tablet:mt-[40px] desktop:ml-[200px] desktop:pb-[100px]">
      <h1 className="font-barlow text-[16px] font-normal tracking-[2.7px] tablet:self-start tablet:text-[20px] tablet:tracking-[3.375px] tablet:mt-[40px] desktop:mt-[76px] desktop:text-[28px] desktop:tracking-[4.725px]">
        <span className="font-bold opacity-25">01</span> PICK YOUR DESTINATION
      </h1>
      <div className="flex flex-col items-center justify-center desktop:flex-row desktop:items-end desktop:justify-start desktop:gap-[157px] desktop:mt-[50px]">
        <img
          src={currentDestination.images?.png}
          alt={currentDestination.name}
          key={currentDestination.name}
          className={`"w-[259px] h-[259px] flex-shrink-0 mt-[44px] tablet:w-[300px] tablet:h-[300px] tablet:mt-[60px] desktop:w-[445px] desktop:h-[445px] animate-planet-spin ${
            shouldSlide ? "animate-slide" : ""
          }`}
        />
        <div className="flex flex-col items-center justify-center">
          <div className="mt-[26px] flex items-center justify-center gap-[11px] tablet:mt-[53px] tablet:gap-[35px] desktop:self-start">
            {destinations.map((destination) => (
              <button
                key={destination.name}
                className={`uppercase font-barlow text-[14px] tablet:text-[16px] tablet:tracking-[2.7px] font-normal tracking-[2.362px] after:block after:w-0 after:h-[3px] after:bg-white after:mt-[8px] after:transtion-all after:duration-300 hover:after:w-full ${
                  currentDestination.name === destination.name
                    ? "destination-selected"
                    : ""
                }`}
                onClick={() => handleDestinationClick(destination)}
              >
                {destination.name}
              </button>
            ))}
          </div>
          <div className="mt-[20px] flex flex-col items-center justify-center tablet:mt-[47px] desktop:items-start desktop:mt-0">
            <h1 className="font-bellefair text-[56px] font-normal uppercase tablet:text-[80px] desktop:text-[108px] desktop:mt-[20px]">
              {currentDestination.name}
            </h1>
            <p className="text-Pink font-barlowNormal text-[15px] font-normal leading-[25px] text-center  border-b-2  border-b-TextBorder pb-[32px] tablet:text-[16px] tablet:pb-[120px] tablet:w-[573px] tablet:h-[84px] desktop:w-[444px] desktop:h-[128px] desktop:text-[18px] desktop:leading-[32px] desktop:text-left desktop:pb-[180px]">
              {currentDestination.description}
            </p>
            <div className="mt-[32px] flex flex-col items-center justify-center gap-[32px] tablet:mt-[28px] tablet:flex-row tablet:gap-[100px]">
              <div className="flex flex-col items-center justify-center gap-[12px] desktop:items-start">
                <h2 className="text-Pink font-barlow text-[14px] font-normal tracking-[2.362px]">
                  AVG. DISTANCE
                </h2>
                <p className="text-white font-bellefair text-[28px] font-normal uppercase">
                  {currentDestination.distance}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-[12px] desktop:items-start">
                <h2 className="text-Pink font-barlow text-[14px] font-normal tracking-[2.362px]">
                  EST. TRAVEL TIME
                </h2>
                <p className="text-white font-bellefair text-[28px] font-normal uppercase">
                  {currentDestination.travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Destination;
