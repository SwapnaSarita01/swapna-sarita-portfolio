import { useState, useEffect } from "react";
import { 
  Code, 
  Cloud, 
  Settings, 
  GitBranch, 
  Monitor, 
  Container,
  Network,
  Database 
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skillsData: Skill[] = [
  // Programming Languages
  { name: "Python", level: 85, category: "Programming" },
  { name: "Bash", level: 80, category: "Programming" },

  // Cloud Services
  { name: "AWS EC2", level: 90, category: "Cloud" },
  { name: "AWS S3", level: 85, category: "Cloud" },
  { name: "AWS RDS", level: 80, category: "Cloud" },
  { name: "AWS VPC", level: 85, category: "Cloud" },
  { name: "AWS IAM", level: 80, category: "Cloud" },
  { name: "CloudFront", level: 75, category: "Cloud" },

  // Infrastructure as Code
  { name: "Terraform", level: 85, category: "IaC" },
  { name: "CloudFormation", level: 75, category: "IaC" },

  // CI/CD & DevSecOps
  { name: "Jenkins", level: 85, category: "CI/CD" },
  { name: "GitLab CI", level: 80, category: "CI/CD" },
  { name: "ArgoCD", level: 75, category: "CI/CD" },
  { name: "Helm", level: 70, category: "CI/CD" },

  // Monitoring & Logging
  { name: "CloudWatch", level: 85, category: "Monitoring" },
  { name: "Prometheus", level: 80, category: "Monitoring" },
  { name: "Grafana", level: 75, category: "Monitoring" },
  { name: "Kibana", level: 80, category: "Monitoring" },

  // Containers & OS
  { name: "Kubernetes", level: 85, category: "Containers" },
  { name: "Docker", level: 90, category: "Containers" },
  { name: "Linux", level: 85, category: "Containers" },

  // Databases
  { name: "MongoDB", level: 75, category: "Database" },
  { name: "MySQL", level: 80, category: "Database" },
  { name: "DynamoDB", level: 70, category: "Database" }
];

const categoryIcons = {
  Programming: Code,
  Cloud: Cloud,
  IaC: Settings,
  "CI/CD": GitBranch,
  Monitoring: Monitor,
  Containers: Container,
  Database: Database
};

const SkillsSection = () => {
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());

  const categories = Array.from(new Set(skillsData.map(skill => skill.category)));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.getAttribute('data-skill');
            if (skillName) {
              setTimeout(() => {
                setAnimatedSkills(prev => new Set(prev).add(skillName));
              }, 200);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const skillElements = document.querySelectorAll('[data-skill]');
    skillElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-up animate">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Expertise across cloud platforms, automation, and modern DevOps practices
            </p>
          </div>

          <div className="space-y-12">
            {categories.map((category, categoryIndex) => {
              const categorySkills = skillsData.filter(skill => skill.category === category);
              const IconComponent = categoryIcons[category as keyof typeof categoryIcons];
              
              return (
                <div 
                  key={category} 
                  className="fade-up animate"
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  <div className="card-elevated">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold">
                        {category === "IaC" ? "Infrastructure as Code" : 
                         category === "CI/CD" ? "CI/CD & DevSecOps" : category}
                      </h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {categorySkills.map((skill, index) => (
                        <div 
                          key={skill.name}
                          data-skill={skill.name}
                          className="space-y-2"
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="skill-bar">
                            <div 
                              className="skill-progress"
                              style={{ 
                                width: animatedSkills.has(skill.name) ? `${skill.level}%` : '0%',
                                transitionDelay: `${index * 0.1}s`
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;