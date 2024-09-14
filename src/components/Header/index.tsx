import { Navbar } from "../Navbar";

export const Header = () => {
  return (
    <header className="w-full flex justify-between absolute bg-transparent z-40">
      <Navbar />
    </header>
  );
};
