import Card from './Card'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function CardsContainer() {

  const [apiInfo,SetapiInfo] = useState([]);

  const url = "https://rickandmortyapi.com/api/character"

  
  useEffect(()=>{
    fetch(url)
  .then(data => data.json())
  .then(res => SetapiInfo(res.results))
  .catch(err => console.log(err))
  },[])

const DivStyled = styled.div `
    background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
    height: 120vh;
`
const Div = styled.div ` 
    display:flex;
    flex-wrap: wrap;
    height: 65vh;
    justify-content: space-around;
    flex-direction: row;
    align-content: space-between;
`
const BotonBack  = styled.button `
    cursor: pointer;
    font-family:'Courier New', Courier, monospace;
    padding: 20px;
    background-color: #000;
    border-radius: 20px;
    color: white;
    font-size: 2.9vh;
    margin: auto;

`

  return (
    <DivStyled>
            <Link exact to='/rick-y-morty-gh-pages'>
                <BotonBack>Inicio</BotonBack>
            </Link>
      <Div>
        {apiInfo.map(e => < Card url={e.image} name={e.name} status={e.status} location={e.location} id={e.id} />)}
      </Div>
    </DivStyled>
  )
}

export default CardsContainer