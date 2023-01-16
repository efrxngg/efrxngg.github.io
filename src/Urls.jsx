import { Route, Routes } from 'react-router-dom'
import { Home } from './components/portafolio/Home';
import { Services } from './components/services/Services';
import { AuthView } from './components/auth/General';
import { SignUp } from './components/auth/SignUp';
import { NotImplement } from './components/util/status/501';
import { NotFound } from './components/util/status/404';

function Urls() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<AuthView />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/tecnologias" element={<NotImplement />} />
      <Route path="/proyectos" element={<NotImplement />} />
      <Route path="/redes" element={<NotImplement />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Urls
