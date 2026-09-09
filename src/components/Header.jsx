import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../constants/index.js";
import MenuSvg from "../assets/svg/MenuSvg.jsx";
import { HamburgerMenu } from "./design/Header.jsx";
import { useState } from "react";
import Button from "./Button.jsx";
import {logo} from "../assets/index.js";

const Header = () => {
    const pathname = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    };

    return (
        <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-1 lg:backdrop-blur-sm ${openNavigation ? "bg-n-1" : "bg-n-1 backdrop-blur-sm"}`}>
            <div className="flex justify-between items-center px-5 py-2 lg:px-7.5 xl:px-10">
                {/* Logo on the left */}
                <a href="#hero" className="block w-[12rem] xl:mr-8">
                    <img src={logo} alt="logo" width={190} height={40} />
                </a>

                {/* Nav items on the right */}
                <nav className={`${openNavigation ? 'flex text-white' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-1 lg:static lg:flex ml-auto lg:bd-transparent`}>
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                onClick={handleClick}
                                className={`block relative text-base lg:text-xs font-code uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? 'lg:hidden' : ''} px-4 py-4 md:py-6 lg:-mr-0.25 lg:font-semibold ${item.url === pathname.hash ? "z-2 lg:text-n-8" : "lg:text-n-8/50"} lg:leading-5`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                    <HamburgerMenu />
                </nav>
                <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </div>
    );
};

export default Header;
