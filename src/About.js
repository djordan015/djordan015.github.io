import photo from './images/smile.jpeg'
import resumeLogo from './images/resume.png'
import resume from './David Jordan Resume FA25 V3.pdf'


const About = () => {
  return ( 
    <div className="about">
      <img className="photo" src={photo}></img>
      <div className="right"> 
        <div className="right-top">
          <h2>About Me</h2>
          <a href={resume} download> 
            <img className="resume" src={resumeLogo} alt="photo of a file to download resume"></img>
          </a>
        </div>
        <p>I am an exuberant and joyous person who loves to share laughs with the those around me. Whether that be
          enjoying the air outside or talking at the dinner table, I cherish every moment I get to spend
          with the people I love. Some things that interest me are video games, music, and exercise. One of my
          favorite games is Legaue of legends, and some of my favorite genres of music include: rnb, jazz, hip-hop and edm.
        </p>
      </div>
        
    </div>
   );
}
 
export default About;