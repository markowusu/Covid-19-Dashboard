import react, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoffee,faBell, faMessage, faChartSimple} from '@fortawesome/free-solid-svg-icons'

function DashHeader(){
   return(
       <div className="relative flex my-2 bg-white border-4 border-white rounded-md shadow-lg h-15 z-[-1] justify-center items-center">
           <nav className="flex flex-row items-center justify-between gap-6 p-4 space-x-60">
<div className='flex flex-row items-center justify-evenly '>
<div className='px-8 py-2 mx-4 bg-cyan-600'>
    <span > Add Patient </span>
</div>
<div className='mx-4' >
    <span> Treatments </span>
</div>
<div className='mx-4'>
    <span> Doctors </span>
</div>
<div className='mx-4'>
    <span> Help </span>
</div>

   
</div>
               <div className='flex flex-row '>
               <div className='mx-5 px-9 border-x-2'>
                   <FontAwesomeIcon icon={faChartSimple}/>
               </div>
                <div className='mx-5 border-r-2 pr-9 '>
                <FontAwesomeIcon icon={faMessage} />
                   </div>
                   
                    <div className='flex items-start justify-start -space-x-2 -space-y-3 '>
                <FontAwesomeIcon icon={faBell} />
                <div className='z-10 inline-flex items-center justify-center flex-none w-5 h-5 bg-red-400 rounded-full ring-2 ring-white'>
                       <div className='font-sans text-sm font-medium text-white'> 10 </div> 
                </div>
                   
                   </div>
                  
               </div>
           </nav>
       </div>

   );
}
export default DashHeader;