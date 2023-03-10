// import logo from './logo.svg';
import './App.scss';
import { Routes,Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';

//set up first component and first route
function App() {
  return (

    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path ="/index" element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/skills" element={<Skills/>}/>

        <Route  path="/contact" element={<Contact/>}/>
      </Route>
    </Routes>
    // defining routes

  );
}

export default App;
