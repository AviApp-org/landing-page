import { NavbarItemProps } from "./types";

const activeStyles = {
  active: "text-leaf-500",
  default: "text-slate-50",
};

export const NavbarItem = ({
  label,
  href,
  isActive,
  ...rest
}: NavbarItemProps) => {
  return (
    <li
      {...rest}
      className={`${
        isActive ? activeStyles.active : activeStyles.default
      } ${rest.className}`}
    >
      <a href={href} className="text-sm hover:text-leaf-500 font-sans font-medium block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:border-0">
        {label}
      </a>
  </li>
  );
};
