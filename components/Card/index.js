import React, { Component } from 'react';
import  LineChart from '../LineChart';
import LabelCard from '../LabelCard';
import dateRange from '../../utils/dateTime';
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

     handleClick =(e)=>{
         
        const {innerText } = e.target;
        const isAnuual = innerText == "YEAR"
        if (isAnuual){
            const newData = isAnuual?managerData : managerQuarterData;
            this.setState({
            activateYear: true,
            activateMonth: false,
            activateWeek: false,
            data: newData,
            })
        }else if (innerText === "MONTH") {
            const newData = innerText === "MONTH" ? managerQuarterData: managerData;
            this.setState({
                activateMonth: true,
                activateWeek: false,
                activateYear: false,
                data: newData
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
        const newData = isAnuual?managerData : managerQuarterData;
        const newLabel = isAnuual? quarterLabels : yearLabels;
        const newAverage = isAnuual? nationalAverageQuarterData : nationalAverageData;

        this.setState({
            data: newData,
            labels: newLabel,
            average: newAverage,
            
        })
    }
    
    render(){
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