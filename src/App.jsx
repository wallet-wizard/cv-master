import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import NavTabs from './components/NavTabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Editor from './components/Editor';
import Login from './components/Login';
import MyCVs from './components/MyCVs';
import SearchJobs from './components/SearchJobs';
import './utils/globalStyles.css'

function App() {
  const [count, setCount] = useState(0)
  console.log("App RAN")
  return (
    <Router>
      <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="myCVs" element={<MyCVs />} />
          <Route path="searchJobs" element={<SearchJobs />} />
          <Route path="/editor/*" element={<Editor />} /> {/* Adjust the path for the Editor component */}
      </Routes>
    </Router>
  )
}

export default App
