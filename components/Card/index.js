import React, { Component } from 'react';
import  LineChart from '../LineChart';
import LabelCard from '../LabelCard';
import dateRange from '../../utils/dateTime';
import {useState} from 'react';

import { managerData, nationalAverageData, yearLabels, managerQuarterData, nationalAverageQuarterData, quarterLabels } from '../../constants/mockData'

 class  Card  extends Component {
   constructor(){
       super();
       this.state={
           data: managerData,
           labels: "",
           average: "",
           date: dateRange(),
           activateYear : false,
            activateMonth: false,
            activateWeek: false,
           
       }
       this.handleClick.bind(this)
   }


     handleClick =async (e)=>{
       
         let actualData;
         let actualLabel;
        const {innerText } = e.target;
        const isAnuual = innerText == "YEAR"
        console.log(this.props,"I am from the card")
       
        // var a ={"day":4}
        // const res =  fetch('http://127.0.0.1:8000/confirmed/daily',{
        // method : "POST",
        // async: true,
        // headers:{
        //     'Content-Type':'application/json',
        // },
        // body: JSON.stringify(a)
        // })
        
        // console.log(res)
      
        // fetch("http://127.0.0.1:8000/confirmed/daily",
        // {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body:JSON.stringify({"days":4})
        //   }
        // ).then((response)=>{
        //     const days = response.json()
        //     console.log(response.json())
        // });
        
        if (isAnuual){
            const newData = isAnuual? managerData : managerQuarterData;
            const res = await fetch("http://localhost:8000/confirmed/daily",{
                method: "POST",
                headers: {"content-type": "application/json; chartset=utf-8"},
               body:JSON.stringify({"day":365} ),
            })


           
            const responseData = await res.json()
            console.log(responseData.forecast)

             actualLabel = Object.keys(responseData.forecast)
             actualData = Object.values(responseData.forecast)
            
            // responseData.map((value)=>{
            //     actualData.push(value.cases)
            //     console.log(actualData, "actual values")
            //     actualLabel.push(value.dates)
            //     console.log(actualLabel,"here")
            // })

           

          
            
            this.setState({
            activateYear: true,
            activateMonth: false,
            activateWeek: false,
            data: newData,
            labels: actualLabel
            })
        }else if (innerText === "MONTH") {
            const newData = innerText === "MONTH" ? managerQuarterData: managerData;
            this.setState({
                activateMonth: true,
                activateWeek: false,
                activateYear: false,
                data: actualData
        });
  
        }else{
            const newData=  innerText === "WEEK" ? nationalAverageQuarterData : nationalAverageData;
            this.setState({
                activateWeek: true,
                activateYear: false,
                activateMonth: false,
                data: newData
            })
        }
        const newData = isAnuual? actualData : managerQuarterData;
        const newLabel = isAnuual? actualLabel : yearLabels;
        const newAverage = isAnuual? nationalAverageQuarterData : nationalAverageData;

        this.setState({
            data: newData,
            labels: newLabel,
            average: newAverage,
            
        })
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
              <LabelCard text="YEAR" onClick={this.handleClick} activate={this.state.activateYear}/>
              <LabelCard text="MONTH"  onClick={this.handleClick} activate={this.state.activateMonth}/>
              <LabelCard text="WEEK" onClick={this.handleClick} activate={this.state.activateWeek}/>
            </div>
        </div>
        
           
           <LineChart data={this.state.data} labels={this.state.labels} average={this.state.average} />
     
       
        </div>
    );
    }
}


export default Card;