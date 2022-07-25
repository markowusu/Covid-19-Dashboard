import React , {Component} from 'react'
import {Chart} from "chart.js";
let myLineChart ;
import { transparentize } from '../../utils/transparentize';

class LineChart extends Component {
      myChartRef = React.createRef();
      
     

     componentDidMount(){
         this.bindChart();
     }
     componentDidUpdate(){
         this.bindChart();
     }

    bindChart=()=>{
        const myLineRef = this.myChartRef.current.getContext("2d");
        const {labels, data,average } = this.props;
      
 

        if(myLineChart !== "undefined") myLineChart?.destroy();
        Chart.defaults.LineWithLine = Chart.defaults.line;
Chart.controllers?.LineWithLine = Chart.controllers?.line.extend({
    draw: function(ease) {
        Chart.controllers.line.prototype.draw.call(this, ease);

        if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
            var activePoint = this.chart.tooltip._active[0],
                myLineRef = this.chart.myLineRef,
                x = activePoint.tooltipPosition().x,
                topY = this.chart.scales['y-axis-0'].top,
                bottomY = this.chart.scales['y-axis-0'].bottom;

            // draw line
            myLineRef.save();
            myLineRef.beginPath();
            myLineRef.moveTo(x, topY);
            myLineRef.lineTo(x, bottomY);
            myLineRef.lineWidth = 4;
            myLineRef.strokeStyle = '#757575';
            myLineRef.stroke();
            myLineRef.restore();
        }
    }
});

Chart.defaults.global?.defaultFontFamily = 'Arial';
Chart.defaults.global?.defaultFontSize = 16;
Chart.defaults.global?.defaultFontColor = '#000';
        myLineChart = new Chart(myLineRef, {
            type: "line",
            data: {
                //Bring in data
                labels: labels,
                datasets: [
                    {
                        label: "Confirmed",
                        data:data,
                        tension: 0.4,
                        borderColor: '#48cae4',
                        backgroundColor: transparentize("#caf0f8") ,
                        pointRadius: 0,
                        borderWidth:2,
                        fill:true,
                    },
                    
                ]
            },
            options: {
                tension:0.4,
                responsive: true,
              scales:{
                
                  x:{
                    ticks:{
                        drawBorder: false,
                        padding: 0
                      
                    },
                    grid:{
                        borderDash: [8,3],
                        drawTicks: false,
                        display: false
                        
                    }
                      
                      
                  },
                  y:{
                      
                      ticks:{
                          drawBorder: false,
                          padding: 30
                        
                      },
                      grid:{
                          borderDash: [8,3],
                          drawTicks: false,
                          zeroLineColor:'#B0C1D4',
                          color:'#B0C1D4',
                          drawBorder: false ,
                         
                          
                      }
                  }
              },
              
              plugins: {
                legend: {
                  display: false,
                },
                filler: {
                    propagate: false,
                  }
            },
            interaction: {
                intersect: false,
              },


             
        }
        
        });
    }

       
render(){
    return(
        <div className='relative inline-block w-full h-40 bg-white rounded shadow-md '>
            <canvas ref={this.myChartRef} height="150px" className="bg-white "/>
        </div>
    );
}

    }
      



export default LineChart;