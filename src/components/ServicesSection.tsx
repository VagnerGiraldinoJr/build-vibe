import { motion } from "framer-motion";
import { Code2, Smartphone, Brain, Cloud, Users, Zap } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Sistemas Web",
    description: "Aplicações web robustas com Laravel, Vue.js e React. E-commerce, ERPs, CRMs e plataformas personalizadas.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description: "Apps multiplataforma com experiência nativa. Integração com APIs e serviços em nuvem.",
  },
  {
    icon: Brain,
    title: "Integração com IA",
    description: "Chatbots inteligentes, RAG pipelines, automação com OpenAI GPT-4 e LangChain.",
  },
  {
    icon: Cloud,
    title: "Arquitetura Cloud",
    description: "Infraestrutura escalável com AWS, Docker, Kubernetes e microsserviços.",
  },
  {
    icon: Users,
    title: "Mentoria Técnica",
    description: "Mentoria individual e em grupo para desenvolvedores. Code review e boas práticas.",
  },
  {
    icon: Zap,
    title: "Otimização & Performance",
    description: "Análise de performance, refatoração de código e otimização de sistemas existentes.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase">Serviços</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Como posso <span className="text-gradient">ajudar</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Soluções sob medida para transformar sua ideia em realidade
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-xl glass hover:glow-border transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
