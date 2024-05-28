const Project = ({project}) => {
  return ( 

    <div className="project fadeIn">
      <div className="project-top"> 
        <h3>{project.title}</h3>
        {project.logo1 && <img className="project-logo" src={project.logo1}></img>}
        {project.logo2 && <img className="project-logo" src={project.logo2}></img>}


      </div>
        <p className="project-text">{project.bullets}</p>
      
    </div>
    );
}
 
export default Project;