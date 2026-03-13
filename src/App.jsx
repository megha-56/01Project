import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import NavBar from './components/NavBar'


function App() {
  const [count, setCount] = useState(0)

  const router=createBrowserRouter([
    {
      path:"/",
      element:<div><NavBar/>,<Home/></div>
    },
    {
      path:"/about",
      element:<div><NavBar/>,<About/></div>
    },
    {
      path:"/contact",
      element:<div><NavBar/>,<Contact/></div>
    }

  ])

  return (
    <>
       <RouterProvider router={router}/>        
    </>
  )
}

export default App
