const Expression = () => {
    const name = 'Mario Carvalho'

    const person = {
        name: "joao",
        age: 48
    }

    return(
        <div>
            <h1>template expression {name}</h1>
            <h2>Persona {person.name} {person.age}</h2>
        </div>
    )
}

export default Expression