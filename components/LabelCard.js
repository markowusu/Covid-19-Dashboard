import React from 'react';
import classnames from 'classnames';
import {Menu} from '@headlessui/react';

  const LabelCard = (props)=>{
    
    const {text, onClick, activate, ListItems} = props;
    // console.log(ListItems,"otolege")
    return (
      <Menu as="div" className='relative flex flex-col mb-2'>
      <Menu.Button id="dropdownButton" data-dropdown-toggle="dropdown" aria-expanded="true" aria-haspopup="true" className= { classnames('text-black bg-white-700 hover:bg-white-800  font-medium rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center ',{"shadow-md":activate}) }  type="button"> {text} <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></Menu.Button>

<Menu.Items id="dropdown" className="fixed z-10 text-base text-black list-none bg-white divide-y divide-gray-300 rounded-sm shadow-md w-28">
    <ul className="z-10 py-1 " aria-labelledby="dropdownButton" tabIndex={'-1'} role="menu" aria-orientation="vertical" >
    
   { ListItems.map(function (list,id){
       return(
         <li key={id}>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-300 " onClick={onClick} data-value={list.data}>{list.value}</a>
        </li>
       )
     
    }
    )}

    </ul>
</Menu.Items>

    </Menu>  
    ); 
}

export default LabelCard;