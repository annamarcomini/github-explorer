interface RepositoryItemProps { // esse interface é para definir os tipos que o props tera dentro dele sendo typescript
  repository:{
    name: string
    description: string
    html_url: string
  }
}
// esse Item é o componente filho
export function  RepositoryItem (props: RepositoryItemProps) { // props é para acessar informação do componente pai q ta mandando e as {} para acessar
  // propos virou um objeto daquele tipo do RepositoryItemprops, sendo typescript
 return ( 
   <li> 
     <strong>{props.repository.name}</strong>
     <p>{props.repository.description}</p>

     <a href={props.repository.html_url}>Acessar repositório</a>
   </li>
 )
}