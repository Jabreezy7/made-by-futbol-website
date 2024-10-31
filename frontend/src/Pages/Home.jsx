import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Featured from '../Components/Featured/Featured'

export const Home = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Featured/>
    </div>
  )
}

export default Home