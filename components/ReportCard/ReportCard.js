
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChevronRightRounded } from '@mui/icons-material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import classNames from "classnames";

export const  ReportCard = ({ iconName,reportCardTitle="No info yet",reportCardInfo="Lab loading...",reportTime="1 minute ago",iconBg="bg-yellow-100"}=props)=>{
    return (
        <div className='p-4  border-2 border-white bg-[#fff] space-y-1 shadow-md'>
        <div className='flex items-start justify-between'>
        <div className='flex space-x-10 sm: sm:items-center'>
        <div className = {classNames("flex flex-col justify-center w-10 h-10 align-middle  rounded-full item-center",iconBg )}>
           {iconName}
           </div>
            <div className='flex flex-col sm:flex'>
            
            <p className=''>
            {reportCardTitle}
            </p>

            <div className='text-sm font-semibold text-slate-400'>
            {reportCardInfo}
            </div>
            </div>
        </div>
        <div className="leftIConCard"><FiberManualRecordIcon className='w-[5px] h-[5px]'/> <FiberManualRecordIcon className='w-[5px] h-[5px]'/></div>

        
            </div>
            
            <div className='flex items-center justify-between '>
            <div className='font-sans text-sm font-medium text-slate-500'>
                {reportTime}
            </div>
            <div className='font-sans text-sm font-semibold text-cyan-400'>
                DETAILS <ChevronRightRounded/>
            </div>
                
            </div>
        </div>
    );

}