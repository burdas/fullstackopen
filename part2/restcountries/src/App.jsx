import { useEffect, useState } from 'react'
import axios from 'axios'
import { Filter } from './components/Filter';
import { Content } from './components/Content';

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      setCountries(response.data)
    })
  },[]);

  const onChangeFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <>
      <Filter filter={filter} onChangeFilter={onChangeFilter}  />
      <Content countries={countries} filter={filter} />
    </>
  )
}

export default App
