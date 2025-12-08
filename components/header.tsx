"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MenuIcon, XIcon } from "@/components/icons"

const LOGO_LIGHT = "/images/ativo-2012.png"

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#pad", label: "Defesa em PAD" },
  { href: "#licencas", label: "Licenças Médicas" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src={LOGO_LIGHT || "/placeholder.svg"}
              alt="Dr. Oliveira Advocacia & Associados"
              width={200}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-secondary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-secondary hover:bg-accent text-primary hover:text-white font-bold">
              <Link href="https://wa.me/5511930819577?text=Olá!%20Encontrei%20o%20escritório%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.">
                Fale Conosco
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <XIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-secondary transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="bg-secondary hover:bg-accent text-primary hover:text-white font-bold w-full mt-2"
              >
                <Link href="https://wa.me/5511930819577?text=Olá!%20Encontrei%20o%20escritório%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.">
                  Fale Conosco
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
