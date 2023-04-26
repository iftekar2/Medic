import "./style.css";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../supabase/supabase";

function Edit() {
  const { id } = useParams();

  return (
    <div className="EditPage">
      <div>{id}He</div>
    </div>
  );
}

export default Edit;
