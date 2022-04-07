import './App.css';
import Navbar from './component/NavbarSide/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Pages/Home/Home';
import Search from './component/Pages/Search/Search';
import AddPlaylist from './component/Pages/AddPlaylist/AddPlaylist';

//Switch in domVs5 = Routes in domVs6

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add' element={<AddPlaylist/>} />
        <Route path='/search' element={<Search/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
