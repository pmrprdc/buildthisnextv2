import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
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
     </div>
    </>
  )
}

export default App
