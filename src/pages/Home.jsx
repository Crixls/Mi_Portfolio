import InteractiveGradient from "../components/InteractiveGradient";
import AsciiMove from "../components/AsciiMove";
import { Link } from 'react-router-dom'


const Home = () => {

  return (
<main className="w-full h-screen overflow-hidden">
      <section className="relative h-screen snap-start overflow-hidden bg-black">

        <InteractiveGradient />
        <AsciiMove />

        <div className="relative z-10 flex lg:h-200 md:h-200 h-150 items-center justify-center text-white">
          <div className="flex-col ">
            <div className="text-center">
              <div className="text-5xl mb-10 md:text-6xl lg:text-7xl font-black lg:flex md:flex">
                <div className="lg:mr-4 md:mr-4 ">Cristina</div>
                <div className="lg:mr-4 md:mr-4">Luque</div>
                <div >Santaella</div>            
              </div>
              <p className="mt-6 text-zinc-300 lg:text-2xl md:text-2xl text-lg">
                Código y arte en un mismo lenguaje
              </p>
            </div>
            <div className="lg:flex md:flex items-center justify-center m-10">
              <div className="flex h-full items-center justify-center m-6">
                <Link to="proyectos" className="rounded-2xl border border-white/10 bg-white/10 px-6 py-3 backdrop-blur-md 
                transition hover:bg-white/20">
                  Proyectos
                </Link>
              </div>
              <div className="flex h-full items-center justify-center m-6">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/10 px-6 py-3 backdrop-blur-md transition hover:bg-white/20"
                >
                  Descargar CV
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>

    
    </main>
  );
};

export default Home;