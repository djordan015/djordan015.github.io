import Header from './Header';
import About from './About';
import Card from './Card';
import Profile from './Profile'
import Education from './Education';
import Footer from './Footer'
import Project from './Project';
import Projectlist from './Projectlist.js'
import Misc from './Misc.js';

function App() {


  const job1 = {
    title: "PrimeTime Tutor", 
    bullets: `Provide academic support and individualized tutoring to undeserved middle school students, 
    Implement program curriculum and activities to promote academic enrichment,
    Monitor student progress and maintain accurate records of attendance and participation.`,
    date1: "2023",
    date2: "2024"
  }

  const job2 = {
    title: "Python Instructor", 
    bullets: `Together with a dedicated team of UCR STEM students, we actively delivered engaging 
    Python programming lessons. We guided the students through hands-on coding exercises, 
    focused on building their foundational programming knowledge and problem-solving skills.`,
    date1: "2023",
  }

  const job3 = {
    title: "iOS App Design Intern", 
    bullets: `Contributed to the design and development of an iOS app, collaborating with a 
    team of fellow UCR students to deliver a high-quality product for a local business
    Acquired hands-on project development experience, ensuring that the app met the 
    client's requirements and delivered a seamless user experience`,
    date1: "2022",
  }

  const job4 = {
    title: "Summer Camp Leader",
    bullets: `Planned, implemented, and supervised activities designed to meet 
    the needs and interests of elementary-aged and teen Club members.`,
    date1: "2022"
  }
  const job5 = {
    title: "Student Assistant",
    bullets: `In my role as a Student Assistant for the Department of Mechanical 
    Engineering, I was actively responsible for serving as the first point of contact, 
    addressing inquiries, and delivering exceptional customer service. Additionally, I 
    provided administrative support to the faculty and staff whenever needed.`,
    date1: "2023"
  }

  return( 
    <div>
      <Header />
      <div>
        <section id="profile" className="hero">
          <Profile />
        </section>
        <div>
          <h2 id="about"></h2>
            <About />
          <Education />
        </div>

        <div className="card-list" id="experience"> 
          <h2 className="experience rotate">Experience</h2>
          <Card job ={job1}/>
          <Card job ={job2}/>
          <Card job ={job5}/>
          <Card job ={job3}/>
          <Card job ={job4}/>
        </div>

        <div>
          <Projectlist />
        </div>
      </div>
      <Misc />

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
