import PillNav from '@/components/ui/PillNav';
import './App.css';
import Lanyard from './components/Lanyard';
import TextType from '@/components/ui/TextType';
import ScrambledText from '@/components/ui/ScrambledText';
import ScrollStack, { ScrollStackItem } from '@/components/ui/ScrollStack';
import { StaggeredMenu } from '@/components/ui/StaggeredMenu';
import { FaLinkedin, FaGithub, FaEnvelope, FaPython, FaJs, FaHtml5, FaReact, FaNodeJs, FaBootstrap, FaAws, FaDatabase, FaServer, FaCode, FaTools, FaLaptopCode, FaCss3Alt } from 'react-icons/fa';
import { SiFastapi, SiFlask, SiTailwindcss, SiMongodb, SiFirebase, SiSupabase, SiVercel, SiGoogle } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { motion } from 'motion/react';
import GlareHover from '@/components/ui/GlareHover';
import DecryptedText from './components/ui/DecryptedText';

const pillars = [

  {
    kicker: '01',
    title: 'Full-stack builds',
    copy: 'React interfaces, Node APIs, database models, and deployment-ready features shaped as complete products.',
    stat: 'MERN',
  },
  {
    kicker: '02',
    title: 'AI workflows',
    copy: 'Practical AI helpers, course generators, chat flows, and automation tools that support real users.',
    stat: 'AI',
  },
  {
    kicker: '03',
    title: 'Clean UI systems',
    copy: 'Dense, responsive screens with a strong visual rhythm, clear hierarchy, and careful interaction details.',
    stat: 'UX',
  },
  {
    kicker: '04',
    title: 'Data thinking',
    copy: 'Dashboards, progress tracking, review states, and backend logic designed around useful signals.',
    stat: 'API',
  },
  {
    kicker: '05',
    title: 'Fast learning',
    copy: 'A student-builder mindset: quick iteration, steady debugging, and shipping projects from idea to demo.',
    stat: 'B.Tech',
  },
  {
    kicker: '06',
    title: 'Community building',
    copy: 'Co-founded ByteHouse and Vyomarr — builder communities focused on shipping real projects, not just talking about them. Leadership shaped around momentum, not meetings.',
    stat: 'LEAD',
  },
];

const toolkit = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'HTML / CSS', icon: <FaHtml5 /> }
    ],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express', icon: <FaServer /> },
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'Flask', icon: <SiFlask /> }
    ],
  },
  {
    category: 'Styling & UI',
    items: [
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Bootstrap', icon: <FaBootstrap /> },
      { name: 'Google Stitch', icon: <SiGoogle /> }
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'Supabase', icon: <SiSupabase /> },
      { name: 'SQL database', icon: <FaDatabase /> }
    ],
  },
  {
    category: 'Cloud & Deployment',
    items: [
      { name: 'AWS (learning now)', icon: <FaAws /> },
      { name: 'Azure (learning now)', icon: <VscAzure /> },
      { name: 'Vercel', icon: <SiVercel /> }
    ],
  },
  {
    category: 'AI Tools',
    items: [
      { name: 'Claude Code', icon: <FaCode /> },
      { name: 'Antigravity', icon: <FaTools /> }
    ],
  },
  {
    category: 'Systems & Practices',
    items: [
      { name: 'Auth flows (OAuth, MSAL)', icon: <FaLaptopCode /> },
      { name: 'Responsive design', icon: <FaCss3Alt /> },
      { name: 'Dashboard UX', icon: <FaLaptopCode /> },
      { name: 'System design', icon: <FaServer /> }
    ],
  },
];

const projects = [
  {
    title: 'ByteHouse Community Portal',
    role: 'Co-Founder & Lead Dev',
    description: 'A platform built for developer momentum. Facilitates project tracking, real-time activity feeds, and cross-team collaboration for our local builder community.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    stats: { primary: '500+ Builders', secondary: '120+ Projects Shipped' }
  },
  {
    title: 'Vyomarr AI Platform',
    role: 'Co-Founder & Product Engineer',
    description: 'An AI developer tool integrating multi-agent orchestrations, customizable LLM agent configurations, and playground logs to experiment with local model testing.',
    tech: ['Next.js', 'FastAPI', 'Supabase', 'Claude Code'],
    stats: { primary: '12 Agents Configured', secondary: 'Instant Local Logging' }
  },
  {
    title: 'Stitch-Powered Dashboard UX',
    role: 'Product Engineer',
    description: 'A high-performance administration dashboard with responsive grids, interactive telemetry tables, and integrated MSAL/OAuth authentication flows.',
    tech: ['React', 'Google Stitch', 'Bootstrap', 'Vercel'],
    stats: { primary: '< 80ms Latency', secondary: '100% Mobile Responsive' }
  }
];

const experience = [
  {
    role: "Vibe Coding Intern",
    company: "TEN Company",
    period: "Feb 2026 - May 2026",
    description: "Developed AI-driven web applications using Node.js and FastAPI, delivering production-ready systems with 90% uptime reliability and automated cloud-based workflows. Designed and integrated REST APIs across full-stack architecture, contributing to scalable deployment pipelines and system performance optimization."
  },
  {
    role: "Cybersecurity Intern",
    company: "Vijesha IT Services LLP",
    period: "Jan 2026 - May 2026",
    description: "Gained hands-on experience in network security, threat detection, and vulnerability assessment through structured weekend training sessions. Applied cybersecurity concepts, including system hardening, risk assessment, and ethical security practices in real-world defensive security environments."
  },
  {
    role: "Full Stack Developer Intern",
    company: "Farview Global",
    period: "May 2026 – June 2026",
    description: "Developed and implemented responsive web interfaces using React to enhance user experience. Built and integrated REST APIs to facilitate seamless data communication between frontend and backend systems. Gained hands-on experience in full-stack development, managing the complete lifecycle from design to production-ready deployment. Collaborated effectively on team-based tasks while integrating UI/UX design principles to improve interface usability."
  }
];

const education = [
  {
    degree: "B.Tech",
    institution: "Annamacharya Institute of Technology & Sciences, Rajampeta",
    period: "2023 - 2027",
    description: "Focus on software engineering, data structures, and full-stack web development."
  }
];

const hackathons = [
  {
    name: "Siddharth HackFest 2K26 (Top 4 / 350+ Teams)",
    date: "Feb 2026",
    project: "CodeMap Neural Engine",
    description: "Led team to the top 4 nationally; built an AI VS Code extension to analyze codebases and generate interactive architecture diagrams. Integrated Gemini API for real-time summaries and file categorization, enhancing code comprehension by 85%.",
    stack: "D3.js, Gemini API, Babel, VS Code Extension",
    links: [
      { text: "GitHub", url: "https://github.com/Jagadesh-1811/codemap" },
      { text: "Prototype", url: "https://shorturl.at/CO9F8" }
    ]
  },
  {
    name: "Google Build a Solution 2026 (Top 106 Nationally)",
    date: "May 2026",
    project: "CommunityPulse",
    description: "Architected a multi-channel disaster response platform with real-time reporting via text, voice (WebRTC), and Telegram. Designed a dual-portal system with live geospatial tracking and Firebase RTDB coordination, improving emergency response efficiency.",
    stack: "Firebase RTDB, WebRTC, Telegram API",
    links: [
      { text: "GitHub", url: "https://github.com/Jagadesh-1811/community-pluse" },
      { text: "Live", url: "https://commuintypluse.web.app" }
    ]
  }
];


const navItems = [
  { label: 'Home', href: '#top', ariaLabel: 'Go to home section' },
  { label: 'About', href: '#about', ariaLabel: 'View about section' },
  { label: 'Strengths', href: '#strengths', ariaLabel: 'View core strengths section' },
  { label: 'Skills', href: '#toolkit', ariaLabel: 'View technical skills section' },
  { label: 'Experience', href: '#experience', ariaLabel: 'View experience section' },
  { label: 'Projects', href: '#projects', ariaLabel: 'View projects section' },
  { label: 'Contact', href: '#contact', ariaLabel: 'Go to contact section' },
];

const socialItems = [
  { label: 'LinkedIn', link: 'https://linkedin.com/', icon: <FaLinkedin size={18} /> },
  { label: 'GitHub', link: 'https://github.com/', icon: <FaGithub size={18} /> },
  { label: 'Email', link: 'mailto:jagadeeshwar@example.com', icon: <FaEnvelope size={18} /> },
];

function App() {
  return (
    <>
      <main className="portfolio-site">
        <div className="mobile-nav">
          <StaggeredMenu
            items={navItems}
            socialItems={socialItems}
            colors={['#810102', '#bc4229']}
            accentColor="#fff7e8"
          />
        </div>
        <div className="desktop-nav">
          <PillNav
            logo="/portfolio-mark.svg"
            logoAlt="Jagadeeshwar CV"
            items={navItems}
            activeHref="#top"
            baseColor="#810102"
            surfaceColor="#fff5df"
            pillColor="#ffe8c4"
            pillTextColor="#810102"
            hoveredPillTextColor="#fff5df"
            ease="power2.easeOut"
          />
        </div>

        <section className="hero-section" id="top">
          <div className="hero-copy reveal">
            <p className="eyebrow" style={{ display: 'flex', flexDirection: 'column', gap: '0.4em' }}>
              <span style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '0.05em', color: 'var(--primary)' }}>I'm  Jagadeeshwar cv</span>
              <span style={{ display: 'flex', gap: '0.25em', alignItems: 'baseline', flexWrap: 'wrap', lineHeight: 1.1 }}>
                <span style={{ color: 'var(--muted)', fontSize: '18px', fontWeight: 700 }}>/</span>
                <TextType
                  text={["an AI FULL STACK DEVELOPER", "an AI DEVELOPER", "a FULLSTACK DEVELOPER", "an AI ENGINEER", "an AI ASSISTED DEVELOPER"]}
                  typingSpeed={50}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  className="inline-block text-[#810102]"
                  style={{ fontSize: '18px', fontWeight: 600 }}
                />
              </span>
            </p>
            <h1>I build AI-powered web products end to end clean backend logic, sharp interfaces, shipped fast</h1>
            <p className="hero-lede">
              <ScrambledText scrambleChars=".:" duration={1.2} speed={0.5} radius={100}>
                Full-stack applications, multi-agent AI workflows, and responsive user experiences, shipped fast and tested in the real world
              </ScrambledText>
            </p>
            <div className="hero-actions" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <a className="primary-button" href="#projects">View projects</a>
              <a className="ghost-button" href="#contact">Contact me</a>
              <a className="ghost-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
            </div>
          </div>

          <div className="hero-visual reveal" style={{ '--delay': '140ms' }}>
            <Lanyard
              frontImage="/jaggu.jpeg"
              backImage="/jaggu.jpeg"
              lanyardWidth={1}
              className="lanyard-card"

            />
          </div>
        </section>

        <section className="friction-section" id="about">
          <div>
            <p className="eyebrow">About me.</p>
            <h2>I like turning rough ideas into working systems that look good, feel fast, and solve something real.</h2>
          </div>
          <p>
            <ScrambledText scrambleChars=".:" duration={1.2} speed={0.5} radius={100}>
              My work sits between engineering and product design, screens, APIs, auth flows, AI agents, dashboards, learning platforms built to be production-ready, not just demo-ready. Most of it comes out of national hackathon finals, internships, and real deadlines not tutorials.
            </ScrambledText>
          </p>
        </section>

        <section className="pillars-section" id="strengths">
          <div className="section-heading" style={{ display: 'flex', alignItems: 'baseline', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
            <p className="eyebrow" style={{ margin: 0 }}>Core strengths.</p>
            <h2 style={{ margin: 0 }}>What I bring.</h2>
          </div>
          <div className="pillar-grid">
            {pillars.map((pillar, index) => (
              <GlareHover className="pillar-card reveal" style={{ '--delay': `${index * 80}ms` }} key={pillar.title} borderRadius="32px" glareColor="#ffffff" glareOpacity={0.4}>
                <div>
                  <span className="pillar-kicker">{pillar.kicker}</span>
                  <strong>{pillar.stat}</strong>
                </div>
                <h3>{pillar.title}</h3>
                <p>
                  <ScrambledText scrambleChars=".:" duration={1.2} speed={0.5} radius={100}>
                    {pillar.copy}
                  </ScrambledText>
                </p>
              </GlareHover>
            ))}
          </div>
        </section>

        <section className="modules-section" id="toolkit">
          <GlareHover className="module-panel" borderRadius="32px" glareColor="#ffffff" glareOpacity={0.4}>
            <div className="module-copy">
              <p className="eyebrow">Project toolkit</p>
              <h2>Portfolio work built around full-stack product pieces.</h2>
              <p>
                <ScrambledText scrambleChars=".:" duration={1.2} speed={0.5} radius={100}>
                  I focus on the parts that make projects useful: interfaces, data models, authentication, API routes, AI flows, dashboards, and responsive layouts that hold up on real devices.
                </ScrambledText>
              </p>
            </div>
            <div className="module-stack" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {toolkit.map((group) => (
                <div key={group.category} className="toolkit-group" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <h4 className="toolkit-category" style={{ margin: '0 0 4px 4px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary)', letterSpacing: '0.08em', fontFamily: 'var(--mono)' }}>
                    {group.category}
                  </h4>
                  <div className="toolkit-items" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '10px' }}>
                    {group.items.map((item, index) => (
                      <div className="module-row" key={item.name} style={{ display: 'flex', gap: '12px', alignItems: 'center', minHeight: '46px', padding: '0 14px', border: '1px solid rgba(129, 1, 2, 0.12)', borderRadius: '16px', background: 'rgba(255, 246, 227, 0.92)', color: 'var(--muted)', fontSize: '13px' }}>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--primary)', opacity: 0.7 }}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span style={{ color: 'var(--primary)', fontSize: '16px', display: 'flex' }}>{item.icon}</span>
                        <p style={{ margin: 0, fontWeight: 500, color: 'var(--text)', fontSize: '13px' }}>{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlareHover>
        </section>

        <section className="experience-education-section" id="experience" style={{ width: '100%', padding: '86px 60px', borderBottom: '2px solid rgba(129, 1, 2, 0.18)', boxSizing: 'border-box' }}>
          <div className="section-heading" style={{ display: 'flex', alignItems: 'baseline', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
            <p className="eyebrow" style={{ margin: 0 }}>My background.</p>
            <h2 style={{ margin: 0 }}>Experience & Education.</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', paddingLeft: '32px' }}>
            <div style={{ position: 'absolute', left: '10px', top: '40px', bottom: '0', width: '2px', background: 'rgba(129, 1, 2, 0.2)' }} />

            <div className="experience-column" style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--primary)', marginBottom: '8px' }}>Experience</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {experience.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    style={{ position: 'relative' }}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
                    viewport={{ amount: 0.2 }}
                  >
                    <div style={{ position: 'absolute', left: '-27px', top: '24px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--primary)', border: '2px solid var(--surface)' }} />
                    <GlareHover className="glass-card" borderRadius="24px" glareColor="#ffffff" glareOpacity={0.4} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                      <h4 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: 'var(--primary)' }}>{exp.role}</h4>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: 'var(--accent)', fontWeight: 600 }}>
                        <span>{exp.company}</span>
                        <span>{exp.period}</span>
                      </div>
                      <p style={{ margin: '8px 0 0 0', fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6 }}>{exp.description}</p>
                    </GlareHover>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="education-column" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--primary)', marginBottom: '8px' }}>Education</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    style={{ position: 'relative' }}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
                    viewport={{ amount: 0.2 }}
                  >
                    <div style={{ position: 'absolute', left: '-27px', top: '24px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--primary)', border: '2px solid var(--surface)' }} />
                    <GlareHover className="glass-card" borderRadius="24px" glareColor="#ffffff" glareOpacity={0.4} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                      <h4 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: 'var(--primary)' }}>{edu.degree}</h4>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: 'var(--accent)', fontWeight: 600 }}>
                        <span>{edu.institution}</span>
                        <span>{edu.period}</span>
                      </div>
                      <p style={{ margin: '8px 0 0 0', fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6 }}>{edu.description}</p>
                    </GlareHover>
                  </motion.div>
                ))}
              </div>

              <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--primary)', margin: '24px 0 8px 0' }}>Hackathons</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {hackathons.map((hack, idx) => (
                  <motion.div
                    key={idx}
                    style={{ position: 'relative' }}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
                    viewport={{ amount: 0.2 }}
                  >
                    <div style={{ position: 'absolute', left: '-27px', top: '24px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--primary)', border: '2px solid var(--surface)' }} />
                    <GlareHover className="glass-card" borderRadius="24px" glareColor="#ffffff" glareOpacity={0.4} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                      <h4 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: 'var(--primary)' }}>{hack.name}</h4>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: 'var(--accent)', fontWeight: 600 }}>
                        <span>{hack.project}</span>
                        <span>{hack.date}</span>
                      </div>
                      <p style={{ margin: '8px 0 0 0', fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6 }}>{hack.description}</p>
                      {hack.stack && (
                        <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: 'var(--primary)', fontWeight: 600 }}>Stack: {hack.stack}</p>
                      )}
                      {hack.links && (
                        <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                          {hack.links.map(link => (
                            <a key={link.text} href={link.url} target="_blank" rel="noreferrer" style={{ fontSize: '13px', color: 'var(--accent)', textDecoration: 'underline', fontWeight: 600 }}>
                              {link.text}
                            </a>
                          ))}
                        </div>
                      )}
                    </GlareHover>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="projects-scroll-section" id="projects" style={{ width: '100%', padding: '86px 60px', borderBottom: '2px solid rgba(129, 1, 2, 0.18)', boxSizing: 'border-box' }}>
          <div className="section-heading" style={{ display: 'flex', alignItems: 'baseline', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
            <p className="eyebrow" style={{ margin: 0 }}>Featured work.</p>
            <h2 style={{ margin: 0 }}>Selected projects.</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <ScrollStack useWindowScroll={true} itemDistance={80} itemScale={0.03} baseScale={0.9} blurAmount={0}>
              {projects.map((project, index) => (
                <ScrollStackItem key={project.title} itemClassName="project-card">
                  <GlareHover style={{ backgroundColor: 'var(--surface-soft)', border: '1px solid rgba(255, 255, 255, 0.5)', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', padding: '36px', boxSizing: 'border-box', borderRadius: '32px' }} borderRadius="32px" glareColor="#ffffff" glareOpacity={0.4}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                        <h3 style={{ margin: 0, fontSize: 'clamp(20px, 4.5vw, 24px)', fontWeight: 800, color: 'var(--primary)' }}>{project.title}</h3>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--accent)' }}>{project.role}</span>
                      </div>
                      <p style={{ margin: '0 0 24px 0', fontSize: '15px', color: 'var(--text)', lineHeight: 1.5 }}>
                        {project.description}
                      </p>
                    </div>
                    <div>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                        {project.tech.map((t) => (
                          <span key={t} style={{ fontSize: '11px', fontWeight: 600, padding: '4px 10px', background: '#FEF0D5', color: 'var(--primary)', borderRadius: '9999px', fontFamily: 'var(--mono)' }}>
                            {t}
                          </span>
                        ))}
                      </div>
                      <div style={{ display: 'flex', gap: '24px', borderTop: '1px solid rgba(129,1,2,0.08)', paddingTop: '16px' }}>
                        <div>
                          <div style={{ fontSize: '10px', textTransform: 'uppercase', fontFamily: 'var(--mono)', color: 'var(--muted)', marginBottom: '4px' }}>Impact</div>
                          <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary)' }}>{project.stats.primary}</div>
                        </div>
                        <div>
                          <div style={{ fontSize: '10px', textTransform: 'uppercase', fontFamily: 'var(--mono)', color: 'var(--muted)', marginBottom: '4px' }}>Status</div>
                          <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text)' }}>{project.stats.secondary}</div>
                        </div>
                      </div>
                    </div>
                  </GlareHover>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </section>

        <section className="contact-section" id="contact" style={{ paddingBottom: '120px' }}>
          <p className="eyebrow">Let us build something</p>
          <h2><DecryptedText text="Have an internship, project, or collaboration where a sharp full-stack builder can help?" animateOn="view" /></h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '64px', justifyContent: 'center', alignItems: 'center' }}>
            <GlareHover className="glass-card" style={{ flex: '1 1 400px', maxWidth: '600px', width: '100%', margin: '0', borderRadius: '24px' }} borderRadius="24px" glareColor="#ffffff" glareOpacity={0.4}>
              <form
                action="https://formsubmit.co/jagadeshwar2014@gmail.com"
                method="POST"
                style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '32px', boxSizing: 'border-box', width: '100%', height: '100%' }}
              >
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
                  <label htmlFor="name" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--primary, #810102)' }}>Name</label>
                  <input type="text" id="name" name="name" required style={{ padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(129,1,2,0.2)', background: '#fff', fontSize: '16px', color: 'var(--text, #111)' }} placeholder="Your name" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
                  <label htmlFor="email" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--primary, #810102)' }}>Email</label>
                  <input type="email" id="email" name="email" required style={{ padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(129,1,2,0.2)', background: '#fff', fontSize: '16px', color: 'var(--text, #111)' }} placeholder="you@example.com" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
                  <label htmlFor="message" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--primary, #810102)' }}>Message</label>
                  <textarea id="message" name="message" rows="4" required style={{ padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(129,1,2,0.2)', background: '#fff', fontSize: '16px', color: 'var(--text, #111)', resize: 'vertical' }} placeholder="How can I help you?"></textarea>
                </div>
                <button type="submit" className="primary-button" style={{ marginTop: '16px', width: '100%', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                  Send Message
                </button>
              </form>
            </GlareHover>

            <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
              <h3 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--primary)', margin: 0, textAlign: 'center' }}>
                <DecryptedText text="Let's Connect" animateOn="view" />
              </h3>

              <div className="icons" style={{ margin: '0', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a href="mailto:jagadeeshwar@example.com" target="_blank" rel="noopener noreferrer" style={{ margin: '2rem 1.5rem' }}>
                  <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab"><FaEnvelope size={18} /></span>
                  </div>
                  <div className="text" style={{ color: 'var(--text)' }}>Gmail</div>
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ margin: '2rem 1.5rem' }}>
                  <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab"><FaLinkedin size={18} /></span>
                  </div>
                  <div className="text" style={{ color: 'var(--text)' }}>LinkedIn</div>
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ margin: '2rem 1.5rem' }}>
                  <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab"><FaGithub size={18} /></span>
                  </div>
                  <div className="text" style={{ color: 'var(--text)' }}>GitHub</div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" style={{ padding: '32px 0', borderTop: '2px solid rgba(129, 1, 2, 0.18)', background: '#FEF0D5' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 60px', gap: '16px' }}>
          <p style={{ margin: 0, fontSize: '15px', color: 'var(--primary, #810102)', fontWeight: 600 }}>
            &copy; {new Date().getFullYear()} Jagadeeshwar CV. All rights reserved. <br /> <DecryptedText text="Designed by Jagadeeshwar CV" animateOn="view" />
          </p>
          <a href="mailto:jagadeshwar2014@gmail.com" style={{ fontSize: '16px', color: 'var(--primary, #810102)', textDecoration: 'underline', fontWeight: 800 }}>
            <DecryptedText text="jagadeshwar2014@gmail.com" animateOn="view" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
