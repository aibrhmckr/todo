import Home from "./views/Home";
import Login from "./views/Login";
import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoutes = ({ isLog, setIsLog }) => {
  //let IsLog=localStorage.getItem("loggd")
  //const cks =useSelector((state)=>state.Log.value.IsLog)

  return isLog === "false" ? (
    <Outlet setIsLog={setIsLog} />
  ) : (
    <Navigate to="/" setIsLog={setIsLog} />
  );
};
export default ProtectedRoutes;
{
  /* <Home setIsLog={setIsLog}/>:<Login setIsLog={setIsLog}/> */
}