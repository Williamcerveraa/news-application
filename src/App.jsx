import React from 'react'
import { Navbar } from './Components/Navbar'
import { NewsBoard } from './Components/NewsBoard'
import { useState } from 'react'

export const App = () => {
  const [category,setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory}></Navbar>
      <NewsBoard category={category}></NewsBoard>
      
    </div>
  )
}

export default App;
