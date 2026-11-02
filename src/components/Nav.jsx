
import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-100 bg-white px-6 py-4">

        <div>
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-auto"
          />
        </div>

        <div>
          <ul className="hidden items-center gap-6 text-sm text-gray-600 md:flex">
            <li className="cursor-pointer text-pink-600">Home</li>
            <li className="cursor-pointer">Technologies</li>
            <li className="cursor-pointer">Projects</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <h4 className="cursor-pointer text-sm">Sign In</h4>
          <h4 className="cursor-pointer rounded-full bg-pink-600 px-4 py-2 text-sm text-white hover:bg-pink-700">
            Sign Up
          </h4>
        </div>

      </nav>
    </>
  );
};

export default Nav;
