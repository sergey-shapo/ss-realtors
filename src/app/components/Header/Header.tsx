"use client";

import Image from "next/legacy/image";
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
      <div className=" md:hidden z-20">
        <Image
          src={isMenuOpen ? MenuCloseSvg : MenuOpenSvg}
          alt="Menu Open Icon"
          className="cursor-pointer "
          onClick={toggleMenu}
          width={30}
          height={30}
          priority={true}
        />
      </div>

      <Navbar />
    </header>
  );
};

export default Header;
