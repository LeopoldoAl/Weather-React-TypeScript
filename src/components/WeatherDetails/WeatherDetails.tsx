import { Weather } from "../../hooks/useWheather"
import { formatTemperature } from "../../utils"
import styles from './WeatherDetails.module.css'

type WeatherDetailsProps = {
    weather: Weather
}

export default function WeatherDetails({weather}: WeatherDetailsProps) {
  return (
    <div className={styles.container}>
        <h2>Weather from: {weather.name}</h2>
        <p className={styles.current}>{formatTemperature(weather.main.temp)}&deg;C</p>
        <div className={styles.temperatures}>
          <p>Min: <span>{formatTemperature(weather.main.temp_min)}&deg;C</span></p>
          <p>Max: <span>{formatTemperature(weather.main.temp_max)}&deg;C</span></p>
        </div>
    </div>
  )
}
