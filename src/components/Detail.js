import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { GetAllCharacter } from '../redux/actions';
import './Detail.css'
import { useDispatch, useSelector } from 'react-redux'

function Detail() {
    const params = useParams();
    
    const dispatch = useDispatch();

    const apiInfo = useSelector((state) => state.characters)
    useEffect(()=>{
        dispatch(GetAllCharacter())
    },[dispatch])
    const res = apiInfo?.filter(char => char.id === Number(params.id))
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
            <Link to={`/rick-y-morty-gh-pages/detail/${IDMAS-1}`}>
            {`${IDMAS-1}`>0 ? <button>Ver anterior</button> :  null }
            </Link>
            <Link to={`/rick-y-morty-gh-pages/detail/${IDMAS+1} `}>
               {`${IDMAS+1}`<apiInfo.length ? <button>Ver siguiente</button> :  null } 
            </Link>
            <Link exact to='/rick-y-morty-gh-pages/home' >
                <button className='BackHome'>regresar a home</button>
            </Link>
            </div>    
        </div>
    </div>
  )
}

export default Detail