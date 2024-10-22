import { countries } from "../../data/countries";

export default function Form() {
  return (
    <form>

        <div>
            <label htmlFor="city">City:</label>
            <input 
                id="city"
                type="text" 
                name="city"
                placeholder="City"
            />
        </div>

        <div>
            <label htmlFor="city">Country:</label>
             <select>
                    <option value="">-- Select a Country --</option>
                    {countries.map( country => (
                        <option
                            key={country.code}
                            value={country.code}

                        >
                            {country.name}
                        </option>
                    ))}
            </select>       
        </div>

        <input type="submit" value='Find out the Weather' />
    </form>
  )
}
