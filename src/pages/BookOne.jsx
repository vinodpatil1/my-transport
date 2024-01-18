import React, { useEffect, useState } from 'react'
import Navbar from '../../Navbar';
import Paper from '@mui/material/Paper';
import axios  from 'axios';

const BookOne = () => {

const [myData, setData] = useState([]);

useEffect(()=>{

    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => setData(response.data))
 

},[])



  return (
    <> 
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-12">
                <h4 className='py-4'>Hello Book Page One</h4>
                <Paper style={{ padding: 24 }} elevation={3}>
                  <h6>Main title here..</h6>
                   <ul>
                   {myData.map((val) =>{
                    
                      return(
                        <>
                           <li>{val.title}</li>   
                         </>
                      )
                   })}
                   </ul>
                </Paper>
              </div>
            </div>
        </div>
    </>
  )
}

export default BookOne;