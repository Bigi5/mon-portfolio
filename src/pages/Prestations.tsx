import { Link } from "react-router-dom"
import PricingCard from "../components/PricingCard"
import { 
  Globe, ShoppingBag, Settings, Users, Building2, 
  Wrench, PenTool, BarChart, Shield, Smartphone,
  Zap, Clock, CheckCircle
} from "lucide-react"

export default function Prestations() {
  const services = [
    {
      icon: Globe,
      title: "Site Vitrine Professionnel",
      desc: "Présentez votre entreprise avec un design moderne et responsive",
      features: [
        "Design personnalisé",
        "Optimisé mobile/tablette",
        "SEO de base",
        "Formulaire de contact",
        "Galerie photos",
        "CMS simple"
      ],
      price: "CHF 2'900",
      popular: false
    },
    {
      icon: ShoppingBag,
      title: "E-commerce Complet",
      desc: "Vendez vos produits en ligne avec une solution professionnelle",
      features: [
        "Catalogue produits",
        "Panier d'achat",
        "Paiements sécurisés (Stripe, TWINT)",
        "Gestion des stocks",
        "Commandes clients",
        "Factures automatiques"
      ],
      price: "CHF 5'900",
      popular: true
    },
    {
      icon: Building2,
      title: "Solution BTP & Artisans",
      desc: "Plateforme sur mesure pour les professionnels du bâtiment",
      features: [
        "Gestion de chantiers",
        "Devis en ligne",
        "Planning interactif",
        "Galerie réalisations",
        "Espace client sécurisé",
        "Messagerie intégrée"
      ],
      price: "Sur mesure",
      popular: false
    },
    {
      icon: Users,
      title: "Application Métier",
      desc: "Logiciel personnalisé pour vos processus internes",
      features: [
        "Analyse des besoins",
        "Développement sur mesure",
        "Base de données",
        "Tableau de bord",
        "Export de données",
        "Formation incluse"
      ],
      price: "CHF 8'900",
      popular: false
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      desc: "Gardez votre site à jour et sécurisé",
      features: [
        "Mises à jour sécurité",
        "Sauvegardes automatiques",
        "Support prioritaire",
        "Modifications mineures",
        "Monitoring 24/7",
        "Rapport mensuel"
      ],
      price: "CHF 290/mois",
      popular: false
    },
    {
      icon: BarChart,
      title: "Marketing Digital",
      desc: "Attirez plus de clients avec une stratégie digitale",
      features: [
        "SEO local",
        "Google My Business",
        "Campagnes Google Ads",
        "Réseaux sociaux",
        "Email marketing",
        "Analytics & rapports"
      ],
      price: "Sur mesure",
      popular: false
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-black mb-6">Nos Prestations</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Des solutions adaptées à chaque budget et à chaque besoin. 
            Tous nos projets sont livrés avec 3 mois de garantie et support inclus.
          </p>
        </div>
      </section>

      {/* Forfaits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <PricingCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Services inclus */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Tous nos projets incluent</h2>
            <p className="text-xl text-gray-600">Des prestations premium sans frais cachés</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "SSL & Sécurité", desc: "Certificat SSL offert" },
              { icon: Smartphone, title: "100% Responsive", desc: "Mobile, tablette, desktop" },
              { icon: Zap, title: "Performance", desc: "Optimisation vitesse" },
              { icon: Clock, title: "Support 3 mois", desc: "Formation incluse" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl text-center shadow-sm">
                <item.icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}