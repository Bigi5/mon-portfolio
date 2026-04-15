import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  Code, 
  Database, 
  Smartphone, 
  Github, 
  Linkedin, 
  MessageCircle,
  ShoppingCart,
  BookOpen,
  Server,
  Layout,
  ExternalLink,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Menu,
  X,
  Clock,
  Users,
  Award,
  Rocket,
  Play,
  Figma,
  Palette,
  Briefcase,
  GraduationCap,
  Heart,
  Globe
} from "lucide-react"

// ==================== COMPOSANT NAVIGATION ====================
function Navigation({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = ["hero", "about", "services", "realisations", "contact"]
      const scrollPos = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    { name: "Accueil", ref: "hero" },
    { name: "A propos", ref: "about" },
    { name: "Services", ref: "services" },
    { name: "Realisations", ref: "realisations" },
    { name: "Contact", ref: "contact" },
  ]

  const handleClick = (ref) => {
    setIsOpen(false)
    scrollToSection(ref)
  }

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' 
          : 'bg-white border-b border-gray-100'
      }`}>
        <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-16">
            
            <button onClick={() => scrollToSection("hero")} className="relative z-50 flex items-center gap-2 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-black rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative w-8 h-8 rounded-full flex items-center justify-center bg-black">
                  <Code className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
              <span className="text-sm font-medium tracking-wide text-black">
                Carlos Boun
              </span>
            </button>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.ref}
                  onClick={() => handleClick(link.ref)}
                  className={`relative text-sm font-medium transition-all duration-300 py-1 ${
                    activeSection === link.ref
                      ? 'text-black'
                      : 'text-gray-500 hover:text-black'
                  }`}
                >
                  {link.name}
                  {activeSection === link.ref && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-gray-100"
              aria-label="Menu"
            >
              <Menu className={`w-4 h-4 transition-all duration-300 ${isOpen ? 'opacity-0 scale-50' : 'opacity-100 scale-100'} text-black`} />
              <X className={`absolute w-4 h-4 transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} text-black`} />
            </button>
          </div>
        </div>
      </div>

      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <div className={`absolute top-0 right-0 bottom-0 w-72 bg-white shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <Code className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
            <nav className="flex-1 p-5">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.ref}
                    onClick={() => handleClick(link.ref)}
                    className="block w-full text-left px-4 py-3 rounded-lg text-base transition-all duration-300 text-gray-600 hover:bg-gray-50 hover:text-black"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

// ==================== COMPOSANT FOOTER ====================
function Footer({ scrollToSection }) {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Bigi5", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/carlos-boun-66a314246", label: "LinkedIn" },
    { icon: MessageCircle, href: "https://wa.me/2290162695228", label: "WhatsApp" },
    { icon: Mail, href: "mailto:bouncarlos@gmail.com", label: "Email" }
  ]

  return (
    <footer className="bg-gray-900">
      <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <button onClick={() => scrollToSection("hero")} className="flex items-center justify-center cursor-pointer">
            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
              <Code className="w-3.5 h-3.5 text-gray-400" />
            </div>
          </button>

          <div className="flex gap-6 text-sm">
            <button onClick={() => scrollToSection("hero")} className="text-gray-400 hover:text-white transition-colors">Accueil</button>
            <button onClick={() => scrollToSection("about")} className="text-gray-400 hover:text-white transition-colors">A propos</button>
            <button onClick={() => scrollToSection("services")} className="text-gray-400 hover:text-white transition-colors">Services</button>
            <button onClick={() => scrollToSection("realisations")} className="text-gray-400 hover:text-white transition-colors">Realisations</button>
            <button onClick={() => scrollToSection("contact")} className="text-gray-400 hover:text-white transition-colors">Contact</button>
          </div>

          <div className="flex gap-3">
            {socialLinks.map((social, i) => {
              const Icon = social.icon
              return (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon size={14} />
                </a>
              )
            })}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-5 text-center">
          <p className="text-gray-500 text-xs">(c) 2025 Tous droits reserves</p>
        </div>
      </div>
    </footer>
  )
}

// ==================== PAGE PRINCIPALE ====================
function App() {
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const realisationsRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (section) => {
    const refs = {
      hero: heroRef,
      about: aboutRef,
      services: servicesRef,
      realisations: realisationsRef,
      contact: contactRef
    }
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" })
  }

  const stats = [
    { value: "10+", label: "Projets" },
    { value: "2 ans", label: "Experience" },
    { value: "100%", label: "Satisfaction" },
  ]

  const technologies = [
    { name: "Laravel", level: 80 },
    { name: "React / TypeScript", level: 60 },
    { name: "JavaScript", level: 85 },
    { name: "PHP", level: 75 },
    { name: "MySQL", level: 80 },
    { name: "HTML / CSS", level: 90 },
    { name: "Docker", level: 30 },
    { name: "Git", level: 75 },
  ]

  const servicesList = [
    { icon: Layout, title: "Sites web & E-commerce", desc: "Vitrines, boutiques en ligne, interfaces modernes" },
    { icon: Server, title: "Applications sur mesure", desc: "ERP, CRM, outils de gestion personnalises" },
    { icon: Smartphone, title: "API & Backend", desc: "API RESTful, bases de donnees, securite" },
    { icon: Palette, title: "Design UI/UX", desc: "Interfaces intuitives, prototypes, design system" },
  ]

  const travaux = [
    {
      title: "Oremi Ecommerce",
      category: "E-commerce",
      media: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
      description: "Plateforme e-commerce complete avec panier, authentification et paiements securises",
      tech: ["React", "TypeScript", "Laravel", "MySQL"],
      github: "https://github.com/Bigi5/oremi-ecommerce-frontend",
      demo: "https://oremi-ecommerce-frontend.vercel.app"
    },
    {
      title: "Oremi API",
      category: "Backend",
      media: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
      description: "API RESTful securisee pour application e-commerce avec JWT",
      tech: ["Laravel", "PHP", "JWT", "MySQL"],
      github: "https://github.com/Bigi5/oremi-ecommerce-api",
      demo: "#"
    },
    {
      title: "Gestion Bibliotheque",
      category: "Application",
      media: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800",
      description: "Application complete de gestion de bibliotheque",
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      github: "https://github.com/Bigi5/gestion-bibliotheque",
      demo: "#"
    }
  ]

  const processSteps = [
    { icon: MessageCircle, title: "Consultation", desc: "On analyse vos besoins", number: "01" },
    { icon: Layout, title: "Conception", desc: "Je cree des maquettes", number: "02" },
    { icon: Code, title: "Developpement", desc: "Code avec demos regulieres", number: "03" },
    { icon: Rocket, title: "Lancement", desc: "Deploiement en production", number: "04" }
  ]

  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const phoneNumber = "2290162695228"
    const text = `Nouveau message du portfolio\n\nNom: ${formData.name}\nEmail: ${formData.email}\nMessage:\n${formData.message}`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
    setSubmitted(true)
    setLoading(false)
    window.open(whatsappUrl, "_blank")
  }

  const contactMethods = [
    { icon: Mail, label: "Email", value: "bouncarlos@gmail.com", link: "mailto:bouncarlos@gmail.com" },
    { icon: Phone, label: "Telephone", value: "+229 01 62 69 52 28", link: "tel:+2290162695228" },
    { icon: Github, label: "GitHub", value: "github.com/Bigi5", link: "https://github.com/Bigi5" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/carlos-boun-66a314246", link: "https://www.linkedin.com/in/carlos-boun-66a314246" }
  ]

  return (
    <div className="bg-white">
      {/* Bouton WhatsApp flottant */}
      <a
        href="https://wa.me/2290162695228"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 hover:scale-110 transition-all duration-300"
        aria-label="WhatsApp"
      >
        <MessageCircle size={20} />
      </a>

      <Navigation scrollToSection={scrollToSection} />

      {/* SECTION HERO */}
      <section id="hero" ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        
        <div className="relative w-full max-w-[1200px] mx-auto px-6 lg:px-8 py-16 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full mb-5">
                <Sparkles className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-gray-300 text-xs font-medium">Developpeur Full-Stack & Designer</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
                Je donne vie à
                <span className="block text-gray-300 mt-1">vos idees digitales</span>
              </h1>
              <p className="text-base text-gray-400 mb-8 leading-relaxed max-w-lg">
                Base au Benin, je cree des applications web modernes, rapides et securisees,
                ainsi que des designs percutants pour votre marque.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <button onClick={() => scrollToSection("contact")} className="group px-6 py-2.5 bg-white text-gray-900 rounded-full text-sm font-semibold hover:bg-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
                  Demarrer un projet
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a href="https://github.com/Bigi5" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 border border-gray-600 text-gray-300 rounded-full text-sm font-semibold hover:border-white hover:text-white transition-all duration-300 inline-flex items-center gap-2">
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </div>
              <div className="flex gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-white/5 rounded-3xl blur-2xl" />
                <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600" alt="Developpeur web" className="relative rounded-2xl shadow-2xl object-cover w-full h-[400px]" />
                <div className="absolute -bottom-4 -right-4 bg-gray-800 rounded-xl p-2.5 border border-gray-700">
                  <Code className="w-6 h-6 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION A PROPOS */}
      <section id="about" ref={aboutRef} className="py-20 bg-white">
        <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full mb-4">
              <div className="w-1.5 h-1.5 bg-gray-700 rounded-full" />
              <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">A propos</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Qui suis-je ?</h2>
            <div className="w-12 h-0.5 bg-gray-300 mx-auto mt-3" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Colonne gauche */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                <div className="text-center mb-5">
                  <div className="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl text-white font-bold">CB</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Louis Carlos SABI BOUN</h3>
                  <p className="text-gray-500 text-sm">Developpeur Fullstack</p>
                </div>

                <div className="space-y-2 mb-5">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <a href="mailto:bouncarlos@gmail.com" className="text-gray-600 hover:text-black transition-colors">bouncarlos@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <a href="tel:+2290162695228" className="text-gray-600 hover:text-black transition-colors">01 62 69 52 28</a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">Cotonou, Benin</span>
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">Langues</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white rounded-md text-xs text-gray-600 border border-gray-200">Francais</span>
                    <span className="px-2 py-1 bg-white rounded-md text-xs text-gray-600 border border-gray-200">Anglais</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">Centres d'interet</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white rounded-md text-xs text-gray-600 border border-gray-200">Football</span>
                    <span className="px-2 py-1 bg-white rounded-md text-xs text-gray-600 border border-gray-200">Musique</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne droite */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-700 text-sm leading-relaxed">
                  Developpeur Fullstack passionne par les technologies web modernes, specialise en 
                  <span className="font-medium text-gray-900"> Laravel</span> et 
                  <span className="font-medium text-gray-900"> React/TypeScript</span>. 
                  Curieux et motive, je cherche a contribuer a des projets ambitieux et a renforcer 
                  mes competences sur le long terme.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-gray-900 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-3 h-3 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900">Diplomes et Formations</h3>
                </div>
                <div className="border-l-2 border-gray-300 pl-4 ml-2">
                  <div>
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <h4 className="font-semibold text-gray-800 text-sm">Licence Professionnelle en Reseaux Informatiques et Telecommunications</h4>
                      <span className="text-xs text-gray-500">oct 2021 - juin 2024</span>
                    </div>
                    <p className="text-gray-500 text-xs mt-1">Haute Ecole de Commerce et de Management - Parakou, Benin</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-gray-900 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-3 h-3 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900">Experiences professionnelles</h3>
                </div>
                <div className="border-l-2 border-gray-300 pl-4 ml-2">
                  <div>
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <h4 className="font-semibold text-gray-800 text-sm">Developpeur Fullstack</h4>
                      <span className="text-xs text-gray-500">oct 2024 - avr 2025</span>
                    </div>
                    <p className="text-gray-600 text-xs font-medium">2SND Technologies - Cotonou, Benin</p>
                    <ul className="mt-2 space-y-1">
                      <li className="text-gray-600 text-xs flex items-start gap-1.5"><div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5" />Developpement et maintenance d'applications web securisees avec Laravel</li>
                      <li className="text-gray-600 text-xs flex items-start gap-1.5"><div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5" />Integration de bonnes pratiques DevSecOps</li>
                      <li className="text-gray-600 text-xs flex items-start gap-1.5"><div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5" />Securisation et audit des applications web</li>
                      <li className="text-gray-600 text-xs flex items-start gap-1.5"><div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5" />Collaboration front-end avec React/TypeScript</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-gray-900 rounded-lg flex items-center justify-center">
                    <Rocket className="w-3 h-3 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900">Projets cles</h3>
                </div>
                <div className="space-y-3">
                  <div><h4 className="font-semibold text-gray-800 text-sm">Blog personnel (Laravel + DevSecOps, 2025)</h4><p className="text-gray-500 text-xs mt-0.5">Backend securise avec Laravel, gestion des articles et utilisateurs.</p></div>
                  <div><h4 className="font-semibold text-gray-800 text-sm">Application de gestion de bibliotheque (Laravel, 2024)</h4><p className="text-gray-500 text-xs mt-0.5">API et tableau de bord pour gerer les prets de livres.</p></div>
                  <div><h4 className="font-semibold text-gray-800 text-sm">API Laravel (2024)</h4><p className="text-gray-500 text-xs mt-0.5">Developpement d'une API REST pour la gestion de donnees.</p></div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Github className="w-4 h-4 text-gray-700" />
                  <h3 className="font-bold text-gray-900">GitHub / Portfolio</h3>
                </div>
                <div className="space-y-1">
                  <a href="https://github.com/Bigi5/oremi-ecommerce-api" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs block truncate">github.com/Bigi5/oremi-ecommerce-api</a>
                  <a href="https://github.com/Bigi5/gestion-bibliotheque" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs block truncate">github.com/Bigi5/gestion-bibliotheque</a>
                  <a href="https://github.com/Bigi5/oremi-ecommerce-frontend" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs block truncate">github.com/Bigi5/oremi-ecommerce-frontend</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION SERVICES */}
      <section id="services" ref={servicesRef} className="py-20 bg-gray-50">
        <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full mb-4">
              <div className="w-1.5 h-1.5 bg-gray-700 rounded-full" />
              <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ce que je peux faire pour vous</h2>
            <div className="w-12 h-0.5 bg-gray-300 mx-auto mt-3" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {servicesList.map((service, i) => {
              const Icon = service.icon
              return (
                <div key={i} className="bg-white rounded-xl p-5 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">{service.title}</h3>
                  <p className="text-gray-600 text-xs">{service.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION TECHNOLOGIES */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full mb-4">
              <div className="w-1.5 h-1.5 bg-gray-700 rounded-full" />
              <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">Competences</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Technologies maitrisees</h2>
            <div className="w-12 h-0.5 bg-gray-300 mx-auto mt-3" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm">{tech.name}</h3>
                  <span className="text-xs text-gray-400">{tech.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="h-1.5 rounded-full bg-gray-700" style={{ width: `${tech.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION REALISATIONS */}
      <section id="realisations" ref={realisationsRef} className="py-20 bg-gray-50">
        <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full mb-4">
              <div className="w-1.5 h-1.5 bg-gray-700 rounded-full" />
              <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">Portfolio</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Projets recents</h2>
            <div className="w-12 h-0.5 bg-gray-300 mx-auto mt-3" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travaux.map((projet, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img src={projet.media} alt={projet.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-md">
                    <span className="text-white text-xs font-medium">{projet.category}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-gray-900 mb-1">{projet.title}</h3>
                  <p className="text-gray-500 text-xs mb-3">{projet.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {projet.tech.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="px-1.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-md">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2 border-t border-gray-100">
                    <a href={projet.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1 text-xs">
                      <Github className="w-3 h-3" />
                      Code
                    </a>
                    {projet.demo !== "#" && (
                      <a href={projet.demo} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1 text-xs">
                        <ExternalLink className="w-3 h-3" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="https://github.com/Bigi5" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              <Github className="w-4 h-4" />
              Voir tous mes projets
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION METHODOLOGIE */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full mb-4">
              <div className="w-1.5 h-1.5 bg-gray-700 rounded-full" />
              <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">Methodologie</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Comment je travaille</h2>
            <div className="w-12 h-0.5 bg-gray-300 mx-auto mt-3" />
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {processSteps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} className="bg-gray-50 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl font-black text-gray-300">{step.number}</span>
                    <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold mb-1 text-gray-900">{step.title}</h3>
                  <p className="text-gray-500 text-xs">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION CONTACT */}
      <section id="contact" ref={contactRef} className="py-20 bg-gray-50">
        <div className="w-full max-w-[1000px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full mb-4">
              <div className="w-1.5 h-1.5 bg-gray-700 rounded-full" />
              <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">Contact</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Travaillons ensemble</h2>
            <div className="w-12 h-0.5 bg-gray-300 mx-auto mt-3" />
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-base text-white font-bold">CB</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Carlos Boun</h2>
                  <p className="text-gray-500 text-xs">Developpeur Full-Stack & Designer</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">Base au Benin, je cree des applications web modernes, performantes et securisees.</p>
              <div className="space-y-2.5 mb-6">
                {contactMethods.map((method, i) => {
                  const Icon = method.icon
                  return (
                    <a key={i} href={method.link} target={method.label === "Email" ? "_self" : "_blank"} rel="noopener noreferrer" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-50 transition-colors group">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4 text-gray-700" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-400">{method.label}</p>
                        <p className="text-gray-800 text-xs font-medium">{method.value}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
              <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                <MapPin className="w-3.5 h-3.5 text-gray-500" />
                <span className="text-gray-600 text-xs">Benin (Cotonou) • 100% remote</span>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Message pret</h3>
                  <p className="text-gray-600 text-sm mb-3">Vous allez etre redirige vers WhatsApp</p>
                  <button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", message: "" }) }} className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition-colors">
                    Nouveau message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
                  <div className="mb-5">
                    <h2 className="text-xl font-bold text-gray-900">Envoyez-moi un message</h2>
                    <p className="text-gray-500 text-xs mt-1">Reponse sous 24h</p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Nom complet</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all text-sm" placeholder="Jean Dupont" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all text-sm" placeholder="votre@email.com" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Message</label>
                      <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none text-sm" placeholder="Decrivez votre projet..." />
                    </div>
                    <button type="submit" disabled={loading} className="w-full py-2.5 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                      {loading ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <><Send className="w-3.5 h-3.5" /> Envoyer</>}
                    </button>
                  </div>
                </form>
              )}
              <div className="mt-5 text-center">
                <p className="text-xs text-gray-400 mb-2">Ou contact direct</p>
                <div className="flex justify-center gap-2">
                  <a href="https://wa.me/2290162695228" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-xs">
                    <MessageCircle className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                  <a href="tel:+2290162695228" className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors text-xs">
                    <Phone className="w-3.5 h-3.5" />
                    Appel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-16 bg-gray-900">
        <div className="w-full max-w-[800px] mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-300 text-xs font-medium">Parlons de votre projet</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Prenons le temps d'echanger</h2>
          <p className="text-base text-gray-400 mb-6">Une idee, un besoin ? Je suis la pour vous aider a la concretiser.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button onClick={() => scrollToSection("contact")} className="px-6 py-2.5 bg-white text-gray-900 rounded-full text-sm font-semibold hover:bg-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
              Me contacter
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a href="https://wa.me/2290162695228" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 border border-gray-600 text-gray-300 rounded-full text-sm font-semibold hover:border-white hover:text-white transition-all duration-300 inline-flex items-center gap-2">
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}

export default App