import "./style.css";
import { Link } from "react-router-dom";
import supabase from "../supabase/supabase";
import { useState, useEffect } from "react";
import HomeCard from "../components/homeCard";
import BackgroundImage from "../assets/background.jpg";

function Home() {
  const [fetchError, setfetchError] = useState(null);
  const [medic, setMedic] = useState(null);

  //In here I am fetching the information from the Database.
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("Medic").select();

      //This is print if there was an error and the data could not be fatched
      if (error) {
        setfetchError("Sorry I Could Not Fetch Data");
        console.log(error);
        setMedic(null);
      }

      //In here I am fetching data
      if (data) {
        setMedic(data);
        setfetchError(null);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="HomePage">
      {/*This section is for the Nav Bar*/}
      <div className="nav">
        <div className="navSection">
          <input
            className="input"
            type="text"
            placeholder="Enter Disease"
          ></input>
          <button className="findDisease">Search</button>
        </div>
        <Link to="create">
          <div className="addCard">
            <i className="material-icons">add</i>
          </div>
        </Link>
      </div>
      {/*-------*/}

      {/*This section is goint to show any error that we run into*/}
      <div className="error">
        {fetchError && (
          <div>
            <p>{fetchError}</p>
            <img className="img" src={BackgroundImage} />
          </div>
        )}
      </div>
      {/*------*/}

      {/*This section is goint to show our Data*/}
      <div className="data">
        {medic && (
          <div className="dataGrid">
            {medic.map((medic) => (
              <HomeCard key={medic.id} medic={medic} />
            ))}
          </div>
        )}
      </div>
      {/*------*/}
    </div>
  );
}

export default Home;
