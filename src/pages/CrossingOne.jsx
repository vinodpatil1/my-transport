import React, { useEffect, useState } from 'react'
import Navbar from '../../Navbar';
import Paper from '@mui/material/Paper';
import axios  from 'axios';

const CrossingOne = () => {

const [myData, setData] = useState([]);

useEffect(()=>{
   axios.get("https://dummyjson.com/recipes")
 
    .then((response) =>  setData(response.data.recipes));
   

 },[])



  return (
    <> 
        <Navbar/>
        <div className="container booktwo">
            <div className="row">
                <div className="col-12">
                <h4 className='py-4'>Hello Crossing Page One</h4>
                <Paper style={{ padding: 24 }} elevation={3}>
                  <h6>Main title here..</h6>
                  <div className="row">
                   {myData.map((val) =>{
                      return(
                        <>
                        <div className="col-12 col-md-4 col-lg-4">
                        <div className="card p-3 my-3">
                           <h5>Recipes: {val.name}</h5>   
                           <h5>Cuisine: {val.cuisine}</h5>   
                           <p>ingredients: 
                             <ul>
                                <li>{val.ingredients[0]}</li>
                                <li>{val.ingredients[1]}</li>
                                <li>{val.ingredients[2]}</li>
                                <li>{val.ingredients[3]}</li>
                                <li>{val.ingredients[4]}</li>
                                <li>{val.ingredients[5]}</li>
                             </ul>
                           </p>
                           
                           <p>difficulty: {val.difficulty}</p>
                          
                          
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

export default CrossingOne;