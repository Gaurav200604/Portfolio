const Contact = () => {
  return (
    <section id="contact" className="section-bg overflow-hidden px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-24">
      <div className="mx-auto grid max-w-[1450px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-sm bg-[#120d24] px-6 py-10 shadow-[0_26px_90px_rgba(0,0,0,0.28)] sm:px-10 lg:px-12">
          <h2 className="text-5xl font-black leading-none text-white sm:text-7xl">
            Contact.
          </h2>

          <form className="mt-14 space-y-8">
            <label className="block">
              <span className="text-lg font-extrabold text-white">
                Your Name
              </span>
              <input
                type="text"
                name="name"
                placeholder="What's your name ?"
                className="mt-5 w-full rounded-lg border border-transparent bg-[#171033] px-6 py-5 text-lg font-semibold text-white outline-none transition placeholder:text-indigo-200/75 focus:border-fuchsia-400"
              />
            </label>

            <label className="block">
              <span className="text-lg font-extrabold text-white">
                Your email
              </span>
              <input
                type="email"
                name="email"
                placeholder="What's your email address ?"
                className="mt-5 w-full rounded-lg border border-transparent bg-[#171033] px-6 py-5 text-lg font-semibold text-white outline-none transition placeholder:text-indigo-200/75 focus:border-fuchsia-400"
              />
            </label>

            <label className="block">
              <span className="text-lg font-extrabold text-white">
                Your Message
              </span>
              <textarea
                name="message"
                rows="7"
                placeholder="What you want to say ?"
                className="mt-5 w-full resize-none rounded-lg border border-transparent bg-[#171033] px-6 py-5 text-lg font-semibold text-white outline-none transition placeholder:text-indigo-200/75 focus:border-fuchsia-400"
              />
            </label>

            <button
              type="submit"
              className="rounded-xl bg-pink-600 px-9 py-4 text-lg font-extrabold text-white shadow-[0_18px_42px_rgba(219,39,119,0.32)] transition hover:-translate-y-1 hover:bg-pink-500"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="relative hidden min-h-[620px] items-center justify-center lg:flex">
          <div className="contact-glow absolute h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-3xl" />
          <div className="contact-planet">
            <div className="planet-core" />
            <span className="orbit orbit-one" />
            <span className="orbit orbit-two" />
            <span className="orbit orbit-three" />
            <span className="orbit orbit-four" />
            <span className="orbit orbit-five" />
            <span className="orbit orbit-six" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
