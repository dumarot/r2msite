import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';

function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projeto/:slug" element={<ProjectDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
