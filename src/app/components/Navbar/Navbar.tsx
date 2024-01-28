"use client";
import Link from "next/link";
import NavItem from "../NavItem/NavItem";
import { useMenuStore } from "@/store/store";

const Navbar = (): React.ReactElement => {
  const { isMenuOpen } = useMenuStore();
  return (
    <nav
      className={`${
        isMenuOpen
          ? "fixed inset-0 flex flex-col items-center justify-center space-y-4 bg-white"
          : "hidden"
      } md:flex `}
    >
      <ul className="flex flex-col gap-10 items-center md:flex-row md:items-center">
        <li>
          <Link href="/" className="py-4 hover:text-primary">
            Главная
          </Link>
        </li>

        <NavItem
          title="Недвижимость"
          subMenuItems={[
            { title: "Новостройки в Барселоне", link: "/" },
            { title: "Аренда в Барселоне", link: "/" },
          ]}
        />

        <li>
          <Link href="/" className="py-4 hover:text-primary">
            О нас
          </Link>
        </li>
        <li>
          <Link href="/" className="py-4 hover:text-primary">
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;