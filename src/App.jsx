import './index.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-indigo-950 text-gray-100 p-4 relative overflow-hidden">
    
      <div className="background-effect-circle"></div>
      <div className="background-effect-circle"></div>
      <div className="background-effect-circle"></div>
      <div className="background-effect-circle"></div>

      <main role="main" aria-label="Landing page de lançamento Club4Devs" className="z-10 flex flex-col items-center justify-center">
        <h1 className="font-['Montserrat'] font-extrabold text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4 tracking-widest select-none drop-shadow-xl animate-slide-in-top">
          Club4Devs
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed max-w-2xl px-4 text-center animate-fade-in-up">
          A plataforma de cursos para desenvolvedores está chegando. <br className="hidden sm:block"/> Tecnologia, qualidade e inovação.
        </p>
        <div className="flex justify-center gap-4 mt-4" aria-label="Carregando">
          <div className="w-4 h-4 rounded-full bg-teal-400 opacity-60 animate-pulse-dot animate-pulse-delay-0"></div>
          <div className="w-4 h-4 rounded-full bg-teal-400 opacity-60 animate-pulse-dot animate-pulse-delay-200"></div>
          <div className="w-4 h-4 rounded-full bg-teal-400 opacity-60 animate-pulse-dot animate-pulse-delay-400"></div>
        </div>
      </main>

      <footer className="absolute bottom-4 w-full text-center text-sm text-gray-500 font-mono select-none z-20">
        © 2025 Club4Devs - Todos os direitos reservados
      </footer>
    </div>
  );
}

export default App;