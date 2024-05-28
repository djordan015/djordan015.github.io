import liLogo from './images/linkedin.png'
import gitLogo from './images/github.png'
import email from './images/email.png'

const Footer = () => {
  return ( 
  <div className="footer">
    <a href="https://www.linkedin.com/in/davidajordan96/" target="_blank">
      <img src={liLogo} alt="linked logo"></img>
    </a>
    <a href="https://github.com/djordan015" target="_blank">
      <img src={gitLogo} alt="github logo"></img>
    </a>
    <a href={`mailto:davidajo96@gmail.com`} className="email" target="_blank">
      <img src={email} alt="email icon"></img>
    </a>
  </div> );
}
 
export default Footer;