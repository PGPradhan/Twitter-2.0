// import React from 'react';
// import { Pie } from 'react-chartjs-2';
 
// const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         'pink',
//         '#17a2b8',
//         '#ffc107',
//         'rgb(87, 185, 96)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };
 
// const PieChart = () => (
//   <>
//     <div className='header'>
      
//       <div className='links'>
         
//       </div>
//     </div>
//     <Pie data={data}  />
//   </>
// );
 
// export default PieChart;

import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Type", "Perceentage"],
  ["Identity Attack", 11],
  ["Insult", 2],
  ["Obscene", 2],
  ["Seviour Toxicity", 2],
  ["Threat", 7],
  ["Toxicity", 7],
];

export const options = {
  title: "Complint Categories",
};

export function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"200%"}
      height={"500px"}
    />
  );
}
export default PieChart
