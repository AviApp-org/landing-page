import { ButtonProps } from "./types";

export const Button = ({ text, className, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`bg-leaf-600 text-slate-50 font-sans font-semibold text rounded-lg px-4 py-2 hover:bg-leaf-700 max-sm:py-0 max-sm:text-sm ${className}`}
    >
      {text}
    </button>
  );
};
