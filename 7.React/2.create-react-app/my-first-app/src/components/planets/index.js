import React, { useState, useEffect } from 'react';
import Planet from './planet';

const clickOnPlanet = (title) => {
  console.log(`um click no planeta: ${title}"`);
};

// componentDidMount() {
//   getPlanets().then((data) => {
//     setState((state) => ({
//       planets: data['planets'],
//     }));
//   });
// }

async function getPlanets() {
  let response = await fetch('http://localhost:3000/api/planets.json');
  let data = await response.json();
  return data;
}

const Planets = () => {
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    getPlanets().then(data => {
      setPlanets(data['planets'])
    })
  }, [])

  const removeLast = () => {
    let new_planets = [...planets];
    new_planets.pop();
    setPlanets(new_planets);
  };

  const duplicateLastPlanet = () => {
    const last_element = planets.length - 1;
    let last_planet = planets[last_element];
    setPlanets([...planets, last_planet]);
  };


  return (
    <>
      <h3>Planet List</h3>
      <button onClick={removeLast}>Remove last</button>
      <button onClick={duplicateLastPlanet}>Duplicate last</button>
      <hr />
      {planets.map((planet, index) => (
        <Planet
          id={planet.id}
          title={planet.title}
          description={planet.description}
          img_url={planet.img_url}
          link={planet.link}
          key={index}
        />
      ))}
    </>
  );

}

export default Planets;
