import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';

function App() {
  return (
    <div className=" bg-gray-900 w-screen h-screen">
      <Home></Home>
      <ToastContainer />
    </div>
  );
}

export default App;
