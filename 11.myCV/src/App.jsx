import { useState } from "react";
import "./App.css";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import More from "./components/More/More";
import { CV } from "./CV/CV";

const { hero, education, experience, languages, skills, volunteer } = CV;

const App = () => {
  const [showEducation, setShowEducation] = useState(true);
  const [showExperience, setShowExperience] = useState(false); // Nuevo estado para controlar la sección de experiencia

  return (
    <div className="App">
      <Hero hero={hero} />
      <About hero={hero} />
      <button
        className="custom-btn btn-4"
        onClick={() => setShowEducation(true)}
      >
        Educación
      </button>
      <button
        className="custom-btn btn-4"
        onClick={() => setShowEducation(false)}
      >
        Experience
      </button>

      {/* Botón adicional para mostrar la sección de experiencia */}
      <button onClick={() => setShowExperience(true)}>Experience</button>

      {showEducation && !showExperience ? (
        <Education education={education} />
      ) : (
        showExperience && <Experience experience={experience} />
      )}
      <More languages={languages} skills={skills} volunteer={volunteer} />
    </div>
  );
};
export default App;
