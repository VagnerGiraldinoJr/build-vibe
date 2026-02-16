import { motion } from "framer-motion";
import { ExternalLink, TrendingDown, Bot, ShoppingCart, BarChart3 } from "lucide-react";

const projects = [
  {
    icon: Bot,
    title: "OpenClaw",
    subtitle: "AI-Powered Customer Support",
    description: "Plataforma de automação de suporte ao cliente com IA, integração WhatsApp Business e RAG pipelines.",
    stack: ["Laravel 11", "OpenAI GPT-4", "pgvector", "Redis", "Docker"],
    metrics: [
      { label: "Redução tempo resposta", value: "70%" },
      { label: "Automação", value: "85%" },
      { label: "Satisfação", value: "95%" },
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Enterprise",
    subtitle: "Plataforma de Alta Performance",
    description: "E-commerce escalável com 50K+ produtos e 10K+ transações diárias. Gateway de pagamento integrado.",
    stack: ["Laravel", "Vue.js", "Redis", "PostgreSQL"],
    metrics: [
      { label: "Produtos", value: "50K+" },
      { label: "Transações/dia", value: "10K+" },
      { label: "Conversão", value: "+40%" },
    ],
  },
  {
    icon: BarChart3,
    title: "API Gateway Enterprise",
    subtitle: "Microsserviços Unificados",
    description: "Gateway RESTful unificando 10+ microsserviços com OAuth2, rate limiting e monitoramento.",
    stack: ["Laravel", "API Gateway", "Microservices", "OAuth2"],
    metrics: [
      { label: "Requests/dia", value: "1M+" },
      { label: "Microsserviços", value: "10+" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase">Portfólio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Projetos em <span className="text-gradient">Destaque</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-2xl p-8 md:p-10 hover:glow-border transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <project.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 lg:w-80">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="text-center p-4 rounded-xl bg-background/50">
                      <div className="text-2xl font-bold text-primary">{metric.value}</div>
                      <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
