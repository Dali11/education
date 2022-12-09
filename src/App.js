import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Apply from './Components/Apply/Apply'
import Contact from './Components/Contact/Contact'
import Courses from './Components/Courses/Courses'
import Meeting from './Components/Meeting/Meeting'




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Home />
        <Meeting />
        <Apply />
        <Courses />
        <About />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
