import heroImg from '../assets/gauravimg.jpg'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-t-2 border-zinc-700 bg-[#030614]/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1450px] items-center justify-between px-5 sm:px-8 lg:px-24">
        <a href="#" className="flex min-w-0 items-center gap-3">
          <img
            src={heroImg}
            alt="Gaurav Kumar"
            className="h-10 w-10 rounded-full object-cover"
          />
          <h1 className="truncate text-base font-extrabold text-white sm:text-xl">
            Gaurav Kumar | FullStack Developer
          </h1>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          <a
            href="#about"
            className="text-xl font-semibold text-indigo-200 transition hover:text-white"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-xl font-semibold text-indigo-200 transition hover:text-white"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="text-xl font-semibold text-indigo-200 transition hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
