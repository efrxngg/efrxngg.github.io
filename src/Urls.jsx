import { Route, Routes } from 'react-router-dom'
import { Home } from './components/portafolio/Home';
import { Services } from './components/services/Services';
import { AuthView } from './components/auth/General';
import { SignUp } from './components/auth/SignUp';

function Urls() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<AuthView />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  )
}

export default Urls
