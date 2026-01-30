import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import InvestmentPage from './pages/InvestmentPage'
import RentPage from './pages/RentPage'
import NewsPage from './pages/NewsPage'
import './App.css'

function App() {
  
  const location = useLocation();
  console.log("Current location:", location.pathname);

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:serviceName" element={<ServicesPage />} />
          <Route path="/investments" element={<InvestmentPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/rentals" element={<RentPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App
