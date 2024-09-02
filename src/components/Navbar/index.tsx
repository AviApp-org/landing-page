import { NavbarItem } from "./Item";
import { NavbarProps } from "./types";

export const Navbar = ({ ...rest }: NavbarProps) => {
  return (
    <nav {...rest} className={`w-full bg-transparent flex justify-between ${rest.className} p-4`}>
      <a href="#">
        <img src="" alt="Logo" />
      </a>
      <ul className="list-none flex gap-20">
        <NavbarItem label="Home" href="/" isActive={true}/>
        <NavbarItem label="About" href="/about" isActive={false}/>
        <NavbarItem label="Contact" href="/contact" isActive={false}/>
      </ul>
    </nav>
  );
};
