import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import RootLayout from './components/RootLayout';
import About from './pages/About';
import Latest from './pages/Latest';




function App() {


  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<RootLayout/>} >
        <Route index element={<HomePage/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='latest' element={<Latest/>}/>
        
      </Route>
      </Routes>
    </div>
  );
}

export default App;
