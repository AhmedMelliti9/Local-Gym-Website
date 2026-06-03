import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NAV_LINKS } from '@utils/constants'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-dark border-b border-primary/20">
      <div className="section-container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            💪 Local Gym
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-300 hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex gap-4">
            <button className="btn-outline">Sign In</button>
            <button className="btn-primary">Join Now</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-300 hover:text-primary transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <button className="btn-outline w-full">Sign In</button>
              <button className="btn-primary w-full">Join Now</button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
