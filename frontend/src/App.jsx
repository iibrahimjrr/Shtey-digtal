import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Welcome from './Pages/Welcome';
import RegisterPage from './Pages/Register';
import LoginPage from './Pages/Login';
import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Awareness from './Pages/Awareness';
import ArticleDetail from './Pages/ArticleDetail';
import Contact from './Pages/Contact';
import Profile from './Pages/Profile';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import ScrollToTop from './Components/ScrollToTop';
import ChatWithDoctor from './Pages/ChatWithDoctor';
import Loader from './Components/Loader';
import NotFound from './Pages/NotFound';


const PageWrapper = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation(); // لمعرفة الصفحة الحالية

  useEffect(() => {
    setLoading(true); // إظهار الـ Loader عند تغيير الصفحة
    const timer = setTimeout(() => setLoading(false), 1000); 
    
    return () => clearTimeout(timer); 
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />} 
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/header" element={<Header />} />
        <Route path="/home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path='/Awareness' element={<Awareness />} />
        <Route path='/article/:id' element={<ArticleDetail />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/ChatWithDoctor' element={<ChatWithDoctor />} />
        
        <Route 
          path="/Profile" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <PageWrapper />
      </Router>
    </AuthProvider>
  );
};

export default App;
