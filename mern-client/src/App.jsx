import { useContext } from 'react'
import './App.css'
import { Outlet} from 'react-router-dom'
import Navbar from './Components/Navbar'
import { AuthContext } from './Context/AuthProvider'
import FooterMain from './Components/FooterMain'


function App() {
  const {user} = useContext(AuthContext)
  return (
    <>
     <Navbar/>
   <div className='min-h-screen'>
     <Outlet/>
   </div>
    <FooterMain/>
    </>
  )
}

export default App
