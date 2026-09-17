import { Routes, Route } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import InstallModal from './components/modals/InstallModal';
import HowItWorksModal from './components/modals/HowItWorksModal';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import './styles/global.css';

export default function App() {
  return (
    <ModalProvider>
      <div className="grid-field" />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />

      {/* Modals are rendered once at the app level so they stay in sync
          across routes and are controlled through ModalContext. */}
      <InstallModal />
      <HowItWorksModal />
    </ModalProvider>
  );
}
