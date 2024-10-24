import { Weather } from "../../hooks/useWheather"
import { formatTemperature } from "../../utils"

type WeatherDetailsProps = {
    weather: Weather
}

export default function WeatherDetails({weather}: WeatherDetailsProps) {
  return (
    <div>
        <h2>Weather from: {weather.name}</h2>
        <p>{formatTemperature(weather.main.temp)}&deg;C</p>
        <div>
          <p>Min: <span>{formatTemperature(weather.main.temp_min)}&deg;C</span></p>
          <p>Max: <span>{formatTemperature(weather.main.temp_max)}&deg;C</span></p>
        </div>
    </div>
  )
}
