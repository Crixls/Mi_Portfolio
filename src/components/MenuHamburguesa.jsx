import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const MenuHamburguesa = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative lg:hidden md:hidden flex">

      <button onClick={toggleMenu}>
        <GiHamburgerMenu className="w-6 h-6 text-white" />
      </button>

      {/* MENU */}
      {isOpen && (
        <div className="absolute right-0 top-10 w-48 bg-black text-white rounded-lg shadow-lg p-4 flex flex-col space-y-4 z-50 ">

          <Link to="/sobremi" onClick={toggleMenu}>
            Sobre mí
          </Link>

          <Link to="/proyectos" onClick={toggleMenu}>
            Proyectos
          </Link>

          <Link to="/contacto" onClick={toggleMenu}>
            Contacto
          </Link>

       

        </div>
      )}

    </div>
  );
};

export default MenuHamburguesa;