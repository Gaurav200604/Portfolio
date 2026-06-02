import homeImage from '../assets/homeimage.png'

const Home = () => {
  return (
    <main
      className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-[#030614] bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${homeImage})` }}
    >
      <div className="absolute inset-0 bg-[#030614]/20" />

      <section className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1450px] px-5 sm:px-8 lg:px-24">
        <div className="flex pt-12 sm:pt-16 lg:pt-20">
          <div className="relative hidden w-10 shrink-0 sm:block">
            <span className="absolute left-0 top-0 h-6 w-6 rounded-full bg-violet-500" />
            <span className="absolute left-[11px] top-5 h-[340px] w-1 bg-violet-500/80" />
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl font-black leading-none tracking-normal sm:text-6xl lg:text-7xl">
              Hi, I&apos;m <span className="text-violet-500">Gaurav</span>
            </h1>

            <p className="mt-6 max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl">
              I am a MERN Stack Developer
              <br />
              and UI/UX Designer.
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 hidden h-14 w-9 -translate-x-1/2 rounded-full border-4 border-indigo-200/90 md:block">
          <span className="absolute left-1/2 top-3 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-indigo-200/90" />
        </div>
      </section>
    </main>
  )
}

export default Home
