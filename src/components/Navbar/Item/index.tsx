import { NavbarItemProps } from "./types";

const activeStyles = {
  active: 'text-leaf-500',
  default: '',
}

export const NavbarItem = ({ label, href, isActive }: NavbarItemProps) => {

  return (
    <li className={`${isActive ? activeStyles.active : ''} hover:text-leaf-500 `}>
      <a
        href={href}
        className="text-sm font-medium text-gray-900 hover:text-gray-700 dark:text-gray-300"
      >
        {label}
      </a>
    </li>
  );
};
