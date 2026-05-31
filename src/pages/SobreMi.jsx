import { useRef } from "react";
import ascii from "../assets/ascii_art.png";
import hands from "../assets/hands.jpg";
import { useOutletContext } from "react-router-dom";

const sections = [
  {
    title: "Arte, narrativa y sensibilidad visual",
    label: "Origen",
    text: [
      "Desde pequeña me ha interesado el arte como forma de comunicación y expresión. Ese interés me llevó a estudiar Bellas Artes, donde desarrollé una mirada más analítica sobre la composición, la estética y la narrativa visual.",
      "Con el tiempo entendí que diseñar no consiste solo en hacer algo visualmente atractivo, sino en crear experiencias capaces de transmitir una intención.",
    ],
    video: "/aqua.mp4",
    image: hands,
    alt: "hands",
    reverse: false,
  },
  {
    title: "Diseño y desarrollo en un mismo espacio",
    label: "Actualidad",
    text: [
      "Después de terminar la carrera decidí orientar mi perfil hacia el desarrollo web, buscando un entorno donde poder unir creatividad y tecnología.",
      "Estudiar Desarrollo de Aplicaciones Web me permitió transformar mi interés por el diseño en productos interactivos, combinando lógica, experiencia de usuario y dirección visual dentro de un mismo proceso.",
    ],
    video: "/video.mp4",
    image: ascii,
    alt: "ascii",
    reverse: true,
  },
];

const StorySection = ({
  title,
  label,
  text,
  video,
  image,
  alt,
  reverse,
  darkMode,
}) => {
  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) videoRef.current.play();
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section
      className={`min-h-screen grid grid-cols-1 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >

      <div
        className="relative overflow-hidden group"
        onMouseEnter={playVideo}
        onMouseLeave={pauseVideo}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover lg:opacity-40 md:opacity-40 opacity-70 group-hover:opacity-70 transition-all duration-700 scale-100 group-hover:scale-105"
        >
          <source src={video} type="video/mp4" />
        </video>

        <div className="absolute inset-0 z-10 bg-linear-to-br from-black/30 via-black/10 to-black/70" />

        {/* Imagen */}
        
        <div className="relative z-20 flex items-center justify-center h-full p-10">
          <img
            src={image}
            alt={alt}
                    className="
              max-w-[85%] max-h-[85%] lg:max-w-[70%] lg:max-h-[70%]
              md:max-w-[70%] md:max-h-[70%]
              object-contain
              opacity-100 lg:opacity-60

              lg:group-hover:opacity-100
              lg:group-hover:scale-[1.02]

              transition-all duration-700
            "    
          />
        </div>
      </div>

      <div
        className={`
          flex items-center justify-center px-8 py-24 lg:px-20
          transition-colors duration-500
          ${darkMode ? "bg-black" : "bg-white"}
        `}
      >
        <div className="max-w-xl space-y-8">

          <span className="text-md uppercase tracking-[0.35em] text-neutral-500">
            {label}
          </span>

          <h2
            className={`
              text-4xl lg:text-6xl font-light leading-tight transition-colors duration-500
              ${darkMode ? "text-white" : "text-black"}
            `}
          >
            {title}
          </h2>

          <div className="space-y-6">
            {text.map((paragraph, index) => (
              <p
                key={index}
                className={`
                  text-xl leading-relaxed transition-colors duration-500
                  ${darkMode ? "text-neutral-300" : "text-neutral-700"}
                `}
              >
                {paragraph}
              </p>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

const SobreMi = () => {
  const { darkMode } = useOutletContext();

  return (
    <main className="w-full overflow-hidden transition-colors duration-500">
      {sections.map((section, index) => (
        <StorySection
          key={index}
          {...section}
          darkMode={darkMode}
        />
      ))}
    </main>
  );
};

export default SobreMi;