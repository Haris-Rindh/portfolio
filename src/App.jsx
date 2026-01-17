import React, { useState } from 'react';
import { Menu, X, Github, ExternalLink, Code, Layout, Database, Smartphone, ArrowRight, Mail, Linkedin } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  // --- 1. SERVICES DATA ---
  const services = [
    {
      title: "Custom Business Websites",
      desc: "Fully responsive, SEO-friendly sites tailored to your industry. Perfect for agencies, clinics, and local services.",
      icon: <Layout className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Web Applications",
      desc: "Dynamic applications with complex features like user logins, databases (Firebase), and real-time updates.",
      icon: <Database className="w-8 h-8 text-blue-600" />
    },
    {
      title: "High-Converting Landing Pages",
      desc: "Single-page sites designed with one goal: getting visitors to call you or sign up.",
      icon: <Smartphone className="w-8 h-8 text-blue-600" />
    }
  ];

  // --- 2. PROJECTS DATA ---
  const featuredProjects = [
    {
      title: "Book Sphere",
      category: "Full-Stack Web App",
      desc: "A dynamic library management application with cloud database integration. Features real-time search, categorization, and live data fetching.",
      stack: ["React", "Firebase", "Async API"],
      link: "https://haris-rindh.github.io/Book-Sphere/",
      repo: "https://github.com/Haris-Rindh/Book-Sphere"
    },
    {
      title: "Umer Surveying™",
      category: "Corporate Business Site",
      desc: "Developed the complete digital identity for a local surveying firm. Features include service mapping, founder profiles, and contact forms.",
      stack: ["HTML5", "CSS3", "SEO Optimization"],
      link: "https://haris-rindh.github.io/Umer-Surveying/",
      repo: "https://github.com/Haris-Rindh/Umer-Surveying"
    },
    {
      title: "Prime Real Estate",
      category: "Property Listing Platform",
      desc: "A high-performance real estate template featuring property grids, advanced filtering UI, and interactive map integration placeholders.",
      stack: ["HTML5", "CSS Grid", "JavaScript"],
      link: "#", 
      repo: "#"
    }
  ];

  const allProjects = [
    ...featuredProjects,
    {
      title: "Dental Care Clinic",
      category: "Medical Website",
      desc: "Trust-building design for medical professionals with appointment booking forms and service breakdowns.",
      stack: ["HTML5", "Bootstrap", "Responsive"],
      link: "#", 
      repo: "#"
    },
    {
      title: "Urban Restaurant",
      category: "Hospitality Site",
      desc: "Visual-heavy layout for restaurants featuring menu displays, gallery sliders, and reservation CTAs.",
      stack: ["HTML5", "CSS Animation", "JS"],
      link: "#", 
      repo: "#"
    },
    {
      title: "Digital Agency",
      category: "Portfolio Template",
      desc: "Modern, dark-themed portfolio for creative agencies to showcase work and attract high-ticket clients.",
      stack: ["React", "Tailwind", "Framer Motion"],
      link: "#", 
      repo: "#"
    },
    {
      title: "City Plumbing",
      category: "Local Service Site",
      desc: "Conversion-focused layout for emergency services. Features click-to-call buttons and immediate trust signals.",
      stack: ["HTML5", "CSS3", "Lead Gen"],
      link: "#", 
      repo: "#"
    }
  ];

  const currentProjects = showAllProjects ? allProjects : featuredProjects;

  // Function to handle "Show Less" scroll behavior
  const handleToggle = () => {
    if (showAllProjects) {
        // If we are currently showing all, and clicking "Show Less", scroll back up to portfolio top
        const portfolioSection = document.getElementById('portfolio');
        if (portfolioSection) {
            portfolioSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    setShowAllProjects(!showAllProjects);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-blue-900">Haris Rindh<span className="text-blue-500">.</span></div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-600 transition">About</a>
              <a href="#services" className="hover:text-blue-600 transition">Services</a>
              <a href="#portfolio" className="hover:text-blue-600 transition">Portfolio</a>
              <a href="#contact" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Hire Me</a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 space-y-4 shadow-lg">
            <a href="#about" className="block text-slate-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#services" className="block text-slate-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#portfolio" className="block text-slate-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
            <a href="#contact" className="block text-blue-600 font-semibold" onClick={() => setIsMenuOpen(false)}>Hire Me</a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION (Always Visible) --- */}
      <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center md:text-left md:flex items-center justify-between">
            <div className="md:w-1/2">
            <p className="text-blue-600 font-semibold tracking-wide uppercase mb-2">Full-Stack Developer</p>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                I Build Digital Assets, Not Just Websites.
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                I help businesses turn visitors into customers. Whether you need a corporate identity or a complex web application, I build solutions that work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#contact" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition text-center shadow-lg hover:shadow-xl">
                Start Your Project
                </a>
                <a href="#portfolio" className="px-8 py-3 bg-white text-slate-700 border border-slate-300 rounded-lg font-medium hover:bg-slate-50 transition text-center">
                View My Work
                </a>
            </div>
            </div>
            <div className="hidden md:block md:w-5/12">
            <div className="aspect-square bg-gradient-to-tr from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 shadow-inner">
                <Code className="w-32 h-32 text-blue-200" />
            </div>
            </div>
        </div>
      </section>

      {/* --- SERVICES SECTION (Always Visible) --- */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">How I Can Help You</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">I don't just write code; I provide solutions designed to grow your business.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <div key={index} className="p-8 bg-slate-50 rounded-xl hover:shadow-lg transition duration-300 border border-slate-100">
                <div className="mb-4 bg-white p-3 w-fit rounded-lg shadow-sm border border-slate-100">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
            ))}
            </div>
        </div>
      </section>

      {/* --- PORTFOLIO SECTION --- */}
      <section id="portfolio" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                {showAllProjects ? "All Projects Archive" : "Featured Projects"}
              </h2>
              <p className="text-slate-600 mt-2">
                {showAllProjects 
                  ? "A complete list of my technical work, templates, and client sites." 
                  : "A selection of my recent technical and commercial work."}
              </p>
            </div>
            
            {/* TOGGLE BUTTON (Desktop) */}
            <button 
                onClick={handleToggle}
                className="hidden md:flex items-center text-blue-600 hover:text-blue-700 font-medium mt-4 md:mt-0 cursor-pointer"
            >
                {showAllProjects ? "Show Less" : "View All Projects"} 
                <ArrowRight className={`w-4 h-4 ml-2 transition-transform ${showAllProjects ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-slate-100 flex flex-col group animate-in fade-in duration-500">
                <div className="h-2 bg-blue-600 w-0 group-hover:w-full transition-all duration-500"></div>
                <div className="p-6 flex-1">
                  <div className="flex justify-between items-start">
                     <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">{project.category}</div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium border border-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                  <a href={project.repo} target="_blank" rel="noreferrer" className="flex items-center text-sm text-slate-600 hover:text-slate-900">
                    <Github className="w-4 h-4 mr-2" /> Code
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium">
                    Live Demo <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* TOGGLE BUTTON (Mobile) */}
          <div className="mt-8 text-center md:hidden">
            <button 
                onClick={handleToggle} 
                className={`inline-flex items-center justify-center px-6 py-3 border font-medium rounded-lg ${showAllProjects ? 'border-slate-300 text-slate-600 hover:bg-slate-50' : 'border-blue-600 text-blue-600 hover:bg-blue-50'}`}
            >
                {showAllProjects ? "Show Less" : "View All Projects"}
            </button>
          </div>

        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Start Your Project</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            I am currently available for freelance projects. Whether you need a simple business site or a complex web app, I’m ready to help.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href="mailto:your-email@example.com" className="flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-lg font-bold hover:bg-blue-50 transition shadow-lg">
              <Mail className="w-5 h-5 mr-3" />
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/haris-rindh/" target="_blank" rel="noreferrer" className="flex items-center justify-center px-8 py-4 bg-blue-800 text-white border border-blue-700 rounded-lg font-bold hover:bg-blue-700 transition">
              <Linkedin className="w-5 h-5 mr-3" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 bg-slate-900 text-slate-400 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-slate-200">Haris Rindh</span> © 2026. Built with precision.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#portfolio" className="hover:text-white transition">Portfolio</a>
            <a href="#services" className="hover:text-white transition">Services</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;