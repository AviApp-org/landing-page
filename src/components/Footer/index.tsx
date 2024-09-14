import { AviappLogoIcon } from "@/icons/AviappLogoIcon";
import { FooterList } from "./List";
import { FooterListItem } from "./List/Item";

export const Footer = () => {
  return (
    <footer className="bg-leaf-600 w-full flex flex-col items-center justify-between max-sm:min-h-fit max-sm:h-full max-sm:gap-0">
      <div className="w-full flex flex-row items-start justify-between p-12 max-sm:flex-col">
        <div className="w-full flex items-start justify-start gap-20 max-sm:flex-col max-sm:w-full max-sm:gap-6 p-10 max-sm:p-8">
          <FooterList title="Products">
            <FooterListItem label="Main products" link="" />
            <FooterListItem label="Latests updates" link="" />
            <FooterListItem label="Security" link="" />
            <FooterListItem label="Server status" link="" />
            <FooterListItem label="Mobile app" link="" />
          </FooterList>
          <FooterList title="Company">
            <FooterListItem label="About us" link="" />
            <FooterListItem label="Newsletter" link="" />
            <FooterListItem label="Privacy" link="" />
            <FooterListItem label="Terms" link="" />
          </FooterList>
          <FooterList title="Help">
            <FooterListItem label="Contact us" link="" />
            <FooterListItem label="Help center" link="" />
            <FooterListItem label="FAQ" link="" />
          </FooterList>
        </div>
        <div className="w-full flex items-end justify-end p-10 max-sm:p-8 max-sm:pb-0">
          <AviappLogoIcon color="white" className="w-36 h-36" />
        </div>
      </div>
      <div className="w-full border-t border-leaf-400 p-4 mt-6">
        <p className="font-sans text-leaf-400 text-center">
          All rights reserved © 2022 AviApp
        </p>
      </div>
    </footer>
  );
};
