import React from 'react';
import DashLayout from '../components/DashLayout';
import CardList from '../components/CardList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChevronRightRounded, DangerousRounded, Person, Report } from '@mui/icons-material';
import { ReportCard  } from '../components/ReportCard/ReportCard';
import { faCommentMedical } from '@fortawesome/free-solid-svg-icons'; 
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { faShieldVirus } from '@fortawesome/free-solid-svg-icons';
import ReportList from '../components/ReportCard/reportList';
import { faBookMedical } from '@fortawesome/free-solid-svg-icons';
import {Line} from 'react-chartjs-2';
import {data,options,options1,data1} from "../components/chartData";
import { RightSection } from '../components/RightSection';
import HeaderSection from '../components/HeaderSection';


const Dashboard = ()=>{
return (
<DashLayout>

    <div className='flex flex-row flex-auto gap-6 '>
    <RightSection/>
    <div className='relative flex-auto'>
        <HeaderSection>
           <p className='headerText'>REPORTS</p>
            <span className='p-1 leftIConCard'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-4 h-4 m-0 font-medium bg-white ">
            <path fillRule="evenodd" clipRule="evenodd" d="M21 6h-7.79a4.001 4.001 0 00-7.42 0H3v3h2.79a4.001 4.001 0 007.42 0H21V6zm-10.21 9H3v3h7.79a4.001 4.001 0 007.42 0H21v-3h-2.79a4.001 4.001 0 00-7.42 0z" fill="gray">
                
            </path>
            </svg>
            </span>
        </HeaderSection>
        
        <div className="flex flex-col space-y-3">
                {  
                ReportList.map((value, id)=>{
                    return(
                        <ReportCard key={id}  reportCardTitle={value.reportTitle} iconBg={value.iconBg} reportTime={value.reportTime} reportCardInfo={value.reportInfo} iconName={value.reportIcon} />   
                    );
                        
                })   
                
                 }
            
        </div>

        <HeaderSection>
            <p className="mt-4 headerText">
                COVID CASES
            </p>
            <div className="leftIConCard"><FiberManualRecordIcon className='w-[5px] h-[5px]'/> <FiberManualRecordIcon className='w-[5px] h-[5px]'/></div>  
        </HeaderSection>
        
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