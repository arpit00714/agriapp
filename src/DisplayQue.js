import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DisplayQue=()=>{

    const [mydata, setMydata]= useState([]);
    const myNav= useNavigate();
   
    const loadData=()=>{
        let url="http://localhost:4000/farmer";
        axios.get(url).then((res)=>{
            setMydata(res.data);
        })
    }

  useEffect(()=>{
    loadData();
  }, [])


  const repAns=(id)=>{
    myNav("../repans/"+id);
  }



const ans=mydata.map((key)=>{

    if (key.question!="")
    {
    return(
        <>
          <tr>
            <td> {key.name} </td>
            <td> {key.email} </td>
            <td> {key.contactno} </td>
            <td> {key.city} </td>
            <td> {key.question} </td>
            <td> 
                <button style={{background:"rgba(0,255,0,.3)",color:"white",padding:"2px",marginBottom:"20px"}} onClick={()=>{repAns(key.id)}}>Reply</button>

            </td>
          </tr>
        
        </>
    )
    }
});


    return(
        <>
         <h1 style={{color:"white"}}> Display Farmer Questions</h1> <br />
         <table width="100%" border="1" style={{color:"white" }} >
            <tr>
                <th> Name</th>
                <th> Email</th>
                <th> Contact no</th>
                <th> City</th>
                <th> Questions</th>
                <th></th>
            </tr>
            {ans}
         </table>
        
        </>
    )
}

export default DisplayQue;