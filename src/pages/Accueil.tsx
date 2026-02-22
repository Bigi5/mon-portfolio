import { Link } from "react-router-dom"
import { motion, useScroll, useTransform } from "framer-motion"
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Clock, 
  Award, 
  Shield, 
  Server, 
  Code, 
  Database, 
  Cloud, 
  Lock, 
  Zap, 
  Cpu, 
  Sparkles, 
  Rocket, 
  Star, 
  ChevronRight,
  Smartphone, 
  Palette, 
  Briefcase, 
  Github, 
  Instagram,
  Linkedin, 
  MessageCircle, 
  Coffee,
  Globe
} from "lucide-react"

export default function Accueil() {
  const { scrollYProgress } = useScroll()
  const scaleHero = useTransform(scrollYProgress, [0, 0.5], [1, 0.98])
  const opacityHero = useTransform(scrollYProgress, [0, 0.3], [1, 0.9])

  const stats = [
    { icon: Users, value: "25+", label: "Projets livrés", color: "from-blue-500 to-cyan-400" },
    { icon: Clock, value: "2 ans", label: "d'expérience", color: "from-purple-500 to-pink-400" },
    { icon: Award, value: "100%", label: "Satisfaction", color: "from-orange-500 to-red-400" },
  ]

  const technologies = [
    { icon: Code, name: "Laravel", desc: "PHP 8.x, Eloquent", color: "from-red-500 to-orange-400" },
    { icon: Code, name: "React", desc: "TypeScript, Next.js", color: "from-cyan-500 to-blue-400" },
    { icon: Server, name: "Node.js", desc: "API REST, Express", color: "from-green-500 to-emerald-400" },
    { icon: Database, name: "MySQL/PostgreSQL", desc: "Base de données", color: "from-blue-500 to-indigo-400" },
    { icon: Cloud, name: "Docker", desc: "Conteneurisation", color: "from-sky-500 to-blue-400" },
    { icon: Lock, name: "Sécurité", desc: "OWASP, SSL", color: "from-purple-500 to-violet-400" },
    { icon: Zap, name: "CI/CD", desc: "GitHub Actions", color: "from-yellow-500 to-orange-400" },
    { icon: Cpu, name: "DevOps", desc: "Monitoring", color: "from-gray-500 to-slate-400" },
  ]

  const avantages = [
    "Solutions 100% sur mesure, adaptées à vos besoins spécifiques",
    "Design moderne et responsive, optimisé pour tous les appareils",
    "Performance optimale et temps de chargement réduits",
    "Sécurité renforcée et protection des données",
    "Support réactif et maintenance incluse",
    "Formation de vos équipes pour une autonomie totale"
  ]

  const services = [
    {
      icon: Globe,
      title: "Sites vitrines & E-commerce",
      desc: "Présence en ligne professionnelle avec design sur mesure",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      icon: Smartphone,
      title: "Applications Web & Mobile",
      desc: "Applications progressives (PWA) et interfaces réactives",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      icon: Database,
      title: "Solutions d'entreprise",
      desc: "ERP, CRM, intranet et outils de gestion sur mesure",
      gradient: "from-orange-400 to-red-400"
    },
    {
      icon: Palette,
      title: "Design UX/UI",
      desc: "Interfaces intuitives et expérience utilisateur optimale",
      gradient: "from-green-400 to-emerald-400"
    }
  ]

  const travaux = [
    {
      title: "Dashboard Analytique",
      desc: "Plateforme de visualisation de données en temps réel",
      tech: ["React", "D3.js", "Node.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600"
    },
    {
      title: "Marketplace B2B",
      desc: "Place de marché pour professionnels avec paiements sécurisés",
      tech: ["Laravel", "Vue.js", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600"
    },
    {
      title: "Application de gestion",
      desc: "ERP complet pour PME avec modules personnalisables",
      tech: ["Next.js", "PostgreSQL", "Docker"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600"
    }
  ]

  const socials = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: MessageCircle, href: "#", label: "Contact" }
  ]

  return (
    <div className="pt-20 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Hero Section avec image de fond plus visible */}
      <motion.section 
        style={{ scale: scaleHero, opacity: opacityHero }}
        className="relative min-h-[90vh] flex items-center overflow-hidden"
      >
        {/* Image de fond avec overlay plus léger pour meilleure visibilité */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920"
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Overlay dégradé plus léger pour que l'image reste visible */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 via-purple-600/60 to-orange-500/70 z-10" />
          
          {/* Effets de lumière subtils */}
          <div className="absolute inset-0 opacity-30 z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Badge - version plus claire sur fond sombre */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-white/30"
            >
              <Sparkles className="w-4 h-4 text-orange-300 mr-2" />
              <span className="text-white text-sm font-medium">Expert en développement d'applications</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
            >
              Des solutions digitales
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                qui font la différence
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
            >
              Développement d'applications professionnelles, sécurisées et performantes. 
              Du site vitrine à la plateforme sur mesure, je donne vie à vos idées.
            </motion.p>

            {/* Statistiques - versions avec fond semi-transparent */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              {stats.map((stat, i) => {
                const Icon = stat.icon
                return (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`flex items-center bg-gradient-to-r ${stat.color} px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <Icon className="w-5 h-5 mr-2" />
                    <div>
                      <span className="text-xl font-bold">{stat.value}</span>
                      <span className="text-sm ml-1 opacity-90">{stat.label}</span>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/devis"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center text-lg overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">Démarrer votre projet</span>
                <ArrowRight className="relative ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/realisations"
                className="group px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/30 inline-flex items-center"
              >
                <Github className="mr-2 w-5 h-5" />
                Voir mes projets
              </Link>
            </motion.div>

            {/* Social links - version plus claire */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex gap-3 mt-12"
            >
              {socials.map((social, i) => {
                const Icon = social.icon
                return (
                  <a
                    key={i}
                    href={social.href}
                    className="p-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-full hover:bg-white/20 hover:border-white/50 hover:-translate-y-1 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                )
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-white to-orange-300 rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </motion.section>

      {/* Section Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">Services</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 text-gray-900">Ce que je peux faire pour vous</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              Des solutions complètes, de l'idée à la mise en production
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.desc}</p>
                    <Link to="/services" className="inline-flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                      En savoir plus <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section Technologies */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-white px-4 py-2 rounded-full shadow-sm"
            >
              Stack technique
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mt-6 text-gray-900"
            >
              Technologies modernes
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, i) => {
              const Icon = tech.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r ${tech.color}`} style={{ color: tech.color.split(' ')[1] }} />
                  </div>
                  <h3 className="font-bold mb-1 text-gray-900">{tech.name}</h3>
                  <p className="text-sm text-gray-500">{tech.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section Pourquoi me choisir */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">Avantages</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 text-gray-900">
                Pourquoi me faire confiance ?
              </h2>
              
              <div className="space-y-4 mb-8">
                {avantages.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start bg-gray-50 p-4 rounded-2xl hover:bg-blue-50 transition-colors duration-300"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gradient-to-br from-blue-500 to-orange-500 rounded-3xl text-white shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <Rocket className="w-8 h-8 mr-3" />
                  <p className="text-lg font-semibold">2 ans d'expertise au service de vos projets</p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                    <div className="text-3xl font-bold">25+</div>
                    <div className="text-sm opacity-90">Projets</div>
                  </div>
                  <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-sm opacity-90">Clients</div>
                  </div>
                  <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm opacity-90">Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                  alt="Team"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                  <div className="flex items-center">
                    <Star className="w-10 h-10 text-yellow-500 mr-3 fill-current" />
                    <div>
                      <p className="font-bold text-gray-900">5/5 sur</p>
                      <p className="text-sm text-gray-500">Malt & Free-work</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-200 rounded-full blur-3xl opacity-50" />
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-orange-200 rounded-full blur-3xl opacity-50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Projets récents */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-white px-4 py-2 rounded-full shadow-sm">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 text-gray-900">Projets récents</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {travaux.map((projet, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={projet.image}
                      alt={projet.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{projet.title}</h3>
                    <p className="text-gray-600 mb-4">{projet.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {projet.tech.map((t, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gradient-to-r from-blue-50 to-orange-50 text-blue-600 text-xs rounded-full font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <Link
              to="/realisations"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              Voir tous les projets
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-500">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Coffee className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à concrétiser votre projet ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discutons ensemble de vos besoins autour d'un café (virtuel ou en présentiel)
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center"
              >
                <Sparkles className="mr-2 w-5 h-5" />
                Démarrer la discussion
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/devis"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/50"
              >
                Demander un devis
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}