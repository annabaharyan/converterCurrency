import { Routes, Route } from 'react-router-dom';
import './App.css';
import Config from './Components/Config'
import Telekanal from './Pages/Telekanal/Telekanal'
import Gazeta from './Pages/Gazeta/Gazeta'
import Pro from './Pages/Pro/Pro'
import Investicii from './Pages/Investicii/Investicii'
import RBK from './Pages/RBK/Rbk'
import NovayaEkonomika from './Pages/NovayaEkonomika/NovayaEkonomika'
import Trendi from './Pages/Trendi/Trendi'
import Nedvijimost from './Pages/Nedvijimost/Nedvijimost'
import ErrorPage from './Pages/ErrorPage'
// import Course from './Pages/Pro/ValyutaPages/Course'
// import Statistics from './Pages/Pro/ValyutaPages/Statistics'
// import Banks from './Pages/Pro/ValyutaPages/Banks'
// import Prognoz from './Pages/Pro/ValyutaPages/Prognoz'
// import Valyuta from './Pages/Pro/ValyutaPages/Valyuta'
// import Converter from './Pages/Pro/ValyutaPages/Converter'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Config />}>
          <Route index element={<Telekanal />} />
          <Route path='gazeta' element={<Gazeta />} />
          <Route path='pro/*' element={<Pro />} />
          <Route path='invest' element={<Investicii />} />
          <Route path='rbk' element={<RBK />} />
          <Route path='novayaEkonomika' element={<NovayaEkonomika />} />
          <Route path='trendi' element={<Trendi />} />
          <Route path='nedvijimost' element={<Nedvijimost />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />


      </Routes>

    </>
  );
}

export default App;
