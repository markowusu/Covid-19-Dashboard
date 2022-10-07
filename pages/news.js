import React, { useState,useEffect }  from "react";
import CardList from "../components/CardList";
import DashLayout from "../components/DashLayout";
import axios from "axios";
import { ShimmerSectionHeader } from 'react-shimmer-effects';
import { ReportCard } from "../components/ReportCard/ReportCard";
import Pagination from "react-js-pagination";
import classNames from "classnames";
import sentiment from "sentiment";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import { info } from "autoprefixer";
var Sentiment = require('sentiment');
var sentiment_analyzer  = new Sentiment();



const MonkeyLearn = require('monkeylearn')

const ml = new MonkeyLearn('9e863d39921c53bee1792b47a45812f30d108a19')
let model_id = 'cl_zE24emC5'
let data = ["Death toll from Wuhan coronavirus outbreak in China's Hubei reaches 17 https:\/\/t.co\/HR2baNIKlo #Health https:\/\/t.co\/eQQT8822Zi #436 neu"]
ml.classifiers.classify(model_id, data).then(res => {
    console.log(res.body)
})
// import ReactPaginate from 'react-paginate';
// new api-key : 8eRfaxJ2Pm6nFPLO2ChNcw95wmUdntP8ikTVKxTsv50
//  old api-key : FE9Jyelhh47mE1dgK7NMIPkWb_DY8fA2Fg_p9ruZaWI
const News = ()=> {
    const [news, setNews] = useState()
    const [isLoading, setLoading] = useState(true)
    const [sentiViews,setSentiViews] = useState([])
    const [currentPage, setCurrentPage] = useState(2)

    const totalRecords = 5

    let sentiList = []
    const shimmerListItem= [{"shimmer":<ShimmerSectionHeader/>},{"shimmer":<ShimmerSectionHeader/>},{"shimmer":<ShimmerSectionHeader/>},{"shimmer":<ShimmerSectionHeader/>},{"shimmer":<ShimmerSectionHeader/>}]
    let options = {
        method: 'GET',
        url: 'https://api.newscatcherapi.com/v2/search',
        params: {q: 'covid US', lang: 'en', sort_by: 'relevancy', page: currentPage, page_size: '10'},
        headers: {
          'x-api-key': 'wzQDdr7knTC3AJiCqR111PkolHuYBEbW_Dh0qUu-iK8'
        }
      };
    
      const sentiment_model =  (articles)=> {
        
        setSentiViews([])
        const encodedParams = new URLSearchParams();
        articles.map((article)=> {
          var information = [article.title] 
          ml.classifiers.classify(model_id, information).then(res => {
            // console.log(res.body[0].classifications[0])
             
            setSentiViews((sentiViews)=>{ 
                  return( 
                        [...sentiViews, res.body[0].classifications[0].tag_name]
                        )
                  
        })
          // console.log(sentiment_analyzer.analyze(information),"Hello")
          // encodedParams.append("text", article.title ? article.title : " ");
          // let  senti_options = {
          //   method: 'POST',
          //   url: 'https://api.monkeylearn.com/v3/classifiers/cl_zE24emC5/classify/',
          //   headers: {
          //     'content-type': 'application/x-www-form-urlencoded',
          //     'X-RapidAPI-Key': '82fc85518emsh88777c1d328d1b4p16178djsn30d323a0d09b',
          //     'X-RapidAPI-Host': 'twinword-sentiment-analysis.p.rapidapi.com'
          //   },
          //   data: encodedParams
          // }; 
          // axios.request(senti_options).then((response) =>{  
          //       setSentiViews((sentiViews)=>{ 
          //         return( 
          //           [...sentiViews, response.data.type]
          //           )
          //         })
          //     // console.log(sentiViews,"sentiment")

                
          //   // return response.data.type  
          })
          // console.log(encodedParams,article.title )

        })
        

          
          
          
        }         
   
    
      useEffect(()=>{
        axios.request(options).then((response) =>{
            
            const {articles} = response.data 
  
            setNews(articles) 
            sentiment_model(articles)
            setLoading(false)      
        }).catch((error)=>{console.error(error); });
    },[])
    
 
    
    
    const handlePageClick = (e,pageNumber)=>{
        e.preventDefault()
        setLoading(true)
        
        setCurrentPage(pageNumber)
        axios.request(options).then((response) =>{
            const {articles} = response.data 
            setNews(articles)
            sentiment_model(articles)

            setLoading(false)
            
        });
}
    
  
  
    
   const ArrayPages = new Array()
   for(let i = 1; i <= totalRecords; i++){
    // console.log(i) 
    ArrayPages.push(i)
}
    
   const pages = ArrayPages.map((idx)=>{ return <a href="#" key={idx} onClick={
    (e)=>{handlePageClick(e,idx)}} >
    <li style={{listStyleType: "none"}
    } className={classNames({'bg-slate-800 rounded-sm border-2 border-slate-500 text-white font-semibold font-sans py-1 px-1 ': idx == currentPage}, {"bg-white text-black rounded-sm border-2 border-slate-500 py-1 px-1": idx != currentPage})}>
    {idx}
    </li>
    </a>})


    return (

        
        
        <DashLayout>
    <div className="relative flex flex-col max-w-5xl">
   
    {   isLoading ?  shimmerListItem.map((item,id)=>{
                    return <span key={id}>{item.shimmer}</span>
    }):
        
        (news?.map((value, id)=>{
         
          {/* if(news ){
        sentiment_model(news.title);
       } */}
    
                    return(
                        <>                
                        <ReportCard key={id}  reportCardTitle={value.title} reportTime={value.published_date}  mediaLink={value.media}  newsUrl = {value.link} maxWidth= {true} score ={sentiViews[id]}  /> 
                        <br/>
                        </>
                    );
                        
                })  
        ) 
                
                 }
        <CardList/>
    </div>
   <div className="flex flex-row justify-center mb-3 space-x-3 align-middle">
    {currentPage != 1 ? <a href="#"  onClick={(e)=>{handlePageClick(e,currentPage-1)}}> <li style={{listStyleType : 'none'}}> &lt; </li> </a>: <span></span>}
    {pages}
    {currentPage != totalRecords ? <a href="#" onClick={(e)=>{handlePageClick(e,currentPage+1)}}><li style={{listStyleType : 'none'}}> &gt; </li> </a>: <span></span>}
   </div>
    
</DashLayout>
    );

}

export default News;