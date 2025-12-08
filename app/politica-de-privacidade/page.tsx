import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidade | Dr. Oliveira Advocacia",
  description: "Política de Privacidade do Dr. Oliveira Advocacia - Advocacia especializada em servidores públicos.",
}

export default function PoliticaDePrivacidade() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="font-serif text-xl md:text-2xl text-white font-bold">Dr Oliveira</span>
            <span className="font-serif text-xl md:text-2xl text-accent">Advocacia</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="font-serif text-3xl md:text-4xl text-primary mb-8">Política de Privacidade</h1>

        <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
          <p className="text-sm text-foreground/60">
            Política de Privacidade do serviço advogado-servidor-publico.go.droliveira.adv.br
          </p>

          <p>
            Para receber informações sobre os seus dados pessoais, os propósitos e as partes de informação que são
            compartilhadas, entre em contato com o Proprietário.
          </p>

          <section className="mt-8">
            <h2 className="font-serif text-2xl text-primary mb-4">Proprietário e Controlador de Dados</h2>
            <p>Dr Oliveira Advocacia</p>
            <p>
              E-mail de contato do Proprietário:{" "}
              <a href="mailto:contato@droliveira.adv.br" className="text-primary hover:text-accent">
                contato@droliveira.adv.br
              </a>
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl text-primary mb-4">Tipos de Dados coletados</h2>
            <h3 className="font-serif text-xl text-primary mb-2">Uso de Dados e outros dados coletados</h3>
            <p>
              Detalhes completos sobre cada tipo de Dados Pessoais coletados são fornecidos nas seções dedicadas desta
              política de privacidade ou por textos explicativos específicos exibidos antes da coleta de Dados.
            </p>
            <p>
              Os Dados Pessoais poderão ser fornecidos livremente pelo Usuário, ou, no caso dos Dados de Utilização,
              coletados automaticamente ao se utilizar este Aplicativo.
            </p>
            <p>
              A menos que especificado diferentemente todos os Dados solicitados por este Aplicativo são obrigatórios e
              a falta de fornecimento destes Dados poderá impossibilitar este Aplicativo de fornecer os seus Serviços.
              Nos casos em que este Aplicativo afirmar especificamente que alguns Dados não forem obrigatórios, os
              Usuários ficam livres para deixarem de comunicar estes Dados sem nenhuma consequência para a
              disponibilidade ou o funcionamento do Serviço.
            </p>
            <p>
              Os Usuários que tiverem dúvidas a respeito de quais Dados Pessoais são obrigatórios estão convidados a
              entrar em contato com o Proprietário.
            </p>
            <p>
              Quaisquer usos de cookies – ou de outras ferramentas de rastreamento – por este Aplicativo ou pelos
              proprietários de serviços terceiros utilizados por este Aplicativo serão para a finalidade de fornecer os
              Serviços solicitados pelo Usuário, além das demais finalidades descritas no presente documento e na
              Política de Cookies.
            </p>
            <p>
              Os Usuários ficam responsáveis por quaisquer Dados Pessoais de terceiros que forem obtidos, publicados ou
              compartilhados através deste Serviço.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl text-primary mb-4">Modo e local de processamento dos Dados</h2>

            <h3 className="font-serif text-xl text-primary mb-2">Método de processamento</h3>
            <p>
              O Proprietário tomará as medidas de segurança adequadas para impedir o acesso não autorizado, divulgação,
              alteração ou destruição não autorizada dos Dados.
            </p>
            <p>
              O processamento dos Dados é realizado utilizando computadores e/ou ferramentas de TI habilitadas, seguindo
              procedimentos organizacionais e meios estritamente relacionados com os fins indicados. Além do
              Proprietário, em alguns casos, os Dados podem ser acessados por certos tipos de pessoas encarregadas,
              envolvidas com a operação deste Serviço (administração, vendas, marketing, administração legal do sistema)
              ou pessoas externas (como fornecedores terceirizados de serviços técnicos, carteiros, provedores de
              hospedagem, empresas de TI, agências de comunicação) nomeadas, quando necessário, como Processadores de
              Dados por parte do Proprietário. A lista atualizada destas partes pode ser solicitada ao Proprietário a
              qualquer momento.
            </p>

            <h3 className="font-serif text-xl text-primary mb-2 mt-6">Lugar</h3>
            <p>
              Os dados são processados nas sedes de operação dos Proprietários, e em quaisquer outros lugares onde as
              partes envolvidas com o processamento estiverem localizadas.
            </p>
            <p>
              Dependendo da localização do Usuário as transferências de dados poderão envolver a transferência dos Dados
              do Usuário para outro país que não seja o seu. Para descobrirem mais sobre o local de processamento de
              tais Dados transferidos os Usuários poderão verificar a seção contendo os detalhes sobre o processamento
              de Dados Pessoais.
            </p>

            <h3 className="font-serif text-xl text-primary mb-2 mt-6">Período de conservação</h3>
            <p>
              Salvo especificação em contrário neste documento, os Dados Pessoais serão tratados e armazenados pelo
              tempo necessário para as finalidades para as quais foram coletados, e poderão ser retidos por mais tempo
              em razão de qualquer obrigação legal aplicável ou com base no consentimento dos Usuários.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl text-primary mb-4">Política de Cookies</h2>
            <p>
              Este Aplicativo usa Rastreadores. Para saber mais, os Usuários poderão consultar a Política de Cookies.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl text-primary mb-4">Informações adicionais para usuários</h2>

            <h3 className="font-serif text-xl text-primary mb-2">Base jurídica para o processamento</h3>
            <p>
              O Proprietário poderá processar os Dados Pessoais relacionados ao Usuário se uma das hipóteses a seguir se
              aplicar:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>os Usuários tenham dado a sua anuência para uma ou mais finalidades específicas;</li>
              <li>
                o fornecimento dos Dados for necessário para o cumprimento de um contrato com o Usuário e/ou quaisquer
                obrigações pré-contratuais do mesmo;
              </li>
              <li>
                o processamento for necessário para o cumprimento de uma obrigação jurídica à qual o Proprietário
                estiver sujeito;
              </li>
              <li>
                o processamento estiver relacionado a uma tarefa que for executada no interesse público ou no exercício
                de uma autorização oficial na qual o Proprietário estiver investido;
              </li>
              <li>
                o processamento for necessário para a finalidade de interesses legítimos perseguidos pelo Proprietário
                ou por um terceiro.
              </li>
            </ul>
            <p className="mt-4">
              Em qualquer caso, o Proprietário colaborará de bom grado para esclarecer qual a base jurídica que se
              aplica ao processamento, e em especial se o fornecimento de Dados for um requisito obrigatório por força
              de lei ou contratual, ou uma exigência necessária para celebrar um contrato.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl text-primary mb-4">Mais informações sobre o tempo de retenção</h2>
            <p>
              Salvo especificação em contrário neste documento, os Dados Pessoais serão tratados e armazenados pelo
              tempo necessário para as finalidades para as quais foram coletados, e poderão ser retidos por mais tempo
              em razão de qualquer obrigação legal aplicável ou com base no consentimento dos Usuários.
            </p>
            <p className="mt-4">Portanto:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Os Dados Pessoais coletados para as finalidades relacionadas com a execução de um contrato entre o
                Proprietário e o Usuário serão conservados até que tal contrato tenha sido completamente cumprido.
              </li>
              <li>
                Os Dados Pessoais coletados para as finalidades relacionadas com os legítimos interesses do Proprietário
                serão conservados pelo tempo que for necessário para cumprir tais finalidades.
              </li>
              <li>
                O Proprietário poderá ter a permissão de conservar os Dados Pessoais por um prazo maior sempre que o
                Usuário tiver dado a sua autorização para tal processamento, enquanto tal autorização não tiver sido
                retirada.
              </li>
            </ul>
            <p className="mt-4">
              Assim que o prazo de conservação vencer os Dados Pessoais serão apagados. Desta forma o direito de
              acessar, o direito de apagar, o direito de corrigir e o direito à portabilidade dos dados não poderão ter
              o seu cumprimento exigido após o vencimento do prazo de conservação.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl text-primary mb-4">
              Os direitos dos Usuários com base no Regulamento Geral de Proteção de Dados (GDPR)
            </h2>
            <p>
              Os Usuários poderão exercer determinados direitos a respeito dos seus Dados processados pelo Proprietário.
              Em especial, os Usuários possuem os direitos a fazer o seguinte, dentro dos limites permitidos por lei:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Retirar a sua anuência a qualquer momento.</strong> Os Usuários possuem o direito de retirar a
                sua anuência nos casos em que tenham dado a sua anuência anteriormente para o processamento dos seus
                Dados Pessoais.
              </li>
              <li>
                <strong>Objetar o processamento dos seus Dados.</strong> Os Usuários possuem o direito de objetar o
                processamento dos seus Dados se o processamento for executado sobre outra base jurídica que não a
                anuência.
              </li>
              <li>
                <strong>Acessar os seus Dados.</strong> Os Usuários possuem o direito de saber se os seus Dados estão
                sendo tratados pelo Proprietário, obter revelações sobre determinados aspectos do tratamento e conseguir
                uma cópia dos Dados que estiverem sendo tratados.
              </li>
              <li>
                <strong>Verificar e pedir retificação.</strong> Os Usuários possuem o direito de verificar a exatidão
                dos seus Dados e de pedir que os mesmos sejam atualizados ou corrigidos.
              </li>
              <li>
                <strong>Restringir o processamento dos seus Dados.</strong> Os Usuários possuem o direito de restringir
                o processamento dos seus Dados para qualquer outra finalidade que não seja o armazenamento dos mesmos.
              </li>
              <li>
                <strong>Ter os seus Dados Pessoais apagados ou retirados de outra maneira.</strong> Os Usuários possuem
                o direito de obter a eliminação dos seus Dados do Proprietário.
              </li>
              <li>
                <strong>Receber os seus Dados e ter os mesmos transferidos para outro controlador.</strong> Os Usuários
                possuem o direito de receber os seus Dados em um formato estruturado, utilizado comumente e apto a ser
                lido por máquinas.
              </li>
              <li>
                <strong>Registrar uma reclamação.</strong> Os Usuários possuem o direito de apresentar reclamação
                perante a sua autoridade de proteção de dados competente.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl text-primary mb-4">
              Detalhes sobre o direito de objetar ao processamento
            </h2>
            <p>
              Nos casos em que os Dados Pessoais forem processados por um interesse público, no exercício de uma
              autorização oficial na qual o Proprietário estiver investido ou para finalidades dos interesses legítimos
              perseguidos pelo Proprietário, os Usuários poderão objetar tal processamento através do fornecimento de um
              motivo relacionado com a sua situação em especial para justificar a objeção.
            </p>
            <p className="mt-4">
              Os Usuários devem saber, entretanto, que caso os seus Dados Pessoais sejam processados para finalidades de
              marketing direto, eles podem objetar tal processamento a qualquer momento de forma gratuita e sem fornecer
              qualquer justificativa.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl text-primary mb-4">Como exercer estes direitos</h2>
            <p>
              Quaisquer solicitações para exercer os direitos do Usuário podem ser encaminhadas ao Proprietário por meio
              dos detalhes de contato fornecidos neste documento. Tais pedidos são gratuitos e serão atendidos pelo
              Proprietário com a maior brevidade possível e sempre no prazo de um mês, fornecendo aos Usuários as
              informações exigidas por lei.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl text-primary mb-4">
              Informações adicionais sobre a coleta e processamento de Dados
            </h2>

            <h3 className="font-serif text-xl text-primary mb-2">Ação jurídica</h3>
            <p>
              Os Dados Pessoais dos Usuários podem ser utilizados para fins jurídicos pelo Proprietário em juízo ou nas
              etapas conducentes à possível ação jurídica decorrente de uso indevido deste Serviço ou dos Serviços
              relacionados. O Usuário declara estar ciente de que o Proprietário poderá ser obrigado a revelar os Dados
              Pessoais mediante solicitação das autoridades governamentais.
            </p>

            <h3 className="font-serif text-xl text-primary mb-2 mt-6">Logs do sistema e manutenção</h3>
            <p>
              Para fins de operação e manutenção, este Aplicativo e quaisquer serviços de terceiros poderão coletar
              arquivos que gravam a interação com este Aplicativo (logs do sistema) ou usar outros Dados Pessoais (tais
              como endereço IP) para esta finalidade.
            </p>

            <h3 className="font-serif text-xl text-primary mb-2 mt-6">As informações não contidas nesta política</h3>
            <p>
              Mais detalhes sobre a coleta ou processamento de Dados Pessoais podem ser solicitados ao Proprietário, a
              qualquer momento. Favor ver as informações de contato no início deste documento.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-serif text-2xl text-primary mb-4">Mudanças nesta política de privacidade</h2>
            <p>
              O Proprietário se reserva o direito de fazer alterações nesta política de privacidade a qualquer momento,
              através de notificação a seus Usuários nesta página e possivelmente dentro deste Serviço e/ou – na medida
              em que for técnica e juridicamente viável – enviando um aviso para os Usuários através de quaisquer
              informações de contato disponíveis para o Proprietário.
            </p>
            <p className="mt-4">
              É altamente recomendável checar esta página regularmente, consultando a data da última modificação
              informada na parte inferior.
            </p>
            <p className="mt-4">
              Caso as mudanças afetem as atividades de processamento realizadas com base na anuência do Usuário, o
              Proprietário coletará nova anuência do Usuário, onde for exigida.
            </p>
          </section>

          <section className="mt-8 pt-8 border-t border-foreground/10">
            <p className="text-sm text-foreground/60">
              Última atualização:{" "}
              {new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
            </p>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-12">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors">
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
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Voltar para a página inicial
          </Link>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="bg-primary py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Dr. Oliveira Advocacia. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}
