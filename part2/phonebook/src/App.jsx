import React, { useState } from 'react'
import { NumbersList } from './Components/NumberList'
import { NumberForm } from './Components/NumberForm'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    setPersons(persons.concat({ name: newName }))
    setNewName('')
  }

  const onChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <>
      <h1>Phonebook</h1>
      <NumberForm handleSubmit={addName} handleNameChange={onChange} newName={newName} />
      <NumbersList persons={persons} />
    </>
  )
}

export default App