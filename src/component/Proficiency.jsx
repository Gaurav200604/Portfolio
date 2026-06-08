// const skills = [
//   { name: 'HTML5', label: 'HTML', color: 'text-orange-500', bg: 'bg-orange-100' },
//   { name: 'CSS3', label: 'CSS', color: 'text-sky-500', bg: 'bg-sky-100' },
//   { name: 'JavaScript', label: 'JS', color: 'text-yellow-600', bg: 'bg-yellow-100' },
//   { name: 'React', label: 'React', color: 'text-cyan-400', bg: 'bg-cyan-100' },
//   { name: 'Redux', label: 'Redux', color: 'text-violet-500', bg: 'bg-violet-100' },
//   { name: 'Node.js', label: 'Node', color: 'text-emerald-500', bg: 'bg-emerald-100' },
//   { name: 'Express.js', label: 'Express', color: 'text-yellow-700', bg: 'bg-yellow-100' },
//   { name: 'MongoDB', label: 'Mongo', color: 'text-green-600', bg: 'bg-green-100' },
//   { name: 'TypeScript', label: 'TS', color: 'text-blue-500', bg: 'bg-blue-100' },
//   { name: 'Tailwind CSS', label: 'TW', color: 'text-cyan-500', bg: 'bg-cyan-100' },
//   { name: 'REST API', label: 'API', color: 'text-sky-600', bg: 'bg-sky-100' },
//   { name: 'Git', label: 'Git', color: 'text-orange-600', bg: 'bg-orange-100' },
//   { name: 'Figma', label: 'Figma', color: 'text-pink-500', bg: 'bg-pink-100' },
//   { name: 'Docker', label: 'Docker', color: 'text-sky-600', bg: 'bg-sky-100' },
// ]


// const Proficiency = () => {
//   return (
//     <section className="section-bg min-h-screen py-20 text-white sm:py-24">
//       <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-24">
//         <div className="text-center">
//           <p className="text-base font-medium uppercase tracking-[0.18em] text-indigo-200/75 sm:text-lg">
//             &quot;What tech stack have we used in our project?&quot;
//           </p>
//           <h2 className="mt-4 text-5xl font-black leading-none text-white sm:text-7xl">
//             My Proficiency in
//           </h2>
//         </div>

//         <div className="mx-auto mt-20 grid max-w-6xl grid-cols-3 justify-items-center gap-x-10 gap-y-16 sm:grid-cols-4 lg:grid-cols-7">
//           {skills.map((skill, index) => (
//             <div
//               key={skill.name}
//               className="skill-token group flex flex-col items-center gap-3"
//               style={{ animationDelay: `${index * 90}ms` }}
//             >
//               <div className="skill-badge flex h-24 w-24 items-center justify-center bg-stone-200 shadow-[0_18px_45px_rgba(0,0,0,0.28)]">
//                 <div className={`flex h-16 w-16 items-center justify-center rounded-xl ${skill.bg}`}>
//                   <span className={`text-2xl font-black ${skill.color}`}>
//                     {skill.label}
//                   </span>
//                 </div>
//               </div>
//               <span className="text-sm font-bold text-indigo-100/65 opacity-0 transition group-hover:opacity-100">
//                 {skill.name}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Proficiency


import html5 from '../assets/proficiency/HTML5.png'
import css3 from '../assets/proficiency/css3.png'
import js from '../assets/proficiency/js.png'
import react from '../assets/proficiency/react.png'
import redux from '../assets/proficiency/redux.png'
import node from '../assets/proficiency/node.png'
import express from '../assets/proficiency/express.png'
import mongo from '../assets/proficiency/mongo.jpg'
import ts from '../assets/proficiency/ts.png'
import tailwind from '../assets/proficiency/tailwind.png'
import api from '../assets/proficiency/api.png'
import git from '../assets/proficiency/git.png'
import figma from '../assets/proficiency/figma.png'
import docker from '../assets/proficiency/docker.png'

const skills = [
  { name: "HTML5",       img: html5,    glow: "#E34F26", border: "#E34F26" },
  { name: "CSS3",        img: css3,     glow: "#1572B6", border: "#1572B6" },
  { name: "JavaScript",  img: js,       glow: "#F7DF1E", border: "#F7DF1E" },
  { name: "React",       img: react,    glow: "#61DAFB", border: "#61DAFB" },
  { name: "Redux",       img: redux,    glow: "#764ABC", border: "#764ABC" },
  { name: "Node.js",     img: node,     glow: "#339933", border: "#339933" },
  { name: "Express.js",  img: express,  glow: "#aaaaaa", border: "#888888" },
  { name: "MongoDB",     img: mongo,    glow: "#47A248", border: "#47A248" },
  { name: "TypeScript",  img: ts,       glow: "#3178C6", border: "#3178C6" },
  { name: "Tailwind CSS",img: tailwind, glow: "#38B2AC", border: "#38B2AC" },
  { name: "RESTful APIs",img: api,      glow: "#4CAF50", border: "#4CAF50" },
  { name: "Git & GitHub",img: git,      glow: "#F05032", border: "#F05032" },
  { name: "Figma",       img: figma,    glow: "#F24E1E", border: "#F24E1E" },
  { name: "Docker",      img: docker,   glow: "#2496ED", border: "#2496ED" },
]

const Proficiency = () => {
  return (
    <section className="section-bg min-h-screen py-20 text-white sm:py-28 relative overflow-hidden">

      {/* ── subtle grid overlay ── */}
    



      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-24">

        {/* ── heading ── */}
        <div className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300 sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Tech Stack
          </p>

          <h2 className="mt-5 text-5xl font-black leading-none tracking-tight text-white sm:text-7xl">
            My{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-indigo-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
                Proficiency
              </span>
              {/* underline squiggle */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8 Q 37 2, 75 8 T 150 8 T 225 8 T 300 8"
                  stroke="url(#wg)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
                <defs>
                  <linearGradient id="wg" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#818cf8" />
                    <stop offset="0.5" stopColor="#a78bfa" />
                    <stop offset="1" stopColor="#67e8f9" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-indigo-200/50 sm:text-base">
            Tools &amp; technologies I use to craft fast, scalable, and beautiful digital experiences.
          </p>
        </div>

        {/* ── skill grid ── */}
        <div className="mx-auto mt-20 grid max-w-5xl grid-cols-3 gap-5 sm:grid-cols-4 md:gap-7 lg:grid-cols-7">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* ── bottom decoration line ── */}
        <div className="mt-24 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400/50">
            and growing
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        </div>
      </div>

      <style>{`
        .skill-card {
          animation: fadeSlideUp 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px) scale(0.88); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }

        .skill-card:hover .skill-img-wrap {
          transform: translateY(-6px) scale(1.08);
        }
        .skill-card:hover .skill-glow {
          opacity: 1;
        }
        .skill-card:hover .skill-name {
          opacity: 1;
          transform: translateY(0);
        }
        .skill-card:hover .skill-border {
          opacity: 1;
        }

        .skill-img-wrap {
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .skill-glow {
          transition: opacity 0.35s ease;
          opacity: 0;
        }
        .skill-name {
          transition: opacity 0.25s ease, transform 0.25s ease;
          opacity: 0;
          transform: translateY(4px);
        }
        .skill-border {
          transition: opacity 0.35s ease;
          opacity: 0.35;
        }
      `}</style>
    </section>
  )
}

const SkillCard = ({ skill, index }) => (
  <div
    className="skill-card flex flex-col items-center gap-3"
    style={{ animationDelay: `${index * 70}ms` }}
  >
    <div className="relative flex flex-col items-center">
      {/* glow blob behind icon */}
      <div
        className="skill-glow pointer-events-none absolute inset-0 rounded-2xl blur-xl"
        style={{ background: skill.glow, opacity: 0 }}
      />

      {/* card face */}
      <div
        className="skill-border relative flex h-[76px] w-[76px] items-center justify-center rounded-2xl sm:h-[88px] sm:w-[88px]"
        style={{
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: `1.5px solid ${skill.border}`,
          boxShadow: "0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        {/* inner glow ring */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${skill.glow}22 0%, transparent 70%)`,
          }}
        />

        {/* image */}
        <div className="skill-img-wrap relative z-10 flex h-11 w-11 items-center justify-center sm:h-12 sm:w-12">
          <img
            src={skill.img}
            alt={skill.name}
            className="h-full w-full object-contain drop-shadow-lg"
            style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.4))" }}
          />
        </div>
      </div>
    </div>

    {/* label */}
    <span className="skill-name text-center text-[11px] font-bold leading-tight text-white/80 sm:text-xs">
      {skill.name}
    </span>
  </div>
)

export default Proficiency