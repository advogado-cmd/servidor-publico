import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldIcon, ScaleIcon, AwardIcon } from "@/components/icons"

export function Hero() {
  return (
    <section className="pt-20 bg-primary min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              DEFESA ESTRATÉGICA DO SERVIDOR PÚBLICO
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6 text-balance">
              Você dedicou anos para passar no concurso e servir ao Estado. Vai aceitar calado quando seus direitos
              forem negados?
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
              Administrações públicas falham e cometem abusos. Seja em um{" "}
              <strong className="text-accent">PAD injusto</strong>, numa{" "}
              <strong className="text-accent">licença negada</strong> ou na falta de progressão, o medo de perseguição
              não pode ser maior que o seu direito. A Justiça existe para corrigir o que a via administrativa ignora.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-foreground font-semibold text-lg px-8 py-6"
              >
                <Link href="#contato">Analisar Meu Caso Estatutário</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 py-6 bg-transparent"
              >
                <Link href="#servicos">Conheça Nossos Serviços</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-2">
                  <ShieldIcon className="w-6 h-6 text-accent" />
                </div>
                <span className="text-white/80 text-sm">Atendimento Sigiloso</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-2">
                  <ScaleIcon className="w-6 h-6 text-accent" />
                </div>
                <span className="text-white/80 text-sm">Atuação Nacional</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-2">
                  <AwardIcon className="w-6 h-6 text-accent" />
                </div>
                <span className="text-white/80 text-sm">OAB/SP 524.997</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl" />
              <Image
                src="/images/dsc-5548-20-281-29.jpeg"
                alt="Dr. Carlos Fernando Lopes de Oliveira - Advogado Especialista em Servidor Público"
                width={500}
                height={600}
                className="relative rounded-2xl shadow-2xl object-cover"
                priority
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
                <p className="text-primary font-serif font-bold text-lg">Dr. Carlos Fernando Lopes de Oliveira</p>
                <p className="text-muted-foreground text-sm">OAB/SP 524.997 | OAB/PE 24.469</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
