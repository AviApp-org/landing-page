import { BannerProps } from "./types";

export const Banner = ({ ...rest }: BannerProps) => {
  return (
    <div
      {...rest}
      className={`w-full h-[650px] max-sm:h-[500px] flex max-sm:justify-center max-sm:items-center ${rest.className}`}
    >
      <h1 className="text-6xl text-left font-bold text-slate-100 absolute self-end font-sans leading-snug mb-10 ml-20 max-sm:text-5xl max-sm:text-center max-w-screen-xl max-sm:self-center max-sm:m-0 max-sm:w-[90%] max-sm:leading-normal max-md:block">
        A ferramenta de gestão <br /> para a sua {" "}
        <mark className="bg-leaf-600 text-slate-200 px-4">granja!</mark>
      </h1>
      <img src="banner-2.jpeg" alt="" className="object-cover w-full h-full" />
    </div>
  );
};
