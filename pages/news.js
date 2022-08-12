import React, { useState,useEffect }  from "react";
import CardList from "../components/CardList";
import DashLayout from "../components/DashLayout";
import axios from "axios";
import { ReportCard } from "../components/ReportCard/ReportCard";



const News = ()=> {
    const [news, setNews] = useState([])
       let options = {
    method: 'GET',
    url: 'https://api.newscatcherapi.com/v2/search',
    params: {q: 'covid US', lang: 'en', sort_by: 'relevancy', page: '6', page_size: '5'},
    headers: {
      'x-api-key': 'FE9Jyelhh47mE1dgK7NMIPkWb_DY8fA2Fg_p9ruZaWI'
    }
  };
   useEffect(()=>{
    axios.request(options).then((response) =>{
        const {articles} = response.data 
        setNews(articles)
        
    });
   },[])
    
    return (
        <DashLayout>
    <div className="flex flex-col max-w-5xl">
    {  
        news?.map((value, id)=>{
                    return(
                        <>
                        
                        <ReportCard key={id}  reportCardTitle={value.title} reportTime={value.published_date}  mediaLink={value.media}  newsUrl = {value.link} maxWidth={"max-w-4xl"} score={"Neutral"}/> 
                        <br/>
                        
                        </>  
                    );
                        
                })   
                
                 }
        <CardList/>
    </div>
</DashLayout>
    );

}

export default News;