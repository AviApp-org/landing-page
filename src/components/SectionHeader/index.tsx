import { SectionHeaderProps } from "./types";

export const SectionHeader = ({ title, ...rest }: SectionHeaderProps) => {
  return (
    <h2 {...rest} className={`text-5xl font-bold text-center text-slate-800 max-sm:text-3xl ${rest.className}`}>
      {title}
    </h2>
  );
};
