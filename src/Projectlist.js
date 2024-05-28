import { useState } from 'react';

import Project from './Project.js'
import c from './images/C++.png'
import java from './images/java.png'


const project1 = {
  title: "MOOOVE!", 
  bullets: `A turn-based game where the player plays as a cow 
  and fights against rogue farm animals, created using C++ 
  and Google tests.`,
  // logo1: c
}
const project2 = {
  title: "Weather App", 
  bullets: `A weather app that allows the user to view the weather 
  in three different locations simultaneously. This includes humidity, 
  visibility, sunrise and sunset, weather conditions, the current temperature, 
  and the high and low temperatures for the day. `,
  // logo1: c
}

const project3 = {
  title: "Muckenthaler App", 
  bullets: `A UI/UX design project designed to streamline the ticket purchasing 
  process for visitors of the Muckenthaler Cultural Center. It serves as a hub for 
  the users, allowing them to access a map of the center, receive news and updates, 
  view the event calendar, discover what classes are being offered, and learn more 
  about the exhibits, gardens, and galleries on site`,
  // logo1: c
}

const project4 = {
  title: "Rocko’s Café", 
  bullets: `A menu app for managing and making purchases at a small coffee shop. 
  For management, A file system was used to maintain the menu and easily allowed for 
  modulation. For purchasing, the customer could choose three meal items: a drink, appetizer, 
  and entrée. The customer would then be able to tip and receive a receipt upon completing their 
  purchase.`,
  // logo1: c
}



const projects = [project1, project2, project3, project4]

// const project2 = {
//   title: "Muckenthaler App", 
//   bullets: `A UI/UX design project designed to streamline 
//   the ticket purchasing process for visitors of the 
//   Muckenthaler Cultural Center.`,
// }

const Projectlist = () => {

  const [currentProject, setCurrentProject] = useState(0);
  console.log("projects: " + projects.length)
  console.log("current: " + currentProject)

  const handleClick= (x) =>{
    console.log("handleClick " + x + currentProject);
    if((currentProject + x) <= (projects.length-1) && (currentProject + x) >= 0){
      setCurrentProject(currentProject + x);
      console.log("current project" + currentProject);
      return;
    }
    else if((currentProject + x) < 0){
      setCurrentProject(projects.length-1);
      return;
    }
    else if((currentProject + x) > (projects.length - 1)){
      setCurrentProject(0);
    }

    console.log("no more projects");
    return;    
  }


  return (
    <div className="project-container">
      <h2 id="projects">Projects</h2>
        <div className="project-list projects">
          
        
        <button className="project-button" onClick={() => handleClick(-1)}> &lt; </button>
        <div>
          <Project project={projects[currentProject]} />
          {/* <Project project={project2} /> */}
        </div>
        <button type="button" className="project-button" onClick={() => handleClick(1)}> &gt; </button>

        </div> 
    </div> 
    );
}
 
export default Projectlist;