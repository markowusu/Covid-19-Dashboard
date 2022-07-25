import React, { Component } from 'react';
import  LineChart from '../LineChart';
import LabelCard from '../LabelCard';
import dateRange from '../../utils/dateTime';
import {useState} from 'react';
import history from '/confirmed.json'
import {Year, Months, Week} from '../labelCarditems'
import { managerData, nationalAverageData, yearLabels, managerQuarterData, nationalAverageQuarterData, quarterLabels } from '../../constants/mockData'

 const dataSource = {
    chart: {
      caption: "Support Tickets : Received vs Resolved",
      yaxisname: "# of Tickets",
      subcaption: "Last week",
      numdivlines: "3",
      showvalues: "0",
      legenditemfontsize: "15",
      legenditemfontbold: "1",
      plottooltext: "<b>$dataValue</b> Tickets $seriesName on $label",
      theme: "fusion"
    },
    categories: [
      {
        category: [
          {
            label: "Jan 1"
          },
          {
            label: "Jan 2"
          },
          {
            label: "Jan 3"
          },
          {
            label: "Jan 4"
          },
          {
            label: "Jan 5"
          },
          {
            label: "Jan 6"
          },
          {
            label: "Jan 7"
          }
        ]
      }
    ],
    dataset: [
      {
        seriesname: "Received",
        data: [
          {
            value: "55"
          },
          {
            value: "45"
          },
          {
            value: "52"
          },
          {
            value: "29"
          },
          {
            value: "48"
          },
          {
            value: "28"
          },
          {
            value: "32"
          }
        ]
      },
      {
        seriesname: "Resolved",
        data: [
          {
            value: "50"
          },
          {
            value: "30"
          },
          {
            value: "49"
          },
          {
            value: "22"
          },
          {
            value: "43"
          },
          {
            value: "14"
          },
          {
            value: "31"
          }
        ]
      }
    ]
  };
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
         let history_confirmed;
         let history_date;
         let actualData;
         let actualLabel;
         let finalConfirmed;
         let finalDate;
        const {value } = e.target.dataset;
        console.log(value, "dual Text")
        const isAnuual = value == 7            
            
        if (isAnuual){
            const newData = isAnuual? managerData : managerQuarterData;
            const res = await fetch("http://localhost:8000/confirmed/daily",{
                method: "POST",
                headers: {"content-type": "application/json; chartset=utf-8"},
               body:JSON.stringify({"day":365} ),
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
        }else if (value === 30) {
            const newData = value === 30 ? managerQuarterData: managerData;
            this.setState({
                activateMonth: true,
                activateWeek: false,
                activateYear: false,
                data: actualData
        });
  
        }else{
            const newData=  value === 14 ? nationalAverageQuarterData : nationalAverageData;
            this.setState({
                activateWeek: true,
                activateYear: false,
                activateMonth: false,
                data: newData
            })
        }
        const newData = isAnuual? finalConfirmed : managerQuarterData;
        const newLabel = isAnuual? finalDate : yearLabels;
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
              <LabelCard text="YEAR" onClick={this.handleClick} activate={this.state.activateYear} ListItems={Year}/>
              <LabelCard text="MONTH"  onClick={this.handleClick} activate={this.state.activateMonth} ListItems={Months}/>
              <LabelCard text="WEEK" onClick={this.handleClick} activate={this.state.activateWeek} ListItems={Week}/>
            </div>
        </div>
        
           
           <LineChart data={this.state.data} dataSource ={dataSource} labels={this.state.labels} average={this.state.average} />
     
       
        </div>
    );
    }
}


export default Card;