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
  "ghostRacr", "Beautiful Robot Written Letters", "Candle Like Focus Trainer","vintage-royal-tees",
  "iterate88", "rejuvenate88", "disrupt88", "lazyoldmanfitnessnewsletters", "inbox 0", "omnipresentsocial",
  "buildthisnext.com",
"nextsteppresents.com",
"rejuvenate88.com"]

// automate88.com
// disrupt88.com
// iterate88.com
// transcendingsystems.com
// vintageroyaltees.com
// clickmirage.com
// isellsoaponline.com 
// kingsdayrecords.com 
// logobreakthrough.com 
// moosegorilla.com 
// originalmotionpictures.com 
// pamirperdeci.com 
// rugcatz.com 
// superherorolemodels.com 
// teepee.studio
// timeofyourlifedjservices.com 
// meditate88.com
// ghostracr.com"
// ]



function App() {
  return (
    <>
      <AppDiv>
        <h1>Welcome To Build This NEXT</h1>
        <h3>You can vote on your favorite project below</h3>

        <h2>Projects QUEUE</h2>
        
        {/* Rendering items as h3 */}
        {items.map((item, index) => (
          <h3 key={index}>{item}</h3>
        ))}
      </AppDiv>
    </>
  )
}

export default App
