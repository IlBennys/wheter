import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import NavCustom from "./Component/NavBar/NavCustom"
import logo from "./assets/cloud"
import Temperatura from "./Component/temperatura/Temperatura.jsx"

function App() {
  return (
    <>
      <NavCustom logo={logo} />
      <Temperatura />
    </>
  )
}

export default App
