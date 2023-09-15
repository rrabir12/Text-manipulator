import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';

function App() {
  return (
    <div>
    {/* <Navbar title="TextUtils"/> */}
    <Navbar />
    <div className='container my-3' >
    <TextForm heading="Enter your text here to manipulate"/>
    </div>
    </div>
  );
}

export default App;
