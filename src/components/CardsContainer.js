import Card from './Card'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import e from './CardsContainer.module.css'
import {AiFillHome, AiOutlineUserAdd} from "react-icons/ai";
function CardsContainer() {

  const [apiInfo,SetapiInfo] = useState([]);
  const [chrBusqueda, SetchrBusqueda] = useState([]); // --->> aca vamos a meter los personajes filtrados y los mostraremos en el array de arriba
  const [busqueda ,Setbusqueda] = useState(" "); // --->> esto controla lo que vamos a escribir en la searchbar
  const url = "https://rickandmortyapi.com/api/character"
  const peticion = async () => {
   await fetch(url)
    .then(data => data.json())
    .then(res => {
      SetapiInfo(res.results);
      SetchrBusqueda(res.results)
    })
    .catch(err => console.log(err))
  }
  useEffect(()=>{
    peticion();
  },[])

  // hacemos la funcion para que capture el valor del imput y lo setee en el array de busqueda
  const BuscarPersonaje =e =>{
    Setbusqueda(e.target.value);
    filtrar(e.target.value)
  }
  // a continuacion creamos la funcion para filtrar la busqueda
  const filtrar = (terminobusqueda) =>{
    var resultadodebusqueda = chrBusqueda.filter((e) =>{
      if (e.name.toString().includes(terminobusqueda)){
        return e
      }
    })
    SetapiInfo(resultadodebusqueda); // <<-- seteamos el estado principal ya que este cambia lo que nos devuelve las Cards
  }

  return (
    <div className= {e.DivStyled}> 
    <div className={e.DivButtons}>
      <Link to="/rick-y-morty-gh-pages/CreateCharacter">
        <button className={e.BotonBack2}>
         <AiOutlineUserAdd/> Create new Character
        </button>
      </Link>
      <Link to='/rick-y-morty-gh-pages'>
        <button className={e.BotonBack}> <AiFillHome/> Back</button>
      </Link> 
    </div>
      <div className={e.SearchBar}>
         <input value={busqueda} placeholder="buscar personaje" onChange={BuscarPersonaje}/>
      </div>
      <div className={e.Div}>
      {/* Si aca le pasaramos chrBusqueda en vez de apiInfo, traeria los resultados pero despues se quedaria en el array vacio */}
        {apiInfo.map(e => < Card url={e.image} name={e.name} status={e.status} location={e.location} id={e.id} />)}
      </div>
    </div>
  )
}

export default CardsContainer