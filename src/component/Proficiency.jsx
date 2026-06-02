const skills = [
  { name: 'HTML5', label: 'HTML', color: 'text-orange-500', bg: 'bg-orange-100' },
  { name: 'CSS3', label: 'CSS', color: 'text-sky-500', bg: 'bg-sky-100' },
  { name: 'JavaScript', label: 'JS', color: 'text-yellow-600', bg: 'bg-yellow-100' },
  { name: 'React', label: 'React', color: 'text-cyan-400', bg: 'bg-cyan-100' },
  { name: 'Redux', label: 'Redux', color: 'text-violet-500', bg: 'bg-violet-100' },
  { name: 'Node.js', label: 'Node', color: 'text-emerald-500', bg: 'bg-emerald-100' },
  { name: 'Express.js', label: 'Express', color: 'text-yellow-700', bg: 'bg-yellow-100' },
  { name: 'MongoDB', label: 'Mongo', color: 'text-green-600', bg: 'bg-green-100' },
  { name: 'TypeScript', label: 'TS', color: 'text-blue-500', bg: 'bg-blue-100' },
  { name: 'Tailwind CSS', label: 'TW', color: 'text-cyan-500', bg: 'bg-cyan-100' },
  { name: 'REST API', label: 'API', color: 'text-sky-600', bg: 'bg-sky-100' },
  { name: 'Git', label: 'Git', color: 'text-orange-600', bg: 'bg-orange-100' },
  { name: 'Figma', label: 'Figma', color: 'text-pink-500', bg: 'bg-pink-100' },
  { name: 'Docker', label: 'Docker', color: 'text-sky-600', bg: 'bg-sky-100' },
]

const Proficiency = () => {
  return (
    <section className="section-bg min-h-screen py-20 text-white sm:py-24">
      <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-24">
        <div className="text-center">
          <p className="text-base font-medium uppercase tracking-[0.18em] text-indigo-200/75 sm:text-lg">
            &quot;What tech stack have we used in our project?&quot;
          </p>
          <h2 className="mt-4 text-5xl font-black leading-none text-white sm:text-7xl">
            My Proficiency in
          </h2>
        </div>

        <div className="mx-auto mt-20 grid max-w-6xl grid-cols-3 justify-items-center gap-x-10 gap-y-16 sm:grid-cols-4 lg:grid-cols-7">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-token group flex flex-col items-center gap-3"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="skill-badge flex h-24 w-24 items-center justify-center bg-stone-200 shadow-[0_18px_45px_rgba(0,0,0,0.28)]">
                <div className={`flex h-16 w-16 items-center justify-center rounded-xl ${skill.bg}`}>
                  <span className={`text-2xl font-black ${skill.color}`}>
                    {skill.label}
                  </span>
                </div>
              </div>
              <span className="text-sm font-bold text-indigo-100/65 opacity-0 transition group-hover:opacity-100">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Proficiency
