import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { Routes,Route, useLocation } from "react-router-dom";
import Details from "./components/Details";
import { Link } from "react-router-dom";
import Create from "./components/Create";
import Edit from "./components/Edit";

function App() {
  const{search,pathname}=useLocation();
  // console.log(pathname);
  // console.log(search);
  return (
    <>

   
      <div className="h-screen w-screen flex ">
      {(search.length > 0  || pathname != "/")&& <Link to='/' className="text-red-500 text-xl font-semibold  w-fit h-fit b absolute top-[2%] left-[25%]">Go Home</Link>}
        
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
