import Belltower from './images/UCRBellTower1.jpg'
import Miracosta from './images/miracosta.jpeg'
import Rit from './images/RIT.jpeg'

const Education = () => {
  return ( 
    <div>
      <p className="education-title marquee" id="education"><span>Education</span></p>
      <p className="education-title marquee marquee2" id="education"><span>Education</span></p>
      <div className="education">

        <div className="school">
        {/* <p>2020-2023</p> */}
          <img src={Miracosta}></img>
          <div className="school-text">
            <h2> MiraCosta College</h2>
            <p>AA Software Development </p>
          </div>
        </div>

        <div className="school">
          {/* <p>2020-2024</p> */}
          <img src={Belltower}></img>
          <div className="school-text">
            <h2>University of California, Riverside</h2>
            <p>BS Applied Mathematics</p> 
            <p> Minor Computer Science </p>
          </div>
        </div> 


          <div className="school">
          {/* <p>2024-2026</p> */}
          <img src={Rit}></img>
          <div className="school-text">
            <h2>Rochester Institute of Techonology</h2>
            <p>MS Computer Science</p>
          </div>
          </div>

        </div>

      <div className="container">
        <div className="coursework">
          <h2>Coursework</h2>
          <ul>
            <li>Data Structures, Web Development, Operating Systems</li>
            <li>Linear Algebra, Numerical analysis 1, 2 & 3</li>
          </ul>
          <h2>Certifications</h2>
          <ul>
            <li>Apple app development with swift certified user</li>
          </ul>
          <h2>Achievements</h2>
          <ul>
            <li>Computer programming fundamentals with highest honors</li>
          </ul>
        </div>
      </div>
    </div>
    );
}
 
export default Education;