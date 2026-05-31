import bgImage2 from "../assets/gradien2.jpg";
import bgImage from "../assets/gradien.jpg";
import { LuExternalLink } from "react-icons/lu";
import { useOutletContext } from "react-router-dom";


const Proyectos = () => {
  const { darkMode } = useOutletContext();
  const hoverEffect = darkMode
  ? "" 
  : "hover:scale-[1.03] hover:-translate-y-2";

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
     
      <img
        src={bgImage2}
        alt="proyectos"
        className="absolute inset-0 w-full h-full object-cover lg:hidden "
      />

      <img
        src={bgImage}
        alt="proyectos"
        className="hidden lg:block absolute inset-0 lg:300  object-cover"
      />
      <div className="absolute inset-0 bg-black/15" />
      

      <section className="min-h-screen flex items-center justify-center bg-black ">

      <div className="grid gap-15 md:m-20 lg:m-30 m-10 lg:grid-cols-3  md:grid-cols-2 md:mt-2 lg:mt-40 sm:grid-cols-1 ">

        {/* Tarjeta */}

        <div
          className={`
            backdrop-blur-xl border rounded-2xl p-8 
            flex flex-col h-full md:p-4 md:min-h-40 md:mt-10 

            transition-all duration-300 ease-out
            ${hoverEffect}

            ${darkMode
              ? "bg-white/10 border-white/20 hover:inset-shadow-[0_0_20px_rgba(255,255,255,0.35)]"
              : "bg-white border-black/10 hover:shadow-lg"
            }
          `}
        >
  
        <h2
          className={`
            text-4xl font-light mb-2
            ${darkMode ? "text-white" : "text-black"}
          `}
        >
          Proyecto 01
        </h2>

        <p
          className={`
            mt-3 text-base leading-relaxed
            ${darkMode ? "text-neutral-200" : "text-neutral-700"}
          `}
        >
        Plataforma de comercio electrónico con catálogo de productos, carrito de 
        compra y flujo de pedido, enfocada en la experiencia de usuario y el desarrollo 
        de una interfaz funcional, intuitiva y visualmente atractiva.        
        </p>

        <div
          className={`
            mt-6 text-sm
            ${darkMode ? "text-neutral-300" : "text-neutral-600"}
          `}
        >
          HTML5 · Tailwind CSS · React · PHP · Twig  
        </div>

        <div className="mt-auto flex justify-center items-center pt-6">
          <a
            href="https://github.com/Crixls/E-commerce-platform-Full-Stack-Web-Application"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium
              shadow-md active:scale-95 transition-all duration-200

              ${darkMode
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-black text-white hover:bg-gray-700"
              }
            `}
          >
            Ver
            <LuExternalLink className="w-5 h-5" />
          </a>
        </div>

      </div>

        {/* Tarjeta */}
        <div
          className={`
            backdrop-blur-xl border rounded-2xl p-8
            flex flex-col h-full md:p-4 md:min-h-40 md:mt-10

            transition-all duration-300 ease-out
            ${hoverEffect}

            ${darkMode
              ? "bg-white/10 border-white/20 hover:inset-shadow-[0_0_20px_rgba(255,255,255,0.35)]"
              : "bg-white border-black/10 hover:shadow-lg"
            }
          `}
        >
  
        <h2
          className={`
            text-4xl font-light mb-2
            ${darkMode ? "text-white" : "text-black"}
          `}
        >
          Proyecto 02
        </h2>

        <p
          className={`
            mt-3 text-base leading-relaxed
            ${darkMode ? "text-neutral-200" : "text-neutral-700"}
          `}
        >
          Portfolio personal desarrollado como proyecto de identidad digital, enfocado 
          en la presentación de trabajos, habilidades en diseño UX/UI y desarrollo 
          web mediante una interfaz sencilla e intuitiva.      
        </p>

        <div
          className={`
            mt-6 text-sm
            ${darkMode ? "text-neutral-300" : "text-neutral-600"}
          `}
        >
          HTML5 · Tailwind CSS · JavaScript · React
        </div>

        <div className="mt-auto flex justify-center items-center pt-6">
          <a
            href="https://github.com/Crixls/Mi_Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium
              shadow-md active:scale-95 transition-all duration-200 

              ${darkMode
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-black text-white hover:bg-gray-700"
              }
            `}
          >
            Ver
            <LuExternalLink className="w-5 h-5" />
          </a>
        </div>

      </div>
       

      </div>

    </section>
  </section>
  );
};

export default Proyectos;