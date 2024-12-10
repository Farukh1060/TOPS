import React from "react";
import { Outlet } from "react-router-dom";

import Topbar from "./Component/Topbar";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Productcontexprovider from "./Store/App_store";

const App = () => {


  
  return (
    <Productcontexprovider>

       <Topbar></Topbar>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>

    </Productcontexprovider>
    
     
      
  );
};

export default App;
