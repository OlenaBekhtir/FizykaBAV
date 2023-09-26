import { useState } from 'react'
import Logo from './img/logo.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={Logo} className="logo" alt="Fizyka Logo" />
      </div>
      <h1 className='title'>FizykaBAV</h1>

    </>
  )
}

export default App
