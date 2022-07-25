
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChevronRightRounded } from '@mui/icons-material';
import Image from 'next/image'
import {useState} from 'react';
import Link from 'next/link'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import classNames from "classnames";

export const  ReportCard = ({mediaLink,reportCardTitle="No info yet",reportTime="1 minute ago",iconBg="bg-yellow-100", newsUrl}=props)=>{
    
    
    return (
        <div className='p-4  border-2 border-white max-w-md bg-[#fff] space-y-1 shadow-md'>
        <div className='flex items-start justify-between'>
        <div className='flex space-x-10 sm: sm:items-center'>
        <div className = {classNames("flex flex-col justify-center max-w-md max-h-md align-middle shrink object-fill rounded-full item-center",iconBg )}>
           <Image src={mediaLink} alt="this is the news image link" width={100} height={100} className="max-w-xs rounded-full object-fit max-h-sm"   />
           </div>
            <div className='flex flex-col sm:flex'>
            
            <p className='text-ellipsis'>
            {reportCardTitle}
            </p>

            {/* <div className='text-sm font-semibold text-slate-400'>
            {reportCardInfo}
            </div> */}
            </div>
        </div>
        {/* <div className="leftIConCard"><FiberManualRecordIcon className='w-[5px] h-[5px]'/> <FiberManualRecordIcon className='w-[5px] h-[5px]'/></div> */}

        
            </div>
            
            <div className='flex items-center justify-between '>
            <div className='font-sans text-sm font-medium text-slate-500'>
                { reportTime.toLocaleString('en-us', { day: 'numeric' })+ reportTime.toLocaleString('en-us', { month: 'short' }) + reportTime.toLocaleString('en-us', { year: 'numeric' })  }
            </div>
            <div className='font-sans text-sm font-semibold text-cyan-400'>
                <a href={newsUrl}>DETAILS</a>
            </div>
                
            </div>
        </div>
    );

}