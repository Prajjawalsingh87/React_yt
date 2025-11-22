import { Bookmark } from "lucide-react";

const JobCard = ({
  company,
  logo,
  title,
  type,
  level,
  salary,
  location,
  posted,
}) => {
  return (
    <div className="card">
      <div className="top">
        <img src={logo} alt="logo" />
        <button>Save <Bookmark /></button>
      </div>

      <div className="center">
        <h3>{company} <span>{posted}</span></h3>
        <h2>{title}</h2>
        <div>
          <h4>{type}</h4>
          <h4>{level}</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>{salary}</h3>
          <p>{location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default JobCard;
