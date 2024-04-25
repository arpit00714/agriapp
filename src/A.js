import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import FarmerDashBoard from "./FarmerDashBoard";

const App=()=>{
  return(
    <>
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Layout/>}>
           <Route index element={<Home/>} />
           <Route path="farmer" element={<FarmerDashBoard/>}/>
         </Route>
       </Routes>
    </BrowserRouter>
      
    </>
  )
}
export default App;