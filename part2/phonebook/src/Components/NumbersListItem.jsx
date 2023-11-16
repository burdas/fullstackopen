export const NumbersListItems = ({ person, onClickRemovePerson}) => {
    return (
        <li>{person.name} {person.number} <button onClick={onClickRemovePerson(person)}>delete</button></li>
    )
}