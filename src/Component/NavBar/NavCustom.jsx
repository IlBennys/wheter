import { Navbar, Container, Nav, Form, Button } from "react-bootstrap"
import "./Navcustom.css"
import { FaSistrix, FaHome, FaStar, FaCity } from "react-icons/fa"

const NavCustom = (props) => {
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
                Home
                <FaHome />
              </Nav.Link>
              <Nav.Link href="#action1">
                favourite
                <FaStar />
              </Nav.Link>
              <Nav.Link href="#action2">
                tutte le città
                <FaCity />
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success">
                <FaSistrix />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavCustom
