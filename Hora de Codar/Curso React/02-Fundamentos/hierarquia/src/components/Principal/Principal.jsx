import Secundario from '../Secundario/Secundario'

const Principal = () => {
    const name = 'Mario Carvalho'
    return (
        <div>
            <h1>Arquivo Principal</h1>
            <h2>Exibido por {name}</h2>

            <h1>Esse e do Secundarion</h1>
            <Secundario/>
        </div>
    )
}

export default Principal