import { NumbersListItems } from "./NumbersListItem";

export const NumbersList = ({ persons, onClickRemovePerson }) => {
  return (
    <>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <NumbersListItems
            key={person.id}
            person={person}
            onClickRemovePerson={onClickRemovePerson}
          />
        ))}
      </ul>
    </>
  );
};
