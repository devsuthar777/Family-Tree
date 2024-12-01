import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LineagePage from './pages/LineagePage';
import VillagePage from './pages/VillagePage';
import Navbar from './components/Navbar';
import PeoplePage from './pages/PeoplePage';
import PersonDetails from './components/PersonComponents/PersonDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/people" element={<PeoplePage/>}></Route>
        <Route path="/people/:id" element={<PersonDetails/>}></Route>
        <Route path="/lineage" element={<LineagePage/>}></Route>
        <Route path="/village" element={<VillagePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
