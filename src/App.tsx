import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
const LazyDashboard = lazy(() => import('./Pages/Dashboard/Dashboard'))

const App = () => {
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
