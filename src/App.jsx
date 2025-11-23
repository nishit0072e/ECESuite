import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Activity, 
  Radio, 
  Play, 
  ExternalLink, 
  Zap, 
  Waves, 
  Code2, 
  BookOpen, 
  Menu,
  X,
  Settings
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-cyan-500/20 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
              <Cpu className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-xl text-white tracking-tight">ECE<span className="text-cyan-400">Suite</span></span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Dashboard</a>
              <a href="#apps" className="text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Apps</a>
              <a href="#docs" className="text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Docs</a>
              <button className="bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium border border-cyan-500/50 transition-all flex items-center gap-2">
                <Settings size={16} /> Configuration
              </button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-slate-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
            <a href="#apps" className="text-slate-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Apps</a>
            <a href="#docs" className="text-slate-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Docs</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <div id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="white" strokeWidth="1" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-slate-300 text-sm font-medium">V.2.0 Systems Operational</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Integrated
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
            Signal Workspace
          </span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10">
          Access a comprehensive cloud-based laboratory for Electronics & Communication. 
          Launch advanced filtering simulations, modulation controls, and real-time DSP analysis tools directly in your browser.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#apps" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40">
            Launch Tools
          </a>
          <a href="#" className="inline-flex items-center justify-center px-8 py-3 border border-slate-700 text-base font-medium rounded-lg text-slate-300 bg-slate-800/50 hover:bg-slate-800 backdrop-blur-sm md:py-4 md:text-lg transition-all">
            <BookOpen className="mr-2 w-5 h-5" />
            Documentation
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description, tags, icon: Icon, color, link }) => {
  return (
    <div className="group relative bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1 overflow-hidden">
      {/* Hover Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-6">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 shadow-inner group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-cyan-400" />
          </div>
          <div className="flex gap-2">
             <span className="flex h-2 w-2 relative mt-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
             </span>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{title}</h3>
        <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-900 text-slate-300 border border-slate-700/50">
              {tag}
            </span>
          ))}
        </div>

        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center px-4 py-2 border border-slate-600 rounded-lg text-sm font-medium text-slate-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all group/btn"
        >
          <Play className="mr-2 w-4 h-4 fill-current" />
          Open Tool
          <Zap className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
        </a>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Filter Lab Pro",
      description: "Launch the advanced digital filter design suite. Model, analyze, and visualize FIR and IIR filters with real-time frequency response plotting in your browser.",
      icon: Waves,
      tags: ["Signal Processing", "Filter Design", "Live Simulation"],
      color: "from-purple-500 to-indigo-500",
      link: "https://filter-lab-pro-demo.vercel.app" // Placeholder for actual deployed tool
    },
    {
      title: "Modulab",
      description: "Access the modulation simulation laboratory. Interactive waveform controls for AM, FM, PM, and digital modulation schemes.",
      icon: Radio,
      tags: ["Comms Systems", "Modulation", "Waveform Lab"],
      color: "from-cyan-500 to-blue-500",
      link: "https://modulab-demo.vercel.app" // Placeholder for actual deployed tool
    },
    {
      title: "DSP Transforms",
      description: "Run high-performance implementations of essential Digital Signal Processing transforms (FFT, DCT, Wavelets) on your local datasets.",
      icon: Activity,
      tags: ["Algorithms", "Fourier Analysis", "Data Processing"],
      color: "from-emerald-500 to-teal-500",
      link: "https://dsp-transforms-demo.vercel.app" // Placeholder for actual deployed tool
    }
  ];

  return (
    <div id="apps" className="relative py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Available Applications</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg">
            Select a module to begin your simulation or analysis session. All tools are running on the latest version.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Cpu className="text-cyan-500 w-6 h-6" />
            <span className="font-bold text-lg text-white">ECE<span className="text-cyan-400">Suite</span></span>
          </div>
          
          <div className="text-slate-500 text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Electronics & Communication Engineering Suite.</p>
            <p className="mt-1 flex items-center justify-center md:justify-end gap-2">
              All systems operational. <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default App;