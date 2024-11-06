"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChar = ({accounts}: DoughnutChartProps) => {
const accountsNames = accounts.map((a)=>a.name);
const balances = accounts.map((a)=>a.currentBalance);

  const data = {
    datasets: [
    {
      label: 'banks',
      data: balances,
      backgroundColor: ['#2b9e78', '#207c61', '#0e5b49']
    }
      
    ],
    labels: accountsNames
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
