import './index.css';
import { useEffect, useState } from 'react';
import {  Code, Menu, X, Users2, Zap, Network, ShieldCheck, TerminalSquare, Rocket, MessageSquare } from 'lucide-react';
import Gologo from './components/techs/Go';
import CsharpLogo from './components/techs/Csharp';
import PsqlLogo from './components/techs/Psql';
import NestLogo from './components/techs/Nest';
import PricingSection from './components/ItensVenda/itens';

function Header({ className, ...props }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); 
  };

  const navLinks = [
    { id: 'courses', label: 'Cursos' },
    { id: 'community', label: 'Comunidade' },
    { id: 'why-club4devs', label: 'Diferenciais' },
    { id: 'pricing', label: 'Planos' },
    { id: 'subscribe-form', label: 'Inscrever-se' },
  ];

  return (
    <header className={`bg-gray-900/50 backdrop-blur-lg p-4 fixed top-0 left-0 right-0 z-50 shadow-lg ${className}`}
      {...props}
    >
      <div className="container mx-auto flex justify-between items-center max-w-7xl px-4">
        <a href="/" aria-label="Club4Devs Home">
          <img 
            src="/images/versao_horizontal_dark.png" {...props}
            alt="Club4Devs Logo" 
            className="h-8 md:h-9"
          />
        </a>
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map(link => (
            <button 
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-sm font-medium" 
            >
              {link.label}
            </button>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu" className="text-gray-300 hover:text-teal-400">
            {isMenuOpen ? <X size={26}/> : <Menu size={26}/>}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md shadow-xl py-3">
          <nav className="flex flex-col items-center space-y-3">
            {navLinks.map(link => (
            <button 
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-200 hover:text-teal-400 transition-colors duration-300 py-2 text-base"
            >
              {link.label}
            </button>
          ))}
          </nav>
        </div>
      )}
    </header>
  );
}


function App() {
  // const [email, setEmail] = useState('');
  // const [status, setStatus] = useState('idle');
  // const [message, setMessage] = useState('');
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!email || !email.includes('@')) {
  //     setStatus('error');
  //     setMessage('Por favor, insira um e-mail válido.');
  //     return;
  //   }
  //   setStatus('loading');
  //   setMessage('');
  //   try {
  //     const response = await fetch('/api/subscribe', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ email: email }),
  //     });
  //     const data = await response.json();
  //     if (!response.ok) {
  //       setStatus('error');
  //       setMessage(data.message || 'Ocorreu um erro ao processar sua solicitação.');
  //     } else {
  //       setStatus('success');
  //       setMessage(data.message);
  //     }
  //   } catch (error) {
  //     console.error('Fetch error:', error);
  //     setStatus('error');
  //     setMessage('Não foi possível comunicar com o servidor. Tente novamente mais tarde.');
  //   }
  // };
  
  const courseCategories = [
    {
      icon: <Zap size={36} className="text-yellow-400" />,
      title: "Linguagens de Programação",
      description: "Golang, C#, TypeScript, SQL entre outros. Estamos sempre observando o mercado e trabalhando com as ferramentas mais requisitadas nas vagas de emprego.",
    },
    {
      icon: <TerminalSquare size={36} className="text-green-400" />,
      title: "Ferramentas Essenciais",
      description: "Aprenda Git, Docker, Copilot, RabbitMQ, Postgres, entre outras ferramentas que fazem parte do dia a dia do desenvolvedor.",
    },
    {
      icon: <Network size={36} className="text-blue-400" />,
      title: "Fundamentos e Protocolos",
      description: "Entenda HTTP, arquiteturas de software, e os pilares da computação moderna (Como filas e sistemas distribuidos).",
    },
    {
      icon: <Rocket size={36} className="text-red-400" />,
      title: "Desenvolvimento de Carreira",
      description: "Dicas, preparação para entrevistas e estratégias para alavancar sua carreira, workshopes com simulados de entrevistas e muito mais.",
    },
  ];

  const clubDiferenciais = [
    {
      icon: <Code size={40} className="text-teal-400 mb-4" />,
      title: "Projetos Práticos e Reais",
      description: "Aprenda construindo aplicações completas, do zero ao deploy, simulando o mercado, com praticas do dia-a-dia, como fazer modelagens de entregaveis, definindo escopo do projeto e aplicando conhecimento aprendido nas aulas.",
    },
    {
      icon: <ShieldCheck size={40} className="text-purple-500 mb-4" />,
      title: "Currículo Abrangente",
      description: "Conteúdo sempre atualizado com as melhores práticas e tecnologias demandadas. Esteja sempre atualizado com o mercado.",
    },
    {
      icon: <Users2 size={40} className="text-pink-500 mb-4" />,
      title: "Comunidade e Suporte",
      description: "Networking, suporte contínuo e uma comunidade para você nunca estudar sozinho. Tire duvidas com professores, encontros ao vivo para discutir temas e muito mais.",
    },
  ];


  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-indigo-950 text-gray-100 relative overflow-x-hidden">
      <Header className={`transition-transform duration-300 ease-in-out ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}/>

      <div className="background-effect-circle"></div>
      <div className="background-effect-circle"></div>
      <div className="background-effect-circle"></div>
      <div className="background-effect-circle"></div>

      <main className="flex-grow bg-gray-900 flex flex-col overflow-y-auto pt-16 md:pt-20">
  
  {/* Wrapper do Conteúdo Principal (cresce para empurrar os ícones para baixo) */}
  <div className="flex-grow flex flex-col items-center justify-center text-center pt-23 p-4 z-10">
    
    <h1 className="font-['Montserrat'] font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gray-100 mb-20 tracking-tight select-none drop-shadow-xl animate-slide-in-top">
      Club<span className="text-specific-blue">4</span>Devs
    </h1>
    
    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl px-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
      Sua jornada para se tornar um dev de destaque começa aqui. 
      <br className="hidden sm:block" /> 
      Venha para nosso Club, completo de cursos, projetos práticos e uma comunidade ativa.
    </p>
    
    {/* <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
      <button
        onClick={() => { const form = document.getElementById('subscribe-form'); if (form) form.scrollIntoView({ behavior: 'smooth' }); }}
        className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Entrar na Lista de Espera
      </button>
    </div> */}
  </div>

  <div className="w-full pb-10 sm:pb-12 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
    <div className="flex flex-wrap space-x-38 justify-center pt-20 items-center gap-x- sm:gap-x-12">
      
      <Gologo/>
      <CsharpLogo  />
      <NestLogo/>
      <PsqlLogo />

    </div>
  </div>

      </main>
      <section id="courses" className="w-full bg-gray-900/30 backdrop-blur-sm py-16 md:py-24 px-4 z-10">
        <div className="container mx-auto max-w-6xl animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Aqui no Club você vai dominar</h2>
          <p className="text-lg md:text-xl text-gray-400 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            De linguagens fundamentais a ferramentas avançadas e desenvolvimento de carreira, nosso clube é pensado para o seu aprendizado e sua confiança do que esta fazendo.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {courseCategories.map((category, index) => (
              <div key={index} className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/60 shadow-xl flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:border-teal-500">
                <div className="mb-5">{category.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-100">{category.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="w-full py-16 md:py-24 px-4 z-10"> 
        <div className="container mx-auto max-w-4xl text-center animate-fade-in-up">
          <div className="mb-6 flex justify-center">

            <MessageSquare size={60} className="text-emerald-400" /> 
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Faça Parte da Nossa <span className="text-emerald-400">Comunidade!</span></h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Conecte-se com instrutores e outros alunos, tire dúvidas em tempo real, participe de desafios, encontre parceiros para projetos e acelere seu aprendizado.
          </p>
          <a 
            href="https://chat.whatsapp.com/JuJhGdQvp0JLBFKq9OoBlU"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-10 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            <MessageSquare size={24} /> Entrar no grupo do WhatsApp
          </a>
        </div>
      </section>
      
      <section id="why-club4devs" className="w-full bg-gray-900/30 backdrop-blur-sm py-16 md:py-24 px-4 z-10">
        <div className="container mx-auto max-w-5xl animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Por Que Escolher o Club4Devs?</h2>
          <p className="text-lg md:text-xl text-gray-400 text-center mb-12 md:mb-16 max-w-3xl mx-auto">Nossa abordagem é focada em resultados práticos e no seu crescimento como desenvolvedor.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clubDiferenciais.map((item, index) => (
               <div key={index} className="feature-card"> 
                {item.icon}
                <h3 className="text-2xl font-semibold mb-2 text-gray-100">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      < PricingSection />

      {/* <section id="subscribe-form" className="w-full py-16 md:py-24 px-4 z-10">
        <div className="container mx-auto max-w-lg text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quase lá!</h2>
            <p className="text-lg text-gray-300 mb-8">Seja o primeiro a saber quando lançarmos. Inscreva-se para receber atualizações exclusivas e acesso antecipado.</p>
            <div className="w-full"> 
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
                        className="w-full h-14 pl-12 pr-4 rounded-lg bg-gray-800/50 border border-gray-700 focus:ring-2 focus:ring-teal-400 focus:outline-none transition-all duration-300 placeholder-gray-500 text-gray-100"
                        disabled={status === 'loading'}
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="h-14 px-8 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? 'Enviando...' : 'Entrar na lista VIP'}
                    </button>
                  </div>
                  {status === 'error' && (
                    <p className="text-red-400 text-left mt-3 flex items-center gap-2"> 
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
        </div>
      </section> */}



      <footer className="w-full text-center py-8 px-4 text-gray-400 font-['Montserrat'] text-sm select-none z-10 bg-gray-950 flex flex-col items-center gap-3">
        <img
            src="/images/versao_horizontal_dark.png" 
            alt="Club4Devs Mini Logo"
            className="h-7 mb-1" 
        />
        <p>© {new Date().getFullYear()} Club4Devs - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;