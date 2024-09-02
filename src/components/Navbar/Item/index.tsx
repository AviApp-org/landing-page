import { NavbarItemProps } from "./types";

const activeStyles = {
  active: 'text-leaf-500',
  default: 'text-slate-50',
}

export const NavbarItem = ({ label, href, isActive }: NavbarItemProps) => {

  return (
    <li className={`${isActive ? activeStyles.active : activeStyles.default} hover:text-leaf-500 `}>
      <a
        href={href}
        className="text-sm font-medium"
      >
        {label}
      </a>
    </li>
  );
};
