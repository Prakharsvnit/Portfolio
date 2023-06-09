import Link from "next/link";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navBgColor, setNavBgColor] = useState("bg-blue-600");

  // This effect updates the background color of the navigation bar when scrolling
  useEffect(() => {
    // `handleScroll` is the function that updates the background color of the navigation bar
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavBgColor("bg-blue-200");
      } else {
        setNavBgColor("bg-white");
      }
    };
    // Add event listener for scrolling and remove it when the component unmounts
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-200 ease-in-out ${navBgColor}`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-white">
              <Link href="/">Brand</Link>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col text-white md:flex-row md:-mx-4 md:block mt-2 md:mt-0">
            <Link href="/">
              <span className={`my-1  hover:font-bold md:mx-4 md:my-0`}>
                Home
              </span>
            </Link>
            <Link href="/about">
              <span className={`my-1 hover:font-bold   md:mx-4 md:my-0`}>
                About Me
              </span>
            </Link>
            <Link href="/projects">
              <span className={`my-1 hover:font-bold  md:mx-4 md:my-0`}>
                Projects
              </span>
            </Link>
            <Link href="/skills">
              <span className={`my-1 hover:font-bold  md:mx-4 md:my-0`}>
                Skills
              </span>
            </Link>
            <Link href="/contact">
              <span className={`my-1 hover:font-bold  md:mx-4 md:my-0`}>
                Contact
              </span>
            </Link>
            <Link href="/resume">
              <span className={`my-1 hover:font-bold  md:mx-4 md:my-0`}>
                Resume
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
