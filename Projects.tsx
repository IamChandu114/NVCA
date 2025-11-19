import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "3D Portfolio Website",
      description: "Interactive portfolio with Three.js 3D models, smooth animations, and immersive user experience.",
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      tags: ["React", "Three.js", "TypeScript"],
      github: "#",
      demo: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with real-time inventory, payment integration, and responsive design.",
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      tags: ["Next.js", "Stripe", "Tailwind"],
      github: "#",
      demo: "#"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat app with AI-powered responses, modern UI, and seamless user experience.",
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      tags: ["React", "OpenAI", "WebSocket"],
      github: "#",
      demo: "#"
    },
    {
      title: "Fitness Tracking App",
      description: "Comprehensive fitness tracker with workout plans, progress tracking, and social features.",
      image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      tags: ["React Native", "Firebase", "Charts"],
      github: "#",
      demo: "#"
    },
    {
      title: "Dashboard Analytics",
      description: "Beautiful analytics dashboard with real-time data visualization and interactive charts.",
      image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      tags: ["Vue.js", "D3.js", "Node.js"],
      github: "#",
      demo: "#"
    },
    {
      title: "Music Streaming App",
      description: "Spotify-like music platform with playlists, recommendations, and audio visualization.",
      image: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
      tags: ["React", "Web Audio API", "Redux"],
      github: "#",
      demo: "#"
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
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of my latest work showcasing innovation, creativity, and technical excellence.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl overflow-hidden group cursor-pointer border border-transparent hover:border-primary/50 transition-all duration-300"
              >
                {/* Project Image */}
                <div 
                  className="h-56 relative overflow-hidden"
                  style={{ background: project.image }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4">
                    <a
                      href={project.github}
                      className="w-12 h-12 rounded-full glass-strong flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demo}
                      className="w-12 h-12 rounded-full glass-strong flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full glass text-primary border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-20"
          >
            <div className="glass-strong p-12 rounded-2xl max-w-3xl mx-auto border border-primary/20">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-gradient">Want to see more?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Check out my GitHub for more projects and open-source contributions.
              </p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 glass-strong px-8 py-4 rounded-lg font-medium text-primary border border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-cyan"
              >
                <Github size={20} />
                Visit GitHub Profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
