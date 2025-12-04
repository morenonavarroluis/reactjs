import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){
    return(
      <div className='App'>  
      <TwitterFollowCard isFollowing={true}  userName="midudev" name="Miguel Duran" />
      <TwitterFollowCard isFollowing={false} userName="pheralb" name="pablo hernandez" />
      <TwitterFollowCard isFollowing userName="elonmush" name="Elon Musk" />
      <TwitterFollowCard isFollowing userName="danyerbert" name="luis navarro" />
      <TwitterFollowCard isFollowing userName="lnavarro" name="deibel virguez" />
      </div>
    )
}