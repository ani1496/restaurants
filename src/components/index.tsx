import React, { FunctionComponent, useEffect, useState } from 'react'

import mockData from './mock'
import { Restaurant } from "../type"
import Header from './Header'

import '../styles/index.css'
import Home from './Home'

const Main:FunctionComponent= () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  
  useEffect(()=>{
    if(restaurants.length === 0) {
      setRestaurants(mockData)
    }
  }, [])

  return (
    <div>
      <Header />
      <Home restaurants={restaurants} setRestaurants={(list) => {
        console.log('LIST', list)
        setRestaurants(list)
      }}/>
    </div>
  )
}


export default Main;