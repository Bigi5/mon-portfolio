import { Link } from "react-router-dom"
import { 
  ArrowRight, CheckCircle, Users, Clock, Award, 
  Shield, Rocket, TrendingUp, Smartphone, Server,
  Code, Database, Cloud, Lock, Zap, Cpu
} from "lucide-react"

export default function Accueil() {
  return (
    <div className="pt-20">
      {/* Hero Section avec vidéo/background premium */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background avec overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            {/* Badge Suisse */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <img 
                src="https://flagcdn.com/w40/ch.png" 
                alt="Suisse"
                className="w-6 h-4 mr-2"
              />
              <span className="text-white/90 text-sm">Basé en Suisse • Service 7/7j</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Solutions Digitales
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-orange-300">
                pour PME Suisses
              </span>
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Développement d'applications professionnelles, sécurisées et performantes. 
              Du site vitrine à la plateforme sur mesure.
            </p>

            {/* Statistiques */}
            <div className="flex flex-wrap gap-8 mb-12">
              {[
                { icon: Users, value: "25+", label: "Clients satisfaits" },
                { icon: Clock, value: "2 ans", label: "d'expertise" },
                { icon: Award, value: "100%", label: "Suisse" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center">
                  <stat.icon className="w-6 h-6 text-orange-300 mr-3" />
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/devis"
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-orange-500 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center text-lg"
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/realisations"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>

        {/* Indicateur de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Section Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Stack technique</span>
            <h2 className="text-4xl font-bold mt-3">Technologies modernes</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Code, name: "Laravel", desc: "PHP 8.x" },
              { icon: Code, name: "React", desc: "TypeScript" },
              { icon: Server, name: "Node.js", desc: "API REST" },
              { icon: Database, name: "MySQL/PostgreSQL", desc: "Base de données" },
              { icon: Cloud, name: "Docker", desc: "Conteneurisation" },
              { icon: Lock, name: "Sécurité", desc: "OWASP, SSL" },
              { icon: Zap, name: "CI/CD", desc: "Automatisation" },
              { icon: Cpu, name: "DevOps", desc: "Monitoring" },
            ].map((tech, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <tech.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-500">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Pourquoi nous choisir */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Avantages</span>
              <h2 className="text-4xl font-bold mt-3 mb-6">Pourquoi les PME nous font confiance</h2>
              
              <div className="space-y-4">
                {[
                  "Solutions 100% adaptées à vos besoins, pas de templates",
                  "Respect des normes suisses de sécurité (GDPR, SSL)",
                  "Maintenance et support inclus pendant 3 mois",
                  "Formation de vos équipes incluse",
                  "Hébergement en Suisse ou en Europe au choix"
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-2xl">
                <p className="text-lg font-semibold text-blue-900 mb-2">🚀 2 ans d'expérience, mais déjà</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">25+</div>
                    <div className="text-sm text-gray-600">Projets</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">15+</div>
                    <div className="text-sm text-gray-600">PME clientes</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">100%</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                alt="Team"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center">
                  <Shield className="w-10 h-10 text-green-500 mr-3" />
                  <div>
                    <p className="font-bold">Garantie satisfaction</p>
                    <p className="text-sm text-gray-500">ou remboursement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à digitaliser votre entreprise ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Discutons de votre projet autour d'un café (virtuel ou en présentiel)
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </div>
  )
}