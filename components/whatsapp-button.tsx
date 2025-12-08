import Link from "next/link"
import { MessageCircleIcon } from "@/components/icons"

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/5511930819577?text=Olá!%20Encontrei%20o%20escritório%20pelo%20site%20e%20gostaria%20de%20falar%20com%20um%20advogado%20especialista%20em%20servidores%20públicos."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircleIcon className="w-8 h-8 text-white" />
    </Link>
  )
}
