import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fermer le menu mobile quand on change de page
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Empêcher le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" }, // Changé de "Prestations" à "Services"
    { name: "Réalisations", path: "/realisations" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo BIGI TECH */}
          <Link to="/" className="relative group z-50">
            <span className="text-2xl md:text-3xl font-black tracking-tighter">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                BIGI
              </span>
              <span className="text-gray-900"> TECH</span>
            </span>
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500 group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 relative group ${
                  location.pathname === link.path ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : ''
                }`} />
              </Link>
            ))}
            <Link
              to="/devis"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors relative z-50"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Overlay */}
        {isOpen && (
          <div className="fixed inset-0 top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-md z-40 md:hidden">
            <div className="flex flex-col items-center justify-center min-h-screen px-4">
              <div className="flex flex-col items-center space-y-6 w-full max-w-sm">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`w-full text-center px-6 py-4 rounded-2xl transition-all duration-300 text-lg font-medium ${
                      location.pathname === link.path 
                        ? 'bg-gradient-to-r from-blue-50 to-orange-50 text-blue-600 shadow-md' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/devis"
                  onClick={() => setIsOpen(false)}
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-2xl font-medium text-center text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mt-4"
                >
                  Devis gratuit
                </Link>
                
                {/* Petit message optionnel */}
                <p className="text-gray-400 text-sm mt-8">
                  Solutions digitales sur mesure
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}