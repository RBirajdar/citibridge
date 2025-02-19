import React,{useState} from "react";
import * as AiIcons from "react-icons/ai"
import * as GrIcons from "react-icons/gr"
import * as BsIcons from "react-icons/bs"

export const SidebarData=[
    {
        title: "Home",
        path: "/",
        icons: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "Valid Transactions",
        path: "/valid",
        icons: <GrIcons.GrValidate/>,
        cName: "nav-text"
    },
    {
        title: "Invalid Transactions",
        path: "/invalid",
        icons: <AiIcons.AiOutlineStop/>,
        cName: "nav-text"
    },
    {
        title: "All Transactions",
        path: "/all",
        icons: <BsIcons.BsCheckAll/>,
        cName: "nav-text"
    },

]