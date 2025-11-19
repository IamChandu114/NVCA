import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Code, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const skills = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Three.js", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Node.js", level: 80 },
    { name: "UI/UX Design", level: 88 },
  ];

  const timeline = [
    {
      year: "2024",
      title: "Senior Developer",
      description: "Leading innovative projects with cutting-edge technologies",
      icon: Rocket
    },
    {
      year: "2022",
      title: "Full Stack Developer",
      description: "Built scalable web applications for global clients",
      icon: Code
    },
    {
      year: "2020",
      title: "UI/UX Designer",
      description: "Crafted beautiful user experiences for various brands",
      icon: Palette
    },
    {
      year: "2018",
      title: "Started Journey",
      description: "Began the exciting adventure in web development",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about creating digital experiences that make a difference.
              Combining creativity, technical expertise, and innovation.
            </p>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-strong p-8 md:p-12 rounded-2xl mb-20 border border-primary/20"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gradient">Creative Developer & Designer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  With over 6 years of experience in web development and design, I specialize in
                  creating immersive digital experiences that push the boundaries of what's possible
                  on the web.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My passion lies in combining cutting-edge technology with stunning visuals to
                  create websites and applications that not only look amazing but also provide
                  exceptional user experiences.
                </p>
              </div>
              <div className="relative">
                <div className="glass p-8 rounded-xl space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary animate-glow-pulse" />
                    <span className="text-muted-foreground">Available for freelance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-secondary" />
                    <span className="text-muted-foreground">Based in [Your Location]</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    <span className="text-muted-foreground">6+ years experience</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="text-gradient">Skills & Expertise</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="glass p-6 rounded-xl"
                >
                  <div className="flex justify-between mb-3">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + 0.1 * index }}
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="text-gradient">Journey Timeline</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-strong p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 glow-cyan">
                      <item.icon className="text-primary" size={28} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-2xl font-bold text-primary">{item.year}</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
