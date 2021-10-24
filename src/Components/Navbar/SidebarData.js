import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import Form from "../Form/Form";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Publicfeed from "../Publicfeed/Publicfeed";
import University from "../University/University";
import Homepage from "../Homepage/Homepage";

export const SidebarData = [
  {
    title: "Homepage",
    path: "/",
    // icon: <FcIcons.FcHome />,
    cName: "nav-text",
  },
  {
    title: "Form",
    path: "../Form",
    // icon: <FaIcons.FaWpforms />,
    cName: "nav-text",
  },
  {
    title: "Login",
    path: "../Login",
    // icon: <AiIcons.AiOutlineLogin />,
    cName: "nav-text",
  },
  {
    title: "Publicfeed",
    path: "../Publicfeed",
    // icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Register",
    path: "../Register",
    // icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "University",
    path: "../University",
    // icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
];
