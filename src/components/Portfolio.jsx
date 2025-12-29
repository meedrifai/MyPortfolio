import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Database,
  Brain,
  Award,
  MapPin,
  Calendar,
  Zap,
  Heart,
  Shield,
  BarChart3,
  Cpu,
  Globe,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { name: "hero", ref: heroRef },
        { name: "about", ref: aboutRef },
        { name: "projects", ref: projectsRef },
        { name: "skills", ref: skillsRef },
        { name: "contact", ref: contactRef },
      ];

      const current = sections.find((section) => {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current.name);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      id: 1,
      title: "BloodPredictApp",
      subtitle: "AI-Powered Healthcare Solution",
      year: "2025",
      description:
        "Machine learning system predicting blood donation behavior with 85% accuracy, deployed across Web, iOS, and Android platforms.",
      features: [
        "Hospital Locator",
        "AI Chatbot",
        "Cross-Platform",
        "85% Accuracy",
      ],
      tech: ["TensorFlow", "React", "Flutter", "Python", "FastAPI"],
      impact: "🏆 Jury's Favorite Award at OpportunAI Hackathon",
    },
    {
      id: 2,
      title: "Alert Resolution System",
      subtitle: "Enterprise Automation at YOOL",
      year: "2025",
      description:
        "Architected automation workflows cutting manual intervention by 60% using n8n, Python, and JavaScript.",
      features: [
        "60% Efficiency Gain",
        "Real-time Monitoring",
        "API Integration",
        "Production Ready",
      ],
      tech: ["n8n", "Python", "JavaScript", "REST APIs"],
      impact: "Production system serving enterprise clients",
    },
    {
      id: 3,
      title: "Mental Health Platform",
      subtitle: "Enterprise Therapy Management",
      year: "2024",
      description:
        "Secure therapy session management system with real-time encrypted chat and analytics dashboard.",
      features: [
        "Encrypted Chat",
        "Analytics Dashboard",
        "Session Management",
        "Enterprise Scale",
      ],
      tech: ["Spring Boot", "ReactJS", "PostgreSQL", "WebSocket"],
      impact: "Addressing critical mental health accessibility",
    },
    {
      id: 4,
      title: "Equipment Management",
      subtitle: "OCP Enterprise System",
      year: "2024",
      description:
        "Scalable web application for 500+ users with 40% database performance improvement.",
      features: [
        "500+ Users",
        "40% Performance Gain",
        "99% Mobile Compatible",
        "Scalable Architecture",
      ],
      tech: ["Java", "Spring Boot", "MySQL", "React"],
      impact: "Serving major industrial operations",
    },
  ];

  const skills = {
    Programming: {
      items: ["Java", "Python", "JavaScript"],
      icon: <Code className="w-5 h-5" />,
    },
    Frameworks: {
      items: ["Spring Boot", "ReactJS", "Next.js", "FastAPI", "Flutter"],
      icon: <Globe className="w-5 h-5" />,
    },
    Databases: {
      items: ["MySQL", "PostgreSQL", "Firebase"],
      icon: <Database className="w-5 h-5" />,
    },
    "AI/ML & Cloud": {
      items: ["TensorFlow", "Scikit-learn", "OpenAI", "Docker", "Kubernetes"],
      icon: <Brain className="w-5 h-5" />,
    },
    Tools: {
      items: ["n8n", "REST APIs", "Git", "Agile/Scrum"],
      icon: <Cpu className="w-5 h-5" />,
    },
  };

  const achievements = [
    { title: "Oracle AI Certified Foundations Associate", year: "2025" },
    { title: "Oracle Java Certified Foundations Associate", year: "2024" },
    { title: "UM6P Advanced Problem-Solving Certificate", year: "2024" },
    { title: "OpportunAI Hackathon Jury's Favorite Award", year: "2025" },
  ];

  return (
    <div className="bg-gray-50 text-gray-900">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-blue-600">Mohamed Rifai</div>
            <div className="hidden md:flex space-x-8">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(
                      item === "About"
                        ? aboutRef
                        : item === "Projects"
                        ? projectsRef
                        : item === "Skills"
                        ? skillsRef
                        : contactRef
                    )
                  }
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center pt-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src="LinkedInProfile.png"
                  alt="Mohamed Rifai"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            Mohamed Rifai
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Software Engineer • Full-Stack Developer • AI Enthusiast
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Building innovative solutions through AI, enterprise automation, and
            modern web technologies. Passionate about creating impactful
            software.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Projects
            </button>
            <a
              href="mailto:rifaii.mohameed@gmail.com"
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="mailto:rifaii.mohameed@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/meedrifai"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/mohamed-rifai-2411b8263"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <section ref={aboutRef} className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Casablanca, Morocco</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span>3+ Years Experience</span>
              </div>

              <p className="text-gray-700 leading-relaxed">
                I'm a passionate software engineer who believes technology
                should solve real-world problems. My journey spans from
                AI-powered healthcare solutions to enterprise automation
                systems, always focused on creating meaningful impact.
              </p>

              <p className="text-gray-700 leading-relaxed">
                With expertise in full-stack development and AI integration,
                I've delivered solutions that serve hundreds of users while
                maintaining enterprise-grade security and performance standards.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Recent Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-between p-4 bg-white rounded-lg border border-gray-200"
                  >
                    <span className="flex-1 text-gray-700">
                      {achievement.title}
                    </span>
                    <span className="text-blue-600 font-semibold ml-4">
                      {achievement.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={projectsRef} className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Real-world solutions that make a difference
          </p>

          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                    {project.id === 1 ? (
                      <Heart className="w-5 h-5" />
                    ) : project.id === 2 ? (
                      <Zap className="w-5 h-5" />
                    ) : project.id === 3 ? (
                      <Shield className="w-5 h-5" />
                    ) : (
                      <BarChart3 className="w-5 h-5" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {project.title}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-gray-600">{project.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{project.description}</p>

                <div className="grid md:grid-cols-2 gap-2 mb-4">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-2 text-blue-600 font-medium">
                  <Award className="w-4 h-4" />
                  <span className="text-sm">{project.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={skillsRef} className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">
            Technical Expertise
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit for building scalable solutions
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, data]) => (
              <div
                key={category}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    {data.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {category}
                  </h3>
                </div>
                <div className="space-y-2">
                  {data.items.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center gap-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-1">3+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-1">10+</div>
              <div className="text-sm text-gray-600">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-1">4</div>
              <div className="text-sm text-gray-600">Major Projects</div>
            </div>
          </div>
        </div>
      </section>

      <section ref={contactRef} className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">
            Let's Build Something Amazing
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Ready to innovate? Let's create technology that makes a real
            difference.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <a
              href="mailto:rifaii.mohameed@gmail.com"
              className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-colors text-center"
            >
              <div className="inline-flex p-3 bg-blue-100 text-blue-600 rounded-lg mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm break-words">
                rifaii.mohameed@gmail.com
              </p>
            </a>

            <a
              href="https://github.com/meedrifai"
              className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-colors text-center"
            >
              <div className="inline-flex p-3 bg-blue-100 text-blue-600 rounded-lg mb-4">
                <Github className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">GitHub</h3>
              <p className="text-gray-600 text-sm">@meedrifai</p>
            </a>

            <a
              href="https://linkedin.com/in/mohamed-rifai-2411b8263"
              className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-colors text-center"
            >
              <div className="inline-flex p-3 bg-blue-100 text-blue-600 rounded-lg mb-4">
                <Linkedin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">LinkedIn</h3>
              <p className="text-gray-600 text-sm">Mohamed Rifai</p>
            </a>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-gray-200">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span className="text-gray-600 text-sm">
                Based in Casablanca, Morocco
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2025 Mohamed Rifai. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="mailto:rifaii.mohameed@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/meedrifai"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/mohamed-rifai-2411b8263"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
