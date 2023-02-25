
import React, { useState,useEffect } from 'react'
import api from './api';


const MainAxios = () => {
    const [data,setData] = useState([]);

    useEffect(() => {
        api.get("/posts")
        .then(function (response) {
            // console.log("response data",response);
            setData(response.data);
          })
          .catch(function (error) {
            // handle error
            console.log("error",error);
          })
          .finally(function () {
            // always executed
            console.log("first")
          });
     
    }, [])
    
  return (
    <div>
        <h1>Axios with react js </h1>
        {
            data.map((value,index)=>{
                return(<div key={index}>
                    <h3 >{value.title}</h3>
                </div>
                    
                )
            })
        }
    </div>
  )
}

export default MainAxios