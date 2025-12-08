import { AlertOctagonIcon, FileCheckIcon, HeartPulseIcon, TrendingUpIcon } from "@/components/icons"

export function Scenarios() {
  const scenarios = [
    {
      icon: AlertOctagonIcon,
      title: "PAD e Sindicâncias",
      description: "Defesa técnica para evitar demissões injustas, suspensões ou cassação de aposentadoria.",
    },
    {
      icon: FileCheckIcon,
      title: "Concursos e Estágio Probatório",
      description: "Mandado de Segurança contra reprovações ilegais ou avaliações subjetivas no probatório.",
    },
    {
      icon: HeartPulseIcon,
      title: "Licenças e Saúde",
      description: "Garantia de licenças médicas, readaptação funcional e aposentadoria por invalidez negadas.",
    },
    {
      icon: TrendingUpIcon,
      title: "Carreira e Remuneração",
      description: "Ações para progressão funcional, desvio de função, assédio moral e pagamentos retroativos.",
    },
  ]

  return (
    <section id="cenarios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Áreas de Atuação
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-6 text-balance">
            Onde o Direito Administrativo lhe protege
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className="bg-primary rounded-2xl p-6 text-white hover:scale-105 transition-transform duration-300"
            >
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                <scenario.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-xl mb-3">{scenario.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{scenario.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
