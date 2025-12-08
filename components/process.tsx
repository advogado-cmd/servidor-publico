import { MessageSquareIcon, FileSearchIcon, FileTextIcon, GavelIcon, CheckCircleIcon } from "@/components/icons"

const steps = [
  {
    Icon: MessageSquareIcon,
    title: "Primeiro Contato",
    description: "Entre em contato pelo WhatsApp ou formulário. Ouviremos seu caso com atenção e sigilo.",
  },
  {
    Icon: FileSearchIcon,
    title: "Análise do Caso",
    description: "Estudamos documentos e informações para avaliar a viabilidade jurídica da sua demanda.",
  },
  {
    Icon: FileTextIcon,
    title: "Estratégia Jurídica",
    description: "Definimos a melhor estratégia de atuação, seja administrativa ou judicial.",
  },
  {
    Icon: GavelIcon,
    title: "Atuação Especializada",
    description: "Executamos a defesa dos seus direitos com técnica e dedicação em todas as instâncias.",
  },
  {
    Icon: CheckCircleIcon,
    title: "Acompanhamento",
    description: "Mantemos você informado sobre cada passo do processo até a resolução final.",
  },
]

export function Process() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Como Funciona
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-6 text-balance">
            Seu Processo Será <span className="text-accent">Tratado Com Excelência</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Entenda como conduzimos cada caso com transparência, ética e compromisso com os seus direitos.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-accent/30" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="bg-white rounded-xl p-6 shadow-lg relative z-10">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.Icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-foreground font-bold text-sm">{index + 1}</span>
                  </div>
                  <h3 className="font-serif text-lg text-primary mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
