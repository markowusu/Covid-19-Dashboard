import React, { Component } from 'react';
import  LineChart from '../LineChart';
import LabelCard from '../LabelCard';
import dateRange from '../../utils/dateTime';
import {useState} from 'react';
import history from '/confirmed.json'
import {Year, Months, Week} from '../labelCarditems'
import { managerData, nationalAverageData, yearLabels, managerQuarterData, nationalAverageQuarterData, quarterLabels } from '../../constants/mockData'

 class  Card  extends Component {
   constructor(){
       super();
       this.state={
           data: managerData,
           labels: "",
           predictedData: "",
           date: dateRange(),
           activateYear : false,
            activateMonth: false,
            activateWeek: false,
           
       }
       this.handleClick.bind(this)
   }


     handleClick =async (e)=>{
         let history_confirmed;
         let history_date;
         let actualData;
         let actualLabel;
         let finalConfirmed;
         let finalDate;
        
        const {value } = e.target.dataset;
       
                   
           
        if ( value){
            const res = await fetch("http://localhost:8000/confirmed/daily",{
                method: "POST",
                headers: {"content-type": "application/json; chartset=utf-8"},
               body:JSON.stringify({"day":value} ),
            })

           history_date = Object.values(history.Date)
           history_confirmed = Object.values(history.Confirmed)
           console.log(history_confirmed);
            const responseData = await res.json()
            console.log(responseData.forecast)

             actualLabel = Object.keys(responseData.forecast)
             actualData = Object.values(responseData.forecast)
            
             finalConfirmed = [...history_confirmed,...actualData];
             finalDate = [...history_date,...actualLabel]
           
            this.setState({
                data: history_confirmed,
                labels: finalDate,  
                predictedData : finalConfirmed ,
                
            })
          
            
            this.setState({
            activateYear: true,
            activateMonth: false,
            activateWeek: false,
            // data: newData,
            // labels: actualLabel
            })
        }
        
        // else if (value === 30) {
        //     const newData = value === 30 ? managerQuarterData: managerData;
        //     this.setState({
        //         activateMonth: true,
        //         activateWeek: false,
        //         activateYear: false,
        //         data: actualData
        // });
  
        // }else{
        //     const newData=  value === 14 ? nationalAverageQuarterData : nationalAverageData;
        //     this.setState({
        //         activateWeek: true,
        //         activateYear: false,
        //         activateMonth: false,
        //         data: newData
        //     })
        // }
        // const newData = isAnuual? finalConfirmed : managerQuarterData;
        // const newLabel = isAnuual? finalDate : yearLabels;
        // const newAverage = isAnuual? nationalAverageQuarterData : nationalAverageData;

        // this.setState({
        //     data: newData,
        //     labels: newLabel,
        //     average: newAverage,
            
        // })
    }
    
    render(){
      
    //     const data_arr = [];
    //     const date_arr = [];
        // const cases= this.props
        // const confirmed_cases = cases.cases
        // console.log(confirmed_cases)
        //  const result = confirmed_cases.map((val)=>{
        //     const data1 = val.cases
        //     const date1 = val.dates
        //  });
          
    // //   }
    //         console.log(result)
        
       
          
    return (
           
        
      
        <div className="border-2 border-white rounded-md shadow-sm ">
        <div className='flex flex-row justify-between align-center '>
            <span className='pl-4 font-sans text-base text-gray-500'>
                <span className='font-semibold text-gray-700'>{this.state.date.firstday} - {this.state.date.lastday.toLocaleString('en-us',{day:'numeric'})}  {this.state.date.lastday.toLocaleString('en-us', { month: 'short' })}</span>,  {this.state.date.lastday.toLocaleString('en-us', { year: 'numeric' })}  
            </span>
            
            <div className='flex flex-row items-center justify-between mr-4 space-x-4'>
              <LabelCard text="YEAR" onClick={this.handleClick} activate={this.state.activateYear} ListItems={Year}/>
              <LabelCard text="MONTH"  onClick={this.handleClick} activate={this.state.activateMonth} ListItems={Months}/>
              <LabelCard text="WEEK" onClick={this.handleClick} activate={this.state.activateWeek} ListItems={Week}/>
            </div>
        </div>
        
           
           <LineChart data={this.state.data} predictedData = {this.state.predictedData} labels={this.state.labels} average={this.state.average} />
     
       
        </div>
    );
    }
}


export default Card;