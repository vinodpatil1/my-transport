import React, { useState } from 'react'
import Navbar from '../../Navbar';
import truckImg from "../assets/images/truck.png"
import Paper from '@mui/material/Paper';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


const Home = () => {

 const randomTextchange =["Logistics Operations","Deliverys","Transport"];

 const [textD, setText] = useState("Logistics Operations");

let sayHello = () =>{
  let result = randomTextchange[Math.floor(Math.random()* randomTextchange.length)];
  setText(result);
}

setTimeout(sayHello,1000)


  return (
   <>
    <Navbar/>
      
    <section className='hero-section'>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center flex-column">
            <h5>Transport Management System</h5>
            <h2>Indias No. 1 Transport Services</h2>
            <h2 className='text-primary'>{textD}</h2>
            <p className='my-3'>Manage your complete transport business on this one of a kind solution</p>

            <div className="row mt-4">
              <div className="col-12 col-md-6 col-lg-6 mb-3">
                <Paper elevation={3} style={{ padding: 24, display: 'flex', alignItems:'center'}}>
                    <p><MailIcon className="homeIcons text-primary"/>mytransport@info.com</p>
                </Paper>
              </div>
              <div className="col-12 col-md-6 col-lg-6 mb-3">
                <Paper elevation={3} style={{ padding: 24, display: 'flex', alignItems:'center'}}   >
                    <p><LocalPhoneIcon className="homeIcons text-primary"/>+91 1234567891</p>
                </Paper>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-6">
            <img src={truckImg} alt="" className='img-fluid' srcSet="" />
          </div>

        </div>
      </div>
    </section>


    
   </>
  )
}

export default Home;