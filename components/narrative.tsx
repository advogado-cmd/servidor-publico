export function Narrative() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Entenda o Cenário
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-8 text-balance">
            O Estado é forte, mas a Lei é maior.
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="font-serif text-xl text-primary mb-2">Sua Expectativa</h3>
              <p>
                Você estudou, passou e assumiu o cargo esperando que o ente público (seja União, Estado ou Município)
                seguisse a lei à risca, respeitando sua estabilidade e carreira.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="font-serif text-xl text-primary mb-2">O Que Está Acontecendo Com Você...</h3>
              <p>
                A realidade administrativa é outra. Negativas automáticas de direitos, perseguições veladas em estágios
                probatórios, ou Processos Administrativos (PADs) abertos sem justa causa. Muitos servidores evitam
                judicializar por receio de "marcar" a carreira.
              </p>
            </div>

            <div className="bg-secondary/20 border-l-4 border-secondary p-6 rounded-r-lg">
              <h3 className="font-serif text-xl text-primary mb-2">A Solução Jurídica</h3>
              <p>
                <strong>Esse é o erro crucial.</strong> O Judiciário é o guardião dos seus direitos estatutários. Com a
                estratégia correta — muitas vezes via <strong>Mandado de Segurança</strong> — é possível reverter abusos
                sem se expor desnecessariamente, garantindo o respeito que sua função merece.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
