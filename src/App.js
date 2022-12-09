import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './Body/Body';
import Details from './Components/Details/Details';
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
            <Route path='/' exact element={<Body />} />
            <Route path='/details/:name' element={<Details />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
