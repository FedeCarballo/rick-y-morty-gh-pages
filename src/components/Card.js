import { Link } from 'react-router-dom';
import img from './image.jpg'
import { useState } from 'react';
import './Card.css'

function Card({url,name,id}){

    const [style,Setstyle] = useState("card1")
    
    const [style2,Setstyle2] = useState("card2")

    const CambiarEstilo = () =>{
        Setstyle("card1Changed")
        Setstyle2("card2Changed")
    }

    return (
    <div className="card" onClick={CambiarEstilo}>
        <div className={style} >
            <img src={img} alt="none"></img>
        </div>
        <div className={style2} >
            <img className="cardimg" src={url} alt={name}/>
            <div className="card__container">
            <h2>{name}</h2> 
            </div>
            <div className="card__Subcontainer">
            <Link to={`/detail/${id}`}>
                <button>Ver detalle</button>
            </Link>
            </div> 
        </div>
    </div>
    )
}

export default Card