import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)
  console.log("Index loaded.")

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
