const testimonials = [
  {
    quote:
      'I thought it was impossible to make a website as beautiful as our product, but Gaurav proved me wrong.',
    name: 'Sara Lee',
    role: 'CEO of Acme Co',
    avatar: 'SL',
  },
  {
    quote:
      "I've never met a web developer who truly cares about their clients' success like Gaurav does.",
    name: 'Chris Brown',
    role: 'COO of DEF Corp',
    avatar: 'CB',
  },
  {
    quote:
      "After Gaurav optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: 'Lisa Wang',
    role: 'CTO of 456 Enterprises',
    avatar: 'LW',
  },
]

const Testimonials = () => {
  return (
    <section className="section-bg px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-24">
      <div className="mx-auto max-w-[1450px] rounded-2xl bg-[#171033] px-6 py-14 sm:px-12 lg:px-20">
        <p className="text-base font-medium uppercase tracking-[0.18em] text-indigo-200/75 sm:text-lg">
          What others say
        </p>
        <h2 className="mt-4 text-5xl font-black leading-none text-white sm:text-7xl">
          Testimonials.
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex min-h-[360px] flex-col justify-between rounded-2xl bg-[#08011d] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.25)] sm:p-10"
            >
              <div>
                <span className="text-5xl font-black leading-none text-white">
                  &quot;
                </span>
                <p className="mt-12 text-xl font-medium leading-8 text-white">
                  {testimonial.quote}
                </p>
              </div>

              <div className="mt-10 flex items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-extrabold text-white">
                    <span className="text-sky-400">@ </span>
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-sm font-medium text-indigo-100/65">
                    {testimonial.role}
                  </p>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-300 via-violet-300 to-emerald-300 text-sm font-black text-[#030614]">
                  {testimonial.avatar}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
