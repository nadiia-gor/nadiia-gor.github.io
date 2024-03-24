import './ProjectCard.scss';

const ProjectCard = ({ projectPhoto }) => {
  return (
    <div className="projectCard--container">
      <img src={projectPhoto} alt="project-photo" />
      <div className="project-descr-container">
        <div className="project-descr">
          <h4>Modern Bedroom</h4>
          <p>Decor / Architecture</p>
        </div>
        <img src="src/pages/Home/images/arrow.svg" alt="arrow-icon" />
      </div>
    </div>
  );
};

export default ProjectCard;
