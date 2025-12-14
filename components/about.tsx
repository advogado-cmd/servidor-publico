import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AwardIcon, MapPinIcon, BriefcaseIcon, GraduationCapIcon } from "@/components/icons"

export function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl" />
            <Image
              src="/images/mesaboa.jpeg"
              alt="Dr. Carlos Fernando Lopes de Oliveira"
              width={500}
              height={600}
              className="relative rounded-2xl shadow-2xl object-cover w-full"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              O Professor de Direito
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-6 text-balance">
              Dr. Carlos Fernando Lopes de Oliveira
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Para enfrentar o Estado, é preciso conhecer a teoria do Estado. O Dr. Carlos Oliveira é{" "}
              <strong>Mestre em Ciências Jurídicas (UFPB)</strong> e Professor de Direito com passagem por instituições
              renomadas como UFPB, FIR e AESO.
            </p>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Sua bagagem acadêmica permite dissecar os Estatutos e a Constituição com profundidade técnica, enquanto
              sua prática advocatícia com <strong>mais de 19 anos de experiência</strong> garante a combatividade
              necessária para defender quem faz a máquina pública girar.
            </p>

            <blockquote className="border-l-4 border-accent bg-accent/10 p-4 mb-8 italic text-primary">
              "O Servidor Público exerce carreiras que desenvolvem a nação. Garantir seus direitos não é um favor, é um
              dever de justiça."
            </blockquote>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <GraduationCapIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary">Mestre em Ciências Jurídicas</p>
                  <p className="text-muted-foreground text-sm">Universidade Federal da Paraíba (UFPB)</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <BriefcaseIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary">+19 Anos de Experiência</p>
                  <p className="text-muted-foreground text-sm">Docente em UFPB, FIR e AESO</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <AwardIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary">OAB/SP 524.997 | OAB/PE 24.469</p>
                  <p className="text-muted-foreground text-sm">Ordem dos Advogados do Brasil</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary">Rua Loefgren, 1291</p>
                  <p className="text-muted-foreground text-sm">Vila Mariana, São Paulo - SP</p>
                </div>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-foreground font-semibold text-lg px-8 py-6"
            >
              <Link href="#contato">Solicitar Defesa Estatutária</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
