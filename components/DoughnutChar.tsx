"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChar = ({accounts}: DoughnutChartProps) => {
  const data = {
    datasets: [
    {
      label: 'banks',
      data: [1250,2500,3750],
      backgroundColor: ['#2b9e78', '#207c61', '#0e5b49']
    }
      
    ],
    labels: ['conta 1','conta 2','conta 3']
  }

  return <Doughnut data={data}
  options={{
    cutout: '60%',
    plugins:{
      legend:{
        display:false
      }
    }
  }}
  />
}
export default DoughnutChar;
