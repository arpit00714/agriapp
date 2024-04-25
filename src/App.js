import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import FarmerDashBoard from "./FarmerDashBoard";
import AdminDashBoard from "./AdminDashBoard";
import FarmerQuery from "./FarmerQuery";
import FarmerRegistration from "./FarmerRegistration";
import AdminRegistration from "./AdminRegistration";
import DisplayQue from "./DisplayQue";
import ReplyAns from "./ReplyAns";
import DisplayAns from "./DisplayAns";
import ChangePassFarmer from "./ChangePassFarmer";
import ChangepassAdmin from "./ChangepssAdmin";


const App=()=>{
  return(
    <>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Layout/>}>
           <Route index element={<Home/>} />
           <Route path="farmerregistration" element={<FarmerRegistration/>}/>
           <Route path="adminregistration" element={<AdminRegistration />} />
            <Route path="farmer" element={<FarmerDashBoard/>}>
              <Route path="farmerQuery" element={<FarmerQuery/>}/>
              <Route path="dispans" element={<DisplayAns/>} />
              <Route path="changepwd" element={<ChangePassFarmer/>}/>

            </Route>

           <Route path="admin" element={<AdminDashBoard/>} >
              <Route path="displayQue" element={<DisplayQue/>} />
              <Route path="repans/:id" element={<ReplyAns/>} />
              <Route path="changePssAdmin" element={<ChangepassAdmin/>} />
            </Route>
 

         </Route>
       </Routes>
    </BrowserRouter>
      
    </>
  )
}
export default App;