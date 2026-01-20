import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Github, Linkedin, Mail, ExternalLink, 
  Code2, Layout, Database, Smartphone, ArrowRight, 
  Terminal, Cpu, Globe, Server, ChevronDown, CheckCircle
} from 'lucide-react';

// Using a placeholder URL to ensure the code runs immediately without local file errors.
// You can replace this string with your local import later: import heroImage from './assets/profile.jpg';
const heroImage = "src/assets/Haris-Rindh.png";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  // --- ANIMATION: Typewriter Effect ---
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = ["Full Stack Developer", "SaaS Architect", "UI/UX Designer", "Problem Solver"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, titles]);

  // --- ANIMATION: Navbar Scroll ---
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- FEATURE: Set Favicon ---
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (!link) {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = heroImage;
      document.head.appendChild(newLink);
    } else {
      link.href = heroImage;
    }
  }, []);

  // --- DATA ---
  const services = [
    {
      title: "SaaS & Web Apps",
      desc: "Complex applications with authentication, databases (MongoDB), and AI integration.",
      icon: <Database className="w-8 h-8 text-violet-500" />
    },
    {
      title: "Custom Business Sites",
      desc: "High-performance, SEO-ready websites tailored to build trust and convert visitors.",
      icon: <Layout className="w-8 h-8 text-violet-500" />
    },
    {
      title: "Landing Pages",
      desc: "Pixel-perfect, responsive pages designed for marketing campaigns and lead gen.",
      icon: <Smartphone className="w-8 h-8 text-violet-500" />
    }
  ];

  // Complete Project List (8 Items)
  const allProjects = [
    {
      title: "Nexus AI",
      category: "Enterprise SaaS Platform",
      desc: "A production-grade AI content operating system. Features a 5-level AI failover engine (Gemini/Groq/Cohere), full authentication, database history, and advanced visual tools.",
      stack: ["React", "Node.js", "MongoDB", "AI Agents"],
      link: "https://nexus-ai-mocha-phi.vercel.app/",
      repo: "https://github.com/Haris-Rindh/NexusAI",
      featured: true,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Book Sphere",
      category: "Full-Stack Web App",
      desc: "A dynamic library management application with cloud database integration. Features real-time search, categorization, and live data fetching.",
      stack: ["React", "Firebase", "Async API"],
      link: "https://haris-rindh.github.io/Book-Sphere/",
      repo: "https://github.com/Haris-Rindh/Book-Sphere",
      featured: false,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Umer Surveying™",
      category: "Corporate Business Site",
      desc: "Designed and deployed the corporate portal for a surveying firm. Features service mapping, founder profiles, and lead generation forms.",
      stack: ["HTML5", "CSS3", "SEO Optimization"],
      link: "https://haris-rindh.github.io/Umer-Surveying/",
      repo: "https://github.com/Haris-Rindh/Umer-Surveying",
      featured: false,
      image: "./src/assets/umer-serveying.png"
    },
    {
      title: "Prime Real Estate",
      category: "Property Platform",
      desc: "High-performance property listing template with filtering logic, map integrations, and agent profiles.",
      stack: ["React", "Tailwind", "Framer Motion"],
      link: "https://skyline-apartments-two.vercel.app/",
      repo: "https://github.com/Haris-Rindh/Skyline-apartments.git",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Dental Care",
      category: "Medical Website",
      desc: "Clean, trust-building design for a dental clinic featuring appointment scheduling and service breakdowns.",
      stack: ["HTML5", "Bootstrap", "Responsive"],
      link: "https://zenith-dental-one.vercel.app/",
      repo: "https://github.com/Haris-Rindh/Zenith-dental.git",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Urban Restaurant",
      category: "Hospitality",
      desc: "Visual-heavy layout for a modern restaurant with menu galleries and reservation forms.",
      stack: ["React", "CSS Modules", "Animation"],
      link: "https://rustic-spoon-nu.vercel.app/",
      repo: "https://github.com/Haris-Rindh/rustic-spoon.git",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Digital Agency",
      category: "Portfolio Template",
      desc: "Modern, dark-themed portfolio for creative agencies to showcase work and attract high-ticket clients.",
      stack: ["React", "Tailwind", "Framer Motion"],
      link: "https://neongrowth.vercel.app/",
      repo: "https://github.com/Haris-Rindh/neongrowth.git",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "City Plumbing",
      category: "Local Service Site",
      desc: "Conversion-focused layout for emergency services. Features click-to-call buttons and immediate trust signals.",
      stack: ["HTML5", "CSS3", "Lead Gen"],
      link: "https://swiftfix-plumbing.vercel.app/",
      repo: "https://github.com/Haris-Rindh/swiftfix-plumbing-landing.git",
      image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800"
    }
  ];

  // Logic to show 3 or All
  const visibleProjects = showAllProjects ? allProjects : allProjects.slice(0, 3);

  // Function to handle "Show Less" scroll behavior
  const handleToggle = () => {
    if (showAllProjects) {
      // Scroll back up to portfolio top when showing less
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setShowAllProjects(!showAllProjects);
  };

  const skills = [
    { 
      name: "Frontend", 
      icon: <Globe size={24} className="text-blue-400" />, 
      tools: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] 
    },
    { 
      name: "Backend", 
      icon: <Server size={24} className="text-green-400" />, 
      tools: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase"] 
    },
    { 
      name: "AI & Automation", 
      icon: <Cpu size={24} className="text-purple-400" />, 
      tools: ["Gemini API", "Groq SDK", "LangChain", "OpenAI", "Prompt Eng."] 
    },
    { 
      name: "DevOps", 
      icon: <Terminal size={24} className="text-orange-400" />, 
      tools: ["Git", "Docker", "Vercel", "Render", "CI/CD Pipelines"] 
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-violet-500 selection:text-white">

      {/* --- NAVBAR --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center text-white">
              <Code2 size={20} />
            </div>
            Haris Rindh<span className="text-violet-500">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-violet-400 transition-colors">About</a>
            <a href="#services" className="hover:text-violet-400 transition-colors">Services</a>
            <a href="#projects" className="hover:text-violet-400 transition-colors">Portfolio</a>
            <a href="#contact" className="px-5 py-2.5 bg-white text-slate-950 hover:bg-violet-50 rounded-full transition-all font-bold">
              Hire Me
            </a>
          </div>

          <button className="md:hidden text-slate-200" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-violet-400">About</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-violet-400">Services</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-violet-400">Portfolio</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg text-violet-400 font-bold">Hire Me</a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="about" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-sm text-violet-300">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Available for new projects
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                I Build Digital <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                  Assets.
                </span>
              </h1>
              
              <div className="h-8 text-xl lg:text-2xl text-slate-400 font-mono">
                &gt; I am a <span className="text-white font-bold">{text}</span>
                <span className="animate-pulse text-violet-500 font-bold">|</span>
              </div>

              <p className="text-lg text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                I help businesses turn visitors into customers. From high-converting landing pages to complex AI SaaS platforms, I build solutions that work.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a href="#contact" className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-bold transition-all shadow-lg shadow-violet-600/25 flex items-center justify-center gap-2">
                  Start Project <ArrowRight size={20} />
                </a>
                <a href="#projects" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-bold transition-all border border-slate-700 flex items-center justify-center gap-2">
                  View Work <ExternalLink size={20} />
                </a>
              </div>

              <div className="flex gap-6 justify-center lg:justify-start pt-8 opacity-70">
                <a href="https://github.com/Haris-Rindh" target="_blank" className="hover:text-white transition-colors"><Github size={24} /></a>
                <a href="https://www.linkedin.com/in/harisrindh" target="_blank" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
                <a href="mailto:haris.rindh.pk@gmail.com" className="hover:text-white transition-colors"><Mail size={24} /></a>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-72 h-72 lg:w-96 lg:h-96 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-indigo-600 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative w-full h-full rounded-full border-4 border-slate-800 bg-slate-900 flex items-center justify-center overflow-hidden shadow-2xl">
                   <img 
                     src={heroImage} 
                     alt="Haris" 
                     className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                   />
                   <Code2 size={64} className="text-slate-700 absolute z-[-1]" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- ENHANCED SKILLS SECTION --- */}
      <div className="border-y border-slate-800 bg-slate-900/30 py-16 overflow-hidden">
         <div className="container mx-auto px-6">
            <h3 className="text-center text-slate-500 text-sm font-bold uppercase tracking-widest mb-10">Technical Proficiency</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {skills.map((skill, i) => (
                 <div key={i} className="group p-6 rounded-2xl border border-slate-800 bg-slate-950/50 hover:border-violet-500/30 transition-all hover:-translate-y-1 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                      {skill.icon}
                    </div>
                    <div className="flex items-center gap-3 mb-4 relative z-10">
                       <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shadow-sm text-white group-hover:text-violet-400 transition-colors">
                         {skill.icon}
                       </div>
                       <span className="font-bold text-lg text-white">{skill.name}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {skill.tools.map((tool, j) => (
                        <span key={j} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-900 text-slate-400 border border-slate-800 group-hover:border-slate-700 transition-colors">
                          {tool}
                        </span>
                      ))}
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>

      {/* --- SERVICES --- */}
      <section id="services" className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How I Can Help You</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">I don't just write code; I provide solutions designed to grow your business.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-violet-500/50 hover:-translate-y-2 transition-all duration-300 group">
                <div className="mb-6 bg-slate-800 p-4 w-fit rounded-xl group-hover:bg-violet-900/20 transition-colors">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS --- */}
      <section id="portfolio" className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          
          {/* Centered Header */}
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {showAllProjects ? "All Projects Archive" : "Featured Projects"}
             </h2>
             <p className="text-slate-400 max-w-2xl mx-auto">
                {showAllProjects 
                  ? "A complete list of my technical work, templates, and client sites." 
                  : "A selection of my recent technical and commercial work."}
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project, index) => (
              <div key={index} className={`group bg-slate-950 rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col relative ${project.featured ? 'border-violet-500/50 shadow-xl shadow-violet-900/20 md:col-span-2 lg:col-span-1' : 'border-slate-800 hover:border-slate-600'}`}>
                
                {/* TOP HOVER BAR EFFECT - The Strikethrough from Code Snippet */}
                <div className="absolute top-0 left-0 h-1 bg-violet-600 w-0 group-hover:w-full transition-all duration-500 z-50"></div>

                {/* PROJECT IMAGE */}
                <div className="h-52 relative overflow-hidden bg-slate-900">
                   <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700" 
                   />
                   
                   {/* Dark Gradient Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                   
                   {/* DIAGONAL SWEEP EFFECT */}
                   <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:animate-[shine_0.75s_ease-in-out] z-20 pointer-events-none" style={{ background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent)' }}></div>

                   {/* Overlay Links on Hover */}
                   <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm z-30">
                      <a href={project.repo} target="_blank" className="p-3 bg-white/10 rounded-full hover:bg-white/20 text-white transition"><Github size={20}/></a>
                      <a href={project.link} target="_blank" className="px-5 py-2 bg-white text-slate-900 font-bold rounded-full hover:bg-violet-50 transition flex items-center gap-2">
                        Visit Site <ArrowRight size={16}/>
                      </a>
                   </div>

                   {/* Category Badge */}
                   <div className="absolute bottom-4 left-4 z-10">
                      <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md ${project.featured ? 'bg-violet-600 text-white' : 'bg-white/10 text-white border border-white/20'}`}>
                        {project.category}
                      </span>
                   </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-900">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-900 border border-slate-800 text-slate-400 text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --- BOTTOM BUTTONS (CENTERED) --- */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-16">
             <button 
                onClick={handleToggle}
                className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-bold transition-all shadow-lg shadow-violet-600/25 flex items-center justify-center gap-2"
             >
               {showAllProjects ? "Show Less" : "View All Projects"}
               <ChevronDown size={20} className={`transform transition-transform ${showAllProjects ? "rotate-180" : ""}`} />
             </button>
             
             <a 
               href="https://github.com/Haris-Rindh" 
               target="_blank" 
               className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-bold transition-all border border-slate-700 flex items-center justify-center gap-2"
             >
               View GitHub <Github size={20} />
             </a>
          </div>

        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Let's Build Something Amazing.</h2>
           <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
             I am currently open to freelance projects and full-time opportunities. If you need a high-performance web solution, I'm ready to help.
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center gap-6">
             <a href="mailto:haris.rindh.pk@gmail.com" className="px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-violet-50 transition shadow-lg flex items-center justify-center gap-3">
               <Mail size={20} /> Email Me
             </a>
             <a href="https://www.linkedin.com/in/harisrindh" target="_blank" className="px-8 py-4 bg-slate-800 text-white font-bold rounded-full hover:bg-slate-700 transition border border-slate-700 flex items-center justify-center gap-3">
               <Linkedin size={20} /> LinkedIn
             </a>
           </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 border-t border-slate-800 bg-slate-950 text-slate-500 text-sm text-center">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
           <p>&copy; 2026 Haris Rindh. Built with React & Tailwind.</p>
           <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Home</a>
              <a href="#projects" className="hover:text-white transition">Portfolio</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
           </div>
        </div>
      </footer>
      
      {/* GLOBAL STYLES FOR ANIMATIONS */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-15deg); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateX(100%) skewX(-15deg); opacity: 0; }
        }
      `}</style>

    </div>
  );
};

export default Portfolio;