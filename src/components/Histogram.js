import React from "react";
import './Histogram.css'
import ExportButton from "./ExportButton";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'

ChartJs.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

const Histogram = ({ data }) => {
  const labels = data.map((item)=>item.word);
  const values = data.map((item)=>item.frequency);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Top 20 Words",
        data: values,
        backgroundColor: 'cyan',
        barThickness: 48,
        borderColor : 'black',
        borderWidth : 1,
        borderRadius : 5,
        hoverBackgroundColor: '#D68910',       
      },
    ]
  }
  const options = {
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Frequency',
          color: 'white',
          font: {
            size: 20,
            weight : 'Bold' 
          }
        },
        ticks: {
          stepSize: 2,
          color : 'white',
          font: {
            size: 16,
            weight : 'Bold' 
          }
        },
        
      },
      x: {
        title: {
          display: true,
          text: 'Words',
          color: 'white',
          font: {
            size: 20,
            weight : 'Bold' 
          }
        },
        ticks: {
          color : 'white',
          font: {
            size: 16,
            weight : 'Bold' 
          }

        }
      }

    },
    
  };

  
  return (
    <>
    
    <div className="header">Histogram of the 20 most occurring words</div>
    <div className="chart">
      <Bar data={chartData} options={options}/>
    </div>
    <div className="ExportButton">
      <div className="header head">Click the Export button to downlod the CSV file</div>
    <div className="expbtn"><ExportButton data={data}/></div>
   
    </div>
     
    </>
    )
}

export default Histogram;
