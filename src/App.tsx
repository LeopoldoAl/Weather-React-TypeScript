import styles from "./App.module.css"
import Form from "./components/Form/Form"
import useWheather from "./hooks/useWheather"

function App() {

  const { fetchWheather } = useWheather()

  return (
    <>
      <h1 className={styles.title}>Weather Searcher</h1>

      <div className={styles.container}>
        <Form
          fetchWheather={fetchWheather}
        />
        <p>2</p>
      </div>
    </>
  )
}

export default App
