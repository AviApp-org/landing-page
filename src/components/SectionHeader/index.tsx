import { SectionHeaderProps } from "./types";

export const SectionHeader = ({ children, title }: SectionHeaderProps) => {
  return (
    <h2 className="text-5xl font-bold text-center text-slate-800">
      {title}
    </h2>
  );
};
