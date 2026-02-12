import { useState } from 'react'

const navLinks = ['Our product', 'New arrivals', 'Collections', 'About us']

const iconButtonClass = 'cursor-pointer rounded-full p-2 transition hover:bg-gray-100'

function Navbar() {
  const [activeTab, setActiveTab] = useState('Our product')

  return (
    <nav className="sticky top-0 z-20 border-b border-gray-200 bg-white/95 px-6 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between">
        <h1 className="cursor-pointer text-3xl font-bold tracking-tight text-gray-900">TrendHive</h1>

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((item) => {
            const isActive = activeTab === item

            return (
              <li key={item}>
                <button
                  type="button"
                  onClick={() => setActiveTab(item)}
                  className={`cursor-pointer border-b-2 px-1 py-6 text-base font-medium transition-colors ${
                    isActive
                      ? 'border-black text-gray-900'
                      : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-900'
                  }`}
                >
                  {item}
                </button>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-4 text-gray-700">
          <button className={iconButtonClass} aria-label="Search" type="button">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
            </svg>
          </button>
          <button className={iconButtonClass} aria-label="Wishlist" type="button">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 21s-6.7-4.5-8.7-8.3c-1.3-2.6-.6-6.2 2.3-7.6 2.1-1 4.5-.3 6.4 1.8 1.9-2.1 4.3-2.8 6.4-1.8 2.9 1.4 3.6 5 2.3 7.6C18.7 16.5 12 21 12 21z" />
            </svg>
          </button>
          <button className={iconButtonClass} aria-label="Cart" type="button">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path
                d="M3 5h2l2.4 10.2a1 1 0 001 .8h8.8a1 1 0 001-.8L21 8H7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10" cy="19" r="1.4" />
              <circle cx="17" cy="19" r="1.4" />
            </svg>
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-full bg-lime-300 px-7 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-lime-400"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
