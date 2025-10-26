import { Routes, Route } from "react-router-dom";

import './styles/App.scss';
import './styles/reset.css';
import Home from './pages/Home.jsx';
import Resume from './pages/Resume/Resume.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import Header from './components/Header/Header.jsx';
import { useLocation } from 'react-router-dom';



function App() {
  const location = useLocation();


  return (
    <>
      {location.pathname !== "/resume" && <Header />}
      <main  >
        <Routes>
          <Route index element={<Home />} >
          </Route>
          <Route path='/resume' element={<Resume />} >
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main >

    </>
  )
}

export default App
