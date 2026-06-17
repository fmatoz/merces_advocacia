import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const LOGO_URL = "https://i.imgur.com/8fBF8HX.png";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-[100dvh] flex flex-col w-full bg-background overflow-x-hidden">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <a href="/">
            <img
              src={LOGO_URL}
              alt="Merces Advocacia"
              className="h-12 w-auto object-contain"
            />
          </a>
        </div>
      </header>

      <main className="flex-1 pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-accent/10 border border-accent/20 p-3 rounded-sm">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                  Política de Privacidade
                </h1>
              </div>

              <div className="w-12 h-0.5 bg-accent mb-10"></div>

              <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground text-base leading-relaxed">

                <p>
                  Esta Política de Privacidade explica como as informações enviadas pelos usuários por
                  meio deste site são coletadas, utilizadas e protegidas.
                </p>

                <div>
                  <h2 className="text-xl font-serif font-bold text-foreground mb-3">1. Dados coletados</h2>
                  <p>
                    Podemos coletar informações fornecidas voluntariamente pelo usuário, como nome,
                    WhatsApp e breve descrição do caso.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-serif font-bold text-foreground mb-3">2. Finalidade da coleta</h2>
                  <p>
                    Os dados são utilizados exclusivamente para contato, triagem, análise inicial e
                    eventual atendimento jurídico privado.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-serif font-bold text-foreground mb-3">3. Dados que não solicitamos</h2>
                  <p>
                    Não solicitamos senhas, dados bancários, número de cartão de crédito, códigos de
                    autenticação, códigos recebidos por SMS ou WhatsApp, nem qualquer informação que
                    não seja necessária para o primeiro contato.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-serif font-bold text-foreground mb-3">4. Compartilhamento de dados</h2>
                  <p>
                    Não vendemos nem compartilhamos dados pessoais dos usuários com terceiros para
                    fins comerciais.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-serif font-bold text-foreground mb-3">5. Segurança</h2>
                  <p>
                    Adotamos medidas razoáveis para proteger as informações enviadas, evitando acesso
                    não autorizado, uso indevido ou divulgação indevida.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-serif font-bold text-foreground mb-3">6. Direitos do usuário</h2>
                  <p>
                    O usuário pode solicitar a correção ou exclusão de seus dados pessoais a qualquer
                    momento pelo canal de contato disponível no site.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-serif font-bold text-foreground mb-3">7. Ausência de vínculo com entidades oficiais</h2>
                  <p>
                    Este site pertence a um serviço jurídico privado e não possui vínculo com órgãos
                    públicos, bancos, seguradoras, plataformas governamentais ou qualquer entidade oficial.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-serif font-bold text-foreground mb-3">8. Ausência de garantia de resultado</h2>
                  <p>
                    O envio de informações pelo site não garante resultado, não substitui consulta
                    jurídica completa e não cria obrigação de contratação. Cada caso depende de análise
                    individual.
                  </p>
                </div>

              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <a href="/" className="text-accent hover:underline text-sm">← Voltar ao site</a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Merces Advocacia — Serviço jurídico privado. Não temos vínculo com órgãos públicos ou entidades oficiais.
          </p>
        </div>
      </footer>
    </div>
  );
}
