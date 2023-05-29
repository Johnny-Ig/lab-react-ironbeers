
import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Beers from './pages/Beers';
import BeerDetails from './pages/BeerDetails';
import RandomBeer from './pages/RandomBeer';
 

function App() {
  return (
    <div className="App">
    <Link to="/"><img src='https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png' width="460px"/></Link>
   
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/beers" element={<Beers/>} />
      <Route path="/beers/:id" element={<BeerDetails/>}/>
      <Route path="/random" element={<RandomBeer/>}/>
    </Routes>
    </div>
  );
}

export default App;
