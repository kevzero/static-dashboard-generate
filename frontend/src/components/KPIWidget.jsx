import React from 'react';
export default function KPIWidget({ title, value }){
 return (<div className='bg-indigo-500 text-white p-4 rounded-lg shadow-md'><h2 className='text-xl'>{title}</h2><p className='text-3xl font-bold'>{value}</p></div>);
}