"use client";

import Image from "next/image";
import logo from "../../../../public/logo.webp";
import MenuOpenSvg from "../../../../public/menu.svg";
import MenuCloseSvg from "../../../../public/menu_open.svg";
import Navbar from "../Navbar/Navbar";
import { useMenuStore } from "@/store/store";
const Header = (): React.ReactElement => {
  const { isMenuOpen, toggleMenu } = useMenuStore();
  return (
    <header className="w-full flex items-center justify-between py-3  h-20 ">
      <Image
        src={logo}
        alt="Логотип SS Group"
        onClick={() => (window.location.href = "/")}
        className="cursor-pointer sm:self-center z-20"
        priority={true}
      />
      <Image
        src={isMenuOpen ? MenuCloseSvg : MenuOpenSvg}
        alt="Menu Open Icon"
        className="cursor-pointer  md:hidden z-10"
        onClick={toggleMenu}
        width={30}
        height={30}
        priority={true}
      />

      <Navbar />
    </header>
  );
};

export default Header;
