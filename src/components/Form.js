import React, { useState } from 'react'
import c from './Form.module.css'
import { Link } from 'react-router-dom'

export default function Form() {

    const [formulario, Setformulario] = useState({name:" ",status: " ",location: " "})

    function handleSubmit(e){
        e.preventDefault();
        console.log(formulario);
        Setformulario({name:" ",status: " ",location: " "})
    }
    function handleChange(e){
        e.preventDefault()
        Setformulario({...formulario,[e.target.name]: e.target.value})
    }
  return (
    <div className={c.div}>
            <Link exact to='/rick-y-morty-gh-pages/home' >
                <button className={c.Back}>regresar a home</button>
            </Link>
        <form className={c.Formulario} onSubmit={e => handleSubmit(e)}>
            <h1>Agregar personaje</h1>
            <label>Name:</label>
            <input type="text" value={formulario.name} name="name" onChange={e=> handleChange(e)}/>
            <label>Status:</label>
            <input type="text" value={formulario.status} name="status" onChange={e=> handleChange(e)}/>
            <label>location: </label>
            <input type="text"value={formulario.location} name="location" onChange={e=> handleChange(e)}/>
            <button type='submit'>Create</button>
        </form>
    </div>
  )
}
