import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import iconExpandMenu from "../../../../public/expand_more.svg";
import { useMenuStore } from "@/store/store";

interface MenuItemProps {
  title: string;
  subMenuItems: SubMenuItem[];
}

interface SubMenuItem {
  title: string;
  link: string;
}

const tailwindClassNames = {
  link: `flex cursor-pointer items-center truncate  py-4  
   outline-none transition duration-300 ease-linear hover:text-primary  
`,
};

const NavItem = ({
  title,
  subMenuItems,
}: MenuItemProps): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const { hideMenu } = useMenuStore();

  return (
    <li className="relative group">
      <a
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center cursor-pointer transition duration-300 ease-linear hover:text-primary`}
      >
        <span>{title}</span>
        <span
          className={`transition-transform duration-300 ease-linear ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          <Image src={iconExpandMenu} alt="icono de expander el menu" />
        </span>
      </a>
      <ul
        className={`absolute m-0 list-none p-0 transition-all duration-300 ease-linear ${
          isOpen ? "block" : "hidden"
        } bg-white pt-4`}
      >
        {subMenuItems.map((item, index) => (
          <li key={item.title}>
            {index === 0 && <hr key={index} className="border-primary" />}
            <Link
              href={item.link}
              className={`${tailwindClassNames.link}`}
              onClick={() => {
                setIsOpen(false);
                hideMenu();
              }}
            >
              {item.title}
            </Link>

            <hr className="border-primary" />
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NavItem;
