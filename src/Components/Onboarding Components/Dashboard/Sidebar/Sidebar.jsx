import React from 'react'

// BOOTSTRAP IMPORTS
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarMenuItem,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBSidebarFooter,
    CDBIcon
  } from 'cdbreact';

// CSS IMPORT 
import './Sidebar.css'

import logo from "../../Dashboard/img/logo-pic.png"

export const Sidebar = () => {
  return (
    <>
<CDBSidebar style={{ height: "619px", backgroundColor: "white"}}>
        <CDBSidebarHeader prefix={<i className="fa fa-bars" style={{color: "#7240c9", marginTop: "15px"}}/>}><img src={logo} alt="Logo" className='logo-pic'/></CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu style={{padding: "2%"}}>
            <CDBSidebarMenuItem icon="fa fa-home" style={{backgroundColor: "#7240c9", color: "white", border: "2px solid #a687dd", borderRadius: "10px"}}>Dashboard</CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{padding: '20px 5px'}}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </>
  )
}
