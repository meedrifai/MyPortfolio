import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
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
  Sparkles,
  TrendingUp,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      icon: <Heart className="w-6 h-6" />,
      color: "from-red-500 to-pink-500",
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
      icon: <Zap className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
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
      icon: <Shield className="w-6 h-6" />,
      color: "from-blue-500 to-purple-500",
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
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-green-500 to-teal-500",
    },
  ];

  const skills = {
    Programming: {
      items: ["Java", "Python", "JavaScript"],
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-400 to-blue-600",
    },
    Frameworks: {
      items: ["Spring Boot", "ReactJS", "Next.js", "FastAPI", "Flutter"],
      icon: <Globe className="w-6 h-6" />,
      color: "from-purple-400 to-purple-600",
    },
    Databases: {
      items: ["MySQL", "PostgreSQL", "Firebase"],
      icon: <Database className="w-6 h-6" />,
      color: "from-green-400 to-green-600",
    },
    "AI/ML & Cloud": {
      items: ["TensorFlow", "Scikit-learn", "OpenAI", "Docker", "Kubernetes"],
      icon: <Brain className="w-6 h-6" />,
      color: "from-pink-400 to-pink-600",
    },
    Tools: {
      items: ["n8n", "REST APIs", "Git", "Agile/Scrum"],
      icon: <Cpu className="w-6 h-6" />,
      color: "from-orange-400 to-orange-600",
    },
  };

  const achievements = [
    {
      title: "Oracle AI Certified Foundations Associate",
      year: "2025",
      icon: <Award className="w-5 h-5" />,
    },
    {
      title: "Oracle Java Certified Foundations Associate",
      year: "2024",
      icon: <Award className="w-5 h-5" />,
    },
    {
      title: "UM6P Advanced Problem-Solving Certificate",
      year: "2024",
      icon: <Award className="w-5 h-5" />,
    },
    {
      title: "OpportunAI Hackathon Jury's Favorite Award",
      year: "2025",
      icon: <Heart className="w-5 h-5" />,
    },
  ];

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <style>
        {`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.5); }
            50% { box-shadow: 0 0 60px rgba(147, 51, 234, 0.8); }
          }
          @keyframes shimmer {
            0% { background-position: -1000px 0; }
            100% { background-position: 1000px 0; }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          .animate-float {
            animation: float 10s ease-in-out infinite;
          }
          .animate-glow {
            animation: glow 3s ease-in-out infinite;
          }
          .shimmer {
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            background-size: 1000px 100%;
            animation: shimmer 3s infinite;
          }
          .fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
          .glass {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          .perspective-card {
            transform-style: preserve-3d;
            transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          }
          .perspective-card:hover {
            transform: translateY(-10px) scale(1.02);
          }
        `}
      </style>

      {/* Animated Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div
          className="absolute inset-0 opacity-30 transition-all duration-300"
          style={{
            background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.15), transparent 50%)`,
          }}
        />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-950 opacity-80" />
      </div>

      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-black/30 border-b border-white/5 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                MR
              </div>
            </div>
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
                  className={`relative text-sm font-medium transition-all duration-300 group ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
                      activeSection === item.toLowerCase()
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center z-10"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div
            className={`transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-6">
              <div className="relative w-40 h-40 mx-auto mb-8 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 animate-glow"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin-slow opacity-20"></div>
                <div className="relative w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-5xl font-bold">
                    MR
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300">
                Mohamed Rifai
              </span>
            </h1>

            <div className="text-xl md:text-2xl text-gray-300 mb-8 space-y-2">
              <div className="flex items-center justify-center space-x-4 flex-wrap gap-2">
                <span className="flex items-center space-x-2 hover:text-blue-400 transition-colors group">
                  <Code className="w-5 h-5 text-blue-400 group-hover:scale-125 transition-transform" />
                  <span>Software Engineer</span>
                </span>
                <span className="text-gray-500">•</span>
                <span className="flex items-center space-x-2 hover:text-purple-400 transition-colors group">
                  <Globe className="w-5 h-5 text-purple-400 group-hover:scale-125 transition-transform" />
                  <span>Full-Stack Developer</span>
                </span>
                <span className="text-gray-500">•</span>
                <span className="flex items-center space-x-2 hover:text-pink-400 transition-colors group">
                  <Brain className="w-5 h-5 text-pink-400 group-hover:scale-125 transition-transform" />
                  <span>AI Enthusiast</span>
                </span>
              </div>
            </div>

            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Building the future through{" "}
              <span className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                AI-powered solutions
              </span>
              ,
              <span className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">
                {" "}
                enterprise automation
              </span>
              , and
              <span className="text-pink-400 font-semibold hover:text-pink-300 transition-colors">
                {" "}
                innovative healthcare technology
              </span>
              . Passionate about solving real-world problems with cutting-edge
              technology.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <button
                onClick={() => scrollToSection(projectsRef)}
                className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold overflow-hidden group"
              >
                <span className="absolute inset-0 shimmer"></span>
                <span className="relative flex items-center space-x-2 group-hover:scale-105 transition-transform">
                  <span>View My Work</span>
                  <Sparkles className="w-4 h-4" />
                </span>
              </button>
              <a
                href="mailto:rifaii.mohameed@gmail.com"
                className="relative px-8 py-4 border-2 border-gray-600 rounded-full text-white font-semibold overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative">Get In Touch</span>
              </a>
            </div>

            <div className="flex justify-center space-x-8">
              <a
                href="mailto:rifaii.mohameed@gmail.com"
                className="group relative"
              >
                <div className="absolute -inset-2 bg-blue-500 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <Mail className="relative w-7 h-7 text-gray-400 group-hover:text-blue-400 group-hover:scale-125 transition-all duration-300" />
              </a>
              <a href="https://github.com/meedrifai" className="group relative">
                <div className="absolute -inset-2 bg-purple-500 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <Github className="relative w-7 h-7 text-gray-400 group-hover:text-purple-400 group-hover:scale-125 transition-all duration-300" />
              </a>
              <a
                href="https://linkedin.com/in/mohamed-rifai-2411b8263"
                className="group relative"
              >
                <div className="absolute -inset-2 bg-pink-500 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <Linkedin className="relative w-7 h-7 text-gray-400 group-hover:text-pink-400 group-hover:scale-125 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="relative py-32 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 fade-in-up">
              <div className="flex items-center space-x-3 text-gray-300 group hover:text-white transition-colors">
                <MapPin className="w-6 h-6 text-blue-400 group-hover:scale-125 transition-transform" />
                <span className="text-lg">Casablanca, Morocco</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 group hover:text-white transition-colors">
                <Calendar className="w-6 h-6 text-purple-400 group-hover:scale-125 transition-transform" />
                <span className="text-lg">3+ Years Experience</span>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                I'm a passionate software engineer who believes technology
                should solve real-world problems. My journey spans from{" "}
                <span className="text-blue-400 font-semibold">
                  AI-powered healthcare solutions
                </span>{" "}
                to{" "}
                <span className="text-purple-400 font-semibold">
                  enterprise automation systems
                </span>
                , always focused on creating meaningful impact.
              </p>

              <p className="text-xl text-gray-300 leading-relaxed">
                With expertise in full-stack development and AI integration,
                I've delivered solutions that serve hundreds of users while
                maintaining enterprise-grade security and performance standards.
              </p>

              <div className="pt-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                  <Award className="w-6 h-6 text-yellow-400" />
                  <span>Recent Achievements</span>
                </h3>
                <div className="grid gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="group flex items-center space-x-4 p-4 rounded-xl glass hover:bg-white/10 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="text-yellow-400 group-hover:scale-125 transition-transform">
                        {achievement.icon}
                      </div>
                      <span className="flex-1 text-gray-300 group-hover:text-white transition-colors">
                        {achievement.title}
                      </span>
                      <span className="text-blue-400 font-bold text-lg">
                        {achievement.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative glass rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 perspective-card">
                <h3 className="text-3xl font-bold text-white mb-8 flex items-center space-x-2">
                  <Sparkles className="w-8 h-8 text-yellow-400" />
                  <span>Professional Focus</span>
                </h3>
                <div className="space-y-6">
                  <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <Brain className="w-8 h-8 text-pink-400 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <div>
                      <div className="font-bold text-white text-lg mb-1">
                        AI & Machine Learning
                      </div>
                      <div className="text-gray-400">
                        Healthcare predictions, automation, chatbots
                      </div>
                    </div>
                  </div>
                  <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <Globe className="w-8 h-8 text-blue-400 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <div>
                      <div className="font-bold text-white text-lg mb-1">
                        Full-Stack Development
                      </div>
                      <div className="text-gray-400">
                        Enterprise web apps, cross-platform solutions
                      </div>
                    </div>
                  </div>
                  <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <Zap className="w-8 h-8 text-yellow-400 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <div>
                      <div className="font-bold text-white text-lg mb-1">
                        Automation & DevOps
                      </div>
                      <div className="text-gray-400">
                        Workflow optimization, containerization
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-white/10">
                  <div className="text-center">
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      85%
                    </div>
                    <div className="text-gray-400 font-medium">
                      AI Model Accuracy
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="relative py-32 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
              Real-world solutions that make a difference, from AI-powered
              healthcare to enterprise automation
            </p>
          </div>

          <div className="grid gap-10">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative perspective-card"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-3xl blur-xl opacity-25 group-hover:opacity-75 transition duration-1000`}
                ></div>
                <div className="relative glass rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"></div>

                  <div className="relative flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-6">
                        <div
                          className={`p-4 rounded-2xl bg-gradient-to-r ${project.color} text-white shadow-2xl group-hover:scale-110 transition-transform`}
                        >
                          {project.icon}
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-1">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 text-lg">
                            {project.subtitle} • {project.year}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {project.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
                          >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-150 transition-transform"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 text-sm font-medium bg-white/5 text-gray-300 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center space-x-2 text-yellow-400 font-semibold">
                        <Award className="w-5 h-5" />
                        <span>{project.impact}</span>
                      </div>
                    </div>

                    <div className="lg:w-80">
                      <div className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">Status</span>
                            <span className="flex items-center space-x-2 text-green-400 font-semibold">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              <span>Live</span>
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">Category</span>
                            <span className="text-blue-400 font-semibold">
                              {project.id === 1
                                ? "Healthcare AI"
                                : project.id === 2
                                ? "Enterprise Automation"
                                : project.id === 3
                                ? "Healthcare Platform"
                                : "Enterprise System"}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">Impact</span>
                            <span className="flex items-center space-x-1 text-purple-400 font-semibold">
                              <TrendingUp className="w-4 h-4" />
                              <span>High</span>
                            </span>
                          </div>

                          <div className="pt-4 border-t border-white/10">
                            <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 group">
                              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              <span>View Details</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="relative py-32 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
              A comprehensive toolkit for building scalable, intelligent, and
              impactful solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, data], index) => (
              <div
                key={category}
                className="group relative overflow-hidden rounded-3xl border border-white/10 glass p-8 hover:scale-105 hover:border-white/20 transition-all duration-300 perspective-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -inset-20 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>

                <div className="relative">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${data.color} text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    {data.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-6">
                    {category}
                  </h3>

                  <div className="space-y-3">
                    {data.items.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-3 text-gray-300 group-hover:text-white transition-colors"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${data.color}`}
                        ></div>
                        <span className="text-lg">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="inline-flex items-center space-x-12 px-12 py-8 glass rounded-3xl border border-white/10">
              <div className="text-center group">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  3+
                </div>
                <div className="text-sm text-gray-400 font-medium">
                  Years Experience
                </div>
              </div>
              <div className="w-px h-16 bg-white/10"></div>
              <div className="text-center group">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  10+
                </div>
                <div className="text-sm text-gray-400 font-medium">
                  Technologies
                </div>
              </div>
              <div className="w-px h-16 bg-white/10"></div>
              <div className="text-center group">
                <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  4
                </div>
                <div className="text-sm text-gray-400 font-medium">
                  Major Projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="relative py-32 z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
              Ready to innovate? Whether it's AI-powered solutions, enterprise
              automation, or cutting-edge web applications, let's create
              technology that makes a real difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <a
              href="mailto:rifaii.mohameed@gmail.com"
              className="group relative perspective-card"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative p-8 glass rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 text-center">
                <div className="inline-flex p-5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                  <Mail className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Email</h3>
                <p className="text-gray-400 group-hover:text-blue-400 transition-colors break-words">
                  rifaii.mohameed@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://github.com/meedrifai"
              className="group relative perspective-card"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative p-8 glass rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 text-center">
                <div className="inline-flex p-5 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                  <Github className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">GitHub</h3>
                <p className="text-gray-400 group-hover:text-purple-400 transition-colors">
                  @meedrifai
                </p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/mohamed-rifai-2411b8263"
              className="group relative perspective-card"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative p-8 glass rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 text-center">
                <div className="inline-flex p-5 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-500 text-white mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                  <Linkedin className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">LinkedIn</h3>
                <p className="text-gray-400 group-hover:text-pink-400 transition-colors">
                  Mohamed Rifai
                </p>
              </div>
            </a>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-3 px-8 py-4 glass rounded-full border border-white/10">
              <MapPin className="w-6 h-6 text-blue-400" />
              <span className="text-gray-300 text-lg">
                Based in Casablanca, Morocco
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  MR
                </div>
              </div>
              <div className="text-gray-400">
                © 2025 Mohamed Rifai. Building the future with code & AI.
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="mailto:rifaii.mohameed@gmail.com"
                className="group relative"
                aria-label="Email"
              >
                <div className="absolute -inset-2 bg-blue-500 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <Mail className="relative w-6 h-6 text-gray-400 group-hover:text-blue-400 group-hover:scale-125 transition-all" />
              </a>
              <a
                href="https://github.com/meedrifai"
                className="group relative"
                aria-label="GitHub"
              >
                <div className="absolute -inset-2 bg-purple-500 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <Github className="relative w-6 h-6 text-gray-400 group-hover:text-purple-400 group-hover:scale-125 transition-all" />
              </a>
              <a
                href="https://linkedin.com/in/mohamed-rifai-2411b8263"
                className="group relative"
                aria-label="LinkedIn"
              >
                <div className="absolute -inset-2 bg-pink-500 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <Linkedin className="relative w-6 h-6 text-gray-400 group-hover:text-pink-400 group-hover:scale-125 transition-all" />
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 text-center">
            <div className="flex flex-wrap justify-center items-center space-x-2 text-sm text-gray-500">
              <span>Crafted with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>using React, Tailwind CSS & Lucide Icons</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
