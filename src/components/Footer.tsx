import { Link } from "react-router-dom"
import { Mail, MapPin, Heart, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & description */}
          <div>
            <h3 className="text-2xl font-black mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                BIGI TECH
              </span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Solutions digitales sur mesure pour votre entreprise. 
              Développement, design et conseil.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/realisations" className="text-gray-400 hover:text-white transition-colors">Réalisations</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <a href="mailto:bouncarlos@gmail.com" className="hover:text-white transition-colors">
                  bouncarlos@gmail.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-2 flex-shrink-0" />
                100% télétravail
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4 className="font-semibold mb-4">Suivez-moi</h4>
            <div className="flex space-x-4">
              <a 
                href="https://web.facebook.com/profile.php?id=61585974059820" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/bigi_tech01/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:bouncarlos@gmail.com"
                className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Réponse sous 24h
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400 flex flex-wrap justify-between items-center">
          <p>© 2026 BIGI TECH. Tous droits réservés.</p>
          <p className="flex items-center">
            Made with <Heart size={14} className="mx-1 text-red-500 fill-current" /> avec passion
          </p>
        </div>
      </div>
    </footer>
  )
}