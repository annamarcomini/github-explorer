// esse Item é o componente filho
export function  RepositoryItem (props) { // props é para acessar informação do componente pai q ta mandando e as {} para acessar
 return ( 
   <li> {/*ja que criei a var repository acesso ela em tds as inf name, description e link*/}
     <strong>{props.repository.name}</strong>
     <p>{props.repository.description}</p>

     <a href={props.repository.html_url}>Acessar repositório</a>
   </li>
 )
}