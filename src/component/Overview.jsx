const services = [
  {
    title: 'MERN Stack',
    subtitle: 'Developer',
    icon: 'M',
    accent: 'from-cyan-300 via-violet-400 to-fuchsia-400',
  },
  {
    title: 'React Js',
    subtitle: 'Developer',
    icon: 'R',
    accent: 'from-sky-300 via-cyan-300 to-blue-400',
  },
  {
    title: 'Backend',
    subtitle: 'Developer',
    icon: 'B',
    accent: 'from-emerald-300 via-cyan-300 to-violet-400',
  },
  {
    title: 'UI / UX',
    subtitle: 'Designer',
    icon: 'U',
    accent: 'from-pink-300 via-violet-400 to-cyan-300',
  },
]
const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = "Gaurav_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Overview = () => {
  return (
    <section id="about" className="section-bg relative overflow-hidden py-16 text-white sm:py-20">
      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-24">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-4xl">
            <p className="text-base font-medium uppercase tracking-[0.18em] text-indigo-200/80 sm:text-lg">
              Introduction
            </p>
            <h2 className="mt-3 text-4xl font-black leading-none text-white sm:text-6xl">
              Overview.
            </h2>
            <p className="mt-6 max-w-4xl text-lg font-medium leading-8 text-indigo-100/75 sm:text-xl sm:leading-9">
              I&apos;m an experienced Full-Stack developer proficient in React JS,
              Node JS, Express JS, MongoDB, JavaScript, HTML, CSS, Tailwind CSS
              and Next JS. I excel in designing, coding, testing, and debugging
              web applications, always striving for optimal user experiences.
            </p>
          </div>

          <a
            onClick={downloadResume}
            href="/resume.pdf"
            className="inline-flex w-fit items-center justify-center rounded-full bg-emerald-500 px-6 py-4 text-base font-extrabold text-white shadow-[0_16px_48px_rgba(16,185,129,0.3)] transition hover:-translate-y-1 hover:bg-emerald-400"
          >
            Download My Resume
          </a>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overview-card relative min-h-[260px] rounded-2xl border border-cyan-300/70 bg-[#171033]/90 p-[1px] shadow-[0_24px_70px_rgba(88,28,135,0.22)]"
            >
              <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-[#171033]/95 px-6 text-center">
                <div className="preserve-3d relative h-20 w-20">
                  <div className={`tech-gem absolute inset-3 bg-gradient-to-br ${service.accent}`} />
                  <div className="absolute inset-0 flex items-center justify-center text-5xl font-black text-cyan-200 drop-shadow-[0_0_20px_rgba(34,211,238,0.75)]">
                    {service.icon}
                  </div>
                </div>
                <h3 className="mt-7 text-2xl font-extrabold leading-snug text-white">
                  {service.title}
                  <br />
                  {service.subtitle}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Overview
