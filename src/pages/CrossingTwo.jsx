import React, { useEffect, useState } from 'react'
import Navbar from '../../Navbar';
import Paper from '@mui/material/Paper';
import axios  from 'axios';

const CrossingTwo = () => {

const [myData, setData] = useState([]);

useEffect(()=>{
   axios.get("https://dummyjson.com/comments")
   
    .then((response) =>setData(response.data.comments));
    

 },[])



  return (
    <> 
        <Navbar/>
        <div className="container booktwo">
            <div className="row">
                <div className="col-12">
                <h4 className='py-4'>Hello Crossing Page Two</h4>
                <Paper style={{ padding: 24 }} elevation={3}>
                  <h6>Main title here..</h6>
                  <div className="row">
                   {myData.map((val) =>{
                      return(
                        <>
                        <div className="col-12 col-md-4 col-lg-4">
                        <div className="card p-3 my-3">
                           <h5>Username: {val.user.username}</h5>   
                           <p>body: {val.body}</p>
                         </div>
                        </div>
                          
                        </>
                      )
                   })}
                   </div>
                </Paper>
              </div>
            </div>
        </div>
    </>
  )
}

export default CrossingTwo;