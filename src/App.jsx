import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import Fondo from "./assets/Fondo_poblado.jpg"

function App() {
  const bgImage = {
    backgroundImage: `url(${Fondo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    position: "relative"
  }

  return (
    <div style={bgImage} className="overflow-hidden min-h-screen">
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
