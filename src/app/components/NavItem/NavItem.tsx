import React from "react";
import Image from "next/image";
import Link from "next/link";
import iconExpandMenu from "../../../../public/expand_more.svg";

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
  return (
    <li className="relative group">
      <a
        className={`flex items-center cursor-pointer py-4  transition duration-300 ease-linear hover:text-primary  `}
      >
        <span>{title}</span>
        <span
          className={` transition-transform duration-300 ease-linear group-hover:rotate-90`}
        >
          <Image src={iconExpandMenu} alt="icono de expander el menu" />
        </span>
      </a>
      <ul
        className={`absolute m-0 list-none p-0 transition-all duration-300 ease-linear group-hover:block hidden bg-white px-5 border border-primary`}
      >
        {subMenuItems.map((item) => (
          <li key={item.title}>
            <Link href={item.link} className={` ${tailwindClassNames.link}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NavItem;
