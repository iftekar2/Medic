import { Link } from "react-router-dom";
import "./patientCard.css";
import Profile from "../assets/profile.png";

function HomeCard({ medic }) {
  return (
    <div className="HomeCard">
      <Link to={"/" + medic.id}>
        <div className="medic">
          <img className="profileImage" src={Profile} />
          <h1 className="patientName">{medic.name}</h1>
          <h3 className="patientID">{medic.userid}</h3>
          <h3 className="patientDisease">{medic.disease}</h3>
        </div>
      </Link>
    </div>
  );
}

export default HomeCard;
