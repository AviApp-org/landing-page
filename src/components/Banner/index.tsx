import { BannerProps } from "./types";

export const Banner = ({ ...rest }: BannerProps) => {
  return (
    <div {...rest} className={`w-full h-[600px] object-cover ${rest.className}`}>
      <img
        src="main-banner.jpg"
        alt=""
        className="object-cover w-full h-full"
      />
    </div>
  );
};
