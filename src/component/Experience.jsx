import { useEffect, useRef } from "react";

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "Socio Maverick Pvt. Ltd.",
    period: "Mar 2026 - Present",
    type: "Internship",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript"],
    points: [
      "Developing and deploying end-to-end full-stack web applications using the MERN stack, from requirement gathering to production deployment.",
      "Designing responsive and scalable frontend interfaces with React.js, ensuring optimal user experience across all devices.",
      "Building RESTful APIs and backend services using Node.js and Express.js, with MongoDB database integration.",
    ],
  },
  {
    id: 2,
    role: "Frontend Developer Intern",
    company: "ACT of India (NGO)",
    period: "Feb 2026 – Mar 2026",
    type: "Internship",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Figma"],
    points: [
      "Built pixel-perfect UI components from Figma designs using React.js and Tailwind CSS.",
      "Improved website load performance by 40% through lazy loading and code splitting techniques.",
      "Collaborated with the backend team to integrate REST APIs and handle async data flows.",
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

const EMOJIS = ["👨‍💻", "🚀", "⭐", "🛠️", "💡", "🌐"];

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".exp-card");
    if (!cards) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      style={{
        background: "#030614",
        padding: "100px 0 130px",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Syne:wght@700;800&display=swap');

        /* ── card animation ── */
        .exp-card {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.65s cubic-bezier(0.22,1,0.36,1),
                      transform 0.65s cubic-bezier(0.22,1,0.36,1);
        }
        .exp-card.visible { opacity: 1; transform: translateY(0); }

        /* ── card inner ── */
        .exp-card-inner {
          background: linear-gradient(145deg, rgba(32,25,54,0.97), rgba(18,12,36,0.99));
          border: 1px solid rgba(139,92,246,0.18);
          border-radius: 18px;
          padding: 30px 32px;
          position: relative;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }
        .exp-card-inner:hover {
          border-color: rgba(139,92,246,0.5);
          box-shadow: 0 0 48px rgba(139,92,246,0.14);
          transform: translateY(-3px);
        }
        .exp-card-inner::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 18px;
          background: radial-gradient(ellipse at top left, rgba(139,92,246,0.08) 0%, transparent 65%);
          pointer-events: none;
        }

        /* ── tech tag ── */
        .tech-tag {
          display: inline-flex;
          align-items: center;
          padding: 4px 12px;
          border-radius: 99px;
          font-size: 11.5px;
          font-weight: 500;
          border-width: 1px;
          border-style: solid;
          letter-spacing: 0.02em;
        }

        /* ── bullet point row ── */
        .point-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 9px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .point-item:last-child { border-bottom: none; }

        /* ── vertical timeline line ── */
        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0; bottom: 0;
          width: 2px;
          transform: translateX(-50%);
          background: linear-gradient(
            to bottom,
            rgba(139,92,246,0) 0%,
            rgba(139,92,246,0.65) 10%,
            rgba(139,92,246,0.65) 90%,
            rgba(139,92,246,0) 100%
          );
        }

        /* ── connector arrow: left card points RIGHT, right card points LEFT ── */
        .arrow-right {
          position: absolute;
          right: -13px; top: 52px;
          width: 0; height: 0;
          border-top: 11px solid transparent;
          border-bottom: 11px solid transparent;
          border-left: 13px solid rgba(22,14,42,0.99);
        }
        .arrow-left {
          position: absolute;
          left: -13px; top: 52px;
          width: 0; height: 0;
          border-top: 11px solid transparent;
          border-bottom: 11px solid transparent;
          border-right: 13px solid rgba(22,14,42,0.99);
        }

        /* ── row layout ── */
        .timeline-row {
          display: grid;
          grid-template-columns: 1fr 88px 1fr;
          align-items: start;
          margin-bottom: 52px;
          position: relative;
        }

        /* ── mobile: stack everything left ── */
        @media (max-width: 768px) {
          .timeline-line { left: 20px; }
          .timeline-row {
            display: block;
            padding-left: 54px;
            margin-bottom: 40px;
          }
          .center-col { display: none; }
          .right-col  { display: none; }
          .arrow-right, .arrow-left { display: none; }
          .mobile-meta {
            display: flex !important;
            margin-bottom: 12px;
          }
          .mobile-node {
            display: flex !important;
          }
        }

        /* ── glow orbs ── */
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }
      `}</style>

      {/* background orbs */}
      <div className="glow-orb" style={{ width: 560, height: 460, top: -80, right: "-18%", background: "rgba(88,28,135,0.16)" }} />
      <div className="glow-orb" style={{ width: 420, height: 380, bottom: 0, left: "-14%", background: "rgba(49,10,101,0.12)" }} />

      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>

        {/* ── Section header ── */}
        <div style={{ textAlign: "center", marginBottom: 84 }}>
          <span style={{
            fontSize: 11, fontWeight: 600, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "rgba(196,181,253,0.65)",
            display: "block", marginBottom: 16,
          }}>
            What I've done so far
          </span>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(44px, 6vw, 72px)",
            fontWeight: 800, color: "#fff",
            lineHeight: 1.04, margin: 0, letterSpacing: "-0.02em",
          }}>
            Work{" "}
            <span style={{ WebkitTextStroke: "2px rgba(139,92,246,0.75)", color: "transparent" }}>
              Experience
            </span>
          </h2>
        </div>

        {/* ── Timeline ── */}
        <div style={{ position: "relative" }}>
          <div className="timeline-line" />

          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0; // even → card on LEFT, odd → card on RIGHT

            const Card = (
              <div className="exp-card-inner" style={{ position: "relative" }}>
                {/* connector arrow */}
                {isLeft ? <div className="arrow-right" /> : <div className="arrow-left" />}

                {/* badge */}
                <span style={{
                  fontSize: 10.5, fontWeight: 700, letterSpacing: "0.16em",
                  textTransform: "uppercase", color: "rgba(167,139,250,0.8)",
                  background: "rgba(139,92,246,0.12)",
                  border: "1px solid rgba(139,92,246,0.28)",
                  borderRadius: 99, padding: "3px 12px",
                }}>
                  {exp.type}
                </span>

                <h3 style={{
                  fontFamily: "'Syne', sans-serif", fontSize: 21, fontWeight: 800,
                  color: "#fff", margin: "13px 0 3px", letterSpacing: "-0.01em",
                }}>
                  {exp.role}
                </h3>
                <p style={{ fontSize: 14.5, fontWeight: 600, color: "rgba(196,181,253,0.75)", margin: "0 0 18px" }}>
                  {exp.company}
                </p>

                {/* bullet points */}
                <div style={{ marginBottom: 22 }}>
                  {exp.points.map((p, i) => (
                    <div key={i} className="point-item">
                      <span style={{
                        width: 6, height: 6, borderRadius: "50%",
                        background: "rgba(139,92,246,0.85)", flexShrink: 0,
                        marginTop: 7, boxShadow: "0 0 6px rgba(139,92,246,0.5)",
                      }} />
                      <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.72, color: "rgba(224,214,255,0.72)", fontWeight: 400 }}>
                        {p}
                      </p>
                    </div>
                  ))}
                </div>

                {/* tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {exp.tech.map((t, i) => {
                    const c = TAG_COLORS[i % TAG_COLORS.length];
                    return (
                      <span key={t} className="tech-tag" style={{ background: c.bg, borderColor: c.border, color: c.text }}>
                        {t}
                      </span>
                    );
                  })}
                </div>
              </div>
            );

            const DateBox = (
              <div>
                <div style={{
                  background: "rgba(139,92,246,0.09)",
                  border: "1px solid rgba(139,92,246,0.22)",
                  borderRadius: 12, padding: "13px 18px", display: "inline-block",
                }}>
                  <p style={{ margin: 0, fontSize: 11, fontWeight: 700, color: "rgba(196,181,253,0.55)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    Duration
                  </p>
                  <p style={{ margin: "4px 0 0", fontSize: 15, fontWeight: 700, color: "#e0d6ff", fontFamily: "'Syne', sans-serif" }}>
                    {exp.period}
                  </p>
                </div>
                <div style={{ marginTop: 14, padding: "10px 16px", borderLeft: "3px solid rgba(139,92,246,0.4)", borderRadius: "0 8px 8px 0" }}>
                  <p style={{ margin: 0, fontSize: 12.5, color: "rgba(167,139,250,0.55)", fontStyle: "italic", lineHeight: 1.6 }}>
                    Certificate available upon request
                  </p>
                </div>
              </div>
            );

            const Node = (
              <div style={{ display: "flex", justifyContent: "center", paddingTop: 44 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: "50%",
                  background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                  border: "3px solid rgba(139,92,246,0.45)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22,
                  boxShadow: "0 0 0 7px rgba(139,92,246,0.08), 0 0 28px rgba(124,58,237,0.38)",
                  flexShrink: 0, zIndex: 10, position: "relative",
                }}>
                  {EMOJIS[idx % EMOJIS.length]}
                </div>
              </div>
            );

            return (
              <div
                key={exp.id + "-" + idx}
                className="exp-card"
                style={{ transitionDelay: `${idx * 0.12}s` }}
              >
                {/* mobile node — hidden on desktop via CSS */}
                <div
                  className="mobile-node"
                  style={{
                    display: "none",
                    position: "absolute",
                    left: 0, top: 0,
                    width: 40, height: 40, borderRadius: "50%",
                    background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                    border: "2px solid rgba(139,92,246,0.5)",
                    alignItems: "center", justifyContent: "center",
                    fontSize: 18, zIndex: 10,
                    boxShadow: "0 0 0 5px rgba(139,92,246,0.08)",
                  }}
                >
                  {EMOJIS[idx % EMOJIS.length]}
                </div>

                <div className="timeline-row">
                  {isLeft ? (
                    <>
                      {/* LEFT card */}
                      <div style={{ paddingRight: 28 }}>{Card}</div>
                      {/* CENTER node */}
                      <div className="center-col">{Node}</div>
                      {/* RIGHT date */}
                      <div className="right-col" style={{ paddingLeft: 28, paddingTop: 46 }}>{DateBox}</div>
                    </>
                  ) : (
                    <>
                      {/* LEFT date */}
                      <div className="right-col" style={{ paddingRight: 28, paddingTop: 46, textAlign: "right" }}>
                        <div>
                          <div style={{
                            background: "rgba(139,92,246,0.09)",
                            border: "1px solid rgba(139,92,246,0.22)",
                            borderRadius: 12, padding: "13px 18px", display: "inline-block", textAlign: "left",
                          }}>
                            <p style={{ margin: 0, fontSize: 11, fontWeight: 700, color: "rgba(196,181,253,0.55)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                              Duration
                            </p>
                            <p style={{ margin: "4px 0 0", fontSize: 15, fontWeight: 700, color: "#e0d6ff", fontFamily: "'Syne', sans-serif" }}>
                              {exp.period}
                            </p>
                          </div>
                          <div style={{ marginTop: 14, padding: "10px 16px", borderRight: "3px solid rgba(139,92,246,0.4)", borderLeft: "none", borderRadius: "8px 0 0 8px", textAlign: "right" }}>
                            <p style={{ margin: 0, fontSize: 12.5, color: "rgba(167,139,250,0.55)", fontStyle: "italic", lineHeight: 1.6 }}>
                              Certificate available upon request
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* CENTER node */}
                      <div className="center-col">{Node}</div>
                      {/* RIGHT card */}
                      <div style={{ paddingLeft: 28 }}>{Card}</div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}