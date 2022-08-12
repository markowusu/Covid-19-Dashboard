
import React from 'react';
import DashLayout from '../components/DashLayout';

import axios from "axios";
import { useEffect,  } from 'react';




export default function Treatments(){

   
//    let options = {
//     method: 'GET',
//     url: 'https://api.newscatcherapi.com/v2/search',
//     params: {q: 'covid US', lang: 'en', sort_by: 'relevancy', page: '1', page_size: '2'},
//     headers: {
//       'x-api-key': 'FE9Jyelhh47mE1dgK7NMIPkWb_DY8fA2Fg_p9ruZaWI'
//     }
//   };
//    useEffect(()=>{
//     axios.request(options).then((response) =>{
//         const {articles} = response.data 
//         setReportList(articles)
//         console.log(reportList, "This is Thanos krrrh");
//     });
//    },[])
    
return (
    
<DashLayout>
    
    <div className='flex flex-row flex-auto gap-6 '>
    <div> Hello </div>
    </div>
    
</DashLayout>

);
}

