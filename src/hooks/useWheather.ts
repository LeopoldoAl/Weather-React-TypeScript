import axios from "axios"
import { SearchType } from "../types"

export default function useWheather() {
    const fetchWheather = async (search: SearchType) => {
        try {
            const appId = '1f00bbf97ba70a8b959c6c30b1e50ba3'
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`

            const { data } = await axios(geoUrl)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
  return {
    fetchWheather
  }
}
