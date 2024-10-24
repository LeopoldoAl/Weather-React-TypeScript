import styles from "./App.module.css"
import Form from "./components/Form/Form"
import WeatherDetails from "./components/WeatherDetails/WeatherDetails"
import useWheather from "./hooks/useWheather"

function App() {

  const { weather,fetchWheather, hasWeather } = useWheather()

  return (
    <>
      <h1 className={styles.title}>Weather Searcher</h1>

      <div className={styles.container}>
        <Form
          fetchWheather={fetchWheather}
        />
        {hasWeather && <WeatherDetails weather={weather}/>}
      </div>
    </>
  )
}

export default App
