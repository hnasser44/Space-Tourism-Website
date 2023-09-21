// import BGHomeDesktop from "../assets/home/background-home-desktop.jpg";
// import BGHomeMobile from "../assets/home/background-home-mobile.jpg";
// import BGHomeTablet from "../assets/home/background-home-tablet.jpg";
import MenuIcon from "../assets/shared/icon-hamburger.svg";
import Logo from "../assets/shared/logo.svg";
import CloseMenuIcon from "../assets/shared/icon-close.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = ({ newClass }) => {
  const PageNames = ["home", "destination", "crew", "technology"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkRedirection = (pageName) => {
    return pageName === "home" ? "/" : `/${pageName}`;
  };

  const handleActiveLink = (pageName) => {
    if (newClass === "" && pageName === "home") return true;
    return newClass === pageName;
  };

  const CloseMenu = () => {
    //close the menu when the viewport is bigger than 768px
    if (window.innerWidth > 640) setIsMenuOpen(false);
  };

  window.addEventListener("resize", CloseMenu);

  return (
    <>
      <div
        className={`tablet:hidden z-10 mobile-menu fixed top-0 right-0 h-screen w-[254px] p-5  transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : " translate-x-full"
        }`}
      >
        <img
          src={CloseMenuIcon}
          alt=""
          className="mt-5 ml-auto"
          onClick={() => setIsMenuOpen(false)}
        />
        <ul className="text-white uppercase font-barlow text-[16px] font-normal tracking-[2.362px] flex gap-[37px] flex-shrink-0 flex-col mt-[118px]">
          {PageNames.map((pageName) => (
            <li
              key={pageName}
              onClick={() => setIsMenuOpen(false)}
              className={`relative after:absolute after:block after:w-0 after:h-[2px] after:bg-white after:top-[120%] hover:after:w-full w-min after:transition-all after:duration-300 ${
                handleActiveLink(pageName) ? "active-link" : ""
              }`}
            >
              <Link
                to={handleLinkRedirection(pageName)}
                className="flex items-center gap-[11px]"
              >
                <span className="font-barlow font-bold">
                  0{PageNames.indexOf(pageName)}
                </span>{" "}
                {pageName}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <header className="flex items-center justify-between">
        <img src={Logo} alt="" className="logo" />
        <img
          src={MenuIcon}
          alt=""
          className="tablet:hidden"
          onClick={() => setIsMenuOpen(true)}
        />
        <nav className="p-[40px] hidden tablet:block desktop:px-[100px]">
          <ul className="text-white uppercase font-barlow text-[14px] font-normal tracking-[2.362px] flex gap-[37px] flex-shrink-0 desktop:gap-[50px]">
            {PageNames.map((pageName) => (
              <li
                className={`relative after:absolute after:block after:w-0 after:h-[2px] after:bg-white after:-bottom-[190%] hover:after:w-full after:transition-all after:duration-300 ${
                  handleActiveLink(pageName) ? "active-link" : ""
                }`}
                key={pageName}
              >
                <Link
                  to={handleLinkRedirection(pageName)}
                  className="flex items-center gap-[11px]"
                >
                  <span className="font-barlow font-bold hidden desktop:block">
                    0{PageNames.indexOf(pageName)}
                  </span>{" "}
                  {pageName}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
