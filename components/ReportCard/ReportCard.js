
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
        <a href={newsUrl}>
        <div className={classNames({'max-w-md': !maxWidth, 'max-w-full': maxWidth},'p-4  border-2 border-[#e2e2e1] bg-[#fff] space-y-1  ', {"shadow-md hover:shadow-xl hover:border-[#e8eff0] hover:border-3": score == "positive" || score =="neutral"})}>
        
        <div className='flex items-start justify-between '>
        
        <div className='flex space-x-10 sm: sm:items-center'>
        
        <div className = {classNames("flex flex-col justify-center max-w-md max-h-md align-middle shrink object-fill rounded-full item-center",iconBg )}>
        <img src={mediaLink} alt="covid image" style={{width:"50px",height:"50px",borderRadius:"50%" }}/> 
           {/* <Image src={mediaLink} alt="this is the news image link" width={100} height={100} className="max-w-xs rounded-full object-fit max-h-sm"   /> */}
           </div>
            <div className='flex flex-col items-start justify-start sm:flex'>
            <div className={classNames("  my-1 font-bold  text-base  rounded-full w-2 h-2 relative",{"bg-[#7cd5c2] " : score == "Positive"},{"bg-[#7cd5c2] ": score == "Negative"}, {"bg-[#e2db72]": score == "Neutral"})}></div>

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
              
            </div>
            </div>
     

            

        </div>
        </a>
    );

}