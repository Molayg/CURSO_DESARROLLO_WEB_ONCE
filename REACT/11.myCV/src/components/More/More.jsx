import React from "react";
import "./More.css";

const More = ({ languages, skills, volunteer }) => {
  return (
    <div>
      <h2> languages</h2>
      {languages.map((item) => (
        <div key={JSON.stringify(item)}>
          <p>{item.language}</p>
          <p>{item.wrlevel}</p>
          <p>{item.splevel}</p>
        </div>
      ))}
      <h2>skills</h2>
      {skills.map((item) => (
        <div key={JSON.stringify(item)}>
          <p>{item.sorf}</p>
          <p>{item.hard}</p>
        </div>
      ))}

      <h2>Volunteer</h2>
      {volunteer.map((item) => (
        <div key={JSON.stringify(item)}>
          <p>{item.where}</p>
          <p>{item.name}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default More;
