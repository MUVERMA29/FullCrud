
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './component/Navbar.jsx';
import Home from './component/Home.jsx';
import Register from './component/Register.jsx';
import Edit from './component/Edit.jsx';
import Details from './component/Details.jsx';
import { Routes,Route,} from 'react-router-dom'
import {ToastContainer} from 'react-toastify';

function App() {
  return (
    
    <>
    <Navbar/>
    <Routes >
      <Route  path='/' element={<Home/>}/>
      <Route  path='/register' element={<Register/>}/>
      <Route  path='/edit/:id' element={<Edit/>}/>
      <Route  path='/view/:id' element={<Details/>}/>
    </Routes>
    <ToastContainer/>
    </>
  );
}

export default App;
