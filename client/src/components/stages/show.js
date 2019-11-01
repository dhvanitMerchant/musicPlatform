import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show(props) {
  const [stage, setStage] = useState([]);

  useEffect(() => {
    Axios.get(`/api/stages/${props.match.params.id}`)
      .then(result => setStage(result.data))
      .catch(err => console.error(err));
  }, [props]);

  return (
    <div className="container">
      <header>
        <h1>{stage.stageName}</h1>
      </header>

      <div>{stage.stageDescription}</div>
    </div>
  );
}

export default Show;
