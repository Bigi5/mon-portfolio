import { Link } from "react-router-dom"
import { CheckCircle } from "lucide-react"

interface PricingCardProps {
  icon: any
  title: string
  desc: string
  features: string[]
  price: string
  popular?: boolean
}

export default function PricingCard({ icon: Icon, title, desc, features, price, popular }: PricingCardProps) {
  return (
    <div className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
      popular ? 'border-2 border-blue-500 scale-105' : ''
    }`}>
      {popular && (
        <div className="absolute top-5 right-5 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
          Populaire
        </div>
      )}
      
      <div className="p-8">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl flex items-center justify-center mb-6">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
        
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500 mb-6">{desc}</p>
        
        <div className="mb-8">
          <span className="text-4xl font-black">{price}</span>
          {price.includes('CHF') && <span className="text-gray-400 ml-2">HT</span>}
        </div>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link
          to="/devis"
          className={`block text-center py-4 rounded-xl font-semibold transition-all duration-300 ${
            popular 
              ? 'bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:shadow-xl' 
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          Demander un devis
        </Link>
      </div>
    </div>
  )
}