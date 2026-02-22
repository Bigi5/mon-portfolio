import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { 
  Globe, 
  Smartphone, 
  Database, 
  Palette, 
  ArrowRight, 
  CheckCircle,
  Clock,
  Users,
  Award,
  Shield,
  Zap,
  Code,
  Rocket,
  Sparkles,
  ChevronRight,
  Star,
  MessageCircle,
  Coffee,
  Mail,
  Calendar
} from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Sites vitrines & E-commerce",
      shortDesc: "Présence en ligne professionnelle",
      desc: "Sites vitrines élégants et sites e-commerce complets avec gestion de catalogue, panier et paiements sécurisés. Design responsive et optimisé SEO.",
      features: [
        "Design sur mesure et responsive",
        "Catalogue produits / services",
        "Paiements sécurisés (Stripe, PayPal)",
        "Optimisation SEO",
        "Admin personnalisé",
        "Blog intégré"
      ],
      gradient: "from-blue-400 to-cyan-400",
      price: "À partir de 1500€",
      delay: 0.1
    },
    {
      icon: Smartphone,
      title: "Applications Web & Mobile",
      shortDesc: "Apps progressives et performantes",
      desc: "Applications web modernes (PWA) et hybrides pour mobile. Interfaces réactives, temps réel et expérience utilisateur optimale.",
      features: [
        "Progressive Web Apps (PWA)",
        "Applications temps réel",
        "Interface utilisateur intuitive",
        "Mode hors-ligne",
        "Notifications push",
        "Performance optimale"
      ],
      gradient: "from-purple-400 to-pink-400",
      price: "À partir de 2500€",
      delay: 0.2
    },
    {
      icon: Database,
      title: "Solutions d'entreprise",
      shortDesc: "ERP, CRM et outils sur mesure",
      desc: "Solutions complètes pour gérer votre activité : ERP, CRM, intranet, outils de gestion, tableaux de bord et reporting avancé.",
      features: [
        "ERP personnalisé",
        "CRM sur mesure",
        "Gestion de projet",
        "Reporting et analytics",
        "Multi-utilisateurs",
        "API personnalisées"
      ],
      gradient: "from-orange-400 to-red-400",
      price: "Sur devis",
      delay: 0.3
    },
    {
      icon: Palette,
      title: "Design UX/UI",
      shortDesc: "Interfaces modernes et intuitives",
      desc: "Création d'interfaces utilisateur modernes, intuitives et accessibles. Design thinking, wireframes, prototypes et design systems.",
      features: [
        "Audit UX",
        "Wireframes interactifs",
        "Design System",
        "Prototypes cliquables",
        "Tests utilisateurs",
        "Charte graphique"
      ],
      gradient: "from-green-400 to-emerald-400",
      price: "À partir de 800€",
      delay: 0.4
    }
  ]

  const processSteps = [
    {
      icon: MessageCircle,
      title: "1. Consultation",
      desc: "On discute de vos besoins, objectifs et contraintes"
    },
    {
      icon: Palette,
      title: "2. Conception",
      desc: "Je crée des maquettes et valide avec vous"
    },
    {
      icon: Code,
      title: "3. Développement",
      desc: "Développement itératif avec des démos régulières"
    },
    {
      icon: Rocket,
      title: "4. Lancement",
      desc: "Déploiement, tests finaux et mise en production"
    }
  ]

  const faqs = [
    {
      question: "Combien de temps dure un projet ?",
      answer: "La durée varie selon la complexité : 2-4 semaines pour un site vitrine, 1-3 mois pour une application complète."
    },
    {
      question: "Proposez-vous de la maintenance ?",
      answer: "Oui, je propose des forfaits de maintenance mensuels ou ponctuels selon vos besoins."
    },
    {
      question: "Comment se passe le paiement ?",
      answer: "Un acompte de 30% à la signature, le solde à la livraison. Paiement en plusieurs fois possible."
    },
    {
      question: "Puis-je voir des exemples concrets ?",
      answer: "Bien sûr ! Consultez mes réalisations ou demandez-moi des références similaires à votre projet."
    }
  ]

  return (
    <div className="pt-20 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Mes services
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Des solutions adaptées
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                à vos besoins
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Du site vitrine à l'application complexe, je vous accompagne à chaque étape 
              de votre projet digital.
            </p>

            {/* Statistiques */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center bg-white shadow-lg px-6 py-3 rounded-full">
                <Users className="w-5 h-5 text-blue-500 mr-2" />
                <span className="font-semibold">25+ projets</span>
              </div>
              <div className="flex items-center bg-white shadow-lg px-6 py-3 rounded-full">
                <Clock className="w-5 h-5 text-purple-500 mr-2" />
                <span className="font-semibold">Livraison rapide</span>
              </div>
              <div className="flex items-center bg-white shadow-lg px-6 py-3 rounded-full">
                <Award className="w-5 h-5 text-orange-500 mr-2" />
                <span className="font-semibold">Satisfaction garantie</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: service.delay }}
                  whileHover={{ y: -5 }}
                  className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {service.price}
                      </span>
                    </div>

                    {/* Content */}
                    <h2 className="text-2xl font-bold mb-2 text-gray-900">{service.title}</h2>
                    <p className="text-gray-500 text-sm mb-2">{service.shortDesc}</p>
                    <p className="text-gray-600 mb-6">{service.desc}</p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      to="/contact"
                      className={`inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} font-semibold group-hover:translate-x-2 transition-transform`}
                    >
                      Demander un devis
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>

                  {/* Decorative element */}
                  <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-white px-4 py-2 rounded-full shadow-sm">
              Méthodologie
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 text-gray-900">
              Comment je travaille
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Ligne de connexion (sauf pour le dernier) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-300 to-orange-300" />
                  )}
                  
                  <div className="relative bg-white p-6 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
              FAQ
            </span>
            <h2 className="text-4xl font-bold mt-6 text-gray-900">
              Questions fréquentes
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-orange-500 rounded-3xl p-12 text-center text-white shadow-2xl"
          >
            <Coffee className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vous avez un projet en tête ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discutons-en autour d'un café ! Je suis disponible pour échanger sur vos idées.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center"
              >
                <Mail className="mr-2 w-5 h-5" />
                Me contacter
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/devis"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/50"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Prendre rendez-vous
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation vers autres pages */}
      <section className="py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Accueil
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              to="/realisations"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Réalisations
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}