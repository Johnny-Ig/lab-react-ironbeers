import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Beers() {
  const [allBeers, setAllBeers] = useState([]);
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => response.json())
      .then((data) => setAllBeers(data))

      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {allBeers.map((eachBeer, index) => {
        return (
          <div key={index}>
          <Link to={`/beers/${eachBeer._id}`} >
            <img src={eachBeer.image_url} width="80px" alt="beer" />
            <h2>Name: {eachBeer.name}</h2>
            <p>Tagline: {eachBeer.tagline}</p>
            <p>Create by: {eachBeer.contributed_by}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Beers;
