import { ChangeEvent, useState } from "react";
import { countries } from "../../data/countries";
import styles from './Form.module.css'
import type { SearchType } from "../../types";

export default function Form() {

    const [search, setSearch] = useState<SearchType>({
        city: '',
        country: ''
    })

    const handleChange = (e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }
  return (
    <form className={styles.form}>

        <div className={styles.field}>
            <label htmlFor="city">City:</label>
            <input 
                id="city"
                type="text" 
                name="city"
                placeholder="City"
                value={search.city}
                onChange={handleChange}
            />
        </div>

        <div className={styles.field}>
            <label htmlFor="country">Country:</label>
             <select
                id="country"
                value={search.country}
                name="country"
                onChange={handleChange}
             >
                    <option>-- Select a Country --</option>
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

        <input className={styles.submit} type="submit" value='Find out the Weather' />
    </form>
  )
}
