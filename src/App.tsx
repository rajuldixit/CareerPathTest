import React, { Suspense, lazy, useEffect } from 'react';
import axios from "axios"
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
const LazyDashboard = lazy(() => import('./Pages/Dashboard/Dashboard'))

const App = () => {
  // let isRan = false

  // useEffect(() => {
  //   if(!isRan) {
  //     // axios.get("http://localhost:9000/submissions?user=24")
  //     //   .then(res => console.log(res));
  //     axios.post("http://localhost:9000/submissions?user=24", {answers: [{'question1': 'answe1'}]}).then(res => console.log(res));
  //   }
  //   isRan = true
  //   return
  // }, [])
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={
        <Suspense fallback='loading...'>
          <LazyDashboard />
        </Suspense>
      } />
     </Routes>
  )
}

export default App;
