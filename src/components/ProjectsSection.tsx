import { ExternalLink, Github, Shield, Server, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectDevSecOps from "@/assets/project-devsecops.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "DevSecOps 3-Tier Kubernetes Project",
      description: "Built a secure, scalable 3-tier architecture using Kubernetes, CI/CD, and DevSecOps best practices. Integrated monitoring and automated security scanning to ensure high availability and compliance.",
      image: projectDevSecOps,
      technologies: ["Kubernetes", "Docker", "Jenkins", "Terraform", "Prometheus", "Grafana", "Security Scanning"],
      features: [
        "3-tier architecture with microservices",
        "Automated CI/CD pipeline with security gates", 
        "Real-time monitoring and alerting",
        "Infrastructure as Code with Terraform",
        "Container security scanning",
        "High availability and auto-scaling"
      ],
      links: {
        github: "#",
        demo: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-up animate">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Showcasing cloud infrastructure and DevOps automation solutions
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="fade-up animate"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Project Image */}
                  <div className="relative">
                    <div className="card-project group">
                      <div className="relative overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                    
                    {/* Floating icons */}
                    <div className="absolute -top-4 -right-4 p-3 bg-primary rounded-xl shadow-lg">
                      <Shield className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 p-3 bg-accent rounded-xl shadow-lg">
                      <Server className="w-6 h-6 text-accent-foreground" />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <Monitor className="w-5 h-5 text-primary" />
                        Key Features
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button className="btn-hero group">
                        <Github className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                        View Code
                      </Button>
                      <Button variant="outline" className="btn-ghost group">
                        <ExternalLink className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;