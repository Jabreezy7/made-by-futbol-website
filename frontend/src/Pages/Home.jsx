import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Featured from '../Components/Featured/Featured'
import NewDrops from '../Components/NewDrops/NewDrops'

import Footer from '../Components/Footer/Footer'

export const Home = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Featured/>
      <NewDrops/>
      <Footer/>
    </div>
  )
}

export default Home