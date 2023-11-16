import React, { useState, useEffect } from "react";
import { NumbersList } from "./Components/NumberList";
import { NumberForm } from "./Components/NumberForm";
import { Filter } from "./Components/Filter";
import {
  getAllPeople,
  createPerson,
  removePerson,
  updatePerson,
} from "./Services/persons";
import { Notification } from "./Components/Notificacion";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [notification, setNotification] = useState({message: null, mode: null});

  const personsFiltered = persons.filter((p) =>
    p.name.toUpperCase().includes(filter.toUpperCase())
  );

  useEffect(() => {
    getAllPeople()
      .then((response) => {
        setPersons(response);
      })
      .catch((error) => {
        alert(`Unable tu load people. Error: ${error}`);
      });
  }, []);

  const addName = (event) => {
    event.preventDefault();
    const findPerson = persons.find((p) => p.name === newName);
    if (findPerson) {
      if (
        confirm(
          `${newName} is already added to phonebook, replace the old number with the new one?`
        )
      ) {
        const replacePerson = { ...findPerson, number: newNumber };
        updatePerson(findPerson.id, replacePerson)
          .then((personUpdated) => {
            setPersons(
              persons.map((p) =>
                p.id !== personUpdated.id ? p : personUpdated
              )
            );
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => {
            alert(`Unable to update a person. Error: ${error}`);
          });
      }
    } else {
      const newPerson = { name: newName, number: newNumber };
      createPerson(newPerson)
        .then((responsePerson) => {
          setPersons(persons.concat(responsePerson));
          setNewName("");
          setNewNumber("");
        })
        .catch((error) => {
          alert(`Unable to add a person. Error: ${error}`);
        });
    }
  };

  const onClickRemovePerson = (personToRemove) => () => {
    if (confirm(`Delete ${personToRemove.name}?`)) {
      removePerson(personToRemove.id)
        .then(() => {
          console.log("Sucessfuly deleted");
          setPersons(persons.filter((p) => p.id !== personToRemove.id));
        })
        .catch((error) => {
          alert(`Unable to remove a person. Error: ${error}`);
        });
    }
  };

  const onChangeName = (event) => {
    setNewName(event.target.value);
  };

  const onChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Notification message={notification.message} mode={notification.mode} />
      <Filter filterName={filter} handleFilterChange={onChangeFilter} />
      <NumberForm
        handleSubmit={addName}
        handleNameChange={onChangeName}
        handleNumberChange={onChangeNumber}
        newName={newName}
        newNumber={newNumber}
      />
      <NumbersList
        persons={personsFiltered}
        onClickRemovePerson={onClickRemovePerson}
      />
    </>
  );
};

export default App;
