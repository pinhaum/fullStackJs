import React, { Fragment, useState } from 'react';

const initialState = {
  title: '',
  description: '',
  link: '',
  img_url: '',
};

const Form = (props) => {
  const [fields, setFields] = useState(initialState);
  const handleFieldsChange = (event) =>
    setFields({
      ...fields,
      [event.currentTarget.name]: event.target.value,
    });

  const handleSubmit = (event) => {
    props.addPlanet(fields);
    event.preventDefault();
    setFields(initialState);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Name: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldsChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            id="description"
            name="description"
            value={fields.description}
            onChange={handleFieldsChange}
          />
        </div>
        <div>
          <label htmlFor="link">Link: </label>
          <input
            type="text"
            id="link"
            name="link"
            value={fields.link}
            onChange={handleFieldsChange}
          />
        </div>
        <div>
          <label htmlFor="img_url">Imagem: </label>
          <input
            type="text"
            id="img_url"
            name="img_url"
            value={fields.img_url}
            onChange={handleFieldsChange}
          />
        </div>
        <br />
        <input type="submit" />
      </form>
    </Fragment>
  );
};

export default Form;
