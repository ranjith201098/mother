import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import axios from "axios";
import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Cookies from "universal-cookie";
import { BiLogOutCircle } from "react-icons/bi";
import "./Sidebar.css";

const Sidebar = () => {
  const coo_kies = new Cookies();
  const home_ref = useRef(0);
  const [employeForm_hide, setemployeForm_hide] = useState(false);
  const [employeForm_hide1, setemployeForm_hide1] = useState(false);
  const [employeForm_hide2, setemployeForm_hide2] = useState(false);
  const [employeForm_hide3, setemployeForm_hide3] = useState(false);
  const [employeForm_hide4, setemployeForm_hide4] = useState(false);
  const [employeForm_hide5, setemployeForm_hide5] = useState(false);
  const [employeForm_hide6, setemployeForm_hide6] = useState(false);

  const menu_open = useRef(0);
  const UserDetailsref = useRef(0);
  const [time, settime] = useState("");
  const navigate = useNavigate();
  let location = useLocation();
  const pathname = location.pathname;
  const path = location.pathname;
  const _data1 = location.state;
  const LogoutFuntion = () => {
    coo_kies.remove("Token");
    alert("Logout successfully");
    navigate("/");
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      coo_kies.remove("Token");
      settime("value");
    }, 5550000);
  }, []);
  const EmployeForm_ref = useRef(0);
  useEffect(() => {
    axios.get("http://localhost:4000/get/checked/data").then((res) => {
      let tim = res.data.use_details;
      let tim2 = tim.trim();

      if (res.data.emplyee_form == "true") {
        setemployeForm_hide(true);
      }
      if (res.data.ta_ble == "true") {
        setemployeForm_hide1(true);
      }
      if (tim2 == "true") {
        setemployeForm_hide2(true);
      }
      if (res.data.contact_us == "true") {
        setemployeForm_hide3(true);
      }
      if (res.data.about_us == "true") {
        setemployeForm_hide4(true);
      }
      if (res.data.regis_form == "true") {
        setemployeForm_hide5(true);
      }
      if (res.data.not_page == "true") {
        setemployeForm_hide6(true);
      }
    });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          overflow: "scroll initial",
        }}
      >
        <CDBSidebar
          className="sidebar_top_header"
          textColor="#fff"
          backgroundColor="blue"
        >
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
              className="text-decoration-none"
              style={{ color: "inherit", fontSize: "30px" }}
            >
              Sidebar
            </a>
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink
                exact
                to="/contacts/home"
                activeClassName="activeClicked"
              >
                {employeForm_hide && (
                  <CDBSidebarMenuItem icon="columns" ref={EmployeForm_ref}>
                    Employee Form
                  </CDBSidebarMenuItem>
                )}
              </NavLink>
              <NavLink
                exact
                to="/contacts/about"
                activeClassName="activeClicked"
              >
                {employeForm_hide1 && (
                  <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
                )}
              </NavLink>
              <NavLink
                exact
                to="/contacts/userdetails"
                activeClassName="activeClicked"
              >
                {employeForm_hide2 && (
                  <CDBSidebarMenuItem icon="user">
                    UseDetails
                  </CDBSidebarMenuItem>
                )}
              </NavLink>
              <NavLink
                exact
                to="/contacts/contactus"
                activeClassName="activeClicked"
              >
                {employeForm_hide3 && (
                  <CDBSidebarMenuItem icon="chart-line">
                    Contact Us
                  </CDBSidebarMenuItem>
                )}
              </NavLink>

              <NavLink
                exact
                to="/contacts/harish"
                activeClassName="activeClicked"
              >
                {employeForm_hide4 && (
                  <CDBSidebarMenuItem icon="exclamation-circle">
                    About us
                  </CDBSidebarMenuItem>
                )}
              </NavLink>

              <NavLink
                exact
                to="/contacts/registerform"
                activeClassName="activeClicked"
              >
                {employeForm_hide5 && (
                  <CDBSidebarMenuItem icon="exclamation-circle">
                    RegistrationForm
                  </CDBSidebarMenuItem>
                )}
              </NavLink>
              <NavLink
                exact
                to="/contacts/practish"
                activeClassName="activeClicked"
              >
                {employeForm_hide6 && (
                  <CDBSidebarMenuItem icon="exclamation-circle">
                    404 Page
                  </CDBSidebarMenuItem>
                )}
              </NavLink>
              <NavLink
                exact
                to="/contacts/whatsapp"
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem icon="exclamation-circle">
                  {" "}
                    Whats app{" "}
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exact
                to="/contacts/website"
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem icon="exclamation-circle">
                  {" "}
                  select Page{" "}
                </CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: "center" }}>
            <div
              style={{
                padding: "20px 5px",
              }}
            >
              <div className="topnave">
                <button onClick={LogoutFuntion}>
                  <span>Logout</span>
                  <BiLogOutCircle />
                </button>
              </div>
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
