import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Hammer, Menu, X, Calendar, Wallet, Users, 
  ChevronRight, ArrowRight, Star, Instagram, Linkedin, Mail, CheckCircle2, CircleDashed
} from "lucide-react";
import { CountUp } from "@/components/CountUp";
import { AppStoreBadge, PlayStoreBadge } from "@/components/Badges";
import { cn } from "@/lib/utils";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="bg-primary/10 p-1.5 rounded-lg">
              <Hammer className="w-5 h-5 text-primary" />
            </div>
            <span className="font-extrabold text-xl text-foreground tracking-tight">Minha Obra</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 bg-card/80 backdrop-blur px-6 py-2.5 rounded-full border border-border shadow-sm">
            {[
              { name: "Início", id: "hero" },
              { name: "Funcionalidades", id: "funcionalidades" },
              { name: "Como Funciona", id: "como-funciona" },
              { name: "Depoimentos", id: "depoimentos" }
            ].map((item) => (
              <button 
                key={item.name} 
                onClick={() => scrollTo(item.id)}
                className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <button 
              onClick={() => scrollTo("cta")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-lg font-bold text-sm transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              Baixar App
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-card border-b border-border shadow-xl p-5 flex flex-col gap-4 md:hidden">
            {[
              { name: "Início", id: "hero" },
              { name: "Funcionalidades", id: "funcionalidades" },
              { name: "Como Funciona", id: "como-funciona" },
              { name: "Depoimentos", id: "depoimentos" }
            ].map((item) => (
              <button 
                key={item.name} 
                onClick={() => scrollTo(item.id)}
                className="text-left text-lg font-semibold text-foreground py-2 border-b border-border/50"
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => scrollTo("cta")}
              className="mt-2 bg-primary text-primary-foreground w-full py-3 rounded-xl font-bold"
            >
              Baixar App Grátis
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[100svh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          {/* landing page hero scenic construction site modern home */}
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80&auto=format&fit=crop" 
            alt="Construção residencial" 
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20 lg:to-transparent" />
        </div>

        <div className="max-w-[1200px] mx-auto px-5 md:px-20 w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 pt-12 md:pt-0">
          <motion.div 
            className="max-w-2xl lg:max-w-xl flex-shrink-0"
            initial="hidden" animate="visible" variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 px-3 py-1.5 rounded-full mb-6">
              <span className="text-[10px] font-extrabold text-primary uppercase tracking-[1px]">Gestão de Obras</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-4xl md:text-[56px] leading-[1.1] font-extrabold text-foreground mb-6 text-balance tracking-tight">
              Sua obra na <span className="text-primary">palma da mão.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl font-medium text-muted-foreground mb-10 text-balance leading-relaxed">
              Acompanhe etapas, controle custos e gerencie sua equipe — tudo em um único app. Feito para o construtor brasileiro.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <AppStoreBadge />
              <PlayStoreBadge />
            </motion.div>
          </motion.div>

          {/* Floating Widget */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
            className="bg-card border border-border p-5 rounded-2xl shadow-2xl shadow-black/10 w-full max-w-[320px] lg:mt-[200px] lg:self-end"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-xl">
                🏗️
              </div>
              <div>
                <h3 className="font-bold text-sm text-foreground">Casa Alto da Boa Vista</h3>
                <p className="text-xs font-medium text-muted-foreground">Etapa: Alvenaria • 47%</p>
              </div>
            </div>
            
            <div className="w-full bg-secondary h-2 rounded-full overflow-hidden mb-4">
              <motion.div 
                initial={{ width: 0 }} animate={{ width: "47%" }} 
                transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                className="bg-primary h-full rounded-full" 
              />
            </div>
            
            <button className="flex items-center justify-between w-full text-xs font-bold text-primary hover:bg-primary/5 px-2 py-1.5 rounded-lg transition-colors">
              <span>Abrir no app</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-card border-y border-border py-12 md:py-16 relative z-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x-0 md:divide-x divide-border">
            {[
              { value: 500, suffix: "+", label: "Obras gerenciadas" },
              { value: 2000, suffix: "+", label: "Etapas concluídas" },
              { value: 15, prefix: "R$ ", suffix: "M+", label: "Em custos rastreados" },
              { value: 4.8, suffix: " ★", label: "Nota nas lojas", isFloat: true }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-3xl md:text-[40px] font-bold text-primary font-mono mb-2 flex items-center">
                  {stat.prefix}
                  <CountUp 
                    from={0} 
                    to={stat.value} 
                    duration={2.5} 
                    format={v => stat.isFloat ? v.toFixed(1) : Math.floor(v).toString()} 
                  />
                  {stat.suffix}
                </div>
                <div className="text-xs md:text-[13px] font-bold text-muted-foreground uppercase tracking-[1.4px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="funcionalidades" className="py-20 md:py-32 bg-background">
        <div className="max-w-[1200px] mx-auto px-5 md:px-20">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tudo que você precisa para gerenciar sua obra</h2>
            <p className="text-lg text-muted-foreground font-medium">Do planejamento à entrega das chaves, ferramentas simples para quem não tem tempo a perder.</p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Etapas & Cronograma",
                desc: "Divida sua obra em etapas claras. Acompanhe o progresso de cada fase com fotos, anotações e cronograma atualizado.",
                icon: Calendar,
                color: "text-blue-500",
                bg: "bg-blue-500/10"
              },
              {
                title: "Controle de Custos",
                desc: "Registre despesas por etapa e categoria. Visualize seus gastos com gráficos e saiba exatamente para onde está indo cada real.",
                icon: Wallet,
                color: "text-orange-500",
                bg: "bg-orange-500/10"
              },
              {
                title: "Equipe & Colaboração",
                desc: "Convide arquitetos, engenheiros e profissionais. Controle permissões para que cada membro veja apenas o que precisa.",
                icon: Users,
                color: "text-green-500",
                bg: "bg-green-500/10"
              }
            ].map((feat, i) => (
              <motion.div 
                key={i} variants={fadeIn}
                className="bg-card border border-border rounded-[20px] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-default flex flex-col h-full"
              >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6", feat.bg, feat.color)}>
                  <feat.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feat.title}</h3>
                <p className="text-[15px] font-medium text-muted-foreground leading-relaxed flex-grow">
                  {feat.desc}
                </p>
                <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-sm font-bold text-primary">Saiba mais</span>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* App Showcase Mockups */}
      <section id="showcase" className="py-20 md:py-32 bg-card border-y border-border overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 md:px-20 mb-16 text-center">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Veja o app em ação
          </motion.h2>
          <motion.p 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="text-lg text-muted-foreground font-medium"
          >
            Interface intuitiva, feita para quem constrói e não quer complicações.
          </motion.p>
        </div>

        {/* Scrollable container for mobile */}
        <div className="w-full overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="flex md:grid md:grid-cols-3 gap-8 px-5 md:px-20 max-w-[1200px] mx-auto w-max md:w-auto"
          >
            {/* Phone 1: Home */}
            <motion.div variants={fadeIn} className="flex flex-col items-center snap-center">
              <div className="w-[280px] h-[560px] rounded-[32px] border-[6px] border-foreground bg-background shadow-2xl relative overflow-hidden flex flex-col p-4">
                <div className="absolute top-0 inset-x-0 h-6 bg-foreground rounded-b-xl mx-16 z-20" /> {/* Notch */}
                
                {/* Mock UI */}
                <div className="mt-8 mb-4">
                  <div className="text-xs font-medium text-muted-foreground">Boa tarde,</div>
                  <div className="text-xl font-bold text-foreground">Ricardo</div>
                </div>
                
                <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm flex-shrink-0">
                  <div className="h-24 bg-gradient-to-br from-orange-200 to-amber-100 flex items-center justify-center text-3xl">
                    🏡
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-foreground text-sm">Casa Alto da Boa Vista</h4>
                    <div className="flex justify-between items-center mt-3 mb-1">
                      <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Progresso</span>
                      <span className="text-[10px] font-bold text-primary font-mono">47%</span>
                    </div>
                    <div className="w-full bg-secondary h-1.5 rounded-full">
                      <div className="bg-primary h-full rounded-full w-[47%]" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4 flex-shrink-0">
                  <div className="bg-card border border-border p-3 rounded-xl flex flex-col gap-2 shadow-sm">
                    <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center text-blue-600"><Calendar className="w-4 h-4"/></div>
                    <span className="text-[11px] font-bold">Etapas</span>
                  </div>
                  <div className="bg-card border border-border p-3 rounded-xl flex flex-col gap-2 shadow-sm">
                    <div className="bg-orange-100 w-8 h-8 rounded-full flex items-center justify-center text-orange-600"><Wallet className="w-4 h-4"/></div>
                    <span className="text-[11px] font-bold">Custos</span>
                  </div>
                </div>
                
                <div className="mt-4 flex-grow">
                  <h5 className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-2">Próximas Tarefas</h5>
                  <div className="flex items-start gap-3 bg-card p-3 rounded-xl border border-border shadow-sm">
                    <CircleDashed className="w-4 h-4 text-muted-foreground mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-foreground">Comprar cimento</div>
                      <div className="text-[10px] text-muted-foreground">Etapa: Alvenaria</div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="mt-6 text-center">
                <h4 className="font-bold text-foreground text-lg">Visão geral da obra</h4>
                <p className="text-sm font-medium text-muted-foreground mt-1">Acompanhe tudo em um só lugar</p>
              </div>
            </motion.div>

            {/* Phone 2: Stages */}
            <motion.div variants={fadeIn} className="flex flex-col items-center snap-center">
              <div className="w-[280px] h-[560px] rounded-[32px] border-[6px] border-foreground bg-background shadow-2xl relative overflow-hidden flex flex-col">
                <div className="absolute top-0 inset-x-0 h-6 bg-foreground rounded-b-xl mx-16 z-20" />
                
                <div className="p-4 pt-12 bg-card border-b border-border shadow-sm z-10 flex items-center justify-between">
                  <h4 className="font-bold text-foreground text-lg">Cronograma</h4>
                  <div className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">+</div>
                </div>
                
                <div className="p-4 flex flex-col gap-3 flex-grow overflow-hidden bg-background">
                  {/* Done stage */}
                  <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm flex">
                    <div className="w-1.5 bg-green-500 flex-shrink-0" />
                    <div className="p-3 flex-grow">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-bold text-sm text-foreground">Fundação</span>
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      </div>
                      <span className="text-[11px] font-medium text-muted-foreground">100% Concluído</span>
                    </div>
                  </div>
                  
                  {/* Active stage */}
                  <div className="bg-card rounded-xl border border-blue-500/30 overflow-hidden shadow-md flex ring-1 ring-blue-500/10">
                    <div className="w-1.5 bg-blue-500 flex-shrink-0" />
                    <div className="p-3 flex-grow">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-bold text-sm text-foreground">Alvenaria</span>
                        <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">EM ANDAMENTO</span>
                      </div>
                      <span className="text-[11px] font-medium text-muted-foreground">Previsão: 15 Out</span>
                      <div className="w-full bg-secondary h-1.5 rounded-full mt-2">
                        <div className="bg-blue-500 h-full rounded-full w-[60%]" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Pending stage */}
                  <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm flex opacity-60">
                    <div className="w-1.5 bg-slate-300 flex-shrink-0" />
                    <div className="p-3 flex-grow">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-bold text-sm text-foreground">Telhado</span>
                        <span className="text-[10px] font-bold text-slate-500">PENDENTE</span>
                      </div>
                      <span className="text-[11px] font-medium text-muted-foreground">Aguardando início</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <h4 className="font-bold text-foreground text-lg">Etapas detalhadas</h4>
                <p className="text-sm font-medium text-muted-foreground mt-1">Organize cada fase da construção</p>
              </div>
            </motion.div>

            {/* Phone 3: Costs */}
            <motion.div variants={fadeIn} className="flex flex-col items-center snap-center">
              <div className="w-[280px] h-[560px] rounded-[32px] border-[6px] border-foreground bg-background shadow-2xl relative overflow-hidden flex flex-col">
                <div className="absolute top-0 inset-x-0 h-6 bg-foreground rounded-b-xl mx-16 z-20" />
                
                <div className="p-4 pt-12 bg-card border-b border-border shadow-sm z-10 flex flex-col">
                  <h4 className="font-bold text-foreground text-lg mb-4">Custos</h4>
                  <div className="flex items-center justify-center py-2">
                    {/* CSS Donut Chart */}
                    <div 
                      className="w-28 h-28 rounded-full relative flex items-center justify-center"
                      style={{ background: 'conic-gradient(#C47000 0% 55%, #3B82F6 55% 80%, #22C55E 80% 100%)' }}
                    >
                      <div className="w-20 h-20 bg-card rounded-full flex flex-col items-center justify-center">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase">Total</span>
                        <span className="font-bold text-sm font-mono text-foreground">R$ 45k</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 flex flex-col gap-2 flex-grow overflow-hidden bg-background">
                  <h5 className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-1 mt-2">Últimas Despesas</h5>
                  
                  <div className="flex items-center justify-between bg-card p-3 rounded-xl border border-border shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm">🧱</div>
                      <div>
                        <div className="text-xs font-bold text-foreground">Tijolos</div>
                        <div className="text-[10px] font-medium text-muted-foreground">Alvenaria</div>
                      </div>
                    </div>
                    <span className="font-bold text-xs font-mono text-foreground">R$ 2.450</span>
                  </div>
                  
                  <div className="flex items-center justify-between bg-card p-3 rounded-xl border border-border shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm">👷</div>
                      <div>
                        <div className="text-xs font-bold text-foreground">Mão de obra</div>
                        <div className="text-[10px] font-medium text-muted-foreground">Pagamento</div>
                      </div>
                    </div>
                    <span className="font-bold text-xs font-mono text-foreground">R$ 4.000</span>
                  </div>
                  
                  <div className="flex items-center justify-between bg-card p-3 rounded-xl border border-border shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-sm">📄</div>
                      <div>
                        <div className="text-xs font-bold text-foreground">Taxas Pref.</div>
                        <div className="text-[10px] font-medium text-muted-foreground">Projetos</div>
                      </div>
                    </div>
                    <span className="font-bold text-xs font-mono text-foreground">R$ 850</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <h4 className="font-bold text-foreground text-lg">Controle financeiro</h4>
                <p className="text-sm font-medium text-muted-foreground mt-1">Saiba para onde vai cada real</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 md:px-20">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Comece em 3 passos</h2>
          </motion.div>

          <div className="relative">
            {/* Dashed line connector (Desktop only) */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[2px] border-t-2 border-dashed border-border z-0" />

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10"
            >
              {[
                { num: "1", title: "Baixe o app", desc: "Disponível gratuitamente na App Store e Google Play para iOS e Android." },
                { num: "2", title: "Cadastre sua obra", desc: "Adicione nome, tipo, data de início e foto de capa. Pronto em segundos." },
                { num: "3", title: "Gerencie tudo", desc: "Crie etapas, registre custos, convide sua equipe e acompanhe o progresso." }
              ].map((step, i) => (
                <motion.div key={i} variants={fadeIn} className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-card border-4 border-background flex items-center justify-center shadow-lg mb-6 relative group">
                    <div className="absolute inset-0 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                    <span className="font-mono text-5xl font-bold text-primary">{step.num}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-[15px] font-medium text-muted-foreground">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-20 md:py-32 bg-accent/60">
        <div className="max-w-[1200px] mx-auto px-5 md:px-20">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground">O que nossos usuários dizem</h2>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                quote: "Finalmente consigo acompanhar minha obra sem depender de planilhas. O controle de custos me salvou de vários sustos.",
                name: "Ricardo M.",
                role: "PROPRIETÁRIO",
                roleColor: "text-amber-700 bg-amber-500/15 border-amber-500/30",
                initials: "RM"
              },
              {
                quote: "Compartilho fotos e anotações direto pelo app. Meus clientes adoram a transparência que consigo oferecer agora.",
                name: "Camila A.",
                role: "ARQUITETA",
                roleColor: "text-blue-700 bg-blue-500/15 border-blue-500/30",
                initials: "CA"
              },
              {
                quote: "O cronograma me ajuda a manter todas as etapas no prazo. O app é super simples, direto ao ponto e não trava.",
                name: "Fernando S.",
                role: "ENGENHEIRO",
                roleColor: "text-green-700 bg-green-500/15 border-green-500/30",
                initials: "FS"
              }
            ].map((t, i) => (
              <motion.div 
                key={i} variants={fadeIn}
                className="bg-card rounded-2xl p-8 shadow-sm border border-border flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-primary text-primary" />)}
                  </div>
                  <p className="text-[15px] italic text-foreground font-medium mb-8 leading-relaxed">"{t.quote}"</p>
                </div>
                
                <div>
                  <div className="h-[1px] w-full bg-border mb-6" />
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-bold text-foreground">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-foreground">{t.name}</div>
                      <div className={cn("inline-block mt-1 text-[9px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded border", t.roleColor)}>
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-24 md:py-32 bg-background relative border-t border-border">
        <div className="max-w-[600px] mx-auto px-5 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-[40px] font-extrabold text-foreground mb-4 leading-tight text-balance"
          >
            Comece a gerenciar<br/>sua obra hoje.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground font-medium mb-10 text-balance"
          >
            Gratuito. Simples. Feito para quem constrói no Brasil.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <AppStoreBadge className="w-full sm:w-[180px] justify-center" />
            <PlayStoreBadge className="w-full sm:w-[180px] justify-center" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="text-[13px] font-medium text-muted-foreground flex items-center justify-center gap-2"
          >
            <Star className="w-4 h-4 fill-muted-foreground" />
            <span>4.8 nas lojas • 500+ obras gerenciadas</span>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1A17] text-white pt-16 pb-8">
        <div className="max-w-[1200px] mx-auto px-5 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
            
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Hammer className="w-5 h-5 text-primary" />
                <span className="font-extrabold text-xl tracking-tight">Minha Obra</span>
              </div>
              <p className="text-[13px] font-medium text-white/60 leading-relaxed pr-4">
                O app de gestão de obras residenciais mais simples do Brasil.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-4">Links</h4>
              <ul className="flex flex-col gap-3">
                <li><button onClick={() => scrollTo("funcionalidades")} className="text-[13px] font-medium text-white/60 hover:text-white transition-colors">Funcionalidades</button></li>
                <li><button onClick={() => scrollTo("como-funciona")} className="text-[13px] font-medium text-white/60 hover:text-white transition-colors">Como Funciona</button></li>
                <li><button onClick={() => scrollTo("depoimentos")} className="text-[13px] font-medium text-white/60 hover:text-white transition-colors">Depoimentos</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-4">Legal</h4>
              <ul className="flex flex-col gap-3">
                <li><a href="#" className="text-[13px] font-medium text-white/60 hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="text-[13px] font-medium text-white/60 hover:text-white transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-4">Contato</h4>
              <div className="flex items-center gap-4">
                <a href="#" className="text-white/60 hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
                <a href="#" className="text-white/60 hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="text-white/60 hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>

          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-medium text-white/40 text-center md:text-left">
              © {new Date().getFullYear()} Minha Obra. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
