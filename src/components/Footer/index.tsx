import { FooterList } from "./List";
import { FooterListItem } from "./List/Item";

export const Footer = () => {
  return (
    <footer className="bg-leaf-600 w-full h-96 flex flex-col items-center justify-between max-sm:min-h-fit max-sm:h-full max-sm:gap-0">
      <div className="w-full flex-row items-center justify-between max-sm:flex-col">
        <div className="w-full p-12 max-sm:p-8 max-sm:pb-0">
          <img
            src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Logo"
            className="w-20 h-20"
          />
        </div>
        <div className="w-2/3 flex justify-evenly gap-18 max-sm:flex-col max-sm:w-full max-sm:gap-6 p-12 max-sm:p-8">
          <FooterList title="Contact">
            <FooterListItem label="E-Mail" link="" />
            <FooterListItem label="Phone" link="" />
          </FooterList>
          <FooterList title="Products">
            <FooterListItem label="AviApp" link="" />
          </FooterList>
          <FooterList title="About-us">
            <FooterListItem label="Company" link="" />
            <FooterListItem label="Privacy" link="" />
            <FooterListItem label="Terms" link="" />
          </FooterList>
        </div>
      </div>
      <div className="w-full border-t border-leaf-700 p-4">
        <p className="font-sans text-leaf-700 text-center">
          All rights reserved © 2022 AviApp
        </p>
      </div>
    </footer>
  );
};
