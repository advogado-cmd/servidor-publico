import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircleIcon, AlertCircleIcon } from "@/components/icons"

const padRights = [
  "Direito ao contraditório e ampla defesa",
  "Acesso integral aos autos do processo",
  "Acompanhamento por advogado em todas as fases",
  "Produção de provas e oitiva de testemunhas",
  "Prazos legais respeitados",
  "Recurso contra decisão condenatória",
]

const padPhases = [
  {
    title: "Sindicância",
    description: "Fase investigativa para apuração preliminar dos fatos",
  },
  {
    title: "Instauração",
    description: "Abertura formal do PAD com portaria de designação",
  },
  {
    title: "Instrução",
    description: "Coleta de provas, depoimentos e documentos",
  },
  {
    title: "Defesa",
    description: "Apresentação de defesa escrita e provas pelo servidor",
  },
  {
    title: "Relatório",
    description: "Conclusão da comissão com proposta de penalidade",
  },
  {
    title: "Julgamento",
    description: "Decisão final pela autoridade competente",
  },
]

export function PadSection() {
  return (
    <section id="pad" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Destaque
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6 text-balance">
              Defesa Especializada em <span className="text-accent">Processo Administrativo Disciplinar (PAD)</span>
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              O PAD é o instrumento utilizado pela Administração Pública para investigar e punir servidores. Uma defesa
              técnica inadequada pode resultar em{" "}
              <strong className="text-accent">advertência, suspensão ou até demissão</strong>.
            </p>

            <div className="bg-white/10 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircleIcon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-white/90">
                  <strong className="text-accent">Atenção:</strong> Mesmo que você acredite ser inocente, a ausência de
                  defesa técnica especializada pode comprometer seu direito à ampla defesa e ao contraditório.
                </p>
              </div>
            </div>

            <h3 className="font-serif text-2xl text-white mb-4">Seus Direitos no PAD:</h3>
            <ul className="space-y-3 mb-8">
              {padRights.map((right, index) => (
                <li key={index} className="flex items-center gap-3 text-white/80">
                  <CheckCircleIcon className="w-5 h-5 text-accent flex-shrink-0" />
                  {right}
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-foreground font-semibold text-lg px-8 py-6"
            >
              <Link href="https://wa.me/5511930819577?text=Olá!%20Estou%20respondendo%20PAD%20e%20preciso%20de%20defesa%20técnica%20especializada.">
                Preciso de Defesa em PAD
              </Link>
            </Button>
          </div>

          {/* PAD Phases */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="font-serif text-2xl text-primary mb-6 text-center">
              Fases do Processo Administrativo Disciplinar
            </h3>
            <div className="space-y-4">
              {padPhases.map((phase, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-primary">{phase.title}</h4>
                    <p className="text-muted-foreground text-sm">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-accent/10 rounded-lg">
              <p className="text-primary text-sm text-center">
                <strong>Importante:</strong> A participação de advogado é essencial em todas as fases para garantir seus
                direitos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
