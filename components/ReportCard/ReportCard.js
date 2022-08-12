
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChevronRightRounded } from '@mui/icons-material';
import Image from 'next/image'
import {useState} from 'react';
import Link from 'next/link'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import classNames from "classnames";
import dateformat from "dateformat";
export const  ReportCard = ({mediaLink,reportCardTitle="No info yet",reportTime="1 minute ago",iconBg="bg-yellow-100", newsUrl,maxWidth, score }=props)=>{
    
    
    return (
        <div className={classNames('p-4  border-2 border-white max-w-md bg-[#fff] space-y-1 shadow-md hover:shadow-xl hover:border-[#e8eff0] hover:border-3',maxWidth)}>
        <div className='flex items-start justify-between '>
        <div className='flex space-x-10 sm: sm:items-center'>
        <div className = {classNames("flex flex-col justify-center max-w-md max-h-md align-middle shrink object-fill rounded-full item-center",iconBg )}>
        <img src={mediaLink} alt="covid image" style={{width:"50px",height:"50px",borderRadius:"50%" }}/> 
           {/* <Image src={mediaLink} alt="this is the news image link" width={100} height={100} className="max-w-xs rounded-full object-fit max-h-sm"   /> */}
           </div>
            <div className='flex flex-col sm:flex '>
            <div className={classNames("border-2 my-1 shadow bg-[#fff] font-medium text-base w-20 rounded-md ",{"border-[#7cd5c2] pl-2" : score == "Positive"},{"border-[#964351] pl-1": score == "Negative"},{"border-[#e2db72] pl-3": score == "Neutral"})}> {score}</div>
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
                { dateformat(reportTime,"dddd, mmmm dS, yyyy")}
            </div>
            <div className='font-sans text-sm font-semibold text-cyan-400'>
                <a href={newsUrl}>DETAILS</a>
            </div>
                
            </div>
        </div>
    );

}