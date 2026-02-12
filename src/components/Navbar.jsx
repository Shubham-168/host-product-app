const navLinks = ['Our product', 'New arrivals', 'Collections', 'About us']

const iconButtonClass = 'rounded-full p-2 transition hover:bg-gray-100'

function Navbar() {
  return (
    <nav className="sticky top-0 z-20 border-b border-gray-200 bg-white/95 px-6 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">TrendHive</h1>

        <ul className="hidden items-center gap-10 text-base font-medium text-gray-700 md:flex">
          {navLinks.map((item) => (
            <li key={item} className="cursor-pointer transition-colors hover:text-gray-900">
              {item}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 text-gray-700">
          <button className={iconButtonClass} aria-label="Search">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
            </svg>
          </button>
          <button className={iconButtonClass} aria-label="Wishlist">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 21s-6.7-4.5-8.7-8.3c-1.3-2.6-.6-6.2 2.3-7.6 2.1-1 4.5-.3 6.4 1.8 1.9-2.1 4.3-2.8 6.4-1.8 2.9 1.4 3.6 5 2.3 7.6C18.7 16.5 12 21 12 21z" />
            </svg>
          </button>
          <button className={iconButtonClass} aria-label="Cart">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 5h2l2.4 10.2a1 1 0 001 .8h8.8a1 1 0 001-.8L21 8H7" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="10" cy="19" r="1.4" />
              <circle cx="17" cy="19" r="1.4" />
            </svg>
          </button>
          <button className="rounded-full bg-lime-300 px-7 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-lime-400">
            Login
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
