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
      backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'] 
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
