const Header = () => {
  return (  
    <div className="navbar"> 
      <a className="nav-item" href="#profile">David Jordan</a>
      <div className="navbar-container">
        <a className="nav-item nav-right"  href="#about" >About</a>
        <a className="nav-item nav-right" href="#education" >Education</a>
        <a className="nav-item nav-right" href="#experience" >Experience</a>
        <a className="nav-item nav-right" href="#projects" >Projects</a>
      </div>
    </div>
  );
}
 
export default Header;