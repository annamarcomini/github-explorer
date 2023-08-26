import { useState, useEffect } from "react"
import { RepositoryItem } from "./RepositoryItem"
// esse list é o componente pai

import "../styles/repositories.scss"
//https://api.github.com/orgs/rocketseat/repos

/*const repository = {
  // esse repository é um objeto
  name: "unform3",
  description: " Forms in React",
  link: "https://github.com/unform/unform",
} */
 


export function RepositoryList() {
  const [repositories, setRepositories] = useState([]) //inicia com um array vazio 
  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []) // avisa quando quando algo muda

  return (
    // {} para colocar js dentro do html
    // o primeiro repository ali embaixo é uma propriedade que passei
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      {/* repository ali em baixo funciona como uma variavel com objeto contendo as informações todas que quero mostrar na propriedade*/}
      <ul>
        {repositories.map(repository => {
          return <RepositoryItem repository={repository}/>
        })}
        
        
      </ul>
    </section>
  )
}
