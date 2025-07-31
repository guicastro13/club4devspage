import { CheckCircle2 } from 'lucide-react';

function PricingSection() {
  const plans = [
    {
      name: 'Plano Mensal',
      price: '97',
      priceDecimal: ',00',
      frequency: '/mês',
      description: 'Acesso flexível, cancele quando quiser.',
      features: [
        'Acesso a todos os cursos atuais e futuros',
        'Projetos práticos para o portfólio',
        'Acesso à comunidade exclusiva no Discord/WhatsApp',
        'Sessões de mentoria e tira-dúvidas ao vivo',
        'Certificado de conclusão',
      ],
      buttonText: 'Assinar Plano Mensal',
      href: 'https://pay.hotmart.com/R99943237T',
      isPopular: false,
    },
    {
      name: 'Plano Anual',
      price: '936',
      priceDecimal: ',00',
      frequency: '/ano',
      description: 'O melhor custo-benefício para sua carreira.',
      features: [
        'Todos os benefícios do plano mensal',
        'Economize o valor de 2 meses',
        'Acesso prioritário a workshops',
        'Revisão de currículo e LinkedIn uma vez ao ano',
        'Acesso a conteúdo bônus exclusivo',
      ],
      buttonText: 'Assinar Plano Anual',
      href: 'https://pay.hotmart.com/V99942394M?bid=1751834954886',
      isPopular: true,
    },
  ];

  return (
    <section id="pricing" className="w-full bg-gray-900/30 backdrop-blur-sm py-16 md:py-24 px-4 z-10">
      <div className="container mx-auto max-w-5xl animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Escolha o Plano Ideal Para Você</h2>
        <p className="text-lg md:text-xl text-gray-400 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          Invista na sua carreira com um plano que se encaixa no seu ritmo e nos seus objetivos.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative bg-gray-800/70 p-8 rounded-2xl border transition-all duration-300 ${plan.isPopular ? 'border-2 border-teal-500 shadow-teal-500/20 shadow-2xl' : 'border-gray-700/80'}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 -translate-y-1/2 bg-teal-500 text-white font-semibold py-1 px-4 rounded-full text-sm tracking-wide">
                  MAIS POPULAR
                </div>
              )}
              
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-gray-100 mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-specific-blue text-5xl font-bold">R${plan.price}</span>
                  <span className="text-gray-200 text-3xl font-bold">{plan.priceDecimal}</span>
                  <span className="text-gray-400 font-medium ml-1">{plan.frequency}</span>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-teal-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center mt-auto block py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${plan.isPopular ? 'bg-teal-500 hover:bg-teal-600 text-white shadow-lg' : 'bg-gray-700 hover:bg-gray-600 text-gray-100'}`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection