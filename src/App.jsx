import './index.css';
import { useState } from 'react'; 
import { Mail, Code, Users, Award, AlertTriangle, CheckCircle2 } from 'lucide-react';

function App() {

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Por favor, insira um e-mail válido.');
      return;
    }

    setStatus('loading');
    setMessage('');

    await new Promise(resolve => setTimeout(resolve, 2000));
    if (email.includes('fail')) { 
      setStatus('error');
      setMessage('Este e-mail não pôde ser registrado. Tente outro.');
    } else {
      setStatus('success');
      setMessage('Obrigado! Você está na lista de espera e será notificado no lançamento.');
    }
  };
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-indigo-950 text-gray-100 relative overflow-x-hidden">
      
      <div className="background-effect-circle"></div>
      <div className="background-effect-circle"></div>
      <div className="background-effect-circle"></div>
      <div className="background-effect-circle"></div>

      <main role="main" aria-label="Landing page de lançamento Club4Devs" className="z-10 flex flex-col items-center justify-center text-center p-4 min-h-screen">
        <h1 className="font-['Montserrat'] font-extrabold text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4 tracking-widest select-none drop-shadow-xl animate-slide-in-top">
          Club4Devs
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl px-4 animate-fade-in-up">
          A sua nova plataforma de cursos de programação está quase pronta. <br className="hidden sm:block"/> Aprenda com projetos reais e eleve sua carreira.
        </p>
        
        <div className="w-full max-w-lg mt-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          {status !== 'success' ? (
            <form onSubmit={handleSubmit}>
              <label htmlFor="email-input" className="sr-only">Seu melhor e-mail</label>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input 
                    id="email-input"
                    type="email" 
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-14 pl-12 pr-4 rounded-lg bg-gray-800/50 border border-gray-700 focus:ring-2 focus:ring-teal-400 focus:outline-none transition-all duration-300 placeholder-gray-500"
                    disabled={status === 'loading'}
                  />
                </div>
                <button 
                  type="submit" 
                  className="h-14 px-8 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Enviando...' : 'Entrar na lista'}
                </button>
              </div>
              {status === 'error' && (
                <p className="text-red-400 text-left mt-2 flex items-center gap-2">
                  <AlertTriangle size={16} /> {message}
                </p>
              )}
            </form>
          ) : (
            <div className="text-center bg-green-500/10 border border-green-500/30 text-green-300 text-lg p-6 rounded-lg flex flex-col items-center gap-4">
              <CheckCircle2 size={40} />
              <p>{message}</p>
            </div>
          )}
        </div>
      </main>

      <section id="features" className="w-full bg-gray-900/20 backdrop-blur-sm py-20 px-4 z-10">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-4">O que vem por aí?</h2>
          <p className="text-lg text-gray-400 text-center mb-12">Estamos criando uma experiência de aprendizado única.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <Code size={40} className="text-teal-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Projetos Reais</h3>
              <p className="text-gray-400">Aprenda construindo aplicações completas, do zero ao deploy.</p>
            </div>
            <div className="feature-card">
              <Users size={40} className="text-purple-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Comunidade</h3>
              <p className="text-gray-400">Conecte-se com outros devs, tire dúvidas e faça networking.</p>
            </div>
            <div className="feature-card">
              <Award size={40} className="text-pink-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Qualidade Premium</h3>
              <p className="text-gray-400">Conteúdo atualizado, com as melhores práticas do mercado.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full text-center p-6 text-gray-500 font-mono select-none z-10 bg-gray-900">
        © 2025 Club4Devs - Todos os direitos reservados
      </footer>
    </div>
  );
}

export default App;