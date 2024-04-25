import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

var AdminUser= localStorage.getItem("AdminUser");


const AdminDashBoard=()=>{

const mynav= useNavigate();



  const AdminLogout=()=>{
    localStorage.clear();
    mynav("/");
  }


  return(
        <>
          <div id="dashboardHeader">
          <h1 style={{color:"black"}}> Welcome To Admin DashBoard : <span style={{color:"white", textDecoration:"underline"}} >{AdminUser}</span></h1>
           
           <a href="#" onClick={AdminLogout}>Logout</a>

          </div>
          <div id="dashboardContent">
             <div id="DashboardleftMenu">
                 <ul>
                   <li> 
                    
                      <Link style={{color:"white"}} to="displayQue"> Display Questions By Farmer </Link>
                    
                    </li>
                   {/* <li> Write Your Query</li> */}
                   <li> 
                     <Link style={{color:"white"}} to="changePssAdmin" > Change Password </Link>
                     </li>
                 </ul>
             </div>
             <div id="DashboardRightData">
            
               
                <Outlet />

             </div>
          </div>


         <div id="dashboardFooter">
         <center>
            <h2>www.kishanYojnaApp.com</h2>
          </center>
         </div>

        </>
    )
}

export default AdminDashBoard;