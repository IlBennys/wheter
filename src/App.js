import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import NavCustom from "./Component/NavBar/NavCustom"
import logo from "./assets/cloud.png"
// import nuv from "./assets/nuvoloso.jpg"
// import Temperatura from "./Component/temperatura/Temperatura.jsx"
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import WeekTemp from "./Component/WeekTemp/WeekTemp"

function App() {
  return (
    <>
      <NavCustom logo={logo} />
    </>
  )
}

export default App
