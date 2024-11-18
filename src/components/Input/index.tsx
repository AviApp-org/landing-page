import { InputProps } from "./types";

export const Input = ({ type, label, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col gap-1 w-full max-sm:text-sm">
      {label && (
        <label htmlFor={rest.id} className={`block font-bold text-gray-50 max-sm:text-sm ${rest.className}`}>{label}</label>
      )}
      <input
        type={type}
        id={rest.id}
        {...rest}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 font-sans max-sm:text-sm"
      />
    </div>
  );
};
