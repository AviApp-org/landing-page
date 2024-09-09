import { FooterList } from "./List";
import { FooterListItem } from "./List/Item";

export const Footer = () => {
  return (
    <footer className="bg-leaf-600 w-full h-96 p-12 flex flex-row justify-between">
      <div className="w-full">
        <img
          src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Logo"
          className="w-20 h-20"
        />
      </div>
      <div className="w-2/3 flex justify-evenly gap-18">
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
    </footer>
  );
};
