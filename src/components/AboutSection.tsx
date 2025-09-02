import { GraduationCap, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-up animate">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Passionate about cloud technologies and infrastructure automation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <div className="space-y-6 fade-up animate" style={{ animationDelay: '0.2s' }}>
              <div className="card-elevated">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Professional Background</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      As a Cloud & DevOps Engineer at Axcess Tech Systems, I collaborate with NPCI 
                      to ensure seamless banking operations through robust infrastructure solutions. 
                      My expertise lies in optimizing transaction workflows, implementing monitoring 
                      systems, and leading teams on innovative projects.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-elevated">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-accent/20 rounded-xl">
                    <GraduationCap className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <div className="space-y-2">
                      <h4 className="font-medium text-primary">
                        B.Tech in Computer Science & Engineering
                      </h4>
                      <p className="text-muted-foreground">
                        C V Raman Global University, Bhubaneswar
                      </p>
                      <p className="text-sm text-muted-foreground">
                        2019 – 2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats/Highlights */}
            <div className="space-y-6 fade-up animate" style={{ animationDelay: '0.4s' }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="card-accent text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="card-accent text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="card-accent text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
                <div className="card-accent text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1</div>
                  <div className="text-sm text-muted-foreground">Team Leading</div>
                </div>
              </div>

              <div className="card-elevated">
                <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Leading a new organizational project with strategic oversight
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Qualified for national-level hackathon SIH-2022
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Reduced system downtime through effective RCA with Kibana
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;