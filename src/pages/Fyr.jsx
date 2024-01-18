import React, { useEffect, useState } from 'react'
import Navbar from '../../Navbar';
import Paper from '@mui/material/Paper';


const Fyr = () => {

  return (
    <> 
        <Navbar/>
        <div className="container booktwo">
            <div className="row">
                <div className="col-12">
                <h4 className='py-4'>Hello Fyr Page  </h4>
                <Paper style={{ padding: 24 }} elevation={3}>
                  <h6>Main title here..</h6>
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam repudiandae aut explicabo necessitatibus quod vero error, dolorem, maiores officiis dignissimos sunt dicta laborum velit ipsam officia nesciunt dolores, placeat temporibus?</p>
                </Paper>
              </div>
            </div>
        </div>
    </>
  )
}

export default Fyr;