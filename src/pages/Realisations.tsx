import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"

export default function Realisations() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      title: "Groupe Pizzera - BTP",
      category: "btp",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800",
      description: "Plateforme de gestion de chantiers avec suivi en temps réel pour entreprise de construction",
      technologies: ["Laravel", "React", "PostgreSQL", "Docker"],
      year: "2025",
      client: "Groupe Pizzera SA",
      link: "#"
    },
    {
      title: "Clinique de Sion",
      category: "sante",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
      description: "Portail patient et prise de rendez-vous en ligne pour clinique privée",
      technologies: ["React", "Node.js", "MongoDB", "TWINT"],
      year: "2025",
      client: "Clinique de Sion",
      link: "#"
    },
    {
      title: "Boulangerie du Lac",
      category: "commerce",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
      description: "Site e-commerce avec commandes en ligne et livraison à domicile",
      technologies: ["Laravel", "Vue.js", "MySQL", "Stripe"],
      year: "2024",
      client: "Boulangerie du Lac",
      link: "#"
    },
    {
      title: "Hôtel Bella Vista",
      category: "hotellerie",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      description: "Système de réservation avec gestion des chambres et tarifs dynamiques",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
      year: "2024",
      client: "Hôtel Bella Vista",
      link: "#"
    },
    {
      title: "Garage Moderne",
      category: "auto",
      image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800",
      description: "Application de gestion des rendez-vous et facturation pour garage",
      technologies: ["Laravel", "Livewire", "MySQL", "Tailwind"],
      year: "2024",
      client: "Garage Moderne SA",
      link: "#"
    },
    {
      title: "Ferme des Alpes",
      category: "agriculture",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800",
      description: "Boutique en ligne pour produits fermiers avec livraison locale",
      technologies: ["React", "Django", "PostgreSQL", "TWINT"],
      year: "2023",
      client: "Ferme des Alpes",
      link: "#"
    }
  ]

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-black mb-6">Nos Réalisations</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Découvrez comment nous avons aidé des entreprises suisses à se développer 
            grâce à des solutions digitales sur mesure.
          </p>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { value: "all", label: "Tous" },
              { value: "btp", label: "BTP" },
              { value: "commerce", label: "Commerce" },
              { value: "sante", label: "Santé" },
              { value: "hotellerie", label: "Hôtellerie" },
              { value: "auto", label: "Automobile" },
              { value: "agriculture", label: "Agriculture" },
            ].map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === cat.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille des projets */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex gap-2">
                      <a href={project.link} className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                        <ExternalLink size={18} />
                      </a>
                      <a href="#" className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="text-sm text-blue-600 font-semibold">{project.client}</span>
                      <h3 className="text-xl font-bold mt-1">{project.title}</h3>
                    </div>
                    <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">{project.year}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "25+", label: "Projets livrés" },
              { value: "15+", label: "PME clientes" },
              { value: "100%", label: "Clients satisfaits" },
              { value: "3 mois", label: "Garantie offerte" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-black text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}