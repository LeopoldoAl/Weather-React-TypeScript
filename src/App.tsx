import styles from "./App.module.css"
import Alert from "./components/Alert/Alert"
import Form from "./components/Form/Form"
import Spinner from "./components/Spinner/Spinner"
import WeatherDetails from "./components/WeatherDetails/WeatherDetails"
import useWheather from "./hooks/useWheather"

function App() {

  const { weather, loading, notfound, fetchWheather, hasWeather } = useWheather()

  return (
    <>
      <h1 className={styles.title}>Weather Searcher</h1>

      <div className={styles.container}>
        <Form
          fetchWheather={fetchWheather}
        />
        {loading && <Spinner />}
        {hasWeather && <WeatherDetails weather={weather}/>}
        {notfound && <Alert>City doesn't find</Alert>}
      </div>
    </>
  )
}

export default App
