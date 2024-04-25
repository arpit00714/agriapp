import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const ReplyAns=()=>{

    const [msg, setMsg]= useState("");

    const {id} = useParams();


    const handleSubmit=()=>{
        let url=`http://localhost:4000/farmer/${id}`;
        axios.patch(url, {answer:msg}).then((res)=>{
            alert("Reply Succesfully send to Farmer");
        })
    }


    return(
        <>
         <h1> Reply Your Answer:</h1> <br /><br />
         <textarea rows="10" cols="65" style={{borderRadius:"10px",boxShadow:"0px 0px 25px green"}}  value={msg} onChange={(e)=>{setMsg(e.target.value)}}  />
         <br/>
         <button style={{width:"120px",height:"35px"}} onClick={handleSubmit}> Reply Answer</button>
        </>
    )
}

export default ReplyAns;