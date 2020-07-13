import React from "react";
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/description_with_link";

const Planet = (props) => {
  const names = ["a", "b", "c", "d"];

  let title;
  if (props.title_with_underline) {
    title = (
      <h4>
        <u>{props.title}</u>
      </h4>
    );
  } else {
    title = <h4>{props.title}</h4>;
  }
  return (
    <div>
      {title}
      <div onClick={() => props.clickOnPlanet(props.title)}>
        <DescriptionWithLink
          description={props.description}
          link={props.link}
          link_name="Mais informações aqui"
        />
      </div>
      <GrayImg img_url={props.img_url} gray={props.gray} />

      <h4>Satélites</h4>
      <ul>
        {names.map((n) => (
          <li>Satélite {n}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default Planet;
