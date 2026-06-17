import { useState } from "react";
import { motion } from "framer-motion";
import { Star, MessageCircle, Scale, Briefcase, Landmark, Laptop, Clock, ShieldCheck, CheckCircle2, UserCheck, Shield, Heart, Monitor, FileText, DollarSign, Building2, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/5511958323722?text=Ol%C3%A1%2C%20vim%20do%20site!";

function gtagReportConversion(url: string) {
  const callback = () => { window.location.href = url; };
  (window as any).gtag?.('event', 'conversion', {
    send_to: 'AW-18180445744/qNQICJTHz7UcELCsjt1D',
    event_callback: callback,
  });
  return false;
}
const INSTAGRAM_LINK = "https://www.instagram.com/merces_advocacia/";
const LOGO_URL = "https://i.imgur.com/8fBF8HX.png";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  const [form, setForm] = useState({ nome: "", whatsapp: "", caso: "" });

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá! Vim pelo site e gostaria de uma avaliação inicial.\n\nNome: ${form.nome}\nWhatsApp: ${form.whatsapp}\nDescrição do caso: ${form.caso}`
    );
    const url = `https://wa.me/5511958323722?text=${msg}`;
    gtagReportConversion(url);
    window.open(url, "_blank");
  }

  return (
    <div className="min-h-[100dvh] flex flex-col w-full bg-background overflow-x-hidden">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <img
            src={LOGO_URL}
            alt="Merces Advocacia"
            className="h-12 w-auto object-contain"
          />
          <div className="flex items-center gap-3">
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/50 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); gtagReportConversion(WHATSAPP_LINK); }}>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-sm px-6 tracking-wide">
                Falar com Atendimento
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-20">

        {/* HERO SECTION */}
        <section className="hero-section relative overflow-hidden bg-background">

          {/* h1 ONLY — above the photo */}
          <div className="hero-h1-desktop container mx-auto px-6 w-full relative z-[2]" style={{ paddingTop: "16px", paddingBottom: "0" }}>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="font-serif font-bold leading-tight text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", maxWidth: "700px" }}
            >
              Advocacia estratégica para quem precisa de orientação, defesa e{" "}
              <em className="text-accent">luta árdua pelo seu direito!</em>
            </motion.h1>
          </div>

          {/* Partners photo */}
          <div className="hero-photo-desktop relative w-full z-[1]" style={{ height: "56vh", maxHeight: "520px", marginTop: "-120px" }}>
            <img
              src="https://i.imgur.com/pzyxyAt.jpg"
              alt=""
              aria-hidden="true"
              className="w-full h-full block"
              style={{ objectFit: "cover", objectPosition: "center 35%" }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 pointer-events-none"
              style={{
                height: "68%",
                background: "linear-gradient(to top, hsl(150 20% 5%) 0%, hsl(150 20% 5%) 10%, rgba(9,14,11,.9) 40%, transparent 100%)",
              }}
            />
          </div>

          {/* Badge, description and CTA — below the photo */}
          <div className="hero-bottom-desktop container mx-auto px-6 w-full relative z-[2]" style={{ paddingBottom: "72px" }}>
            <motion.div
              className="flex flex-col items-center text-center"
              style={{ maxWidth: "700px", margin: "0 auto" }}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeIn}
                className="inline-flex items-center gap-2 px-3 py-1.5 border border-accent/40 bg-accent/10 text-accent rounded-full text-sm font-medium tracking-widest uppercase"
                style={{ marginBottom: "24px" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Atendimento Jurídico Privado e Humanizado
              </motion.div>

              <motion.p
                variants={fadeIn}
                className="text-lg text-white/70 mb-10 leading-relaxed"
              >
                Se você busca segurança jurídica, atendimento direto e atuação técnica, está no lugar certo.
                Nosso escritório atua de forma consultiva e contenciosa, com foco em identificar a melhor
                solução para cada caso, proteger direitos e conduzir demandas com estratégia, clareza e eficiência.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col items-center gap-3">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); gtagReportConversion(WHATSAPP_LINK); }}>
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground h-14 px-8 text-lg rounded-sm font-semibold shadow-2xl shadow-accent/30 group"
                  >
                    <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Solicitar Análise Inicial
                  </Button>
                </a>
                {/* COMPLIANCE NOTICE — item 1 */}
                <p className="text-xs text-white/40 max-w-md leading-relaxed">
                  Serviço jurídico privado. Não temos vínculo com órgãos públicos, bancos, seguradoras, plataformas governamentais ou qualquer entidade oficial.
                </p>
              </motion.div>
            </motion.div>
          </div>

        </section>

        {/* DIVIDER LINE */}
        <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>

        {/* SOCIAL PROOF SECTION */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.div variants={fadeIn} className="flex items-center justify-center gap-1 mb-3 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-current" />
                ))}
              </motion.div>
              <motion.h2 variants={fadeIn} className="text-xl font-medium text-foreground">
                5,0 no Google
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  name: "Marcos Victor",
                  avatar: "https://i.imgur.com/AjxmqvX.jpg",
                  text: "Literalmente um advogado competente, atencioso, ajudou demais no meu caso. E sempre estava disponível para tirar qualquer dúvida que eu tivesse."
                },
                {
                  name: "Yara Grecco",
                  avatar: "https://i.imgur.com/ubtM3QT.jpg",
                  text: "Excelente profissional, um dos melhores que já conheci. Se precisarem de um advogado sem dúvidas indicarei o Tiago ❤️"
                },
                {
                  name: "Daiane Merces",
                  avatar: "https://i.imgur.com/UbnSAOV.jpg",
                  text: "Tive uma experiência incrível. Desde o primeiro contato demonstrou muita atenção, responsabilidade e domínio total do assunto. Tirou todas as minhas dúvidas e me manteve informada em cada etapa."
                },
                {
                  name: "Carlos Henrique Brito",
                  avatar: "https://i.imgur.com/2PA7qWjte.jpg",
                  text: "Levei dois problemas para o Dr. Tiago e nas duas ações obtivemos resultados favoráveis — uma contra o Estado e outra contra um banco. Profissional de alto nível!"
                }
              ].map((review, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeIn}
                  className="bg-background p-6 rounded-sm border border-border hover:border-accent/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-accent/30 shrink-0"
                    />
                    <div>
                      <p className="font-semibold text-foreground text-sm leading-tight mb-1">{review.name}</p>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-foreground/75 italic leading-relaxed text-sm">"{review.text}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

        {/* SERVICES SECTION */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">Especialidades</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Áreas de Atuação</h2>
              <div className="w-12 h-0.5 bg-accent mx-auto mb-6"></div>
              <p className="text-muted-foreground text-lg">
                Atendemos pessoas físicas e empresas em diferentes áreas do Direito, sempre com postura prática,
                objetiva e comprometida com a melhor orientação jurídica possível para cada situação.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Briefcase, title: "Direito do Trabalho", desc: "Ações trabalhistas contenciosas e consultivas, tanto pela reclamante quanto pela reclamada. Suporte em verbas rescisórias, jornada, rescisão contratual e consultoria preventiva." },
                { icon: Scale, title: "Direito Cível", desc: "Demandas bancárias, consumeristas e imobiliárias. Contratos, cobranças indevidas, posse, locação, compra e venda, usucapião e análise de indenizações." },
                { icon: Clock, title: "Direito Previdenciário", desc: "Consultoria e orientação jurídica em benefícios previdenciários, aposentadorias, auxílios, revisões e recursos administrativos e judiciais." },
                { icon: Shield, title: "Direito Policial Militar", desc: "Defesa técnica em PAD, Conselho de Justificação, Inquérito Policial Militar, Sindicância, Procedimento Disciplinar e ações fazendárias." },
                { icon: Landmark, title: "Direito Público", desc: "Defesa em sindicâncias, ações remuneratórias, demandas previdenciárias e indenizatórias envolvendo a Administração Pública, protegendo direitos do servidor." },
                { icon: Heart, title: "Direito Médico", desc: "Consultoria, prevenção de riscos e defesa em conflitos da área da saúde, com atenção à responsabilidade profissional e segurança jurídica na relação com pacientes." },
                { icon: Monitor, title: "Direito Digital", desc: "Fraudes virtuais, uso indevido de imagem, proteção de dados, exposição indevida, ofensas em redes sociais, privacidade e responsabilidade civil no meio digital." },
                { icon: FileText, title: "Direito Criminal", desc: "Defesa criminal técnica e sigilosa em inquéritos, ações penais, audiências, prisões, medidas cautelares e recursos. Atuação com atenção à urgência e à prova." },
                { icon: DollarSign, title: "Direito Tributário", desc: "Planejamento tributário, autuações, defesa administrativa e judicial, passivos fiscais e estratégias para redução de riscos e maior segurança jurídica." },
                { icon: Building2, title: "Direito Empresarial", desc: "Assessoramento jurídico de empresas: contratos, organização societária, acordos entre sócios, recuperação de crédito e planejamento para estabilidade e crescimento." }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeIn}
                  className="p-8 border border-border bg-card rounded-sm hover:border-accent/40 hover:shadow-lg transition-all duration-300 group cursor-default"
                >
                  <div className="h-12 w-12 border border-border rounded-sm flex items-center justify-center mb-6 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all">
                    <service.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold font-serif mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-card rounded-sm border border-accent/20">
                <Laptop className="h-5 w-5 text-accent" />
                <span className="font-medium text-foreground text-sm">Atendimento jurídico privado online, rápido e seguro em todo o Brasil.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>

        {/* DIFFERENTIALS SECTION */}
        <section className="py-24 bg-card relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle at 2px 2px, hsl(46 72% 52%) 1px, transparent 0)", backgroundSize: "32px 32px" }}>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.p variants={fadeIn} className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
                  Diferenciais
                </motion.p>
                <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">
                  Por que escolher a Merces Advocacia?
                </motion.h2>
                <motion.div variants={fadeIn} className="w-12 h-0.5 bg-accent mb-10"></motion.div>

                <div className="space-y-7">
                  {[
                    { icon: ShieldCheck, title: "Atuação consultiva e contenciosa" },
                    { icon: UserCheck, title: "Atendimento para pessoas físicas e empresas" },
                    { icon: CheckCircle2, title: "Foco em segurança jurídica e estratégia" },
                    { icon: MessageCircle, title: "Comunicação clara, estratégica e acessível" },
                    { icon: Laptop, title: "Compromisso com ética, técnica e eficiência" }
                  ].map((item, index) => (
                    <motion.div key={index} variants={fadeIn} className="flex items-center gap-5">
                      <div className="shrink-0 bg-accent/15 border border-accent/25 p-2.5 rounded-sm">
                        <item.icon className="h-5 w-5 text-accent" />
                      </div>
                      <p className="text-foreground/85 text-base">{item.title}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="relative"
              >
                <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-accent/60"></div>
                <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-accent/60"></div>

                <div className="bg-background p-10 border border-border">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-6">
                    O que você encontra no nosso atendimento:
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Avaliação inicial do caso",
                      "Análise processual estratégica",
                      "Orientação jurídica clara e objetiva",
                      "Defesa técnica em processos judiciais e administrativos",
                      "Atendimento direto, ágil e humanizado"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); gtagReportConversion(WHATSAPP_LINK); }} className="block">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-14 text-base rounded-sm font-semibold tracking-wide group">
                      <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      Falar com Atendimento
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CONTACT FORM SECTION */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-2xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.p variants={fadeIn} className="text-accent text-sm font-medium tracking-widest uppercase mb-3">Contato</motion.p>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Solicite uma Avaliação Inicial
              </motion.h2>
              <motion.div variants={fadeIn} className="w-12 h-0.5 bg-accent mx-auto mb-6"></motion.div>
              <motion.p variants={fadeIn} className="text-muted-foreground text-lg">
                Preencha os campos abaixo e entraremos em contato para uma análise inicial do seu caso.
                Cada situação será analisada individualmente.
              </motion.p>
            </motion.div>

            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              onSubmit={handleFormSubmit}
              className="bg-card border border-border rounded-sm p-8 space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Nome</label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  value={form.nome}
                  onChange={e => setForm(f => ({ ...f, nome: e.target.value }))}
                  className="w-full h-12 px-4 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">WhatsApp</label>
                <input
                  type="tel"
                  required
                  placeholder="(00) 00000-0000"
                  value={form.whatsapp}
                  onChange={e => setForm(f => ({ ...f, whatsapp: e.target.value }))}
                  className="w-full h-12 px-4 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Breve descrição do caso</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Descreva brevemente sua situação jurídica para que possamos fazer uma análise inicial..."
                  value={form.caso}
                  onChange={e => setForm(f => ({ ...f, caso: e.target.value }))}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent text-sm resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-14 text-base rounded-sm font-semibold tracking-wide group"
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Enviar meu Caso
              </Button>

              {/* Disclaimer below form — item 5 */}
              <div className="flex items-start gap-2 bg-background border border-border rounded-sm px-4 py-3">
                <AlertCircle className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Não solicitamos senhas, dados bancários, número de cartão ou códigos de verificação.
                  Seus dados serão usados apenas para contato e análise inicial do caso.
                </p>
              </div>
            </motion.form>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>

        {/* CLOSING CTA SECTION */}
        <section className="py-36 bg-background relative overflow-hidden text-center">
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeIn} className="mb-8 flex justify-center">
                <div className="border border-accent/30 p-4 rounded-sm bg-accent/10">
                  <CheckCircle2 className="h-10 w-10 text-accent" />
                </div>
              </motion.div>

              <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                Se você precisa de orientação jurídica, defesa em processo ou avaliação do seu caso, fale conosco.
              </motion.h2>

              <motion.p variants={fadeIn} className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                Estamos prontos para oferecer uma atuação estratégica, personalizada e voltada à melhor solução
                para o seu problema. Entre em contato e receba a orientação jurídica que o seu caso exige.
                Cada situação será analisada individualmente.
              </motion.p>

              <motion.div variants={fadeIn}>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); gtagReportConversion(WHATSAPP_LINK); }} className="block w-full sm:w-auto sm:inline-block">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground h-14 px-8 sm:px-12 text-base sm:text-xl rounded-sm font-semibold shadow-2xl shadow-accent/25 hover:scale-105 transition-transform duration-300 group w-full sm:w-auto justify-center"
                  >
                    <MessageCircle className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                    Solicitar Análise Inicial
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* AVISO DE TRANSPARÊNCIA — item 3 */}
        <section className="py-12 bg-card border-t border-border">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-2 mb-1">
                <Shield className="h-5 w-5 text-accent" />
                <h3 className="text-base font-bold font-serif text-foreground tracking-wide">Aviso de Transparência</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Este site pertence a um serviço jurídico privado e não possui vínculo com órgãos públicos, bancos,
                seguradoras, plataformas governamentais ou qualquer entidade oficial.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Não solicitamos senhas, dados bancários, número de cartão de crédito ou códigos de verificação
                por meio desta página. As informações enviadas são usadas apenas para contato e análise inicial do caso.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                O envio das informações não garante resultado, não substitui uma consulta jurídica completa e
                não cria obrigação de contratação.
              </p>
            </motion.div>
          </div>
        </section>

      </main>

      {/* FOOTER — item 6 */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
            <img
              src={LOGO_URL}
              alt="Merces Advocacia"
              className="h-10 w-auto object-contain"
            />
            <div className="flex flex-col gap-1 text-right">
              <a href="/politica-de-privacidade" className="text-sm text-accent hover:underline">Política de Privacidade</a>
            </div>
          </div>

          <div className="border-t border-border pt-8 space-y-3">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong className="text-foreground/60">Serviço jurídico privado.</strong> Este site não possui vínculo com órgãos públicos, bancos, seguradoras, plataformas governamentais ou qualquer entidade oficial.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Não solicitamos senhas, dados bancários, número de cartão ou códigos de verificação.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Os dados enviados são utilizados apenas para contato e análise inicial do caso.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Cada caso depende da análise individual da documentação, das provas e da legislação aplicável. Não garantimos resultados.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Informações profissionais do responsável pelo atendimento serão apresentadas durante o contato, quando aplicável.
            </p>
            <p className="text-xs text-muted-foreground pt-2">
              © {new Date().getFullYear()} Merces Advocacia. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => { e.preventDefault(); gtagReportConversion(WHATSAPP_LINK); }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute right-full mr-4 bg-card text-foreground border border-border px-4 py-2 rounded-sm shadow-xl text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Falar com atendimento
        </span>
      </a>

    </div>
  );
}
