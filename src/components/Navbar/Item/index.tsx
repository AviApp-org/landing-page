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
      } hover:text-leaf-500 font-sans ${rest.className}`}
    >
      <a href={href} className="text-sm font-medium">
        {label}
      </a>
    </li>
  );
};
