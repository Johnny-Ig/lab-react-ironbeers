import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function BeerDetails() {
    const [BeerDetails, setAllBeerDetails] = useState([]);
    const params = useParams()
  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
      .then((response) => response.json())
      .then((data) => setAllBeerDetails(data))

      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
     <img src={BeerDetails.image_url} alt="BeerDetails" width={"100px"} />
      <h2>Name: {BeerDetails.name}</h2>
      <p>Tagline: {BeerDetails.tagline}</p>
      <p>First Brewed: {BeerDetails.first_brewed}</p>
      <p>Attenuation Level: {BeerDetails.attenuation_level}</p>
      <p>Description :{BeerDetails.description}</p>
      <p>contributed by: {BeerDetails.contributed_by}</p>
    </div>

   
  )
}

export default BeerDetails