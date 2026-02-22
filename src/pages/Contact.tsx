import { useState } from "react"
import { Mail, MapPin, Send, CheckCircle, Facebook, Instagram } from "lucide-react"
import { Link } from "react-router-dom"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici tu peux connecter à EmailJS si tu veux
    console.log("Message de contact:", formData)
    setSubmitted(true)
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">Contact</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Réponse sous 24h • Échangez par email
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Infos de contact */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold mb-6">Restons en contact</h2>
              <p className="text-gray-600 mb-8">
                Que vous ayez un projet ou simplement une question, je suis là pour vous répondre.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">bouncarlos@gmail.com</p>
                    <p className="text-sm text-gray-500">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Localisation</h3>
                    <p className="text-gray-600">100% télétravail</p>
                    <p className="text-sm text-gray-500">Disponible par email</p>
                  </div>
                </div>

                {/* Réseaux sociaux */}
                <div className="pt-4">
                  <h3 className="font-semibold mb-3">Suivez-moi</h3>
                  <div className="flex gap-3">
                    <a 
                      href="https://web.facebook.com/profile.php?id=61585974059820" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors hover:scale-110 transition-transform"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                    <a 
                      href="https://www.instagram.com/bigi_tech01/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-colors hover:scale-110 transition-transform"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a 
                      href="mailto:bouncarlos@gmail.com"
                      className="p-3 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors hover:scale-110 transition-transform"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 p-8 rounded-3xl text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Message envoyé !</h3>
                  <p className="text-green-700 mb-4">
                    Merci de m'avoir contacté. Je vous répondrai dans les 24 heures.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8">
                  <h2 className="text-2xl font-bold mb-6">Envoyez-moi un message</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nom complet *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        placeholder="Votre message..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center group"
                  >
                    <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                    Envoyer le message
                  </button>

                  <p className="text-xs text-gray-400 text-center mt-4">
                    * Champs obligatoires • Réponse garantie sous 24h
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}