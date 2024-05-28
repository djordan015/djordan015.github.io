import david from './images/david.jpeg'

const Profile = () => {
  return ( 
  <div className="profile">
    <img className="profile-pic" src={david}></img>
    <div className="profile-text">
      <h1>Hi, I'm <em style={{color: "#2779a7"}}>David</em></h1>
      <p>I am a student studying applied mathematics and computer science, with aspirations of breaking into the tech world!
        I will be continuing my journey of computer science at the<span style={{fontWeight: "bold"}}> Rochester Institute of Techonology</span>

      </p>  
    </div>

  </div> 
  );
}
 
export default Profile;