import React, { useState } from 'react'
import c from './Form.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createCharacter } from '../redux/actions'

export default function Form() {
    const [formulario, Setformulario] = useState({name:" ",status: " ",location: " ", image: " "})

   
    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault();
        dispatch(createCharacter(formulario))
        Setformulario({name:" ",status: " ",location: " ", image: " "})}

    function handleChange(e){
        e.preventDefault()
        Setformulario({...formulario,[e.target.name]: e.target.value})}
   
    
    return (
        <div className={c.div}>
            <form className={c.Formulario} onSubmit={e => handleSubmit(e)}>
                <h1>Agregar personaje</h1>
                <label>Name:</label>
                <input type="text" value={formulario.name} name="name" onChange={e=> handleChange(e)}/>
                <label>Status:</label>
                <input type="text" value={formulario.status} name="status" onChange={e=> handleChange(e)}/>
                <label>location: </label>
                <input type="text"value={formulario.location} name="location" onChange={e=> handleChange(e)}/>
                <label>Image url: </label>
                <input type="text"value={formulario.image} name="image" onChange={e=> handleChange(e)}/>
                <button type='submit'>Create</button>            
                <Link exact to='/rick-y-morty-gh-pages/home' >
                    <button className={c.Back}>regresar a home</button>
                </Link>
            </form>
        </div>
  )
}
