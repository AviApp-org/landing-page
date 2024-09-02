import { Navbar } from "../Navbar";

export const Header = () => {
  return (
    <header className="w-full flex justify-between absolute bg-transparent backdrop-blur-md">
      <Navbar />
    </header>
  );
};
