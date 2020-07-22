import React from 'react';
import Planet from './planet';

const clickOnPlanet = (title) => {
  console.log(`um click no planeta: ${title}"`);
};

async function getPlanets() {
  let response = await fetch('http://localhost:3000/api/planets.json');
  let data = await response.json();
  return data;
}

class Planets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
    };
  }

  componentDidMount() {
    getPlanets().then((data) => {
      this.setState((state) => ({
        planets: data['planets'],
      }));
    });
  }

  removeLast = () => {
    let new_planets = [...this.state.planets];
    new_planets.pop();
    this.setState((state) => ({
      planets: new_planets,
    }));
  };

  duplicateLastPlanet = () => {
    const last_element = this.state.planets.length - 1;
    let last_planet = this.state.planets[last_element];
    this.setState((state) => ({
      planets: [...this.state.planets, last_planet],
    }));
  };

  render() {
    return (
      <>
        <h3>Planet List</h3>
        <button onClick={this.removeLast}>Remove last</button>
        <button onClick={this.duplicateLastPlanet}>Duplicate last</button>
        <hr />
        {this.state.planets.map((planet, index) => (
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
}

export default Planets;
