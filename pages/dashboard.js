import React from 'react';
import DashLayout from '../components/DashLayout';
import { ChevronRightRounded, DangerousRounded, Person } from '@mui/icons-material';
import CardList from '../components/CardList';
import { VerifiedRounded , HomeMaxRounded} from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCircleCheck, faL } from '@fortawesome/free-solid-svg-icons';
import { MonitorHeartRounded } from '@mui/icons-material';
import { faShield } from '@fortawesome/free-solid-svg-icons';
import { faCommentMedical } from '@fortawesome/free-solid-svg-icons'; 
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { MoreHorizRounded } from '@mui/icons-material';
import { faShieldVirus } from '@fortawesome/free-solid-svg-icons';
import { faBookMedical } from '@fortawesome/free-solid-svg-icons';
import {Line} from 'react-chartjs-2';


import {Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Tooltip,
    Legend} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets:[{
    data: [450,350,550,420,480,600,590,650],
    borderColor: '#F17E82',
    backgroundColor: '#FDEDED'  ,
    pointRadius: 0,
    borderWidth:2,

    tension: 0.3,
    fill:true,
      
      },  ],
}
const data1 = {
    labels,
    datasets:[{
        pointRadius: 0,
    data: [450,350,550,420,480,600,590,650].reverse(),
    borderColor: '#389CFA',
    backgroundColor: '#EBF5FE' ,
    borderWidth:2,
    tension: 0.3,
    fill:true,
      
      },  ],
}

const options1 = {
    scales:{
        
        x:{ 
            ticks: {
                //option 2, use callback to change labels to empty string
                callback: () => ('')
              },
              grid: {
                display: false,
                zeroLineColor:'white',
                  color:'transparent',
                  drawBorder: false 

              }
        },
        y:{
            ticks: {
                //option 2, use callback to change labels to empty string
                callback: () => ('')
              },
              grid: {
                display: false,
                zeroLineColor:'white',
                  color:'transparent',
                  drawBorder: false 
              }
            }
      
    },
    responsive: true,
    plugins: {
        legend: {
          display: false,
        }
    },
    title:{
        display: false,
        title:"Area chart"
    }
};

const options = {
    scales:{
       
        x:{ 
            ticks: {
                //option 2, use callback to change labels to empty string
                callback: () => ('')
              },
              grid: {
                display: false,
                zeroLineColor:'white',
                  color:'transparent',
                  drawBorder: false 

              }
        },
        y:{
            ticks: {
                //option 2, use callback to change labels to empty string
                callback: () => ('')
              },
              grid: {
                display: false,
                zeroLineColor:'white',
                  color:'transparent',
                  drawBorder: false 
              }
            }
      
    },
    responsive: true,
    plugins: {
        legend: {
          display: false,
        }
    },
    title:{
        display: false,
        title:"Area chart"
    }
}

const Dashboard = ()=>{
return (
<DashLayout>
    <div className='flex flex-row flex-auto gap-6 '>
    <div className='relative flex-none flex-grow w-3/5 '>
    <div className='flex items-center justify-between '>
    <div className='align-middle headerText'> DASHBOARD  </div>
        <span className='leftIConCard'><MoreHorizRounded/></span>
    </div>

    <div className='flex space-x-6 bg-[#ffff] border-2 items-center justify-center p-3 border-[#ffff] shadow-md rounded-md'>
    <div className="items-center max-w-sm  space-x-2 border-transparent bg-[#fffffff8] sm:py-4 sm:flex">
       <Person className='w-10 h-10 font-medium bg-red-400 rounded-full fill-white shrink-0'/>
       <div className='space-y-0.5'>
       <p className='font-medium text-slate-400 text-md'> Total Patients</p>
           <p className='font-semibold text-slate-800'> 2004</p>
       </div>
           
       </div> 
       <div className="items-center max-w-sm space-x-2 border-transparent bg-[#fffffff8] sm:py-4 sm:flex">
       <VerifiedRounded className='w-10 h-10 font-medium bg-orange-400 rounded-full fill-white shrink-0'/>
       <div className='space-y-0.5'>
       <p className='font-medium text-slate-400 text-md'> Total Staff</p>
           <p className='font-semibold text-slate-800'> 2004</p>
       </div>
           
       </div>
       <div className="items-center max-w-sm space-x-2 bg-white border-transparent sm:py-4 sm:flex">
       <HomeMaxRounded className='w-10 h-10 rounded-full fill-white bg-cyan-400 shrink-0'/>
       <div className='space-y-0.5'>
       <p className='font-medium text-slate-400 text-md'> Total Rooms</p>
           <p className='font-semibold text-slate-800'> 2004</p>
       </div>
           
       </div>
       <div className="items-center max-w-sm space-x-2 bg-white border-transparent sm:py-4 sm:flex">
       <FontAwesomeIcon icon={faHeartCircleCheck} className='w-10 h-10 bg-blue-400 rounded-full fill-white shrink-0' style={{ color:"#ffff"}} />
       <div className='space-y-0.5'>
       <p className='font-medium text-slate-400 text-md'> Total Cars</p>
           <p className='font-semibold text-slate-800'> 2004</p>
       </div>
           
       </div>
       </div>
    </div>
    <div className='relative flex-auto'>
        <div className='flex items-center justify-between flex-auto mt-1 align-middle'>
           <p className='headerText'>REPORTS</p>
            <span className='p-1 leftIConCard'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-4 h-4 m-0 font-medium bg-white ">
            <path fillRule="evenodd" clipRule="evenodd" d="M21 6h-7.79a4.001 4.001 0 00-7.42 0H3v3h2.79a4.001 4.001 0 007.42 0H21V6zm-10.21 9H3v3h7.79a4.001 4.001 0 007.42 0H21v-3h-2.79a4.001 4.001 0 00-7.42 0z" fill="gray">
                
            </path>
            </svg>
            </span>
        </div>
        
        <div className="flex flex-col space-y-3">
            <div className='p-4  border-2 border-white bg-[#fff] space-y-1 shadow-md'>
            <div className='flex items-start justify-between'>
            <div className='flex space-x-10 sm: sm:items-center'>
            <div className="flex flex-col justify-center w-10 h-10 align-middle bg-blue-100 rounded-full item-center">
               <FontAwesomeIcon  icon={faBookMedical} className='w-5 h-5 mx-auto rounded-full m sm:shrink-0 '/>
               </div>
                <div className='flex flex-col sm:flex'>
                
                <p className=''>
                    2nd Floor Bathroom Hod
                </p>

                <div className='text-sm font-semibold text-slate-400'>
                    Administration Room
                </div>
                </div>
            </div>
            <div className="leftIConCard"><FiberManualRecordIcon className='w-[5px] h-[5px]'/> <FiberManualRecordIcon className='w-[5px] h-[5px]'/></div>

            
                </div>
                
                <div className='flex items-center justify-between '>
                <div className='font-sans text-sm font-medium text-slate-500'>
                    1 minute ago 
                </div>
                <div className='font-sans text-sm font-semibold text-cyan-400'>
                    DETAILS <ChevronRightRounded/>
                </div>
                    
                </div>
            </div>


            <div className='p-4  border-2 border-white bg-[#fff] space-y-1 shadow-md'>
            <div className='flex items-start justify-between'>
            <div className='flex space-x-10 sm: sm:items-center'>
            <div className="flex flex-col justify-center w-10 h-10 align-middle bg-red-100 rounded-full item-center">
               <FontAwesomeIcon  icon={faShieldVirus} className='w-5 h-5 mx-auto rounded-full m sm:shrink-0 '/>
               </div>
                <div className='flex flex-col sm:flex'>
                
                <p className=''>
                    COVID-19 updates and Records...
                </p>

                <div className='text-sm font-semibold text-slate-400'>
                    Laboratory Room
                </div>
                </div>
            </div>
            <div className="leftIConCard"><FiberManualRecordIcon className='w-[5px] h-[5px]'/> <FiberManualRecordIcon className='w-[5px] h-[5px]'/></div>

            
                </div>
                
                <div className='flex items-center justify-between '>
                <div className='font-sans text-sm font-medium text-slate-500'>
                    1 minute ago 
                </div>
                <div className='font-sans text-sm font-semibold text-cyan-400'>
                    DETAILS <ChevronRightRounded/>
                </div>
                    
                </div>
            </div>
            
            <div className='p-4  border-2 border-white bg-[#fff] space-y-1 shadow-md'>
            <div className='flex items-start justify-between'>
            <div className='flex space-x-10 sm: sm:items-center'>
               <div className="flex flex-col justify-center w-10 h-10 align-middle bg-green-100 rounded-full item-center">
               <FontAwesomeIcon  icon={faCommentMedical} className='w-5 h-5 mx-auto rounded-full m sm:shrink-0 '/>
               </div>
                <div className='flex flex-col sm:flex'>
                
                <p className=''>
                   Borownout in The
                </p>

                <div className='text-sm font-semibold text-slate-400'>
                    Administration Room
                </div>
                </div>
            </div>
            <div className="leftIConCard"><FiberManualRecordIcon className='w-[5px] h-[5px]'/> <FiberManualRecordIcon className='w-[5px] h-[5px]'/></div>

            
                </div>
                
                <div className='flex items-center justify-between '>
                <div className='font-sans text-sm font-medium text-slate-500'>
                    5 minute ago 
                </div>
                <div className='font-sans text-sm font-semibold text-cyan-400'>
                    DETAILS <ChevronRightRounded/>
                </div>
                    
                </div>
            </div>
        </div>

        <div className='flex flex-row items-center justify-between mt-5'>
            <p className="headerText">
                COVID CASES
            </p>
            <div className="leftIConCard"><FiberManualRecordIcon className='w-[5px] h-[5px]'/> <FiberManualRecordIcon className='w-[5px] h-[5px]'/></div>  
        </div>
        
        <div className='p-4  border-2 border-white bg-[#fff] space-y-1 shadow-md'>
            <div className='flex flex-col items-center justify-center'>
            <div className='flex justify-between'>
            <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-[60px] h-[60px] border-white rounded-full bg-blue-50 mr-5">
            <FontAwesomeIcon icon={faArrowDown} className="absolute text-blue-500 max-auto "/>

            </div>
            <div className="flex flex-col items-start justify-start ">
                <p className='font-sans text-sm font-semibold text-slate-500'>
                    Downward
                </p>
                <p className='font-sans text-base font-semibold text-slate-500'>
                    1,200
                </p>
                </div>
                <div className='w-[180px] ml-12'>
                    <Line options={options} data={data1} />
                </div>
            </div>
            </div>
            <div className='flex justify-between'>
            <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-[60px] h-[60px] border-white rounded-full bg-red-50 mr-5">
            <FontAwesomeIcon icon={faArrowUp} className="absolute text-red-500 max-auto"/>

            </div>
            <div className="flex flex-col items-start justify-start ">
                <p className='font-sans text-sm font-semibold text-slate-500'>
                    Upward
                </p>
                <p className='font-sans text-base font-semibold text-slate-500'>
                    2,300
                </p>
                </div>
                <div className='w-[180px] ml-12'>
                    <Line options={options1} data={data} />
                </div>
            </div>
            </div>
            </div>
            </div>

       

        
        
    </div>

    </div>
</DashLayout>
);

}

export default Dashboard;