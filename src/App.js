import './App.css';
import Navbar from './component/NavbarSide/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Pages/Home';

//Switch in domVs5 = Routes in domVs6

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
