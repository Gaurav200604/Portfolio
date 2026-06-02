import { useEffect, useRef } from "react";

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "Socio Maverick Pvt. Ltd.",
    period: "Mar 2026 – Present",
    type: "Internship",
    side: "left",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript"],
    points: [
      "Developing and deploying end-to-end full-stack web applications using the MERN stack, from requirement gathering to production deployment.",
      "Designing responsive and scalable frontend interfaces with React.js, ensuring optimal user experience across all devices.",
      "Building RESTful APIs and backend services using Node.js and Express.js, with MongoDB database integration.",
    ],
  },
];

const TAG_COLORS = [
  { bg: "rgba(139,92,246,0.15)", border: "rgba(139,92,246,0.4)", text: "#c4b5fd" },
  { bg: "rgba(99,102,241,0.15)", border: "rgba(99,102,241,0.4)", text: "#a5b4fc" },
  { bg: "rgba(168,85,247,0.15)", border: "rgba(168,85,247,0.4)", text: "#d8b4fe" },
  { bg: "rgba(59,130,246,0.15)", border: "rgba(59,130,246,0.4)", text: "#93c5fd" },
  { bg: "rgba(236,72,153,0.15)", border: "rgba(236,72,153,0.4)", text: "#f9a8d4" },
];

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".exp-card");
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="section-bg"
      style={{
        padding: "100px 0 120px",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Syne:wght@700;800&display=swap');

        .exp-card {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1);
        }
        .exp-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .exp-card-inner {
          background: linear-gradient(145deg, rgba(32,25,54,0.95), rgba(20,14,40,0.98));
          border: 1px solid rgba(139,92,246,0.18);
          border-radius: 16px;
          padding: 32px 36px;
          position: relative;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .exp-card-inner:hover {
          border-color: rgba(139,92,246,0.45);
          box-shadow: 0 0 40px rgba(139,92,246,0.12);
        }
        .exp-card-inner::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          background: radial-gradient(ellipse at top left, rgba(139,92,246,0.07) 0%, transparent 65%);
          pointer-events: none;
        }
        .tech-tag {
          display: inline-flex;
          align-items: center;
          padding: 4px 12px;
          border-radius: 99px;
          font-size: 12px;
          font-weight: 500;
          border-width: 1px;
          border-style: solid;
          letter-spacing: 0.02em;
        }
        .point-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .point-item:last-child { border-bottom: none; }
        .dot-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, rgba(139,92,246,0) 0%, rgba(139,92,246,0.6) 15%, rgba(139,92,246,0.6) 85%, rgba(139,92,246,0) 100%);
          transform: translateX(-50%);
        }
        @media (max-width: 768px) {
          .dot-line { left: 24px; }
          .timeline-wrapper { padding-left: 52px !important; }
          .center-node { left: 24px !important; transform: translateX(-50%) !important; }
        }
        .center-node {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
        }
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
        }
        .connector-arrow {
          position: absolute;
          right: -13px;
          top: 50px;
          width: 0;
          height: 0;
          border-top: 12px solid transparent;
          border-bottom: 12px solid transparent;
          border-left: 13px solid rgba(32,25,54,0.98);
          filter: drop-shadow(1px 0 0 rgba(139,92,246,0.2));
        }
        @media (max-width: 768px) {
          .connector-arrow { display: none; }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <span style={{
            display: "inline-block",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(196,181,253,0.7)",
            marginBottom: 18,
          }}>
            What I've done so far
          </span>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(44px, 6vw, 72px)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.05,
            margin: 0,
            letterSpacing: "-0.02em",
          }}>
            Work{" "}
            <span style={{
              WebkitTextStroke: "2px rgba(139,92,246,0.7)",
              color: "transparent",
            }}>
              Experience
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          <div className="dot-line" />

          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="exp-card"
              style={{ transitionDelay: `${idx * 0.1}s`, marginBottom: 48 }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 80px 1fr",
                  gap: 0,
                  alignItems: "start",
                }}
                className="timeline-wrapper"
              >
                {/* Left: Card */}
                <div style={{ paddingRight: 32 }}>
                  <div className="exp-card-inner" style={{ position: "relative" }}>
                    <div className="connector-arrow" />

                    {/* Top row */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                      <span style={{
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "rgba(167,139,250,0.7)",
                        background: "rgba(139,92,246,0.1)",
                        border: "1px solid rgba(139,92,246,0.25)",
                        borderRadius: 99,
                        padding: "3px 12px",
                      }}>
                        {exp.type}
                      </span>
                    </div>

                    <h3 style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#fff",
                      margin: "14px 0 4px",
                      letterSpacing: "-0.01em",
                    }}>
                      {exp.role}
                    </h3>

                    <p style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "rgba(196,181,253,0.75)",
                      margin: "0 0 20px",
                    }}>
                      {exp.company}
                    </p>

                    {/* Points */}
                    <div style={{ marginBottom: 24 }}>
                      {exp.points.map((p, i) => (
                        <div key={i} className="point-item">
                          <span style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "rgba(139,92,246,0.8)",
                            flexShrink: 0,
                            marginTop: 7,
                            boxShadow: "0 0 6px rgba(139,92,246,0.5)",
                          }} />
                          <p style={{
                            margin: 0,
                            fontSize: 14,
                            lineHeight: 1.7,
                            color: "rgba(224,214,255,0.75)",
                            fontWeight: 400,
                          }}>
                            {p}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {exp.tech.map((t, i) => {
                        const c = TAG_COLORS[i % TAG_COLORS.length];
                        return (
                          <span
                            key={t}
                            className="tech-tag"
                            style={{ background: c.bg, borderColor: c.border, color: c.text }}
                          >
                            {t}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Center node */}
                <div style={{ display: "flex", justifyContent: "center", paddingTop: 40 }}>
                  <div style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                    border: "3px solid rgba(139,92,246,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    boxShadow: "0 0 0 6px rgba(139,92,246,0.08), 0 0 24px rgba(124,58,237,0.35)",
                    flexShrink: 0,
                    zIndex: 10,
                    position: "relative",
                  }}>
                    👨‍💻
                  </div>
                </div>

                {/* Right: Date + divider */}
                <div style={{ paddingLeft: 32, paddingTop: 48 }}>
                  <div style={{
                    background: "rgba(139,92,246,0.08)",
                    border: "1px solid rgba(139,92,246,0.2)",
                    borderRadius: 12,
                    padding: "14px 20px",
                    display: "inline-block",
                  }}>
                    <p style={{
                      margin: 0,
                      fontSize: 13,
                      fontWeight: 600,
                      color: "rgba(196,181,253,0.6)",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}>
                      Duration
                    </p>
                    <p style={{
                      margin: "4px 0 0",
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#e0d6ff",
                      fontFamily: "'Syne', sans-serif",
                    }}>
                      {exp.period}
                    </p>
                  </div>

                  <div style={{
                    marginTop: 16,
                    padding: "12px 20px",
                    borderLeft: "3px solid rgba(139,92,246,0.4)",
                    borderRadius: "0 8px 8px 0",
                  }}>
                    <p style={{
                      margin: 0,
                      fontSize: 13,
                      color: "rgba(167,139,250,0.6)",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}>
                      Certificate available upon request
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
