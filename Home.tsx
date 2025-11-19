import { motion } from "framer-motion";
import { ArrowRight, Code2, Palette, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Hero3D from "@/components/Hero3D";
import Navigation from "@/components/Navigation";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background z-0" />
        
        <div className="container mx-auto px-6 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-primary text-lg font-medium tracking-wider"
                >
                  WELCOME TO THE FUTURE
                </motion.p>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-7xl font-bold leading-tight"
                >
                  Creative
                  <br />
                  <span className="text-gradient">Developer</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-muted-foreground max-w-xl"
                >
                  Crafting immersive digital experiences with cutting-edge technology,
                  stunning visuals, and innovative 3D graphics.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/projects">
                  <button className="glass-strong px-8 py-4 rounded-lg font-medium text-primary border border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-cyan flex items-center gap-2 group">
                    View Projects
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </button>
                </Link>
                
                <Link to="/contact">
                  <button className="glass px-8 py-4 rounded-lg font-medium hover:glass-strong transition-all duration-300">
                    Get in Touch
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* 3D Scene */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative h-[500px] lg:h-[600px]"
            >
              <div className="absolute inset-0 glow-cyan rounded-full blur-3xl opacity-20" />
              <Hero3D />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">What I Do</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Combining creativity with technical expertise to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Web Development",
                description: "Building responsive, performant web applications with modern frameworks and best practices.",
                color: "cyan"
              },
              {
                icon: Palette,
                title: "UI/UX Design",
                description: "Creating intuitive, beautiful interfaces that users love with attention to every detail.",
                color: "purple"
              },
              {
                icon: Zap,
                title: "3D Graphics",
                description: "Bringing ideas to life with immersive 3D experiences and interactive animations.",
                color: "pink"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-xl hover:glass-strong transition-all duration-300 hover-scale group"
              >
                <div className={`w-16 h-16 rounded-lg bg-${feature.color}/10 flex items-center justify-center mb-6 glow-${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`text-neon-${feature.color}`} size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
