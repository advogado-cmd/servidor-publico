"use client"

import { useState } from "react"
import { ChevronDownIcon } from "@/components/icons"

const faqs = [
  {
    question: "Posso sofrer retaliação se processar o órgão?",
    answer:
      "O direito de petição é constitucional (Art. 5º, XXXIV, CF). A lei pune a perseguição, e o Judiciário protege o servidor. Qualquer retaliação configura abuso de poder e pode ser combatida judicialmente.",
  },
  {
    question: "Fui reprovado no psicotécnico/exame médico. Tem recurso?",
    answer:
      "Sim. Exames subjetivos são frequentemente anulados na justiça. O Mandado de Segurança é uma ferramenta eficaz para reverter reprovações ilegais em concursos públicos.",
  },
  {
    question: "Posso constituir advogado em Processo Administrativo Disciplinar?",
    answer:
      "Deve. A Súmula Vinculante 5 não obriga, mas a defesa técnica é a única chance real de absolvição. A presença de advogado especializado aumenta significativamente as chances de sucesso no PAD.",
  },
  {
    question: "Mandado de Segurança é rápido?",
    answer:
      "Geralmente sim, pois tem prioridade de tramitação. É uma das vias mais céleres para garantir direitos líquidos e certos do servidor público.",
  },
  {
    question: "Minha licença médica foi negada. O que fazer?",
    answer:
      "A negativa de licença médica pode ser revertida judicialmente. É possível obter liminar para afastamento imediato enquanto o processo tramita, especialmente quando há laudo médico comprovando a necessidade.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-6 text-balance">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-secondary rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
              >
                <span className="font-semibold text-primary">{faq.question}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
