import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
export default function ChartWidget(){
 const data = { labels: ['A','B','C'], datasets:[{data:[30,50,20], backgroundColor:['#4F46E5','#22D3EE','#F59E0B']}] };
 return (<div className='bg-white p-4 rounded shadow-md'><Pie data={data} /></div>);
}