import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        {Planets.map(({ name, image }) => (
          <PlanetCard planetName={ name } planetImage={ image } key={ name } />
        )) }
      </>
    );
  }
}

export default SolarSystem;
