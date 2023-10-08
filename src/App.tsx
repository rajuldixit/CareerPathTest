import React, { Suspense, lazy, useEffect } from 'react';
import axios from "axios"
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
const LazyDashboard = lazy(() => import('./Pages/Dashboard/Dashboard'))

const App = () => {
  useEffect(() => {
    axios.get("http://localhost:9000/careerPath")
        .then(res => console.log(res));
  }, [])
  return(
    // <Routes>
    //   <Route path='/' element={<Home />} />
    //   <Route path='/dashboard' element={
    //     <Suspense fallback='loading...'>
    //       <LazyDashboard />
    //     </Suspense>
    //   } />
    //  </Routes>
    <></>
  )
}

export default App;
