import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Miners from './components/Miners';
import PropMiners from './components/PropMiners';
import SoloMiners from './components/SoloMiners';
import Block from './components/Block/Block';

function App() {
  return (
    <div className=" bg-gray-900 w-auto h-auto">
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/propminer" element={<PropMiners />}/>
        <Route path="/solominer" element={<SoloMiners />}/>
        <Route path="/block" element={<Block />}/>
        
          <Route path="/" >
          {/* <Route index element={<Miners />} /> */}
          <Route index element={<PropMiners />} />

        </Route>
      </Routes>
    </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
