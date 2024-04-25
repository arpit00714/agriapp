import { useNavigate, Link, Outlet } from "react-router-dom";
var farmerUser= localStorage.getItem("farmerUser");

const FarmerDashBoard=()=>{

const mynav= useNavigate();

 const farmerLogout=()=>{
    localStorage.clear();
    mynav("/");
  }


  return(
        <>
          <div id="dashboardHeader">
          <h1 style={{color:"black"}}> Welcome To Farmer DashBoard : <span style={{color:"white", textDecoration:"underline green"}}> {farmerUser} </span></h1>
           
           <a href="#" onClick={farmerLogout}>Logout</a>

          </div>
          <div id="dashboardContent">
             <div id="DashboardleftMenu">
                 <ul>
                   <li>
                    
                    <Link to="dispans" style={{color:"white"}}>  Display Answer  </Link>
                     
                     </li>
                   <li> 
                    
                    <Link style={{color:"white"}} to="farmerQuery"> Write Your Query </Link>
                    
                    </li>
                    <li>

                     <Link style={{color:"white"}} to="changepwd"> Change Password </Link>

                    </li>
                   
                 </ul>
             </div>
             <div id="DashboardRightData">
              {/* <h1 style={{color:"black"}}> Welcome To Farmer Answer</h1> */}

             
              <Outlet/>


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

export default FarmerDashBoard;