import "./WeekTemp.css"
import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"

const WeekTemp = (props) => {
  const [dati, setDati] = useState([])

  const weekTempFetch = async () => {
    try {
      const response = await fetch(
        ` https://api.openweathermap.org/data/2.5/forecast?lat=${props.lat}&lon=${props.long}&appid=6e501f7c65b17073239db32c79de2f21&units=metric&cnt=4`
      )
      if (response.ok) {
        const data = await response.json()
        setDati(data.list)
        console.log(dati)
      } else {
        console.log("ERROR while fetching")
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    weekTempFetch()
  }, [props.lat, props.long])
  return (
    <>
      <h3>Giornaliero</h3>
      <div className="d-flex justify-content-center">
        {dati.map((info) => {
          return (
            <Card className="ms-3">
              <Card.Body>
                <Card.Title>{info.name}</Card.Title>
                <Card.Text>Ore: {info.dt_txt.slice(11, 16)}</Card.Text>
                <Card.Text>
                  <strong>TEMPERATURA:</strong>
                  {info.main?.temp}°C
                </Card.Text>
                <p>
                  <strong>MAX TEMP: </strong> {info.main?.temp_max}°C
                </p>
                <p>
                  <strong>MIN TEMP: </strong> {info.main?.temp_min}°C
                </p>
                <p>
                  <strong>UMIDITA': </strong> {info.main?.humidity}%
                </p>
                <p>
                  <strong>IL CIELO SARA': </strong>
                  {info.weather && info.weather[0].main}
                </p>
              </Card.Body>
            </Card>
          )
        })}
      </div>
    </>
  )
}

export default WeekTemp
