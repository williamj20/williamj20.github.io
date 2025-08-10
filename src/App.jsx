import { Route, Routes } from 'react-router';
import Footer from './components/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="min-h-dvh background-colour flex flex-col">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
