import React, { useState } from "react"
import { Box, useMediaQuery } from "@mui/material"
import {Outlet} from "react-router-dom"
import { useSelector} from "react-redux"
import Navbar from "../components/NavbarAdmin"
import Sidebar from "../components/Sidebar"
import MainDashboard from "./admin/MainDashboard"

const Layout = ({user}) => {
  const isNonMobile = useMediaQuery("(min-width: 600px)")
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  console.log("user",user)
    return (
     <Box display = {isNonMobile ? "flex" : "block"} width = "100%" height = "100%">
        <Sidebar
        user = {user}
        isNonMobile = {isNonMobile}
        drawerWidth = "250px"
        isSidebarOpen = {isSidebarOpen}
        setIsSidebarOpen = {setIsSidebarOpen}
        />

      <Box flexGrow={1}>
        <Navbar
          user={user}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </Box>
      <MainDashboard/>
      </Box>

    );
  };
  
  export default Layout;
