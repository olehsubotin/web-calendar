import Link from "next/link";

const Header = (): JSX.Element => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Advent Calendar</h1>
        <ul className="flex space-x-4">
          <li>
            <Link className="hover:underline" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
