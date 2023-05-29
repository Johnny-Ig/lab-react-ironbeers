
import { useEffect, useState } from "react";

function RandomBeer() {
    const [BeerRandom, setAllBeerRandom] = useState([]);
   
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => response.json())
      .then((data) => setAllBeerRandom(data))

      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
     <img src={BeerRandom.image_url} alt="BeerRandom" width={"100px"} />
      <h2>Name: {BeerRandom.name}</h2>
      <p>Tagline: {BeerRandom.tagline}</p>
      <p>First Brewed: {BeerRandom.first_brewed}</p>
      <p>Attenuation Level: {BeerRandom.attenuation_level}</p>
      <p>Description :{BeerRandom.description}</p>
      <p>contributed by: {BeerRandom.contributed_by}</p>
    </div>

   
  )
}

export default RandomBeer