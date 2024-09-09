import { FooterListProps } from "./types";

export const FooterList = ({ title, children }: FooterListProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="font-semibold text-slate-50 text-xl">{title}</h4>
      <ul className="list-none">{children}</ul>
    </div>
  );
};
