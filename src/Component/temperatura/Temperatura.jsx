import "./Temperatura.css"
import { Card, ListGroup } from "react-bootstrap"
import { useEffect, useState } from "react"

const Temperatura = () => {
  const [dati, setDati] = useState([])

  const file = async () => {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=38.1156879&lon=13.3612671&appid=6e501f7c65b17073239db32c79de2f21&units=metric"
      )
      if (response.ok) {
        const data = await response.json()
        setDati(data)
        // console.log(dati)
      } else {
        console.log("ERROR while fetching")
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    file()
  }, [])
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>{dati.name}</Card.Title>
          <Card.Text>
            <strong>TEMPERATURA ATTUALE:</strong>
            {dati.main?.temp}°C
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <strong>temp max:</strong> {dati.main?.temp_max}°C
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>temp min:</strong> {dati.main?.temp_min}°C
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>umidità:</strong> {dati.main?.humidity}%
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">{dati.weather && dati.weather[0].main}</Card.Link>
          <Card.Link href="#">{dati.weather && dati.weather[0].description}</Card.Link>
        </Card.Body>
      </Card>
    </>
  )
}

export default Temperatura
