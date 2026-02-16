import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Accueil from "./pages/Accueil"
import Prestations from "./pages/Prestations"
import Realisations from "./pages/Realisations"
import Contact from "./pages/Contact"
import Devis from "./pages/Devis"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/prestations" element={<Prestations />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/devis" element={<Devis />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App