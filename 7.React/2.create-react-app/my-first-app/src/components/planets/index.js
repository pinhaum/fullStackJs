import React from "react";
import Planet from "./planet";

const clickOnPlanet = (title) => {
  console.log(`um click no planeta: ${title}"`);
};

const Planets = () => {
  return (
    <>
      <h3>Planet List</h3>
      <button>Show message</button>
      <hr />
      <Planet
        title="Mercúrio"
        description="Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas."
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
        link="https://en.wikipedia.org/wiki/Mercurio"
        clickOnPlanet={clickOnPlanet}
        title_with_underline="true"
      />
      <Planet
        title="Vênus"
        description="Vênus é a primeira estrela que aparece no céu ao anoitecer, também é o planeta que dá nome à deusa romana da beleza e do amor"
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/280px-Venus-real_color.jpg"
        clickOnPlanet={clickOnPlanet}
        gray="true"
      />
    </>
  );
};

export default Planets;
