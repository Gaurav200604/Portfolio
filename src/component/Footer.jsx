const socials = [
  {
    name: 'Facebook',
    color: 'text-blue-500',
    icon: (
      <path d="M14 8.5h2V5h-2.8C9.9 5 8 6.9 8 10.1V12H5v3.6h3V24h4.1v-8.4h3.1l.6-3.6h-3.7v-1.5c0-1 .3-2 1.9-2Z" />
    ),
  },
  {
    name: 'Instagram',
    color: 'text-pink-500',
    icon: (
      <>
        <rect x="5" y="5" width="18" height="18" rx="5" />
        <circle cx="14" cy="14" r="4" />
        <circle cx="19.5" cy="8.5" r="1" />
      </>
    ),
  },
  {
    name: 'YouTube',
    color: 'text-red-500',
    icon: (
      <>
        <path d="M24 10.2s-.2-1.7-1-2.4c-.9-1-1.9-1-2.4-1.1C17.3 6.5 14 6.5 14 6.5s-3.3 0-6.6.2c-.5.1-1.5.1-2.4 1.1-.8.7-1 2.4-1 2.4S3.8 12.1 3.8 14v1.8c0 1.9.2 3.8.2 3.8s.2 1.7 1 2.4c.9 1 2.1 1 2.7 1.1 1.9.2 6.3.2 6.3.2s3.3 0 6.6-.2c.5-.1 1.5-.1 2.4-1.1.8-.7 1-2.4 1-2.4s.2-1.9.2-3.8V14c0-1.9-.2-3.8-.2-3.8Z" />
        <path fill="#030614" d="m12 17.8 5.2-3-5.2-3v6Z" />
      </>
    ),
  },
  {
    name: 'LinkedIn',
    color: 'text-blue-600',
    icon: (
      <>
        <path d="M6 11h4v13H6V11Zm2-6a2.3 2.3 0 1 1 0 4.6A2.3 2.3 0 0 1 8 5Zm6 6h3.8v1.8h.1c.5-1 1.8-2.1 3.8-2.1 4.1 0 4.8 2.7 4.8 6.2V24h-4v-6.3c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V24h-4V11Z" />
      </>
    ),
  },
  {
    name: 'GitHub',
    color: 'text-slate-500',
    icon: (
      <path d="M14 4.5A9.8 9.8 0 0 0 10.9 24c.5.1.7-.2.7-.5v-2c-3 .7-3.6-1.3-3.6-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.4-.3-4.9-1.2-4.9-5.3 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10.1 10.1 0 0 1 5.4 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.7 1.1 2.9 0 4.1-2.5 5-4.9 5.3.4.3.8 1 .8 2v3c0 .3.2.6.8.5A9.8 9.8 0 0 0 14 4.5Z" />
    ),
  },
]

const Footer = () => {
  return (
    <footer className="section-bg px-5 pb-20 pt-12 text-white sm:px-8 lg:px-24">
      <div className="mx-auto max-w-[1450px]">
        <div className="h-3 w-full bg-purple-900/70" />

        <div className="mt-16 flex justify-center gap-8">
          {socials.map((social) => (
            <a
              key={social.name}
              href="#"
              aria-label={social.name}
              className={`flex h-14 w-14 items-center justify-center rounded-lg border border-white/75 ${social.color} transition hover:-translate-y-1 hover:border-purple-400 hover:bg-white/5`}
            >
              <svg
                viewBox="0 0 28 28"
                className="h-8 w-8"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {social.icon}
              </svg>
            </a>
          ))}
        </div>

        <p className="mt-12 text-center text-lg font-bold text-white/85">
          &copy; Gaurav_Kumar - 2026.
        </p>
      </div>
    </footer>
  )
}

export default Footer
