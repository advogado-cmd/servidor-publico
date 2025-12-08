import { AlertTriangleIcon, FileXIcon, ClockIcon, BanIcon, UserXIcon, BriefcaseIcon } from "@/components/icons"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const problems = [
  {
    Icon: AlertTriangleIcon,
    title: "Respondendo PAD?",
    description:
      "Está sendo investigado ou processado em Processo Administrativo Disciplinar e precisa de defesa técnica?",
  },
  {
    Icon: FileXIcon,
    title: "Licença Médica Negada?",
    description: "Teve sua licença para tratamento de saúde indeferida pela perícia mesmo com laudos médicos?",
  },
  {
    Icon: ClockIcon,
    title: "Progressão Atrasada?",
    description: "A Administração não está respeitando seu direito à progressão funcional ou promoção na carreira?",
  },
  {
    Icon: BanIcon,
    title: "Demissão Injusta?",
    description: "Foi demitido ou está em risco de perder o cargo sem o devido processo legal?",
  },
  {
    Icon: UserXIcon,
    title: "Desvio de Função?",
    description: "Está exercendo atividades diferentes das atribuições do seu cargo sem a devida compensação?",
  },
  {
    Icon: BriefcaseIcon,
    title: "Direitos Não Pagos?",
    description: "Gratificações, adicionais ou verbas salariais que não estão sendo pagas corretamente?",
  },
]

export function Problems() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Identificação do Problema
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-6 text-balance">
            Você Está Passando Por Alguma <span className="text-accent">Dessas Situações?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Servidores públicos frequentemente têm seus direitos lesados pela Administração Pública. Se você se
            identifica com algum desses problemas, podemos ajudá-lo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-accent"
            >
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                <problem.Icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-xl text-primary mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-foreground font-semibold text-lg px-8 py-6"
          >
            <Link href="https://wa.me/5511930819577?text=Olá!%20Estou%20passando%20por%20um%20problema%20como%20servidor%20público%20e%20preciso%20de%20orientação%20jurídica.">
              Fale Com Um Especialista Agora
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
