import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, ExternalLink, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    'Python', 'JavaScript', 'Java', 'n8n',
    'SQL', 'APIs', 'Automações', 'Low-Code',
    'Integração de Dados', 'Inteligência Artificial'
  ];

  const experiences = [
    {
      period: '2025 - Atual',
      company: 'Agência Mada',
      role: 'Gestor de Automações e Software',
      description: 'Liderança e desenvolvimento de soluções de automação e software'
    },
    {
      period: '2024 - 2025',
      company: 'EFD',
      role: 'Jovem Aprendiz - Setor Comercial Administrativo',
      description: 'Experiência em processos comerciais e administrativos de vendas'
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-slate-950/80 z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            KM.
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['home', 'sobre', 'skills', 'experiência', 'contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize text-sm font-medium transition-colors ${
                  activeSection === item ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-6 py-4 flex flex-col gap-4">
              {['home', 'sobre', 'skills', 'experiência', 'contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-left text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-4xl text-center space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
              Kauan Martins
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300">
              Gestor de Desenvolvimento de Software & Automações
            </h2>
          </div>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Transformando processos manuais em fluxos de trabalho inteligentes. 
            Especialista em automações, integrações de APIs e arquiteturas lógicas com IA.
          </p>

          <div className="flex gap-4 justify-center pt-8">
            <a
              href="https://github.com/devkauanm"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500 rounded-lg transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <Github size={20} />
                GitHub
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/kauan-martins-6482b62a1"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-lg transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <Linkedin size={20} />
                LinkedIn
              </span>
            </a>
          </div>

          <div className="pt-12 text-slate-500 text-sm">
            São Bernardo do Campo - SP
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="min-h-screen flex items-center py-20 px-6">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Sobre mim</h2>
          
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              Sou um Desenvolvedor de Automações dedicado a transformar processos manuais em fluxos de trabalho inteligentes e eficientes. Com sólida experiência no ecossistema n8n e proficiência em linguagens como Python e JavaScript, foco na criação de soluções que integram ferramentas e otimizam a produtividade operacional.
            </p>
            
            <p>
              Minha especialidade reside no desenvolvimento de arquiteturas lógicas e funcionais, aliando o conhecimento técnico em Ciência da Computação à aplicação prática de Inteligência Artificial para entregar resultados que geram valor real e escalabilidade.
            </p>

            <p>
              Como Gestor de Desenvolvimento de Software na Agência Mada, lidero projetos de automação complexos e desenvolvimento de soluções personalizadas que resolvem desafios reais do negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center py-20 px-6">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Skills & Tecnologias</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="group p-4 bg-slate-900/50 border border-slate-800 hover:border-cyan-500 rounded-lg transition-all duration-300 hover:bg-slate-800/50"
              >
                <span className="text-slate-300 group-hover:text-cyan-400 transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiência Section */}
      <section id="experiência" className="min-h-screen flex items-center py-20 px-6">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Experiência</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="group p-6 bg-slate-900/30 border border-slate-800 hover:border-cyan-500 rounded-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-cyan-400">{exp.company}</p>
                  </div>
                  <span className="text-sm text-slate-500 whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-slate-400">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="min-h-screen flex items-center py-20 px-6">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Vamos conversar?</h2>
          <p className="text-xl text-slate-400 mb-12">
            Estou aberto a novas oportunidades e projetos desafiadores.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="https://github.com/devkauanm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500 rounded-lg transition-all duration-300"
            >
              <Github size={20} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kauan-martins-6482b62a1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500 rounded-lg transition-all duration-300"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/_kauan_martinsx/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500 rounded-lg transition-all duration-300"
            >
              <Instagram size={20} /> Instagram
            </a>
          </div>

          <div className="pt-12 border-t border-slate-800">
            <p className="text-slate-500">© 2025 Kauan Martins. Desenvolvido com React & Tailwind CSS</p>
          </div>
        </div>
      </section>
    </div>
  );
}
