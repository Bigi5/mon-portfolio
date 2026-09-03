import { useState, useEffect, useRef } from "react"
import {
  Code,
  MessageCircle,
  Mail,
  Menu,
  X,
  Globe,
  ShoppingBag,
  Database,
  BookOpen,
  ShieldCheck,
} from "lucide-react"

type Section = "hero" | "realisations" | "contact"

type BrandIconProps = {
  size?: number
  className?: string
}

function Github({ size = 24, className }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3 0 6.8-1.7 6.8-7.5a5.9 5.9 0 0 0-1.6-4.1A5.4 5.4 0 0 0 19 1s-1.7-.5-4.9 1.6a13.4 13.4 0 0 0-8.2 0C2.7.5 1 1 1 1a5.4 5.4 0 0 0-.2 1.9A5.9 5.9 0 0 0-.8 7C-.8 12.8 2.7 14.5 6 14.5a4.8 4.8 0 0 0-1 3.5v4" />
      <path d="M9 18c-4.5 2-5-2-7-2" />
    </svg>
  )
}

function Linkedin({ size = 24, className }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

// ==================== NAVIGATION ====================

function Navigation({
  scrollToSection,
}: {
  scrollToSection: (section: Section) => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<Section>("hero")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const scrollPos = window.scrollY + 120

      const sections: Section[] = [
        "hero",
        "realisations",
        "contact",
      ]

      for (const section of sections) {
        const element = document.getElementById(section)

        if (!element) continue

        const top = element.offsetTop
        const bottom = top + element.offsetHeight

        if (scrollPos >= top && scrollPos < bottom) {
          setActiveSection(section)
          break
        }
      }

      if (window.scrollY < 100) {
        setActiveSection("hero")
      }
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const navLinks: { name: string; ref: Section }[] = [
    {
      name: "Accueil",
      ref: "hero",
    },
    {
      name: "Réalisations",
      ref: "realisations",
    },
    {
      name: "Contact",
      ref: "contact",
    },
  ]

  const handleClick = (ref: Section) => {
    setIsOpen(false)
    scrollToSection(ref)
  }

  return (
    <>
      {/* ==================== HEADER ==================== */}

      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
            : "bg-gray-900"
        }`}
      >
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-[72px]">

            {/* LOGO */}

            <button
              type="button"
              onClick={() => scrollToSection("hero")}
              className="relative z-50 flex items-center gap-2 group cursor-pointer shrink-0"
              aria-label="Retour à l'accueil"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white">
                <Code className="w-3.5 h-3.5 text-gray-900" />
              </div>

              <span className="text-sm font-medium tracking-wide text-white">
                Carlos Boun
              </span>
            </button>

            {/* NAVIGATION DESKTOP */}

            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.ref}
                  onClick={() => handleClick(link.ref)}
                  className={`relative text-sm font-medium transition-all duration-300 py-2 ${
                    activeSection === link.ref
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}

                  {activeSection === link.ref && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-white rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* BOUTON MOBILE */}

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              aria-label={
                isOpen ? "Fermer le menu" : "Ouvrir le menu"
              }
              aria-expanded={isOpen}
            >
              <Menu
                className={`w-5 h-5 transition-all duration-300 ${
                  isOpen
                    ? "opacity-0 scale-50"
                    : "opacity-100 scale-100"
                } text-white`}
              />

              <X
                className={`absolute w-5 h-5 transition-all duration-300 ${
                  isOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-50"
                } text-white`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* ==================== MENU MOBILE ==================== */}

      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Overlay */}

        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu */}

        <div
          className={`absolute top-0 right-0 bottom-0 w-[min(85vw,320px)] bg-gray-900 shadow-2xl transition-transform duration-300 ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          <nav className="h-full flex flex-col pt-24 px-5">

            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 px-4 mb-4">
              Navigation
            </p>

            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.ref}
                  onClick={() => handleClick(link.ref)}
                  className={`w-full text-left px-4 py-4 rounded-xl text-base transition-all duration-200 ${
                    activeSection === link.ref
                      ? "bg-white text-gray-900 font-medium"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

// ==================== WAVE ====================

function Wave({
  flip = false,
  fill,
}: {
  flip?: boolean
  fill: string
}) {
  return (
    <svg
      viewBox="0 0 1440 110"
      className="w-full block h-[55px] sm:h-[75px] lg:h-[110px]"
      style={{
        transform: flip ? "rotate(180deg)" : "none",
      }}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill={fill}
        d="M0,60 C240,110 480,0 720,28 C960,56 1200,110 1440,44 L1440,110 L0,110 Z"
      />
    </svg>
  )
}

// ==================== HERO ILLUSTRATION ====================

function HeroIllustration() {
  const widths = [70, 45, 60, 38, 55, 42, 65, 48]

  return (
    <div
      className="relative scale-90 xl:scale-100"
      style={{
        transform:
          "perspective(900px) rotateX(6deg) rotateY(-10deg)",
      }}
    >
      <div className="absolute -inset-8 rounded-[40px] blur-3xl opacity-20 bg-white" />

      <div
        className="relative rounded-2xl p-5 shadow-2xl bg-gray-800 border border-white/10"
        style={{ width: 340, maxWidth: "calc(100vw - 48px)" }}
      >
        <div className="flex items-center gap-1.5 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-600" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-600" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-600" />
        </div>

        <div className="space-y-2.5">
          {widths.map((w, i) => (
            <div
              key={i}
              className="h-1.5 rounded bg-gray-500"
              style={{
                width: `${w}%`,
                opacity: 0.4 + (i % 3) * 0.2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute -bottom-7 -left-9 rounded-2xl p-3 shadow-xl bg-gray-800 border border-white/10">
        <Code size={24} className="text-gray-300" />
      </div>

      <div className="absolute -bottom-6 -right-7 rounded-2xl p-3 shadow-xl bg-gray-800 border border-white/10">
        <Globe size={20} className="text-gray-300" />
      </div>
    </div>
  )
}

// ==================== FOOTER ====================

function Footer({
  scrollToSection,
}: {
  scrollToSection: (section: Section) => void
}) {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Bigi5",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/carlos-boun-66a314246",
      label: "LinkedIn",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/2290162695228",
      label: "WhatsApp",
    },
    {
      icon: Mail,
      href: "mailto:bouncarlos@gmail.com",
      label: "Email",
    },
  ]

  return (
    <footer className="bg-gray-900 border-t border-white/10">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">

          {/* LOGO FOOTER */}

          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="flex items-center justify-center cursor-pointer"
            aria-label="Retour à l'accueil"
          >
            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
              <Code className="w-3.5 h-3.5 text-gray-400" />
            </div>
          </button>

          {/* SOCIALS */}

          <div className="flex gap-3">
            {socialLinks.map((social, i) => {
              const Icon = social.icon

              return (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-5 text-center">
          <p className="text-gray-500 text-xs">
            © 2025 Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  )
}

// ==================== APP ====================

function App() {
  const heroRef = useRef<HTMLElement | null>(null)
  const realisationsRef = useRef<HTMLElement | null>(null)
  const contactRef = useRef<HTMLElement | null>(null)

  // ==================== NAVIGATION ====================

  const scrollToSection = (section: Section) => {
    const refs = {
      hero: heroRef,
      realisations: realisationsRef,
      contact: contactRef,
    }

    const element = refs[section]?.current

    if (!element) return

    const headerOffset = 72

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY

    const offsetPosition =
      section === "hero"
        ? 0
        : elementPosition - headerOffset

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: "smooth",
    })
  }

  // ==================== PROJECTS ====================

  const travaux = [
    {
      title: "REID ONG",
      icon: ShieldCheck,
      image:
        "https://images.unsplash.com/photo-1704386651981-0729a60da579?w=800&q=80&auto=format&fit=crop",
      desc:
        "Site institutionnel avec audit complet avant mise en ligne : sécurité, SEO, performance et accessibilité. Déploiement Netlify en HTTPS, indexation Google Search Console.",
      tech: ["React", "TypeScript", "Netlify"],
      github: null,
      demo: "https://reidongbenin.org",
    },

    {
      title: "Oremi Ecommerce",
      icon: ShoppingBag,
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80&auto=format&fit=crop",
      desc:
        "Plateforme e-commerce complète avec panier, authentification et paiements sécurisés.",
      tech: ["React", "TypeScript", "Laravel"],
      github:
        "https://github.com/Bigi5/oremi-ecommerce-frontend",
      demo:
        "https://rad-shortbread-1660f4.netlify.app/",
    },

    {
      title: "Oremi API",
      icon: Database,
      image:
        "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=800&q=80&auto=format&fit=crop",
      desc:
        "API RESTful sécurisée pour l'application e-commerce, authentification JWT.",
      tech: ["Laravel", "PHP", "JWT"],
      github:
        "https://github.com/Bigi5/oremi-ecommerce-api",
      demo: null,
    },

    {
      title: "Gestion Bibliothèque",
      icon: BookOpen,
      image:
        "https://images.unsplash.com/photo-1508060793788-7d5f1c40c4ba?w=800&q=80&auto=format&fit=crop",
      desc:
        "Application complète de gestion de bibliothèque : prêts, catalogue et utilisateurs.",
      tech: ["Laravel", "MySQL", "Bootstrap"],
      github:
        "https://github.com/Bigi5/gestion-bibliotheque",
      demo: null,
    },
  ]

  return (
    <div className="bg-white">

      {/* ==================== WHATSAPP ==================== */}

      <a
        href="https://wa.me/2290162695228"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 hover:scale-110 transition-all duration-300"
        aria-label="WhatsApp"
      >
        <MessageCircle size={21} />
      </a>

      {/* ==================== NAVIGATION ==================== */}

      <Navigation scrollToSection={scrollToSection} />

      {/* ==================== HERO ==================== */}

      <section
        id="hero"
        ref={heroRef}
        className="bg-gray-900 pt-24 sm:pt-28 lg:pt-32 scroll-mt-20"
      >
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* ICONES */}

          <div className="flex items-center gap-3 mb-6 sm:mb-8 text-gray-500">
            <Globe size={16} />
            <Github size={16} />
            <Linkedin size={16} />
          </div>

          {/* HERO CONTENT */}

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center pb-16 sm:pb-20">

            {/* TEXTE */}

            <div>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-[460px]">
                Je suis{" "}
                <span className="text-white font-medium">
                  Carlos Boun
                </span>
                , développeur full-stack basé en Afrique de l'Ouest.
                Je transforme des idées en applications web et mobiles
                concrètes, avec un code propre, des interfaces soignées
                et une attention particulière à la performance et à la
                sécurité. Du premier écran au déploiement, je construis
                des solutions pensées pour être réellement utilisées.
              </p>
            </div>

            {/* ILLUSTRATION */}

            <div className="hidden lg:flex justify-center">
              <HeroIllustration />
            </div>
          </div>
        </div>

        <Wave fill="#FFFFFF" />
      </section>

      {/* ==================== REALISATIONS ==================== */}

      <section
        id="realisations"
        ref={realisationsRef}
        className="py-12 sm:py-16 lg:py-20 scroll-mt-20"
      >
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* TITRE */}

          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Mes réalisations
            </h2>

            <p className="text-sm text-gray-500">
              Une sélection de projets récents.
            </p>
          </div>

          {/* GRILLE */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

            {travaux.map((p, i) => {
              const Icon = p.icon

              return (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
                >

                  {/* IMAGE */}

                  <div className="relative h-52 sm:h-48 lg:h-44 overflow-hidden bg-gray-100">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <Icon
                        size={15}
                        className="text-gray-900"
                      />
                    </div>
                  </div>

                  {/* CONTENU */}

                  <div className="p-5">

                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {p.title}
                    </h3>

                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      {p.desc}
                    </p>

                    {/* TECHNOLOGIES */}

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* LIENS */}

                    <div className="flex items-center gap-3 pt-3 border-t border-gray-100">

                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                          aria-label={`Voir le site ${p.title}`}
                        >
                          <Globe size={16} />
                        </a>
                      )}

                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                          aria-label={`Voir le code de ${p.title}`}
                        >
                          <Github size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}

      <section
        id="contact"
        ref={contactRef}
        className="bg-gray-900 scroll-mt-20"
      >
        <Wave flip fill="#FFFFFF" />

        <div className="w-full max-w-[600px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 text-center">

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Travaillons ensemble
          </h2>

          <p className="text-gray-400 text-sm mb-8">
            Disponible pour du travail à distance, où que vous soyez.
          </p>

          {/* RESEAUX */}

          <div className="flex items-center justify-center gap-3 sm:gap-4">

            <a
              href="https://github.com/Bigi5"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-105"
              aria-label="GitHub"
            >
              <Github size={21} />
            </a>

            <a
              href="mailto:bouncarlos@gmail.com"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-105"
              aria-label="Email"
            >
              <Mail size={21} />
            </a>

            <a
              href="https://wa.me/2290162695228"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-600 flex items-center justify-center text-white hover:bg-green-700 transition-all duration-300 hover:scale-105"
              aria-label="WhatsApp"
            >
              <MessageCircle size={21} />
            </a>

            <a
              href="https://www.linkedin.com/in/carlos-boun-66a314246"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-105"
              aria-label="LinkedIn"
            >
              <Linkedin size={21} />
            </a>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}

      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}

export default App