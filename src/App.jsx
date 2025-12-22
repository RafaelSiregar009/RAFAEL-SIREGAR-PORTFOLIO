import React, { useState, useEffect } from 'react';
import { Gamepad2, Code, Briefcase, Award, Mail, Github, Linkedin, X, ChevronRight, Terminal, Database, Calculator, ExternalLink, Download, Menu } from 'lucide-react';

export default function GamingPortfolio() {
  const [gameState, setGameState] = useState('start');
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [selectedSection, setSelectedSection] = useState('home');
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [coins, setCoins] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (gameState === 'loading') {
      const interval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setGameState('game'), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [gameState]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStart = () => {
    setGameState('loading');
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - startX;
      setRotation(prev => prev + deltaX * 0.5);
      setStartX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      const deltaX = e.touches[0].clientX - startX;
      setRotation(prev => prev + deltaX * 0.5);
      setStartX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const experiences = [
    {
      id: 1,
      title: "Junior Accountant",
      company: "KJA Jansen Sinaga",
      period: "2024 - Present",
      type: "Accounting",
      icon: Calculator,
      description: "Mengelola laporan keuangan dan membantu percepatan penyelesaian pembukuan",
      achievements: [
        "Mengoptimalkan proses closing bulanan dari 15 hari menjadi 7 hari",
        "Implementasi sistem ERP yang meningkatkan efisiensi 40%",
      ],
      tools: ["Excel", "VBA", "Gcollab"]
    },
    {
      id: 2,
      title: "IT Engineer",
      company: "PT Global Bizpro Consulting",
      period: "2024 - Present",
      type: "Hardware & Software",
      icon: Code,
      description: "Membuat Website Perusahaan untuk solusi bisnis enterprise",
      achievements: [
        "Menjaga & mengoptimalkan Teknologi di sekitar agar dapat bekerja maksimal"
      ],
      tools: ["React", "Node.js", "PostgreSQL", "AWS"]
    },
    {
      id: 3,
      title: "Junior Auditor",
      company: "KAP Alister & Hamonangan",
      period: "2024 - Present",
      type: "Auditor",
      icon: Database,
      description: "Melakukan audit terhadap perusahaan yang menggunakan jasa Kami",
      achievements: [
        "Melakukan Stock Opname & Cash Opname",
        "Memastikan Kesesuaian vouching dengan Penjualan",
      ],
      tools: ["Python", "Tableau", "SQL", "Excel VBA"]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Accounting Automation System",
      status: "Completed",
      difficulty: "Hard",
      description: "Sistem otomasi untuk proses akuntansi yang mengurangi manual work hingga 70%",
      features: [
        "Auto-posting journal entries",
        "Reconciliation otomatis",
        "Alert system untuk anomali",
        "Dashboard reporting real-time"
      ],
      tools: ["Python", "Django", "PostgreSQL", "React", "Docker"],
      impact: "Menghemat 30+ jam kerja per minggu"
    },
    {
      id: 2,
      title: "Financial Dashboard Analytics",
      status: "In Progress",
      difficulty: "Medium",
      description: "Platform analytics untuk visualisasi data keuangan dengan insights berbasis AI",
      features: [
        "Real-time data visualization",
        "Predictive analytics",
        "Custom report generator",
        "Multi-currency support"
      ],
      tools: ["React", "Node.js", "MongoDB", "Chart.js", "TensorFlow"],
      impact: "Meningkatkan decision making speed 50%"
    },
    {
      id: 3,
      title: "Invoice Management App",
      status: "Planning",
      difficulty: "Easy",
      description: "Aplikasi mobile untuk manajemen invoice dan payment tracking",
      features: [
        "OCR for invoice scanning",
        "Payment reminders",
        "Expense categorization",
        "Export to accounting software"
      ],
      tools: ["React Native", "Firebase", "Node.js"],
      impact: "Target: Reduce invoice processing time 60%"
    }
  ];

  const skills = [
    { name: "Financial Reporting", level: 95, category: "Accounting", color: "from-purple-500 to-pink-500" },
    { name: "React & JavaScript", level: 90, category: "Software", color: "from-blue-500 to-cyan-500" },
    { name: "SQL & Database", level: 88, category: "Software", color: "from-green-500 to-emerald-500" },
    { name: "N8N", level: 85, category: "Automation", color: "from-orange-500 to-red-500" },
    { name: "Python", level: 82, category: "Software", color: "from-yellow-500 to-orange-500" },
     ];

  if (gameState === 'start') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="text-center z-10 px-4">
          <div className="mb-12 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl"></div>
            </div>
            <Gamepad2 className="w-28 h-28 mx-auto text-cyan-400 relative z-10" style={{
              filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.5))',
              animation: 'float 3s ease-in-out infinite'
            }} />
          </div>
          
          <h1 className="text-7xl font-black text-white mb-2 tracking-tight" style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            textShadow: '0 0 40px rgba(139, 92, 246, 0.5)'
          }}>
            RAFAEL SIREGAR
          </h1>
          <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"></div>
          <p className="text-2xl text-cyan-400 mb-16 font-light tracking-wide">
            Accounting <span className="text-purple-400">×</span> Software Developer
          </p>
          
          <button
            onClick={handleStart}
            className="group relative px-16 py-5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xl font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center justify-center gap-3">
              <span className="text-2xl">▶</span>
              START GAME
            </span>
          </button>
          
          <div className="mt-16 text-gray-500 text-sm tracking-widest animate-pulse">
            PRESS START TO CONTINUE
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
      </div>
    );
  }

  if (gameState === 'loading') {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center max-w-md w-full px-4">
          <Terminal className="w-20 h-20 mx-auto text-green-400 mb-8" style={{
            filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.5))',
            animation: 'pulse 2s ease-in-out infinite'
          }} />
          <h2 className="text-4xl font-bold text-green-400 mb-2 tracking-wider font-mono">
            LOADING
          </h2>
          <p className="text-green-400/60 mb-8 text-sm tracking-widest">INITIALIZING PORTFOLIO</p>
          
          <div className="relative w-full h-3 bg-slate-800 rounded-full overflow-hidden border border-green-500/30">
            <div 
              className="absolute h-full bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 rounded-full transition-all duration-300"
              style={{
                width: `${loadingProgress}%`,
                boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)'
              }}
            />
          </div>
          <p className="text-green-400 mt-4 text-2xl font-mono font-bold">{loadingProgress}%</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Animated Gaming Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Grid Lines */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridScroll 20s linear infinite'
          }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.3
              }}
            ></div>
          ))}
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

        {/* Hexagon Pattern */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-cyan-400"
              style={{
                width: '80px',
                height: '92px',
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
                left: `${(i % 5) * 20}%`,
                top: `${Math.floor(i / 5) * 33}%`,
                animation: `rotate 20s linear infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            ></div>
          ))}
        </div>

        {/* Scanning Lines */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20"
               style={{
                 animation: 'scanline 8s linear infinite',
                 boxShadow: '0 0 10px rgba(34, 211, 238, 0.5)'
               }}></div>
        </div>

        {/* Digital Rain Effect */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`rain-${i}`}
            className="absolute w-px bg-gradient-to-b from-cyan-400 to-transparent"
            style={{
              left: `${i * 10}%`,
              height: '100px',
              animation: `rain ${3 + Math.random() * 3}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.1
            }}
          ></div>
        ))}
      </div>

      <style>{`
        @keyframes gridScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
        @keyframes scanline {
          0% { top: 0%; }
          100% { top: 100%; }
        }
        @keyframes rain {
          0% { top: -100px; opacity: 0; }
          50% { opacity: 0.2; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
      {/* Modern Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-slate-950/95 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative">
                <img 
                  src="/assets/rfl.png" 
                  alt="Rafael" 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-cyan-400 object-cover"
                  style={{boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)'}}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzNiODJmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjQwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPnI8L3RleHQ+PC9zdmc+';
                  }}
                />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full border-2 border-slate-950"></div>
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Rafael Siregar
                </h2>
                <p className="text-xs text-gray-500 hidden sm:block">Full Stack Developer</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {['home', 'skills', 'experience', 'projects'].map(section => (
                <button
                  key={section}
                  onClick={() => setSelectedSection(section)}
                  className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                    selectedSection === section 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </nav>

            {/* Right Side - XP + Mobile Menu */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* XP Badge */}
              <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full border border-yellow-500/20">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                <span className="text-yellow-400 font-bold text-xs sm:text-sm">{coins} XP</span>
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-xl transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4 animate-slideDown">
              <nav className="flex flex-col gap-2">
                {['home', 'skills', 'experience', 'projects'].map(section => (
                  <button
                    key={section}
                    onClick={() => {
                      setSelectedSection(section);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full px-6 py-3 rounded-xl font-medium transition-all duration-300 text-left ${
                      selectedSection === section 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24">
        {selectedSection === 'home' && (
          <div className="relative overflow-hidden">
            {/* Hero Section */}
            <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 lg:py-32">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                  <div className="inline-block">
                    <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs sm:text-sm font-medium">
                      👋 Welcome to my portfolio
                    </span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      Bridging Finance
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      & Technology
                    </span>
                  </h1>
                  
                  <p className="text-base sm:text-xl text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Saya adalah mahasiswa di bidang <span className="text-purple-400 font-semibold">Software Engineer</span> dan <span className="text-base sm:text-xl text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">Bekerja di Perusahaan yang bergerak pada bidang</span> <span className="text-cyan-400 font-semibold">Finance</span> perusahaan Jasa keuangan dan audit. Saya bertugas mengotomatisasi proses Kerja dan membuat solusi inovatif.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                    <a 
                      href="mailto:rafaelsiregar.jobs@gmail.com" 
                      className="group flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-500/25"
                    >
                      <Mail className="w-5 h-5" />
                      <span className="text-sm sm:text-base">Get In Touch</span>
                    </a>
                    
                    <button className="flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                      <Download className="w-5 h-5" />
                      <span className="text-sm sm:text-base">Download CV</span>
                    </button>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4 pt-4 justify-center lg:justify-start">
                    <a href="https://github.com/rafaelsiregar" target="_blank" rel="noopener noreferrer" 
                       className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/rafael-siregar-b33475349/" target="_blank" rel="noopener noreferrer"
                       className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Right Content - Image */}
                <div className="relative lg:ml-auto">
                  <div className="relative w-full max-w-md mx-auto">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                    
                    {/* Image Container with 360 Rotation */}
                    <div 
                      className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-2 rounded-3xl border border-white/10 cursor-grab active:cursor-grabbing select-none"
                      onMouseDown={handleMouseDown}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseUp}
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                    >
                      <div className="relative overflow-hidden rounded-2xl">
                        <img 
                          src="/assets/rfl.png" 
                          alt="Rafael Siregar" 
                          className="w-full h-auto object-cover transition-transform duration-100"
                          style={{ 
                            transform: `rotateY(${rotation}deg)`,
                            transformStyle: 'preserve-3d'
                          }}
                          onError={(e) => {
                            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iIzFhMjAzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjEyMCIgZmlsbD0iIzIyZDNlZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPnI8L3RleHQ+PC9zdmc+';
                          }}
                          draggable="false"
                        />
                        
                        {/* Drag Hint */}
                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
                          <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                            <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                          </div>
                          <span className="text-xs text-white font-medium">Drag to rotate 360°</span>
                        </div>
                      </div>
                      
                      {/* Status Badge */}
                      <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-green-500/90 backdrop-blur-sm px-4 py-2 rounded-full">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="text-white text-sm font-semibold">Available for work</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="group relative bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300">
                  <Briefcase className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-4xl font-bold mb-2">3+</h3>
                  <p className="text-gray-400">Years Experience</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="group relative bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300">
                  <Code className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-4xl font-bold mb-2">20+</h3>
                  <p className="text-gray-400">Projects Completed</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="group relative bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/40 transition-all duration-300">
                  <Award className="w-12 h-12 text-yellow-400 mb-4" />
                  <h3 className="text-4xl font-bold mb-2">15+</h3>
                  <p className="text-gray-400">Certifications</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </section>
          </div>
        )}

        {selectedSection === 'skills' && (
          <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-4xl sm:text-5xl font-black mb-4">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Skills & Expertise
                  </span>
                </h2>
                <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                {skills.map((skill, idx) => (
                  <div 
                    key={idx}
                    className="group bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                      <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400">
                        {skill.category}
                      </span>
                    </div>
                    
                    <div className="relative h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)'
                        }}
                      />
                    </div>
                    
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-500">Proficiency</span>
                      <span className="text-sm font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {selectedSection === 'experience' && (
          <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-4xl sm:text-5xl font-black mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Work Experience
                </span>
              </h2>
              <p className="text-gray-400 text-lg">My professional journey</p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {experiences.map((exp, idx) => {
                const Icon = exp.icon;
                return (
                  <div 
                    key={exp.id}
                    className="group bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer hover:scale-105"
                    onClick={() => {
                      setSelectedDetail({type: 'experience', data: exp});
                      setCoins(prev => prev + 10);
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-cyan-500/20">
                        <Icon className="w-7 h-7 text-cyan-400" />
                      </div>
                      <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs font-semibold text-cyan-400">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-1 text-white group-hover:text-cyan-400 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-1">{exp.company}</p>
                    <p className="text-gray-500 text-xs mb-4">{exp.period}</p>

                    <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium group-hover:gap-3 transition-all">
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {selectedSection === 'projects' && (
          <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-4xl sm:text-5xl font-black mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Featured Projects
                </span>
              </h2>
              <p className="text-gray-400 text-lg">Some of my recent work</p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {projects.map((project, idx) => (
                <div 
                  key={project.id}
                  className="group bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 cursor-pointer hover:scale-105"
                  onClick={() => {
                    setSelectedDetail({type: 'project', data: project});
                    setCoins(prev => prev + 15);
                  }}
                >
                  {/* Project Header */}
                  <div className="p-6 border-b border-white/5">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'Completed' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                        project.status === 'In Progress' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                        'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                      }`}>
                        {project.status}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.difficulty === 'Hard' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                        project.difficulty === 'Medium' ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' :
                        'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      }`}>
                        {project.difficulty}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Footer */}
                  <div className="p-6 bg-slate-900/30">
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {project.tools.slice(0, 3).map((tool, i) => (
                          <div key={i} className="w-8 h-8 bg-slate-800 border border-white/10 rounded-full flex items-center justify-center text-xs font-semibold">
                            {tool.charAt(0)}
                          </div>
                        ))}
                        {project.tools.length > 3 && (
                          <div className="w-8 h-8 bg-slate-800 border border-white/10 rounded-full flex items-center justify-center text-xs text-gray-400">
                            +{project.tools.length - 3}
                          </div>
                        )}
                      </div>
                      
                      <button className="flex items-center gap-2 text-cyan-400 text-sm font-medium group-hover:gap-3 transition-all">
                        <span>View</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Detail Modal */}
      {selectedDetail && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[100] p-4">
          <div className="bg-slate-900 rounded-3xl border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-8 overflow-y-auto max-h-[90vh]">
              {/* Header with Image */}
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                {/* Project/Experience Image */}
                <div className="md:w-48 md:h-48 w-full h-64 flex-shrink-0">
                  <div className="relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-white/10 overflow-hidden group">
                    <img 
                      src="/assets/rfl.png" 
                      alt={selectedDetail.data.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iIzFhMjAzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjEyMCIgZmlsbD0iIzIyZDNlZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPnI8L3RleHQ+PC9zdmc+';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>

                {/* Header Text */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-3xl font-black mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {selectedDetail.data.title}
                      </h3>
                      {selectedDetail.type === 'experience' && (
                        <p className="text-gray-400">{selectedDetail.data.company} • {selectedDetail.data.period}</p>
                      )}
                    </div>
                    <button 
                      onClick={() => setSelectedDetail(null)}
                      className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-xl transition-colors ml-4"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {selectedDetail.data.description}
                  </p>
                </div>
              </div>

              {selectedDetail.type === 'experience' && (
                <>
                  {/* Achievements */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <span className="text-2xl">🏆</span>
                      <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Key Achievements
                      </span>
                    </h4>
                    <div className="space-y-3">
                      {selectedDetail.data.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold">✓</span>
                          </div>
                          <span className="text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <span className="text-2xl">🛠️</span>
                      <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Tools & Technologies
                      </span>
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedDetail.data.tools.map((tool, idx) => (
                        <span key={idx} className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl text-cyan-400 font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {selectedDetail.type === 'project' && (
                <>
                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <span className="text-2xl">✨</span>
                      <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        Key Features
                      </span>
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedDetail.data.features.map((feature, idx) => (
                        <div key={idx} className="flex gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold">✓</span>
                          </div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <span className="text-2xl">💻</span>
                      <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Tech Stack
                      </span>
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedDetail.data.tools.map((tool, idx) => (
                        <span key={idx} className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl text-blue-400 font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-yellow-400 mb-2 flex items-center gap-2">
                      <span className="text-2xl">💡</span>
                      Impact
                    </h4>
                    <p className="text-gray-300">{selectedDetail.data.impact}</p>
                  </div>
                </>
              )}

              {/* XP Reward */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 px-6 py-3 rounded-2xl">
                  <Award className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-bold">
                    +{selectedDetail.type === 'experience' ? '10' : '15'} XP Earned!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
                