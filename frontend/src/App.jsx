// import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="w-screen min-h-screen bg-[#010B10] flex flex-col font-inter">

   
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        {/* Your application routes here */}
        <Home />
        <Footer />
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;