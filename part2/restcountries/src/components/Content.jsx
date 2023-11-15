import { Country } from "./Country";

export const Content = ({ countries, filter }) => {
  const filteredCountries = countries
    .filter((c) => c.name.common.toUpperCase().includes(filter.toUpperCase()));

    if (filteredCountries.length > 10) {
        return (<p>Too many matches, specify another filter</p>)
    } else if (filteredCountries.length > 1 && filteredCountries.length <= 10) {
        return (
            <ul>
                {filteredCountries.map(c => (<li key={c.name.common}>{c.name.common}</li>))}
            </ul>
        )
    } else if (filteredCountries.length === 1) {
        return (<Country country={filteredCountries[0]} />)
    } else {
        return (<p>No results</p>)
    }
};
