import axios from "axios"
import { object, string, number, InferOutput, parse } from 'valibot'
import { SearchType } from "../types"
import { useMemo, useState } from "react"

//Valibot
const weatherSchema = object({
  name: string(),
  main: object({
    temp: number(),
    temp_max: number(),
    temp_min: number()
  })
})

export type Weather =InferOutput<typeof weatherSchema>

const initialState = {
  name: '',
  main: {
    temp: 0,
    temp_max: 0,
    temp_min: 0
  }
}

export default function useWheather() {

            const [weather, setWeather] = useState<Weather>(initialState)

            const [loading, setLoading] = useState(false)

            const [notfound, setNotfound] = useState(false)

    const fetchWheather = async (search: SearchType) => {
      const appId = import.meta.env.VITE_API_KEY
      setLoading(true)
      setWeather(initialState)
      setNotfound(false)
        try {
            const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`

            const { data } = await axios(geoUrl)
            
            if(!data[0]) {
              setNotfound(true)
              return
            }
            
            if (data[0].name.trim()===search.city.trim() && data[0].country.trim()===search.country.trim()) {
              const lat = data[0].lat
              const lon = data[0].lon
              
              const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
  
              const { data: weatherResult } = await axios(weatherUrl)
  
              const result = parse(weatherSchema, weatherResult)
              
              if (result && result.name.trim()===search.city.trim()) {
                setWeather(result)
            } else {
              setWeather(initialState)
              setNotfound(true)
            }
            } else {
              setNotfound(true)
            }

            
        } catch (error) {
            console.log(error)
        } finally {
          setLoading(false)
        }
    }

    const hasWeather = useMemo(() => weather.name,[weather])
  return {
    weather,
    loading,
    notfound,
    fetchWheather,
    hasWeather
  }
}
