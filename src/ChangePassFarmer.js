import { useState } from "react";
import  axios  from "axios";

let fid = localStorage.getItem("farmerID");

const ChangePassFarmer = () => 
{
    const [oldpwd, setOldpwd] = useState("");
    const [newpwd, setNewpwd] = useState("");
    const [renewpwd, setReNewpwd] = useState("");

    const handleSubmit = () => {
        let url = `http://localhost:4000/farmer/${fid}`;
        axios.get(url).then((res)=>
        {
           if(oldpwd==res.data.password)
           {
            if(newpwd!=renewpwd)
            {
                alert("Password does not Match");
            }
            else
            {
                axios.patch(url, {password:newpwd}).then((res)=>{
                    alert("Password Sucessfully Updated!!");
                })
            }
           }
           else{
            alert("old Password Does not Match!");
           }
        });
    }
    return(
        <>
        <h1 style={{color:"white"}}> Change Your Password </h1>
          <br /><br /><br />
        <div id="ChangePwd" style={{width:"400px",marginLeft:"270px"}}>

            Enter Old Password : <input style={{padding:"3px" ,borderRadius:"5px"}} type="password" name="oldpwd" value={oldpwd} onChange={(e)=>{setOldpwd(e.target.value)}} />
            <br /><br />
            Enter New Password : <input style={{padding:"3px" ,borderRadius:"5px"}} type="password" name="newPwd" value={newpwd} onChange={(e)=>{setNewpwd(e.target.value)}} />
            <br /><br />
            ReEnter New Password : <input style={{padding:"3px" ,borderRadius:"5px"}} type="password" name="renewPwd" value={renewpwd} onChange={(e)=>{setReNewpwd(e.target.value)}} />
           <br />
         
          <button style={{padding:"6px"}} onClick={handleSubmit}>Save!</button>
        </div>
        </>
    )
}

export default ChangePassFarmer;