import axios from "axios";
import { useState, useEffect } from "react";

let farmerId= localStorage.getItem("farmerID");

const DisplayAns=()=>{

    const [mydata, setMydata]= useState({});


    const loadData=()=>{
        let url=`http://localhost:4000/farmer/${farmerId}`;
        axios.get(url).then((res)=>{
            setMydata(res.data);
        });
    }

    useEffect(()=>{
        loadData();
    }, []);


    return(
        <>
        <br /><br />
         <h2 style={{color:"green" ,border:"3px solid",borderRadius:"8px"}}> Answer Reply By Agriculture Department</h2>
         <br /> <br />
         <h2> <span style={{color:"#52934D"}}>  Your Question:</span> <span style={{color:"#4CCD99" ,fontSize:"18px",fontStyle:"italic"}}> {mydata.question} </span></h2> <br />
         <h2> <span style={{color:"#52934D"}}> Answer Reply by Admin : </span> <span style={{color:"#4CCD99",fontSize:"18px",fontStyle:"italic"}}> {mydata.answer} </span> </h2>
        
        </>
    )
}

export default DisplayAns;