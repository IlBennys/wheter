import { Navbar, Container, Nav, Form, Button } from "react-bootstrap"
import "./Navcustom.css"
import { FaSistrix, FaHome, FaStar, FaCity } from "react-icons/fa"
import { useState, useEffect } from "react"
import Temperatura from "../temperatura/Temperatura"
import WeekTemp from "../WeekTemp/WeekTemp"

const NavCustom = (props) => {
  const [query, setQuery] = useState("")
  const [meteo, setMeteo] = useState([])

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async () => {
    try {
      const result = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=6e501f7c65b17073239db32c79de2f21`
      )
      if (result.ok) {
        const data = await result.json()

        setMeteo(data[0])
        console.log(meteo)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    handleSubmit()
  }, [])

  return (
    <>
      <Navbar expand="lg" id="Navbar">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={props.logo} alt="pic" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="#action1">
                <strong>Home</strong>
                <FaHome className="ms-1" />
              </Nav.Link>
              <Nav.Link href="#action1">
                <strong>favourite</strong>
                <FaStar className="ms-1" />
              </Nav.Link>
              <Nav.Link href="#action2">
                <strong>tutte le città</strong>
                <FaCity className="ms-1" />
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={query}
                onChange={handleChange}
              />
              <Button onClick={handleSubmit}>
                <FaSistrix />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Temperatura long={parseInt(meteo.lon)} lat={parseInt(meteo.lat)} />
      <WeekTemp long={parseInt(meteo.lon)} lat={parseInt(meteo.lat)} />
    </>
  )
}

export default NavCustom
