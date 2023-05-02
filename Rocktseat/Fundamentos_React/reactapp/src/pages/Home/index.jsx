import "./style.css";
import { Card } from "../../components/Card/index";

export function Home() {

  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite o nome..."/>
      <button type="button">Adicionar</button>


      <br />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

