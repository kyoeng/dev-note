import './App.css'
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Index from './pages/index/Index';
import MainCategoryPage from './pages/mainCategoryPage/MainCategoryPage';
import { useEffect } from 'react';
import { update } from './stores/connectDeviceSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // PC로 접속했는지 Mobile로 접속했는지 확인
    const isMobile: boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) dispatch(update(isMobile));
  });

  return (
    <>
      <div id='page-container'>
        <Router>
          <Header />

          <Routes>
            <Route path='/' element={<Index />}/>
            <Route path='/:category' element={<MainCategoryPage />}/>
          </Routes>

        </Router>
      </div>
    </>
  )
}

export default App
