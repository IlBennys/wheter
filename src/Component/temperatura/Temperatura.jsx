import "./Temperatura.css"
import { Card } from "react-bootstrap"
import { useEffect, useState } from "react"

const Temperatura = (props) => {
  const [dati, setDati] = useState([])

  const file = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?&lat=${props.lat}&lon=${props.long}+&appid=6e501f7c65b17073239db32c79de2f21`
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
      <div className="d-flex justify-content-center contenitore">
        <Card style={{ width: "18rem" }} id="card" className="text-center  mt-5 ">
          <Card.Img variant="top" src={props.nuv} className="nuvola" />
          <Card.Body id="cardbody">
            <Card.Title>{dati.name}</Card.Title>
            <Card.Text>{dati.weather && dati.weather[0].main}</Card.Text>
            <Card.Text>{dati.weather && dati.weather[0].description}</Card.Text>
            <Card.Text>
              <strong>TEMPERATURA ATTUALE: </strong>
              {dati.main?.temp}°C
            </Card.Text>
            <Card.Text>
              <strong>umidità:</strong> {dati.main?.humidity}%
            </Card.Text>
            <Card.Text>
              <strong>temp max:</strong> {dati.main?.temp_max}°C
            </Card.Text>
            <Card.Text>
              <strong>temp min:</strong> {dati.main?.temp_min}°C
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Temperatura
