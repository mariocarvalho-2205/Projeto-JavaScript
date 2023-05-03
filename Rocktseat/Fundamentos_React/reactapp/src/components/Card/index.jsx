/* eslint-disable react/prop-types */
import "./styles.css"

export function Card({name, time}) {  // desestruturando
    return (
        <div className="card">
            <strong>{name}</strong>
            <small>{time}</small>
        </div>
    )
}