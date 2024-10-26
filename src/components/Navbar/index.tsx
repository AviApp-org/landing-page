"use client";
import { AviappLogoIcon } from "@/icons/AviappLogoIcon";
import { useState } from "react";
import { HamburgerMenu } from "./HamburgerMenu";
import { NavbarItem } from "./Item";
import { NavbarProps } from "./types";

export const Navbar = ({ ...rest }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      {...rest}
      className={`w-full backdrop-blur border-gray-200 flex items-center justify-center ${rest.className} px-8 py-2 max-md:items-center max-md:flex-col max-md:gap-4`}
    >
      <div className="w-full max-w-screen-xl flex items-center justify-between">
        <div className="w-full flex items-center justify-between max-md:flex-row">
          <a href="#">
            <AviappLogoIcon color="white" className="h-12 w-auto" />
          </a>
          <HamburgerMenu onClick={() => setIsOpen(!isOpen)} />
        </div>
        <div className="w-full max-md:hidden md:w-auto" id="navbar-default">
          <ul className="list-none flex items-center gap-14 max-md:flex-col max-md:gap-0 max-md:p-2 max-md:bg-gray-100 max-md:rounded-md">
            <NavbarItem label="Home" href="/" isActive={true} />
            <NavbarItem label="About" href="/about" isActive={false} />
            <NavbarItem label="Contact" href="/contact" isActive={false} />
            <NavbarItem label="Products" href="/products" isActive={false} />
          </ul>
        </div>
        {isOpen && (
          <div className="w-full md:block md:w-auto" id="navbar-default">
            <ul className="list-none flex items-center gap-14 max-md:flex-col max-md:gap-0 max-md:p-2 max-md:bg-gray-100 max-md:rounded-md">
              <NavbarItem label="Home" href="/" isActive={true} />
              <NavbarItem label="About" href="/about" isActive={false} />
              <NavbarItem label="Contact" href="/contact" isActive={false} />
              <NavbarItem label="Products" href="/products" isActive={false} />
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
