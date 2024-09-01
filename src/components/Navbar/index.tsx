import { NavbarProps } from "./types";

export const Navbar = ({ ...rest }: NavbarProps) => {
  return (
    <nav {...rest} className={`w-full bg-transparent flex justify-between ${rest.className} p-4`}>
      <a href="#">
        <img src="" alt="Logo" />
      </a>
      <ul className="list-none flex gap-20">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};
