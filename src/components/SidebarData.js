import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "post requirements",
    path: "/",
    icon: <AiIcons.AiOutlineBell />,
    cName: "nav-text",
  },
  {
    title: "Post add",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Post Service",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Notification",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Near Me",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "Pricing",
    path: "/support",
    icon: <AiIcons.AiFillTag />,
    cName: "nav-text",
  },
  {
    title: "LOGIN/SIGN UP",
    path: "/support",
    icon: <AiIcons.AiOutlineLogin />,
    cName: "nav-text",
  },
];
