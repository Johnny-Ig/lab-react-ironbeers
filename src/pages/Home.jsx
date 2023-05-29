import React from "react"
import { Link } from "react-router-dom";
import beersImage from "../assets/beers.png"
import newBeerImage from "../assets/new-beer.png"
import randomBeer from "../assets/random-beer.png"
function Home() {
  return (
    <div>
    <img src={beersImage} alt="beerImage" width="400px" />
    <br/>
     <Link to="/beers" >All Beers</Link>
     <br/>
     <img src={newBeerImage} alt="beerImage" width="400px" />
     <br/>
     <Link to="/new" >New Beers</Link>
     <br/>
     <img src={randomBeer} alt="radomBeer" width="400px" />
     <br/>
     <Link to="/random" >Random Beer</Link>




    </div>
  )
}

export default Home