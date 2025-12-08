import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeartIcon, FileXIcon, RefreshCcwIcon, UserCheckIcon, StethoscopeIcon, ScaleIcon } from "@/components/icons"

const situations = [
  {
    Icon: FileXIcon,
    title: "Licença Médica Indeferida",
    description: "Recurso administrativo e judicial contra negativa de licença para tratamento de saúde.",
  },
  {
    Icon: StethoscopeIcon,
    title: "Contestação de Perícia",
    description: "Impugnação de laudo pericial divergente do diagnóstico do médico assistente.",
  },
  {
    Icon: RefreshCcwIcon,
    title: "Readaptação Funcional",
    description: "Direito à mudança de função quando há limitação permanente de capacidade.",
  },
  {
    Icon: UserCheckIcon,
    title: "Aposentadoria por Invalidez",
    description: "Aposentadoria para servidor com incapacidade permanente para o trabalho.",
  },
  {
    Icon: HeartIcon,
    title: "Licença por Doença em Família",
    description: "Afastamento para acompanhamento de cônjuge, filhos ou pais com doença grave.",
  },
  {
    Icon: ScaleIcon,
    title: "Reversão de Demissão",
    description: "Anulação de demissão por abandono de cargo quando havia doença incapacitante.",
  },
]

export function LicencasMedicas() {
  return (
    <section id="licencas" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Destaque
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-6 text-balance">
            Defesa em <span className="text-accent">Licenças Médicas Negadas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A negativa de licença médica pode trazer graves consequências ao servidor, incluindo faltas injustificadas e
            até abertura de PAD por abandono de cargo. Defendemos seu direito à saúde.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {situations.map((situation, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                <situation.Icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-xl text-primary mb-3">{situation.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{situation.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">Você Sabia?</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                A jurisprudência do <strong className="text-accent">Superior Tribunal de Justiça (STJ)</strong>{" "}
                reconhece que a existência de pedido de licença médica, mesmo que negado, pode afastar a caracterização
                de abandono de cargo, pois demonstra ausência de intenção de abandonar o serviço público.
              </p>
              <p className="text-white/80 leading-relaxed">
                Se você teve licença negada e está sendo processado por faltas, temos argumentos jurídicos sólidos para
                sua defesa.
              </p>
            </div>
            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-foreground font-semibold text-lg px-8 py-6"
              >
                <Link href="https://wa.me/5511930819577?text=Olá!%20Tive%20minha%20licença%20médica%20negada%20e%20preciso%20de%20orientação%20jurídica.">
                  Tive Licença Negada - Preciso de Ajuda
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
