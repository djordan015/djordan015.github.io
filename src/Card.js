      {/* <ul>
      {job.bullets.map((b, index) =>(
        <li>{b}</li>
      ))}
      </ul>   */}

const Card = ({job}) => {
  return ( 
    <div className="job">
      <p className="rotate">{job.date1} {job.date2 && <span>- {job.date2}</span>}</p>
      <div className="card">
        <h3>{job.title}</h3>
        <p>{job.bullets}</p>

      </div>
    </div>
   );
}
 
export default Card;