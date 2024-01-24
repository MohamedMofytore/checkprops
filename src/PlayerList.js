import React from 'react'
import Player from './Player';
import {players} from "./players"
function PlayerList() {
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
       {
      players.map((el)=>(
        <Player el={el}/>
      ))
     }
    </div>
  )
}

export default PlayerList
