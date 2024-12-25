import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LineagePage from './pages/LineagePage';
import VillagePage from './pages/VillagePage';
import Navbar from './components/Navbar';
import PeoplePage from './pages/PeoplePage';
import PersonDetails from './components/PersonComponents/PersonDetails';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import RegisterOtpPage from './pages/RegisterOtpPage';
import ErrorBoundary from './components/ErrorBoundry';
import { useSelector } from 'react-redux';



function App() {

   useEffect(()=>{
    toast("Welcome to Family Tree!")
   },[]);
   
   const {regReqId} =  useSelector(state => state.user);

  return (
    <div className="App">
      <ToastContainer 
        position="top-right"   // Position of the toast
        autoClose={5000}       // Time (in ms) before auto closing the toast
        hideProgressBar={false} // Whether or not to show the progress bar
        newestOnTop={false}     // Whether to place the newest toast at the top or bottom
        closeOnClick={true}     // Close the toast when clicked
        rtl={false}             // Right-to-left language support
        pauseOnFocusLoss={true} // Pause on window focus loss
        draggable={true}        // Allow dragging of the toast
        pauseOnHover={true}     // Pause when hovered
      />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/people" element={<PeoplePage/>}></Route>
        <Route path="/people/:id" element={<PersonDetails/>}></Route>
        <Route path="/lineage" element={<LineagePage/>}></Route>
        <Route path="/village" element={<VillagePage/>}></Route>
        <Route path="/user/register" element={<RegisterPage/>}></Route>
        <Route
            path="/user/register/:reqId"
            element={
              regReqId ? <RegisterOtpPage /> : <Navigate to="/user/register" />
            }
          />
        <Route path="/user/login" element={<LoginPage/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
