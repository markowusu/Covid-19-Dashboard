import { Divider } from "@mui/material";
import React from "react";
import iconsList from "./menuList";
import { Settings } from "@mui/icons-material";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fontSize } from "@mui/system";


function Sidebar (){
  return(  
  <div className={'  group border-white border-2 flex flex-col w-24   outline-none  z-10  bg-white shadow-md' }>
        <aside className={"p-2 pr-0 flex flex-row align-middle pt-10 "} >
        
<div className="flex flex-col justify-between align-middle ">
<div className="flex flex-col">
{ iconsList.map((menuItem,index)=>{
  return (
    <div className="m-2 my-4 activeSidebar" key={index}>
    {menuItem.icon}
    {/* <span className="invisible w-full px-5 text-lg font-normal text-center group-hover:visible">
     { menuItem.iconName}
    </span> */}
    <br/>
  </div>
  );
})
}
</div>


<div className="absolute bottom-0 left-0 flex flex-col mb-10 align-center">


<div className="flex flex-col items-center justify-center align-middle">
<div></div>
  <div className="m-4 font-medium text-center ">
  <Settings /> <span className="invisible my-4"> Settings</span>
  </div>
  <FontAwesomeIcon icon={faChevronCircleLeft} className="absolute bottom-0 group-hover:bottom-0 group-hover:-right-24 right-4 group-hover:items-center group-hover:mt-10"/>
</div>
</div>

</div>        

        </aside>
    </div>
  );

}
export default Sidebar;