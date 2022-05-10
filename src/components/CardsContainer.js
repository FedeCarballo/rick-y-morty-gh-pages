import Card from './Card'
import { Link } from 'react-router-dom'
import {  useEffect,  } from 'react'
import e from './CardsContainer.module.css'
import {AiFillHome, } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { deleteCharacter, GetAllCharacter } from '../redux/actions';

function CardsContainer() {
  const dispatch = useDispatch();
  const apiInfo = useSelector(state => state.characters)

  useEffect(() => {
    dispatch(GetAllCharacter())
  },[dispatch])
  
  return (
    <div className= {e.DivStyled}> 
    <div className={e.DivButtons}>
      <Link to='/rick-y-morty-gh-pages'>
        <button className={e.BotonBack}> <AiFillHome/> Back</button>
      </Link> 
    </div>
      <div className={e.SearchBar}>
         <input  placeholder="buscar personaje" onClick={() => dispatch(deleteCharacter(e.target.value))}/>
      </div>
      <div className={e.Div}>
        {apiInfo.map(e => < Card url={e.image} name={e.name} status={e.status} location={e.location} id={e.id} />)}
      </div>
    </div>
  )
}

export default CardsContainer