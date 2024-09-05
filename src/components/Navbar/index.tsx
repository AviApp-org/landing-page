import { NavbarItem } from "./Item";
import { NavbarProps } from "./types";

export const Navbar = ({ ...rest }: NavbarProps) => {
  return (
    <nav {...rest} className={`w-full bg-transparent flex justify-between ${rest.className} px-8 py-4`}>
      <a href="#">
        <img src="" alt="Logo" />
      </a>
      <ul className="list-none flex items-center gap-14">
        <NavbarItem label="Home" href="/" isActive={true}/>
        <NavbarItem label="About" href="/about" isActive={false}/>
        <NavbarItem label="Contact" href="/contact" isActive={false}/>
        <NavbarItem label="Products" href="/products" isActive={false} className="px-4 py-2 bg-leaf-500 rounded hover:text-slate-50" />
      </ul>
    </nav>
  );
};
