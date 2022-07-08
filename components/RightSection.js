import { VerifiedRounded , HomeMaxRounded} from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCircleCheck, faHouse, faShieldHalved, faShieldHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { MoreHorizRounded } from '@mui/icons-material';
import { ChevronRightRounded, DangerousRounded, Person } from '@mui/icons-material';
import classNames from 'classnames';
import { MonitorHeartRounded } from '@mui/icons-material';
import { faShield } from '@fortawesome/free-solid-svg-icons';
import HeaderSection from '../components/HeaderSection';
import Card from "../components/Card";



export const   RightSection =(props)=>{
        console.log(props.cases)
        return (
            <div className='relative flex-none flex-grow w-3/5 '>
    
            <HeaderSection>
            <div className='align-middle headerText'> DASHBOARD  </div>
                <span className='leftIConCard'><MoreHorizRounded/></span>
            </HeaderSection>
        
            <div className='flex space-x-6 bg-[#ffff] border-2 items-center justify-center p-3 border-[#ffff] shadow-md rounded-md'>
            <div className="items-center max-w-sm  space-x-2 border-transparent bg-[#fffffff8] sm:py-4 sm:flex">
               {/* <Person className='w-10 h-10 font-medium bg-red-400 rounded-full fill-white shrink-0'/> */}
               <div className = {classNames("flex flex-col justify-center w-10 h-10 align-middle  rounded-full item-center bg-red-500" )}>
               <FontAwesomeIcon icon={faUser} className='w-5 h-5 mx-auto text-white rounded-full sm:shrink-0'/>
                   
               </div>
               <div className='space-y-0.5'>
               <p className='font-medium text-slate-400 text-md'> Total Patients</p>
                   <p className='font-semibold text-slate-800'> 2004</p>
               </div>
                   
               </div> 
               
               <div className="items-center max-w-sm space-x-2 border-transparent bg-[#fffffff8] sm:py-4 sm:flex">
               <div className = {classNames("flex flex-col justify-center w-10 h-10 align-middle  rounded-full item-center bg-orange-500" )}>
               <FontAwesomeIcon icon={faShieldHalved} className='w-5 h-5 mx-auto text-white rounded-full sm:shrink-0'/>
                   
               </div>
               <div className='space-y-0.5'>
               <p className='font-medium text-slate-400 text-md'> Total Staff</p>
                   <p className='font-semibold text-slate-800'> 2004</p>
               </div>
                   
               </div>
               
               <div className="items-center max-w-sm space-x-2 bg-white border-transparent sm:py-4 sm:flex">
               <div className = {classNames("flex flex-col justify-center w-10 h-10 align-middle  rounded-full item-center bg-emerald-500" )}>
               <FontAwesomeIcon icon={faHouse} className='w-5 h-5 mx-auto text-white rounded-full sm:shrink-0'/>
                   
               </div>
               <div className='space-y-0.5'>
               <p className='font-medium text-slate-400 text-md'> Total Rooms</p>
                   <p className='font-semibold text-slate-800'> 2004</p>
               </div>
                   
               </div>
               
               <div className="items-center max-w-sm space-x-2 bg-white border-transparent sm:py-4 sm:flex">
               <div className = {classNames("flex flex-col justify-center w-10 h-10 align-middle  rounded-full item-center bg-blue-500" )}>
               <FontAwesomeIcon icon={faShieldHeart} className='w-5 h-5 mx-auto text-white rounded-full sm:shrink-0'/>
                   
               </div>
               <div className='space-y-0.5'>
               <p className='font-medium text-slate-400 text-md'> Total Cars</p>
                   <p className='font-semibold text-slate-800'> 2004</p>
               </div>
                   
               </div>
               
               </div>
               
               <HeaderSection>
            <div className='mt-4 align-middle headerText'> PATIENT STATISTICS  </div>
                <span className='leftIConCard'><MoreHorizRounded/></span>
            </HeaderSection>
            <Card cases = {props.cases} />
               
            </div>
        );
};
