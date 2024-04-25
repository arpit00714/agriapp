import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home=()=>{
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    const [usertype, setUsertype]= useState("Farmer");    
    const myNav= useNavigate();
    const handleSubmit=(e)=>{
         if (usertype=="Farmer")
         {
           let url=`http://localhost:4000/farmer/?userid=${username}`;
           axios.get(url).then((res)=>{
              if (res.data.length>=1)
              {
                 if (res.data[0].password==password)   
                 {
                    localStorage.setItem("farmerUser",res.data[0].name);
                    localStorage.setItem("farmerID", res.data[0].id);
                    myNav("farmer");
                 }             
                 else 
                 {
                    alert("Invalid Password!!!");
                 }

              }
              else 
              {
                alert("Invalid User ID!");
              }
           })
         }
         else 
         {
           let url=`http://localhost:4000/admin/?adminid=${username}`;
           axios.get(url).then((res)=>{
                if (res.data.length>=1)
                {
                    if (res.data[0].password==password)
                    {
                       localStorage.setItem("AdminUser", res.data[0].name);
                       localStorage.setItem("AdminID",res.data[0].id);

                       myNav("admin");
                    }
                    else 
                    {
                      alert("Invalid Password!!!");
                    }
                } 
                else 
                {
                  alert("Invalid User ID");
                }  
           })
            
         }
    }

  return (
    <>
      <div id="wrapper">
        <div id="header">
          <center><h2 style={{color:"white", padding:"30px"}}>We Are Here To Solve The Problems Of Farmers</h2></center>
          <img  id="im1" src="images/5994257.png" alt="not found" />
        </div>

        <form id="frm" action="">
          <div class="login-form">
            <div class="text">LOGIN</div>
            <form>
              <div class="field">
                <div class="fas fa-envelope">
                  <CiMail />
                </div>
                <input
                  type="text"
                  name="username"
                  id="first"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  placeholder="UserName"
                   required />
              </div>
              <div class="field">
                <div class="fas fa-lock">
                  <RiLockPasswordLine />
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                  required
                />
              </div>

              <div class="field">
                <label style={{color:"#868686", marginRight:"5px"}}>Login As : </label> 
                <select
                    name="usertype"
                    value={usertype}
                    placeholder="Login As:"
                    onChange={(e) => {
                      setUsertype(e.target.value);
                    }}
                  > 
                  <option>Farmer</option>
                  <option>Admin</option>
                </select>
              </div>

              <button type="submit" onClick={handleSubmit}>
                LOGIN
              </button>
              <div class="link">
                If Farmer is Not Registered ?
                <Link to="farmerregistration">
                Signup now For Farmer
              </Link>
               <br /> <br />
               If Admin is Not Registered ?
              <Link to="adminregistration">
                Create an Admin 
              </Link>
              </div>
            </form>
          </div>
        </form>

        <div id="footer">
          <center>
            <h2>www.kishanYojnaApp.com</h2>
          </center>
        </div>
      </div>
    </>
  );
};

export default Home;
