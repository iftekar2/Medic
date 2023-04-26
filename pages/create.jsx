import supabase from "../supabase/supabase";
import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function Create() {
  const nevigate = useNavigate();

  const [name, setName] = useState("");
  const [userid, setUserid] = useState("");
  const [disease, setDisease] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [medication, setMedication] = useState("");
  const [age, setAge] = useState("");
  const [formError, setFormError] = useState(null);

  //This is for all the fildes that we are going to populate
  const handleSubmit = async (e) => {
    e.preventDefault();
    //This is making sure that the user fill in all the boxes.
    if (!name || !userid || !disease || !symptoms || !medication || !age) {
      setFormError("Please fill in all the Boxes");
      return;
    }

    //We are using this to add the information to the Supabase.
    const { data, error } = await supabase
      .from("Medic")
      .insert([{ name, userid, disease, symptoms, medication, age }])
      .select();

    if (error) {
      setFormError("There is something Wrong");
      console.log(error);
    }
    if (data) {
      setFormError(null);
      nevigate("/");
    }
  };

  return (
    <div className="CreatePage">
      <form className="formSection" onSubmit={handleSubmit}>
        <h2 className="title">Name</h2>
        <input
          className="nameInput"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <h2 className="id">ID</h2>
        <input
          className="idInput"
          type="number"
          value={userid}
          onChange={(e) => setUserid(e.target.value)}
        ></input>
        <h2 className="disease">Disease</h2>
        <textarea
          className="diseaseInput"
          type="text"
          rows="5"
          cols="50"
          value={disease}
          onChange={(e) => setDisease(e.target.value)}
        />
        <h2 className="symptoms">Symptoms</h2>
        {/*value and onChange is passing the value that we enter to Symptoms and updating it*/}
        <textarea
          className="symptomsInput"
          type="text"
          rows="5"
          cols="50"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />
        <h2 className="medication">Medication</h2>
        <textarea
          className="descriptionInput"
          type="text"
          rows="5"
          cols="50"
          value={medication}
          onChange={(e) => setMedication(e.target.value)}
        />
        <h2 className="age">Age</h2>
        <input
          className="idInput"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        ></input>
        <div className="submit">
          <button className="submitForm">Submit</button>
        </div>
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}

export default Create;
