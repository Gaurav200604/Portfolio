import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "AgriConnect",
    description:
      "Farmer Resource Sharing Platform | Full Stack & AI ",
    image: null,
    previewBg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    previewLabel: "Agricultural Marketplace",
    liveLink: "https://agri-connecti.vercel.app/",
    githubLink: "https://github.com/Gaurav200604",
    
    tags: ["#Spring Boot", "#FastAPI", "#Tailwind CSS", "#React", "#PostgreSQL", "#Docker", "#Postman", "#LangChain"],
    accent: "#7c3aed",
    accentLight: "rgba(124,58,237,0.15)",
  },
  {
    id: 2,
    title: "WonderLust",
    description:
      "WonderLust is a Full-Stack Web Application designed to make it easier for travelers to discover and book unique experiences around the world.",
    image: null,
    previewBg: "linear-gradient(135deg, #0d2137 0%, #0a3d62 50%, #1b6ca8 100%)",
    previewLabel: "Travel Experience Platform",
    liveLink: "https://wonderlustt-1.onrender.com/",
    githubLink: "https://github.com/Gaurav200604/WonderLustt",
    
    tags: ["#Node.js", "#Express.js", "#Javascript", "#EJS","#MongoDB","#Bootstrap","#Cloudinary"],
    accent: "#0891b2",
    accentLight: "rgba(8,145,178,0.15)",
  },
  {
    id: 3,
    title: "MeetBridge",
    description:
      "MeetBridge is a real-time video conferencing application built with React and WebRTC, offering seamless communication with features like screen sharing, chat, and multi-user support.",
    image: null,
    previewBg: "linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #11998e 100%)",
    previewLabel: "Video Conferencing App",
    liveLink: "https://video-frontend-uhjk.onrender.com/",
    githubLink: "https://github.com/Gaurav200604/MeetBridge",
    tags: ["#MongoDB", "#Express.js","#React" ,"#WebRTC","#Socket.IO" ,"#Tailwind CSS", "#JavaScript"],
    accent: "#059669",
    accentLight: "rgba(5,150,105,0.15)",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React, showcasing projects, skills, and experience with a modern design and responsive layout.",
    image: null,
    previewBg: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
    previewLabel: "Personal Portfolio",
    liveLink: "https://portfolio-gaurav13.vercel.app/",
    githubLink: "https://github.com/Gaurav200604/Portfolio-Website",
    
    tags: ["#ReactJs", "#CSS", "#JavaScript", "#Tailwind CSS"],
    accent: "#f59e0b",
    accentLight: "rgba(245,158,11,0.15)",
  },
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("pc-visible"); },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="pc-card"
      style={{ transitionDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Preview area */}
      <div style={{
        position: "relative",
        height: 200,
        borderRadius: "12px 12px 0 0",
        overflow: "hidden",
        background: project.previewBg,
      }}>
        {/* Mock browser chrome */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: 28,
          background: "rgba(0,0,0,0.4)",
          display: "flex",
          alignItems: "center",
          padding: "0 12px",
          gap: 6,
          backdropFilter: "blur(4px)",
        }}>
          {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
            <div key={i} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />
          ))}
          <div style={{
            marginLeft: 8,
            flex: 1,
            height: 14,
            background: "rgba(255,255,255,0.1)",
            borderRadius: 4,
            maxWidth: 200,
            fontSize: 9,
            color: "rgba(255,255,255,0.4)",
            display: "flex",
            alignItems: "center",
            paddingLeft: 8,
            fontFamily: "'DM Mono', monospace",
          }}>
            localhost:3000
          </div>
        </div>

        {/* Preview content */}
        <div style={{
          position: "absolute",
          inset: 0,
          top: 28,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 8,
        }}>
          <div style={{
            fontSize: 13,
            fontWeight: 600,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            {project.previewLabel}
          </div>
          <div style={{
            width: 40,
            height: 2,
            background: project.accent,
            borderRadius: 2,
            opacity: 0.7,
          }} />
          <div style={{
            fontSize: 22,
            fontWeight: 800,
            color: "rgba(255,255,255,0.85)",
            fontFamily: "'Syne', sans-serif",
          }}>
            {project.title}
          </div>
        </div>

        {/* Hover overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: `${project.accent}22`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }} />

        {/* Action buttons */}
        <div style={{
          position: "absolute",
          bottom: 12,
          right: 12,
          display: "flex",
          gap: 8,
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(8px)",
          transition: "all 0.3s ease",
        }}>
          {[
            { label: "GitHub", icon: "", bg: "#333", link: project.githubLink },
          ].map((btn) => (
            <button key={btn.label} style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: btn.bg,
              border: "2px solid rgba(255,255,255,0.2)",
              color: "#fff",
              fontSize: 12,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.2s ease",
            }}>
              {btn.icon}
            </button>
          ))}
        </div>
      </div>

      {/* Card body */}
      <div style={{
        padding: "24px 28px 28px",
        background: "rgba(20,12,40,0.97)",
        borderRadius: "0 0 12px 12px",
        borderTop: `2px solid ${project.accent}40`,
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <h3 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 22,
            fontWeight: 800,
            color: "#fff",
            margin: 0,
            letterSpacing: "-0.01em",
          }}>
            {project.title}
          </h3>
          <div style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: project.accent,
            boxShadow: `0 0 10px ${project.accent}`,
          }} />
        </div>

        <p style={{
          margin: "0 0 20px",
          fontSize: 14,
          lineHeight: 1.75,
          color: "rgba(200,190,230,0.7)",
          fontWeight: 400,
          flex: 1,
        }}>
          {project.description}
        </p>

        {/* Live link button */}
        <a href={project.liveLink} style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 20px",
          borderRadius: 8,
          background: project.accent,
          color: "#fff",
          fontSize: 13,
          fontWeight: 700,
          textDecoration: "none",
          letterSpacing: "0.02em",
          marginBottom: 18,
          alignSelf: "flex-start",
          transition: "opacity 0.2s ease, transform 0.2s ease",
          fontFamily: "'DM Sans', sans-serif",
        }}
          onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          <span>↗</span> Live Hosted Link
        </a>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              fontSize: 11,
              fontWeight: 500,
              color: project.accent,
              background: project.accentLight,
              border: `1px solid ${project.accent}30`,
              borderRadius: 99,
              padding: "3px 10px",
              letterSpacing: "0.02em",
              fontFamily: "'DM Mono', monospace",
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-bg" style={{
      padding: "100px 0 120px",
      fontFamily: "'DM Sans', sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&family=Syne:wght@700;800&display=swap');

        .pc-card {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1);
          display: flex;
          flex-direction: column;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.07);
          overflow: hidden;
          position: relative;
        }
        .pc-card.pc-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .pc-card:hover {
          border-color: rgba(124,58,237,0.3);
          box-shadow: 0 24px 60px rgba(0,0,0,0.4);
        }
        .pc-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        @media (max-width: 720px) {
          .pc-grid { grid-template-columns: 1fr; }
        }
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <span style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(196,181,253,0.6)",
            display: "block",
            marginBottom: 14,
          }}>
            My Work
          </span>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(48px, 7vw, 80px)",
              fontWeight: 800,
              color: "#fff",
              margin: 0,
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}>
              Projects
            </h2>
            <div style={{
              width: 80,
              height: 3,
              background: "linear-gradient(90deg, #7c3aed, #0891b2)",
              borderRadius: 2,
              marginBottom: 8,
            }} />
          </div>

          <p style={{
            marginTop: 24,
            maxWidth: 640,
            fontSize: 16,
            lineHeight: 1.8,
            color: "rgba(200,190,230,0.65)",
            fontWeight: 400,
          }}>
            Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
          </p>
        </div>

        {/* Grid */}
        <div className="pc-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
