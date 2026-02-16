import { useState } from "react"
import { CheckCircle, FileText, Clock, Shield, Send, Mail } from "lucide-react"
import { Link } from "react-router-dom"
import emailjs from '@emailjs/browser'

// TES INFOS EMAILJS
const SERVICE_ID = "Bigitech"
const TEMPLATE_ID = "template_sd9uhen"
const PUBLIC_KEY = "GjnfQgIV7d0iGbBQu"

export default function Devis() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    projectType: "",
    budget: "",
    deadline: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    description: ""
  })

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Préparer les données pour EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || "Non renseigné",
        phone: formData.phone || "Non renseigné",
        project_type: getProjectTypeLabel(formData.projectType),
        budget: getBudgetLabel(formData.budget),
        deadline: getDeadlineLabel(formData.deadline),
        message: formData.description,
        to_email: "bouncarlos@gmail.com",
        reply_to: formData.email
      }

      // Envoyer l'email via EmailJS
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      )

      console.log("Email envoyé avec succès:", response)
      setSubmitted(true)
      
    } catch (error) {
      console.error("Erreur EmailJS:", error)
      alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer ou m'écrire directement à bouncarlos@gmail.com")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Fonctions pour convertir les valeurs en texte lisible
  const getProjectTypeLabel = (value: string) => {
    const types: Record<string, string> = {
      vitrine: "Site vitrine",
      ecommerce: "E-commerce",
      application: "Application métier",
      btp: "Solution BTP",
      maintenance: "Maintenance"
    }
    return types[value] || value
  }

  const getBudgetLabel = (value: string) => {
    const budgets: Record<string, string> = {
      "<3000": "Moins de CHF 3'000",
      "3000-6000": "CHF 3'000 - 6'000",
      "6000-10000": "CHF 6'000 - 10'000",
      ">10000": "Plus de CHF 10'000",
      undecided: "À définir"
    }
    return budgets[value] || value
  }

  const getDeadlineLabel = (value: string) => {
    const deadlines: Record<string, string> = {
      urgent: "Urgent (moins d'1 mois)",
      normal: "Normal (1-3 mois)",
      flexible: "Flexible (3-6 mois)",
      discuss: "À discuter"
    }
    return deadlines[value] || value
  }

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            
            <h1 className="text-4xl font-black text-green-700 mb-4">
              Devis reçu !
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Merci {formData.name} d'avoir soumis votre demande.
            </p>

            <div className="bg-blue-50 p-6 rounded-2xl mb-8 text-left">
              <h3 className="font-semibold text-lg mb-3 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-600" />
                Prochaine étape
              </h3>
              <p className="text-gray-700 mb-2">
                Je vais étudier votre projet concernant : 
                <span className="font-semibold"> {getProjectTypeLabel(formData.projectType)}</span>
              </p>
              <p className="text-gray-600">
                Vous recevrez une réponse détaillée par email à <br />
                <span className="font-medium text-blue-600">{formData.email}</span> sous 24h ouvrées.
              </p>
            </div>

            <div className="space-y-3">
              <Link
                to="/"
                className="inline-block w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
              >
                Retour à l'accueil
              </Link>
              
              <p className="text-sm text-gray-500">
                Une question ? Écrivez-moi directement : <br />
                <a href="mailto:bouncarlos@gmail.com" className="text-blue-600 hover:underline font-medium">
                  bouncarlos@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black mb-4">Demande de devis gratuit</h1>
          <p className="text-xl text-gray-600">
            Réponse écrite sous 24h • Sans engagement • 100% par email
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`text-sm font-medium ${
                step >= i ? 'text-blue-600' : 'text-gray-400'
              }`}>
                Étape {i}
              </div>
            ))}
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full transition-all duration-500"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Formulaire */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Type de projet</h2>
              
              <div className="space-y-4 mb-8">
                {[
                  { value: "vitrine", label: "Site vitrine", desc: "Présentation de votre entreprise", icon: "🌐" },
                  { value: "ecommerce", label: "Site e-commerce", desc: "Vente en ligne", icon: "🛍️" },
                  { value: "application", label: "Application métier", desc: "Logiciel sur mesure", icon: "💻" },
                  { value: "btp", label: "Solution BTP", desc: "Gestion de chantiers", icon: "🏗️" },
                  { value: "maintenance", label: "Maintenance", desc: "Mise à jour site existant", icon: "🔧" },
                ].map((option) => (
                  <label key={option.value} className={`block p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    formData.projectType === option.value 
                      ? 'border-blue-600 bg-blue-50' 
                      : 'border-gray-200 hover:border-blue-300'
                  }`}>
                    <input
                      type="radio"
                      name="projectType"
                      value={option.value}
                      checked={formData.projectType === option.value}
                      onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                      className="hidden"
                    />
                    <div className="flex items-center">
                      <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                        formData.projectType === option.value 
                          ? 'border-blue-600' 
                          : 'border-gray-300'
                      }`}>
                        {formData.projectType === option.value && (
                          <div className="w-3 h-3 bg-blue-600 rounded-full" />
                        )}
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold flex items-center">
                          <span className="mr-2">{option.icon}</span>
                          {option.label}
                        </span>
                        <p className="text-sm text-gray-500 ml-7">{option.desc}</p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>

              <button
                onClick={nextStep}
                disabled={!formData.projectType}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continuer
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Budget et délais</h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm font-medium mb-2">Budget approximatif *</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="<3000">Moins de CHF 3'000</option>
                    <option value="3000-6000">CHF 3'000 - 6'000</option>
                    <option value="6000-10000">CHF 6'000 - 10'000</option>
                    <option value=">10000">Plus de CHF 10'000</option>
                    <option value="undecided">Je ne sais pas encore</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Délai souhaité *</label>
                  <select
                    value={formData.deadline}
                    onChange={(e) => setFormData({...formData, deadline: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="urgent">Urgent (moins d'1 mois)</option>
                    <option value="normal">Normal (1-3 mois)</option>
                    <option value="flexible">Flexible (3-6 mois)</option>
                    <option value="discuss">À discuter ensemble</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={prevStep}
                  className="flex-1 py-4 border-2 border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
                >
                  Retour
                </button>
                <button
                  onClick={nextStep}
                  disabled={!formData.budget || !formData.deadline}
                  className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continuer
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Vos coordonnées</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4 mb-8">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom complet *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Entreprise</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Votre entreprise (optionnel)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email professionnel *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                      placeholder="contact@entreprise.ch"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      C'est à cette adresse que je vous enverrai le devis
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Téléphone (optionnel)</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="+41 79 123 45 67"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Uniquement si nécessaire, je privilégie les échanges par email
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Description du projet *</label>
                    <textarea
                      rows={5}
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                      placeholder="Décrivez votre projet en détail : objectifs, fonctionnalités souhaitées, contenu, etc. Plus vous donnerez de détails, plus mon devis sera précis."
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="flex items-start">
                    <input type="checkbox" required className="mr-3 mt-1" />
                    <span className="text-sm text-gray-600">
                      J'accepte que mes données soient traitées pour répondre à ma demande. 
                      Aucun appel téléphonique ne sera effectué sans mon accord préalable.
                    </span>
                  </label>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 py-4 border-2 border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
                  >
                    Retour
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Envoyer ma demande
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Garanties */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-4">
            <Mail className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="font-semibold">100% par email</h3>
            <p className="text-sm text-gray-500">Aucun appel téléphonique</p>
          </div>
          <div className="text-center p-4">
            <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="font-semibold">Réponse sous 24h</h3>
            <p className="text-sm text-gray-500">Devis détaillé par écrit</p>
          </div>
          <div className="text-center p-4">
            <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="font-semibold">Sans engagement</h3>
            <p className="text-sm text-gray-500">Vous décidez après</p>
          </div>
        </div>

        {/* Rappel email */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Une question avant de commencer ? Écrivez-moi à{' '}
            <a href="mailto:bouncarlos@gmail.com" className="text-blue-600 hover:underline font-medium">
              bouncarlos@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}