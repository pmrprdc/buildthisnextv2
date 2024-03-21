import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components';



const AppDiv = styled.div`
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid #007bff;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;


const items = [
  "ghostRacr", "Beautiful Robot Written Letters", "Candle Like Focus Trainer","vintage-royal-tees"
]



function App() {

  return (
    <>
     <AppDiv>
      <h1>Welcom To Build This NEXT</h1>
      <h3>You can vote on your favorite project below</h3>

      <h2>Projects QUE</h2>
      <ul>
        <li>
          GhostRacr
        </li>
        <li>
          Beautiful Robot Written Letters
        </li>
        <li>
          Candle Like Focus Trainer For Desktop
        </li>
      </ul>
     </AppDiv>
    </>
  )
}

export default App
