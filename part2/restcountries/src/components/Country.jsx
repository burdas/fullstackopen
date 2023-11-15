export const Country = ({country}) => {
    return (
        <>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h2>Languages</h2>
            <ul>
                {Object.entries(country.languages).map(l => (<li key={l[0]}>{l[1]}</li>))}
            </ul>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
        </>
    )
}