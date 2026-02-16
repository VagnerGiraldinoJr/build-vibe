import { motion } from "framer-motion";
import { Mail, ArrowRight, Github, Linkedin, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase">Contato</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Vamos construir algo <span className="text-gradient">incrível</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Entre em contato para discutir seu projeto. Respondo em até 24 horas.
          </p>

          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Ponta Grossa, PR - Brasil 🇧🇷</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:contato@vgit.com.br"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity animate-pulse-glow"
            >
              <Mail className="w-5 h-5" />
              contato@vgit.com.br
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/VagnerGiraldinoJr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/vgiraldino"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
