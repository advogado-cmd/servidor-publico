import {
  ScaleIcon,
  FileTextIcon,
  HeartIcon,
  TrendingUpIcon,
  UserCheckIcon,
  ShieldIcon,
  GavelIcon,
  ClockIcon,
} from "@/components/icons"

const services = [
  {
    Icon: GavelIcon,
    title: "Defesa em PAD",
    description:
      "Defesa técnica especializada em todas as fases do Processo Administrativo Disciplinar, incluindo sindicância e inquérito.",
    highlight: true,
  },
  {
    Icon: HeartIcon,
    title: "Licenças Médicas",
    description:
      "Recursos contra indeferimento de licenças médicas, readaptação funcional e aposentadoria por invalidez.",
    highlight: true,
  },
  {
    Icon: TrendingUpIcon,
    title: "Progressão de Carreira",
    description: "Ações para garantir progressão funcional, promoção e evolução na carreira conforme plano de cargos.",
  },
  {
    Icon: ScaleIcon,
    title: "Revisão de Aposentadoria",
    description: "Incorporação de gratificações, revisão de proventos e garantia de paridade para aposentados.",
  },
  {
    Icon: UserCheckIcon,
    title: "Reintegração ao Cargo",
    description: "Ações judiciais para reverter demissões ilegais e garantir a reintegração ao serviço público.",
  },
  {
    Icon: FileTextIcon,
    title: "Acúmulo de Cargos",
    description: "Parecer técnico e defesa em processos de acumulação de cargos públicos.",
  },
  {
    Icon: ShieldIcon,
    title: "Estabilidade",
    description: "Defesa contra exoneração em estágio probatório e garantia dos direitos durante o período.",
  },
  {
    Icon: ClockIcon,
    title: "Verbas Atrasadas",
    description: "Cobrança de gratificações, adicionais, horas extras e demais verbas não pagas.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Áreas de Atuação
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-6 text-balance">
            Serviços Especializados Para <span className="text-accent">Servidores Públicos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Atuação completa em todas as demandas do servidor público, seja federal, estadual ou municipal, ativo,
            aposentado ou pensionista.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 transition-all hover:-translate-y-1 ${
                service.highlight ? "bg-primary text-white shadow-xl" : "bg-secondary shadow-lg hover:shadow-xl"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${
                  service.highlight ? "bg-accent/20" : "bg-primary"
                }`}
              >
                <service.Icon className={`w-7 h-7 ${service.highlight ? "text-accent" : "text-accent"}`} />
              </div>
              <h3 className={`font-serif text-xl mb-3 ${service.highlight ? "text-white" : "text-primary"}`}>
                {service.title}
              </h3>
              <p className={`leading-relaxed ${service.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
