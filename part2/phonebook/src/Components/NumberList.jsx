import { NumbersListItems } from "./NumbersListItem"

export const NumbersList = ({ persons, filter }) => {
    const personAux = filter !== "" ? persons.filter(p => p.name.toUpperCase().includes(filter.toUpperCase())) : persons

    return (
        <>
            <h2>Numbers</h2>
            <ul>
                {
                    personAux
                    .map(person => (
                    <NumbersListItems key={person.name} name={person.name} number={person.number} />
                ))
                }
            </ul>
        </>
    )
}