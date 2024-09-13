import { HamburgerMenu } from "./HamburgerMenu";
import { NavbarItem } from "./Item";
import { NavbarProps } from "./types";

export const Navbar = ({ ...rest }: NavbarProps) => {
  return (
    <nav
      {...rest}
      className={`w-full bg-white border-gray-200 flex justify-between ${rest.className} px-8 py-4 max-sm:flex-col`}
    >
      <a href="#">
        <img src="" alt="Logo" />
      </a>
      <HamburgerMenu />
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="list-none flex items-center gap-14 max-sm:flex-col">
          <NavbarItem label="Home" href="/" isActive={true} />
          <NavbarItem label="About" href="/about" isActive={false} />
          <NavbarItem label="Contact" href="/contact" isActive={false} />
          <NavbarItem label="Products" href="/products" isActive={false} />
        </ul>
      </div>
    </nav>
  );
};
