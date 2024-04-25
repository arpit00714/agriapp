import { useState } from "react";
import axios from "axios";

 let id =localStorage.getItem("farmerID");

const FarmerQuery=()=>{

    const [query, setQuery]= useState("");

    const handleSubmit=()=>{
        let url=`http://localhost:4000/farmer/${id}`;
     axios.patch(url, {question:query}).then((res)=>{

        alert("Your Question succesfully submited!");
     })
    }

    return(
        <>
        <br /><br />
         <h2> Write Your Query</h2>
              <br />
         <textarea style={{borderRadius:"10px",boxShadow:"0px 0px 15px green"}} rows="9" cols="65" name="query" onChange={(e)=>{setQuery(e.target.value)}} />
         <br />
         <button style={{width:"100px",padding:"5px",background:"green"}}
         onClick={handleSubmit}> Submit </button>
        
        </>
    )
}

export default FarmerQuery;