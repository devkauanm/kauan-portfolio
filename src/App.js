import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Menu, X, ExternalLink, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const styles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      background: #0f172a;
      color: #e2e8f0;
      line-height: 1.6;
    }

    html {
      scroll-behavior: smooth;
    }

    .container {
      min-height: 100vh;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      position: relative;
      overflow-x: hidden;
    }

    .bg-glow {
      position: fixed;
      pointer-events: none;
      z-index: 0;
    }

    .glow-1 {
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, rgba(34, 211, 238, 0) 70%);
      top: -200px;
      left: -200px;
      border-radius: 50%;
      filter: blur(80px);
    }

    .glow-2 {
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0) 70%);
      bottom: -300px;
      right: -300px;
      border-radius: 50%;
      filter: blur(100px);
    }

    nav {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(15, 23, 42, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(100, 200, 255, 0.1);
      z-index: 100;
      padding: 1.5rem 2rem;
    }

    .nav-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      background: linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .nav-links {
      display: none;
      gap: 2rem;
    }

    .nav-links a {
      color: #94a3b8;
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s;
      cursor: pointer;
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: #22d3ee;
    }

    @media (min-width: 768px) {
      .nav-links {
        display: flex;
      }
    }

    .menu-btn {
      display: flex;
      background: none;
      border: none;
      color: #e2e8f0;
      cursor: pointer;
      font-size: 1.5rem;
    }

    @media (min-width: 768px) {
      .menu-btn {
        display: none;
      }
    }

    .mobile-menu {
      position: fixed;
      top: 60px;
      left: 0;
      right: 0;
      background: rgba(15, 23, 42, 0.98);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(100, 200, 255, 0.1);
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      z-index: 99;
    }

    .mobile-menu a {
      color: #94a3b8;
      text-decoration: none;
      padding: 0.75rem 0;
      border-bottom: 1px solid rgba(100, 200, 255, 0.1);
      cursor: pointer;
      transition: color 0.3s;
    }

    .mobile-menu a:hover {
      color: #22d3ee;
    }

    section {
      position: relative;
      z-index: 1;
    }

    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      margin-top: 60px;
      text-align: center;
    }

    .hero-content {
      max-width: 900px;
      animation: fadeInUp 1s ease-out;
    }

    .hero h1 {
      font-size: clamp(2.5rem, 8vw, 4rem);
      margin-bottom: 1rem;
      font-weight: 800;
      letter-spacing: -1px;
    }

    .hero h2 {
      font-size: clamp(1.25rem, 4vw, 2rem);
      color: #94a3b8;
      margin-bottom: 2rem;
      font-weight: 600;
    }

    .hero p {
      font-size: 1.1rem;
      color: #cbd5e1;
      margin-bottom: 3rem;
      line-height: 1.8;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 3rem;
    }

    .btn {
      padding: 0.75rem 1.5rem;
      border: 1px solid rgba(100, 200, 255, 0.3);
      border-radius: 0.5rem;
      background: transparent;
      color: #e2e8f0;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.3s;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1rem;
    }

    .btn:hover {
      border-color: #22d3ee;
      background: rgba(34, 211, 238, 0.1);
      color: #22d3ee;
    }

    .btn-primary {
      background: linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%);
      border: none;
      color: #0f172a;
      font-weight: 600;
    }

    .btn-primary:hover {
      opacity: 0.9;
      transform: translateY(-2px);
    }

    .location {
      color: #64748b;
      font-size: 0.9rem;
      margin-top: 2rem;
    }

    .content-section {
      max-width: 1200px;
      margin: 0 auto;
      padding: 6rem 2rem;
      min-height: 100vh;
      display: flex;
      align-items: center;
    }

    .section-title {
      font-size: clamp(2rem, 5vw, 3.5rem);
      margin-bottom: 3rem;
      font-weight: 700;
    }

    .about-text {
      font-size: 1.1rem;
      color: #cbd5e1;
      line-height: 1.8;
      margin-bottom: 1.5rem;
    }

.experience-item {
      padding: 2rem;
      background: rgba(30, 41, 59, 0.6);
      border-left: 3px solid #22d3ee;
      border-radius: 0.5rem;
      margin-bottom: 2rem;
      transition: all 0.3s;
    }

    .experience-item:hover {
      background: rgba(30, 41, 59, 0.8);
    }

    .experience-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .experience-role {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .experience-company {
      color: #22d3ee;
      font-weight: 500;
    }

    .experience-period {
      color: #64748b;
      font-size: 0.9rem;
      white-space: nowrap;
    }

    .experience-description {
      color: #cbd5e1;
    }

    .contact-section {
      text-align: center;
    }

    .contact-section h2 {
      margin-bottom: 1rem;
    }

    .contact-intro {
      font-size: 1.1rem;
      color: #cbd5e1;
      margin-bottom: 2rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 3rem;
    }

    .footer {
      text-align: center;
      padding: 2rem;
      border-top: 1px solid rgba(100, 200, 255, 0.1);
      color: #64748b;
      font-size: 0.9rem;
    }

    .arrow-down {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      animation: bounce 2s infinite;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes bounce {
      0%, 100% {
        transform: translateX(-50%) translateY(0);
      }
      50% {
        transform: translateX(-50%) translateY(10px);
      }
    }

    @media (max-width: 768px) {
      .hero {
        padding-top: 120px;
      }

      .content-section {
        padding: 4rem 1.5rem;
        min-height: auto;
      }

      .skills-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .experience-header {
        flex-direction: column;
      }
    }
  `;

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container">
      <style>{styles}</style>
      
      <div className="bg-glow">
        <div className="glow-1"></div>
        <div className="glow-2"></div>
      </div>

      {/* Navigation */}
      <nav>
        <div className="nav-content">
          <div className="logo">KM.</div>
          <div className="nav-links">
            {['home', 'sobre', 'skills', 'experiência', 'contato'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
                className={activeSection === item ? 'active' : ''}
              >
                {item}
              </a>
            ))}
          </div>
          <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          {['home', 'sobre', 'skills', 'experiência', 'contato'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item);
              }}
              className={activeSection === item ? 'active' : ''}
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Kauan Martins</h1>
          <h2>Gestor de Desenvolvimento de Software & Automações</h2>
          <p>
            Transformando processos manuais em fluxos de trabalho inteligentes. 
            Especialista em automações, integrações de APIs e arquiteturas lógicas com IA.
          </p>
          
          <div className="cta-buttons">
            <a href="https://github.com/devkauanm" target="_blank" rel="noopener noreferrer" className="btn">
              <Github size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/kauan-martins-6482b62a1" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>

          <div className="location">📍 São Bernardo do Campo - SP</div>
        </div>

        <div className="arrow-down">
          <ChevronDown size={32} color="#22d3ee" />
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="content-section">
        <div style={{ width: '100%' }}>
          <h2 className="section-title">Sobre mim</h2>
          
          <div>
            <p className="about-text">
              Sou um Desenvolvedor de Automações dedicado a transformar processos manuais em fluxos de trabalho inteligentes e eficientes. Com sólida experiência no ecossistema n8n e proficiência em linguagens como Python e JavaScript, foco na criação de soluções que integram ferramentas e otimizam a produtividade operacional.
            </p>
            
            <p className="about-text">
              Minha especialidade reside no desenvolvimento de arquiteturas lógicas e funcionais, aliando o conhecimento técnico em Ciência da Computação à aplicação prática de Inteligência Artificial para entregar resultados que geram valor real e escalabilidade.
            </p>

            <p className="about-text">
              Como Gestor de Desenvolvimento de Software na Agência Mada, lidero projetos de automação complexos e desenvolvimento de soluções personalizadas que resolvem desafios reais do negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="content-section">
        <div style={{ width: '100%' }}>
          <h2 className="section-title">Skills & Tecnologias</h2>
          
          <style>{`
            .skills-carousel {
              position: relative;
              overflow: hidden;
              background: rgba(30, 41, 59, 0.4);
              border-radius: 1rem;
              padding: 2rem 0;
              margin-bottom: 3rem;
            }

            .skills-track {
              display: flex;
              gap: 2rem;
              animation: scroll 30s linear infinite;
              padding: 0 2rem;
            }

            .skills-track:hover {
              animation-play-state: paused;
            }

            .skill-logo {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 0.75rem;
              min-width: 120px;
              flex-shrink: 0;
              transition: all 0.3s;
            }

            .skill-logo:hover {
              transform: translateY(-10px);
            }

            .logo-box {
              width: 80px;
              height: 80px;
              background: rgba(34, 211, 238, 0.1);
              border: 2px solid rgba(34, 211, 238, 0.3);
              border-radius: 0.75rem;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 2.5rem;
              transition: all 0.3s;
            }

            .skill-logo:hover .logo-box {
              background: rgba(34, 211, 238, 0.2);
              border-color: #22d3ee;
              box-shadow: 0 0 20px rgba(34, 211, 238, 0.3);
            }

            .skill-name {
              font-size: 0.9rem;
              color: #cbd5e1;
              font-weight: 500;
              text-align: center;
            }

            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-120px * 10 - 2rem * 10));
              }
            }

            .skills-grid-static {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
              gap: 1.5rem;
            }

            @media (max-width: 768px) {
              .skill-logo {
                min-width: 100px;
              }

              .logo-box {
                width: 70px;
                height: 70px;
                font-size: 2rem;
              }

              .skills-carousel {
                padding: 1.5rem 0;
              }
            }
          `}</style>
          
          <div className="skills-carousel">
            <div className="skills-track">
              {[
                { name: 'Python', icon: '🐍' },
                { name: 'JavaScript', icon: '⚡' },
                { name: 'Java', icon: '☕' },
                { name: 'n8n', icon: '🔄' },
                { name: 'SQL', icon: '🗄️' },
                { name: 'APIs', icon: '🔌' },
                { name: 'Automações', icon: '🤖' },
                { name: 'Low-Code', icon: '📦' },
                { name: 'Integração', icon: '🔗' },
                { name: 'I.A.', icon: '🧠' },
                // Repetindo para criar o loop contínuo
                { name: 'Python', icon: '🐍' },
                { name: 'JavaScript', icon: '⚡' },
                { name: 'Java', icon: '☕' },
                { name: 'n8n', icon: '🔄' },
                { name: 'SQL', icon: '🗄️' },
              ].map((skill, i) => (
                <div key={i} className="skill-logo">
                  <div className="logo-box">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experiência Section */}
      <section id="experiência" className="content-section">
        <div style={{ width: '100%' }}>
          <h2 className="section-title">Experiência</h2>
          
          <div>
            <div className="experience-item">
              <div className="experience-header">
                <div>
                  <div className="experience-role">Gestor de Automações e Software</div>
                  <div className="experience-company">Agência Mada</div>
                </div>
                <div className="experience-period">2025 - Atual</div>
              </div>
              <div className="experience-description">
                Liderança e desenvolvimento de soluções de automação e software
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <div>
                  <div className="experience-role">Jovem Aprendiz - Setor Comercial Administrativo</div>
                  <div className="experience-company">EFD</div>
                </div>
                <div className="experience-period">2024 - 2025</div>
              </div>
              <div className="experience-description">
                Experiência em processos comerciais e administrativos de vendas
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="content-section">
        <div style={{ width: '100%' }} className="contact-section">
          <h2 className="section-title">Vamos conversar?</h2>
          <p className="contact-intro">
            Estou aberto a novas oportunidades e projetos desafiadores.
          </p>

          <div className="social-links">
            <a href="https://github.com/devkauanm" target="_blank" rel="noopener noreferrer" className="btn">
              <Github size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/kauan-martins-6482b62a1" target="_blank" rel="noopener noreferrer" className="btn">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="https://www.instagram.com/_kauan_martinsx/" target="_blank" rel="noopener noreferrer" className="btn">
              <Instagram size={20} /> Instagram
            </a>
          </div>

          <div className="footer">
            <p>© 2025 Kauan Martins. Desenvolvido com React & Amor ❤️</p>
          </div>
        </div>
      </section>
    </div>
  );
}
