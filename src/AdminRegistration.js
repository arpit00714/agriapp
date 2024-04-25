import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AdminRegistration=()=>{
   
    const myNav= useNavigate();
    const [input, setInput]= useState({});

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
    }

   const handleSubmit=()=>{
    let url="http://localhost:4000/admin";
    axios.post(url, {...input, question:"", answer:""}).then((res)=>{
        alert("Admin Succesfully registered!!!");
        myNav("/");

    })
   }


    return(
      <>      
      <div id="wrapper">
        <div id="header">
           <h1 style={{color:"white" ,textAlign:"center"}}>New Admin Registration Form</h1> 
           <img src="images/5994257.png" width="100"/>
        </div>
       <div id="loginbox">
        
       <div class="main">
<br />
          <h3 style={{color:"white"}}>Enter your login credentials</h3>
         <br /><br />
          
              <input type="text"
                     id="first"
                     name="name"  value={input.name} onChange={handleInput}
                     placeholder="Enter Name" required />
                   <br />
              <input type="text"
                     id="first"
                     name="adminid" value={input.adminid} onChange={handleInput}
                     placeholder="Enter AdminID" required />
             <br />
                <input type="password"
                     id="first"
                     name="password" value={input.password} onChange={handleInput}
                     placeholder="Enter your passwword" required />
                     
                  <button onClick={handleSubmit}>
                      Submit
                  </button>
              </div>
      </div>
       </div>
     
     <div id="footer">
     
     </div>     
      </>
    )
  }
  export default AdminRegistration;