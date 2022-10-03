import React from 'react';

import {Route,Routes} from 'react-router-dom'
import ConfigValyuta from './ValyutaPages/ConfigValyuta';
import Course from './ValyutaPages/Course'
import Statistics from './ValyutaPages/Statistics'
import Banks from './ValyutaPages/Banks'
import Prognoz from './ValyutaPages/Prognoz'
import Valyuta from './ValyutaPages/Valyuta'
import Converter from './ValyutaPages/Converter'
import LichniyCabinet from './ValyutaPages/LichniyCabinet'
import ErrorPage from '../ErrorPage';
// import Money from './Money';
const Pro = () => {
    return (
        <>
      
     <Routes>
      
      <Route path='/'element={<ConfigValyuta/>}>
            <Route path='course' element={<Course />} />
            <Route path='static' element={<Statistics />} />
            <Route path='bank' element={<Banks />} />
            <Route path='forecast' element={<Prognoz />} />
            <Route path='currency' element={<Valyuta />} />
            <Route path='converter' element={<Converter />} />
            <Route path='cabinet' element={<LichniyCabinet/>} />
       </Route>
       <Route path="/*" element={<ErrorPage />} />
     </Routes>
     
   </>
      
    );
}

export default Pro;
