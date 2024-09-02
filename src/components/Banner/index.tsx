import { BannerProps } from "./types";

export const Banner = ({ ...rest }: BannerProps) => {
  return (
    <div {...rest} className={`w-full h-[600px] object-cover flex ${rest.className}`}>
      <h1 className="text-7xl text-left font-bold text-slate-200 absolute self-end font-sans left-20 bottom-20 leading-snug">
        A ferramenta de gestão <br /> para <mark className="bg-leaf-600 text-slate-200 px-4">sua granja!</mark>
      </h1>
      <img
        src="banner-2.jpeg"
        alt=""
        className="object-cover w-full h-full"
      />
    </div>
  );
};
