import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  // Shadow effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${
        hasShadow ? "shadow-md bg-white dark:bg-gray-900" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <div className="text-xl font-bold">JA</div>

        <div className="hidden md:flex space-x-6">
          {["Home", "About","Skills", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-500"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode}>
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 p-4 space-y-3">
          {["Home", "About","Skills","Projects", "Contact"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="block"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
