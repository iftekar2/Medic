import { Link } from "react-router-dom";
import "./patientCard.css";
function PatientCard({ medic }) {
  return (
    <div className="PatientCard">
      <Link to={"/" + medic.id}>
        <div className="medic">
          <h1 className="patientName">{medic.name}</h1>
          <h3 className="patientID">{medic.userid}</h3>
          <h3 className="patientDisease">{medic.disease}</h3>
          <h3 className="patientSymptoms">{medic.symptoms}</h3>
          <h3 className="patientMedication">{medic.medication}</h3>
          <h3 className="patientAge">{medic.age}</h3>
        </div>
      </Link>
      <button>Edit</button>
    </div>
  );
}

export default PatientCard;
