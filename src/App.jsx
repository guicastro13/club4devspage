import React from 'react';
import './index.css'; // Importa os estilos globais e Tailwind

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-indigo-950 text-gray-100 p-4 relative overflow-hidden">
      <main role="main" aria-label="Landing page de lançamento Club4Devs" className="z-10 flex flex-col items-center justify-center">
        <h1 className="font-['Montserrat'] font-semibold text-6xl md:text-7xl lg:text-8xl text-teal-400 mb-4 tracking-wider select-none drop-shadow-lg">
          Club4Devs
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed max-w-2xl px-4">
          A plataforma de cursos para desenvolvedores está chegando. <br className="hidden sm:block"/> Tecnologia, qualidade e inovação.
        </p>
        <div className="flex justify-center gap-4 mt-4" aria-label="Carregando">
          <div className="w-4 h-4 rounded-full bg-teal-400 opacity-60 animate-pulse-delay-0"></div>
          <div className="w-4 h-4 rounded-full bg-teal-400 opacity-60 animate-pulse-delay-200"></div>
          <div className="w-4 h-4 rounded-full bg-teal-400 opacity-60 animate-pulse-delay-400"></div>
        </div>
      </main>

      <footer className="absolute bottom-4 w-full text-center text-sm text-gray-500 font-mono select-none z-20">
        © 2024 Club4Devs - Todos os direitos reservados
      </footer>
    </div>
  );
}

export default App;
