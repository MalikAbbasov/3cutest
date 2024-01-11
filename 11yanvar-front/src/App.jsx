import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainlayout from './layout/Mainlayout';
import Home from './pages/Home';
import Add from './pages/Add';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Mainlayout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/add' element={<Add/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
