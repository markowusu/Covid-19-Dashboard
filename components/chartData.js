
import {Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Tooltip,
    Legend} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets:[{
    data: [450,350,550,420,480,600,590,650],
    borderColor: '#F17E82',
    backgroundColor: '#FDEDED'  ,
    pointRadius: 0,
    borderWidth:2,

    tension: 0.3,
    fill:true,
      
      },  ],
}
const data1 = {
    labels,
    datasets:[{
        pointRadius: 0,
    data: [450,350,550,420,480,600,590,650].reverse(),
    borderColor: '#389CFA',
    backgroundColor: '#EBF5FE' ,
    borderWidth:2,
    tension: 0.3,
    fill:true,
      
      },  ],
}

const options1 = {
    scales:{
     
        
        x:{ 
            ticks: {
                //option 2, use callback to change labels to empty string
                callback: () => ('')
              },
              grid: {
                display: false,
                zeroLineColor:'white',
                  color:'transparent',
                  drawBorder: false 

              }
        },
        y:{
            ticks: {
                //option 2, use callback to change labels to empty string
                callback: () => ('')
              },
              grid: {
                display: false,
                zeroLineColor:'white',
                  color:'transparent',
                  drawBorder: false 
              }
            }
      
    },
    responsive: true,
    plugins: {
        legend: {
          display: false,
        }
    },
    title:{
        display: false,
        title:"Area chart"
    }
};

const options = {
    scales:{
       
        x:{ 
            ticks: {
                //option 2, use callback to change labels to empty string
                callback: () => ('')
              },
              grid: {
                display: false,
                zeroLineColor:'white',
                  color:'transparent',
                  drawBorder: false 

              }
        },
        y:{
            ticks: {
                //option 2, use callback to change labels to empty string
                callback: () => ('')
              },
              grid: {
                display: false,
                zeroLineColor:'white',
                  color:'transparent',
                  drawBorder: false 
              }
            }
      
    },
    responsive: true,
    plugins: {
        legend: {
          display: false,
        }
    },
    title:{
        display: false,
        title:"Area chart"
    }
}

export {
    options1,
    data1,
    options,
    data
}

