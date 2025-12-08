import Link from "next/link"
import Image from "next/image"

const LOGO_LIGHT = "/images/ativo-2012.png"

export function Footer() {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Image
              src={LOGO_LIGHT || "/placeholder.svg"}
              alt="Dr. Oliveira Advocacia & Associados"
              width={180}
              height={54}
              className="h-12 w-auto mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              Advocacia especializada na defesa dos direitos dos servidores públicos federais, estaduais e municipais.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#servicos" className="text-white/70 hover:text-secondary transition-colors text-sm">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#pad" className="text-white/70 hover:text-secondary transition-colors text-sm">
                  Defesa em PAD
                </Link>
              </li>
              <li>
                <Link href="#licencas" className="text-white/70 hover:text-secondary transition-colors text-sm">
                  Licenças Médicas
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="text-white/70 hover:text-secondary transition-colors text-sm">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-white/70 hover:text-secondary transition-colors text-sm">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-white mb-4">Contato</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Rua Loefgren, 1291, Cj 72</li>
              <li>Vila Mariana, São Paulo - SP</li>
              <li>CEP 04040-030</li>
              <li className="pt-2">
                <Link href="tel:+5511930819577" className="hover:text-secondary transition-colors">
                  +55 (11) 93081-9577
                </Link>
              </li>
              <li>
                <Link href="mailto:contato@droliveira.adv.br" className="hover:text-secondary transition-colors">
                  contato@droliveira.adv.br
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-4">Redes Sociais</h4>
            <div className="flex flex-col gap-3">
              <Link
                href="https://www.instagram.com/droliveira.adv.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>@droliveira.adv.br</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/carlos-fernando-lopes-de-oliveira/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>LinkedIn</span>
              </Link>
              <Link
                href="https://www.droliveira.adv.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                <span>www.droliveira.adv.br</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Dr. Oliveira Advocacia & Associados. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/politica-de-privacidade"
                className="text-white/50 hover:text-secondary transition-colors text-sm"
              >
                Política de Privacidade
              </Link>
              <span className="text-white/30">|</span>
              <p className="text-white/50 text-sm">Dr. Carlos Fernando Lopes de Oliveira - OAB/SP 524.997</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
