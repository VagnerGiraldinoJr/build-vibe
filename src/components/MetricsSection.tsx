import { motion } from "framer-motion";
import { Briefcase, Building, Users, GraduationCap, Mic, Code } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "10+", label: "Anos de Experiência" },
  { icon: Building, value: "10+", label: "Projetos Enterprise" },
  { icon: Users, value: "20+", label: "Devs Mentorados" },
  { icon: GraduationCap, value: "15+", label: "Workshops" },
  { icon: Code, value: "1M+", label: "Linhas em Produção" },
  { icon: Mic, value: "5+", label: "Empresas Atendidas" },
];

const MetricsSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase">Resultados</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Números que <span className="text-gradient">falam</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center p-6 glass rounded-xl"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
