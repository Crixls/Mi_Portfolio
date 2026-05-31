import { SiGmail, SiReaddotcv } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import bgImage from "../assets/circuito.jpg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useOutletContext } from "react-router-dom";

const Contacto = () => {

  const { darkMode } = useOutletContext();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        "template_gsu6zf6",
        form.current,
        "XwlusP_xXCtdjr8E4"
      )
      .then(
        () => {
          alert("Mensaje enviado ✔");
          form.current.reset();
        },
        (error) => {
          alert("Error al enviar ❌");
          console.log(error);
        }
      );
  };

  return (
    <div
      className={`
        min-h-screen flex flex-col justify-center transition-colors duration-500
        ${darkMode ? "bg-black text-white" : "bg-white text-black"}
      `}
    >

      {/* CONTENIDO IMPORTANTE */}
     <div className="flex flex-col md:grid md:grid-cols-1 lg:grid-cols-2 gap-12 lg:m-15 md:m-15 m-8 items-center">

        
        <div className="flex flex-col lg:items-start md:items-center lg:ml-8">
          <h2 className="lg:text-7xl md:text-7xl font-bold text-5xl ">Contacto</h2>

          <p className={darkMode ? "text-gray-400 mt-8 lg:text-xl md:text-xl text-lg" : "text-gray-600 mt-8 lg:text-xl md:text-xl text-lg"}>
            ¿Tienes una idea, proyecto o colaboración en mente?
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-40 md:flex md:gap-25 justify-center">

          {/* Email + GitHub */}
          <div className="lg:space-y-15 md:space-y-15 space-y-8 mb-8 lg:mb-0 md:mb-0">

            <div className="flex items-center group sm:mb-10">
              <a href="mailto:luquecristina29@gmail.com">
                <SiGmail
                  className={`w-8 h-8 mr-4 ${darkMode ? "text-white" : "text-black"}`}
                />
              </a>

              <p className="relative text-md">
                luquecristina29@gmail.com
                <span className="absolute left-0 -bottom-1 h-1 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </p>
            </div>

            <div className="flex items-center group ">
              <FaGithub
                className={`w-8 h-8 mr-4 ${darkMode ? "text-white" : "text-black"}`}
              />

              <a
                href="https://github.com/Crixls"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block text-md"
              >
                GitHub
                <span className="absolute left-0 -bottom-1 h-1 w-0 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

          </div>

          {/* Cv + Linkedin */}
          <div className="lg:space-y-15 md:space-y-15 space-y-8 mb-8 lg:mb-0 md:mb-0">

            <div className="flex items-center group md:mb-9">
              <SiReaddotcv
                className={`w-8 h-8 mr-4 ${darkMode ? "text-white" : "text-black"}`}
              />

              <a href="/cv.pdf" className="relative inline-block text-md">
                Curriculum
                <span className="absolute left-0 -bottom-1 h-1 w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            <div className="flex items-center group">
              <FaLinkedin
                className={`w-8 h-8 mr-4 ${darkMode ? "text-white" : "text-black"}`}
              />

              <a
                href="https://www.linkedin.com/in/cristina-luque-santaella-6422b5315"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block text-md"
              >
                Linkedin
                <span className="absolute left-0 -bottom-1 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

          </div>

        </div>
      </div>

      <div className="relative w-full">

        <img
          src={bgImage}
          alt="proyectos"
          className="w-full lg:h-165 md:h-170 h-165 object-cover"
        />

        <div
          className={`
            absolute inset-0 flex items-center justify-center transition-colors duration-500
            // ${darkMode ? "bg-black/40" : "bg-white/20"}
          `}
        >

          <div
            className={`
              backdrop-blur-md p-8 rounded-2xl w-[80%] max-w-2xl
              transition-colors duration-500
              ${darkMode ? "bg-white/10 " : "bg-black/40 "}
            `}
          >

            <h2 className={`text-2xl font-bold mb-6 text-white
              `

            }>
              Envíame un correo
            </h2>

            {/* FORM */}
            <form ref={form} onSubmit={sendEmail} className="space-y-4">

              <input
                type="text"
                name="title"
                placeholder="Asunto"
                className={`
                  w-full p-3 rounded-lg bg-white/20 outline-none
                  placeholder:text-neutral-300 transition-colors duration-300
                `}
              />

              <input
                type="text"
                name="title"
                placeholder="Nombre"
                 className={`
                  w-full p-3 rounded-lg bg-white/20 outline-none
                  placeholder:text-neutral-300 transition-colors duration-300
                `}
              />

              <textarea
                name="message"
                 placeholder="Mensaje"
                 className={`
                  w-full p-3 rounded-lg bg-white/20 outline-none
                  placeholder:text-neutral-300 transition-colors duration-300
                `}
              />

              <input
                type="email"
                name="email"
                placeholder="Correo"
                 className={`
                  w-full p-3 rounded-lg bg-white/20 outline-none
                  placeholder:text-neutral-300 transition-colors duration-300
                `}
              />

              <button
                type="submit"
                className={`
                  px-6 py-2 rounded-lg transition
                  ${darkMode ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"}
                `}
              >
                Enviar
              </button>

            </form>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Contacto;