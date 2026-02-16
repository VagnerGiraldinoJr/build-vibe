import { motion } from "framer-motion";

const techCategories = [
  {
    label: "Backend",
    items: ["PHP", "Laravel 11", "Livewire 3", "Node.js", "Python", "Go"],
  },
  {
    label: "Frontend",
    items: ["Vue.js", "React", "TypeScript", "Tailwind CSS", "Alpine.js"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "Oracle", "Redis", "pgvector"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Kafka"],
  },
  {
    label: "IA & ML",
    items: ["OpenAI GPT-4", "LangChain", "RAG", "Embeddings"],
  },
];

const TechStackSection = () => {
  return (
    <section id="stack" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase">Tech Stack</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Tecnologias que <span className="text-gradient">domino</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {techCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="font-mono text-primary text-sm font-semibold mb-4 tracking-wider">{cat.label}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg text-sm bg-secondary text-secondary-foreground hover:bg-surface-hover transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
