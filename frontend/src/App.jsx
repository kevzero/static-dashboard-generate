import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Editor from './pages/Editor';
import ExportPage from './pages/ExportPage';
import './index.css';
export default function App(){
 return (<Router><Routes><Route path='/' element={<Editor/>}/><Route path='/export' element={<ExportPage/>}/></Routes></Router>);}