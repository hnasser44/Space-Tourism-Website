import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mt-[48px] tablet:mt-[106px] flex flex-col items-center justify-center gap-[81px] desktop:flex-row desktop:items-end desktop:justify-start desktop:gap-[391px] desktop:ml-[200px] desktop:mt-[150px]">
      <div className="text-Pink flex flex-col items-center justify-center gap-[16px] tablet:gap-[24px] desktop:items-start">
        <h1 className="text-[17px] font-normal tracking-[2.7px] font-barlow tablet:text-[20px] tablet:tracking-[3.375px] desktop:text-[28px] desktop:tracking-[4.725px]">
          SO, YOU WANT TO TRAVEL TO
        </h1>
        <h2 className="text-white text-[80px] font-normal leading-[100px] font-bellefair tablet:text-[150px] tablet:leading-[150px] desktop:text-[150px]">
          SPACE
        </h2>
        <p className="font-barlowNormal text-[15px] font-normal leading-[25px] text-center tablet:text-[17px] tablet:leading-[28px] tablet:w-[444px] tablet:h-[112px] desktop:h-[128px] desktop:text-[18px] desktop:leading-[32px] desktop:text-left">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link to="/destination">
        <div className="rounded-full w-[150px] h-[150px] bg-white flex items-center justify-center hover:cursor-pointer tablet:w-[242px] tablet:h-[242px] tablet:flex-shrink-0 hover:scale-110 hover:shadow-2xl transition-all duration-300 desktop:w-[274px] desktop:h-[274px]">
          <span className="text-black font-bellefair font-normal text-[20px] tracking-[1.25px] tablet:text-[32px] tablet:tracking-[2px]">
            EXPLORE
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Home;
