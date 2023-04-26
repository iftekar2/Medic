import Profile from "../assets/profile.png";
import "./style.css";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../supabase/supabase";

function Update() {
  const { id } = useParams();
  const nevigate = useNavigate();

  const [name, setName] = useState("");
  const [userid, setUserid] = useState("");
  const [disease, setDisease] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [medication, setMedication] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    //In here I am fetching data and going to display the data to the page
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("Medic")
        .select()
        .eq("id", id)
        .single();
      if (error) {
        nevigate("/", { replace: true });
      }
      if (data) {
        setName(data.name);
        setUserid(data.userid);
        setDisease(data.disease);
        setSymptoms(data.symptoms);
        setMedication(data.medication);
        setAge(data.age);
      }
    };
    fetchData();
  }, [id, nevigate]);
  return (
    <div className="viewPage">
      <div className="viewCard">
        <img className="userImage" src={Profile} />
      </div>
      <div className="discription">
        <div className="detail">
          <h1>{name}</h1>
          <h3>{userid}</h3>
          <h3>{disease}</h3>
          <h3>{symptoms}</h3>
          <h3>{medication}</h3>
          <h3>{age}</h3>
          <div className="buttons">
            <div className="buttons">
              <Link to="/">
                <button className="backButton">Back</button>
              </Link>
              <Link to={"/" + id}>
                <button className="editButton">Edit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update;
