import { BookOpenCheckIcon, ShieldAlertIcon, GavelIcon } from "@/components/icons"

export function Protocol() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Nossa Metodologia
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-6 text-balance">
            Protocolo de Defesa do Servidor
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpenCheckIcon className="w-10 h-10 text-accent" />
            </div>
            <div className="text-accent font-bold text-sm mb-2">PASSO 1</div>
            <h3 className="font-serif text-xl text-primary mb-4">Análise Estatutária</h3>
            <p className="text-muted-foreground">
              Verificação profunda do Estatuto (8.112/90 ou locais) e da Constituição para identificar a ilegalidade do
              ato administrativo.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldAlertIcon className="w-10 h-10 text-accent" />
            </div>
            <div className="text-accent font-bold text-sm mb-2">PASSO 2</div>
            <h3 className="font-serif text-xl text-primary mb-4">Estratégia de Ação</h3>
            <p className="text-muted-foreground">
              Definição da via mais rápida e segura (Defesa em PAD, Recurso Administrativo ou Mandado de Segurança).
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <GavelIcon className="w-10 h-10 text-accent" />
            </div>
            <div className="text-accent font-bold text-sm mb-2">PASSO 3</div>
            <h3 className="font-serif text-xl text-primary mb-4">Atuação Corretiva</h3>
            <p className="text-muted-foreground">
              Busca pela anulação de atos ilegais, reintegração ao cargo ou concessão de benefícios
              financeiros/funcionais.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
