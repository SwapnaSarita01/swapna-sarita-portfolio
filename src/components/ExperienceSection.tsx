import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

const ExperienceSection = () => {
  const achievements = [
    "Collaborated with NPCI to resolve infrastructure issues for seamless banking operations",
    "Optimized transaction workflows and enhanced system reliability", 
    "Provided hands-on L1 support during deployments with monitoring tools",
    "Conducted RCA with Kibana, reduced downtime",
    "Troubleshot production issues with advanced database querying",
    "Gained expertise in payment workflows, enabling risk identification",
    "Led and mentored team members on a new organizational project"
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-up animate">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Work <span className="text-primary">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Building robust cloud infrastructure and leading technical initiatives
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>
            
            <div className="relative fade-up animate" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-6">
                {/* Timeline dot */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-12">
                  <div className="card-elevated">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-primary mb-2">Cloud Engineer</h3>
                      <p className="text-xl font-semibold text-foreground mb-3">
                        Axcess Tech Systems India PVT LTD
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>May 2023 – Present</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>India</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold mb-3">Key Achievements & Responsibilities</h4>
                      <div className="grid gap-3">
                        {achievements.map((achievement, index) => (
                          <div 
                            key={index}
                            className="flex items-start gap-3 group"
                          >
                            <div className="flex-shrink-0 mt-1">
                              <CheckCircle className="w-5 h-5 text-success transition-transform group-hover:scale-110" />
                            </div>
                            <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border">
                      <h4 className="text-lg font-semibold mb-3">Technologies & Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "AWS", "Kubernetes", "Docker", "Kibana", 
                          "Python", "Linux", "Grafana", "Superset"
                        ].map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;