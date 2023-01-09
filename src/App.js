import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Tagline from './components/Tagline/Tagline';

function App() {
  return (
    <div className="App">
      <Home/>
      <Tagline/>
      <AboutUs/>
      <Courses/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
