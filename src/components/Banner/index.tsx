import { BannerProps } from "./types";

export const Banner = ({ ...rest }: BannerProps) => {
  return (
    <div
      {...rest}
      className={`w-full h-[650px] flex ${rest.className}`}
    >
      <h1 className="text-6xl text-left font-bold text-slate-100 absolute self-end font-sans leading-snug mb-10 ml-20">
        A ferramenta de gestão <br /> para{" "}
        <mark className="bg-leaf-600 text-slate-200 px-4">sua granja!</mark>
      </h1>
      <img
        src="banner-2.jpeg"
        alt=""
        className="object-cover w-full h-full"
      />
    </div>
  );
};
