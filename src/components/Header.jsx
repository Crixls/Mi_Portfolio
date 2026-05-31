import { Link, useLocation } from "react-router-dom";
import { LuSun, LuMoon } from "react-icons/lu";
import MenuHamburguesa from "./MenuHamburguesa";

const Header = ({ darkMode, toggleTheme }) => {
  const location = useLocation();

  const showThemeRoutes = ["/sobremi", "/proyectos", "/contacto"];
  const showThemeButton = showThemeRoutes.includes(location.pathname);

  return (
    <header className="w-full lg:px-8 md:px-8 px-3 py-8 flex justify-between items-center bg-black">

      <Link to="/" className="lg:text-xl md:text-xl text-md font-bold text-white ">
        Cristina Luque Santaella
      </Link>

      <nav className="flex items-center">

        <ul className="hidden md:flex space-x-12 items-center">
          <li>
            <Link to="/sobremi" className="text-white">Sobre mí</Link>
          </li>

          <li>
            <Link to="/proyectos" className="text-white">Proyectos</Link>
          </li>

          <li>
            <Link to="/contacto" className="text-white">Contacto</Link>
          </li>

          {showThemeButton && (
            <li>
              <button onClick={toggleTheme}>
                {darkMode ? (
                  <LuSun className="w-6 h-6 text-white" />
                ) : (
                  <LuMoon className="w-6 h-6 text-white" />
                )}
              </button>
            </li>
          )}
        </ul>

        {/* HAMBURGUESA */}
        <MenuHamburguesa />

        <div className="md:hidden flex items-center gap-3 ml-4">
          
          {showThemeButton && (
            <button onClick={toggleTheme}>
              {darkMode ? (
                <LuSun className="w-6 h-6 text-white" />
              ) : (
                <LuMoon className="w-6 h-6 text-white" />
              )}
            </button>
          )}

          
        </div>

      </nav>

    </header>
  );
};

export default Header;