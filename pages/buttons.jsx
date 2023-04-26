import { Link } from "react-router-dom";
import "./style.css";

function Buttons() {
  return (
    <div className="ButtonsPage">
      <div className="buttons">
        <Link to="/">
          <button className="backButton">Back</button>
        </Link>
        <Link to="/">
          <button className="editButton">Edit</button>
        </Link>
      </div>
    </div>
  );
}

export default Buttons;
