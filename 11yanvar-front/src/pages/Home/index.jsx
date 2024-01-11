import React from 'react'
import Slider from '../../components/Slider'
import Ourmission from '../../components/Ourmission'
import Fetchsession from '../../components/Fetchsession'
import Ourteam from '../../components/Ourteam'

function Home() {
  return (
    <div>
      <Slider/>
      <Ourmission/>
      <Fetchsession/>
      <Ourteam/>
    </div>
  )
}

export default Home