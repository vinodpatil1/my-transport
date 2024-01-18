import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Logout from './pages/Logout'
import Login from './pages/Login'
import MasterOne from './pages/MasterOne'
import MasterTwo from './pages/MasterTwo'
import BookOne from './pages/BookOne'
import BookTwo from './pages/BookTwo'
import CrossingOne from './pages/CrossingOne'
import CrossingTwo from './pages/CrossingTwo'
import DeliveryOne from './pages/DeliveryOne'
import DeliveryTwo from './pages/DeliveryTwo'
import ReportOne from './pages/ReportOne'
import ReportTwo from './pages/ReportTwo'
import Fyr from './pages/Fyr'

function App() {


  return (
    <>
    <Routes>
      <Route path="/home" element={ <Home/> } />
      <Route path="/logout" element={ <Logout/> } />
      <Route path="/" element={ <Login/> } />
      <Route path="/masterone" element={ <MasterOne/> } />
      <Route path="/mastertwo" element={ <MasterTwo/> } />
      <Route path="/bookone" element={ <BookOne/> } />
      <Route path="/booktwo" element={ <BookTwo/> } />
      <Route path="/crossingone" element={ <CrossingOne/> } />
      <Route path="/crossingtwo" element={ <CrossingTwo/> } />
      <Route path="/deliveryone" element={ <DeliveryOne/> } />
      <Route path="/deliverytwo" element={ <DeliveryTwo/> } />
      <Route path="/reportone" element={ <ReportOne/> } />
      <Route path="/reporttwo" element={ <ReportTwo/> } />
      <Route path="/fyr" element={ <Fyr/> } />
     </Routes>
     </>
  )
}

export default App
