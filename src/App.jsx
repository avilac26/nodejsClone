import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Body from './Body'
import Body2 from './Body2'
import Footer from './Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className='body'>
        <div className='container'>
          <Body/>
          <Body2/>
        </div>
      </div>
      
      <Footer/>
    </>
  )
}

export default App
