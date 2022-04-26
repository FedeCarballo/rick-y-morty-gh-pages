import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Detail.css'

function Detail() {
    const params = useParams();

    const [apiInfo,SetapiInfo] = useState([]);

    const [estado,Setestado] = useState("alive");

    const url = "https://rickandmortyapi.com/api/character"
  
    
    useEffect(()=>{
      fetch(url)
    .then(data => data.json())
    .then(res => SetapiInfo(res.results))
    .catch(err => console.log(err))
    },[])

    const res = apiInfo?.filter(char => char.id == Number(params.id))

    let IDMAS = res[0]?.id;

    return (
    <div className="PrincipalCard">
        <div className="Card_img">
        <img src={res[0]?.image} alt={res[0]?.name}/>
        </div>      
        <div className='Card_text'>
            <h1>
            {res[0]?.name}
            </h1>    
            <div className='Card_text_sub'>
                <p>
                    Localizacion: 
                </p>
                <h2>
                    🌎{res[0]?.location.name}
                </h2>
                <p>
                    Estado Actual: 
                </p>    
                <h2 className={res[0]?.status}>
                    🟢 {res[0]?.status}
                </h2>
            </div>
            <div className='Botoncitos'>
            <Link to={`/detail/${IDMAS-1}`}>
            {`${IDMAS-1}`>0 ? <button>Ver anterior</button> :  null }
            </Link>
            <Link to={`/detail/${IDMAS+1} `}>
               {`${IDMAS+1}`<20 ? <button>Ver siguiente</button> :  null } 
            </Link>
            <Link exact to='/home' >
                <button className='BackHome'>regresar a home</button>
            </Link>
            </div>    
        </div>
    </div>
  )
}

export default Detail