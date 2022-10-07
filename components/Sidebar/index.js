import { Divider } from "@mui/material";
import React, { useState, Component } from "react";
import iconsList from "./menuList";
import { Settings } from "@mui/icons-material";
import { faArrowRightToBracket, faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fontSize } from "@mui/system";
import classNames from "classnames";


class  Sidebar extends Component{
  constructor(){
    super();
    this.state={
      activeState: ""
    }
    this.handleClick.bind(this)
  }
  
  handleClick = (e)=>{
    // const {innerText} = e.target;
    // console.log(e,"active sidebar")
    // setActiveState({innerText});
  };

  
render(){
  return(  
  <div className={'fixed h-full  group border-white border-2 flex flex-col outline-none  z-10  bg-white shadow-md' }>
        <aside className={"p-2 pr-0 flex flex-row align-middle pt-10 mr-10"} >
        
<div className="flex flex-col justify-between align-middle ">
<div className="flex flex-col">
{ iconsList.map((menuItem,index)=>{
  return (
    <div className={classNames("w-full m-2 my-4 SidebarHover ",)} key={index} id= {(typeof window !== "undefined") ? window.location.pathname == menuItem.link ? "activeSidebar": " " : "activeSidebar" } onClick={()=>{ if(typeof window !== undefined){window.location.pathname = menuItem.link}}} >
    {menuItem.icon}
    {/* <span className="invisible">
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
  {/* <div className="m-4 font-medium text-center "> */}
  <Settings className="text-[#034363] m-4 activeSidebar"/>
  {/* </div> */}
  <FontAwesomeIcon icon={faArrowRightToBracket} className=" bottom-0  m-4  w-5 h-5 text-[#FB4B68]"/>
</div>
</div>

</div>        

        </aside>
    </div>
  );
}

}
export default Sidebar;