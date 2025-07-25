import React from 'react';
import axios from 'axios';
export default function ExportPage(){
 const handleExport = async () => {
  const html = document.documentElement.outerHTML;
  await axios.post('http://localhost:8000/export', new URLSearchParams({html_content: html}));
  alert('Dashboard exported successfully!');
 };
 return (<div className='p-6 bg-gray-100 min-h-screen'><h1 className='text-3xl font-bold mb-4'>Export Dashboard</h1><button onClick={handleExport} className='bg-blue-600 text-white px-4 py-2 rounded'>Export as HTML</button></div>);
}