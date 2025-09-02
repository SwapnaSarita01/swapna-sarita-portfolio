import { Award, ExternalLink } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "CCNAv7: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      type: "Networking Fundamentals",
      year: "2023"
    },
    {
      title: "CCNAv7: Switching, Routing, and Wireless Essentials", 
      issuer: "Cisco Networking Academy",
      type: "Network Infrastructure",
      year: "2023"
    },
    {
      title: "PCAP: Programming Essentials in Python",
      issuer: "OpenEDG Python Institute",
      type: "Programming",
      year: "2022"
    }
  ];

  const achievements = [
    {
      title: "Team Leadership",
      description: "Currently leading a new organizational project, overseeing strategy and delivery",
      icon: "🎯"
    },
    {
      title: "SIH-2022 Hackathon",
      description: "Member of Team Inferno, selected among 70+ teams to represent college at SIH-2022 (Problem Statement PK832, UIDAI) and qualified for national-level hackathon",
      icon: "🏆"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-up animate">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Certifications & <span className="text-primary">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Continuous learning and professional development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div className="space-y-6 fade-up animate" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Award className="w-8 h-8 text-primary" />
                Professional Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="card-elevated group cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-primary font-medium mb-1">{cert.issuer}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="px-2 py-1 bg-accent/20 rounded-full">{cert.type}</span>
                          <span>{cert.year}</span>
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-6 fade-up animate" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold flex items-center gap-3">
                🌟 Key Achievements
              </h3>
              
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="card-accent">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div>
                        <h4 className="font-semibold text-xl mb-2">{achievement.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Stats */}
              <div className="card-elevated">
                <h4 className="font-semibold text-lg mb-4">Professional Highlights</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">70+</div>
                    <div className="text-sm text-muted-foreground">Teams Competed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">National</div>
                    <div className="text-sm text-muted-foreground">Level Qualified</div>
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

export default CertificationsSection;