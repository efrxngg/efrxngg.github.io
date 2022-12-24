import { Route, Routes } from 'react-router-dom'
import {Home} from './components/portafolio/Home';
import { Services } from './components/services/Services';

function Urls() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  )
}

export default Urls
