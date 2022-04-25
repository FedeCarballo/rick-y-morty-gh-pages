import React, { Component } from 'react'
import {Link, Router} from 'react-router-dom'
import styled from 'styled-components'
export default class Landing extends Component {
  render() {
    const Div = styled.div `
    display: flex;
    height: 90vh;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: auto;
    `
    const Button = styled.button `
     // Aca se supone que va un position relative para que el boton sea quien tenga el efecto pero me gusto tanto que lo deje asi como estaba
      background-color: black ;
      cursor: pointer;
      color: white;
      padding: 8vh;
      border-radius: 20px;
      font-size: 8vh;
      &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: calc(100% + 8px);
      height: calc(100% + 8px);
      transform: translate(-4px, -4px);
      background: linear-gradient(60deg, #5ff281,#5f86f2,#a65ff2,#f25fd0,#f24f61,#f2cb5f) 0 50%;
      background-size: 300% 300%;
      animation: gradient-animation 2.5s alternate infinite;
      border-radius: 8px;
      z-index: -1;
    }
    `
    return (
      <Router basename={process.env.PUBLIC_URL}>
      <Div>
          <Link to="/home">
          <Button>
              Home
          </Button>
          </Link>
      </Div>
      </Router>
    )
  }
}
