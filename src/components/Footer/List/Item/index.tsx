import { FooterListItemProps } from "./types";

export const FooterListItem = ({ label, link }: FooterListItemProps) => {
  return (
    <li className="text-leaf-700 hover:underline text-lg font-sans">
      <a href={link}>{label}</a>
    </li>
  );
};
