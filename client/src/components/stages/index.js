import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Index() {
  const [stages, setStages] = useState([]);

  useEffect(() => {
    Axios.get("/api/stages")
      .then(result => setStages(result.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <header>
        <h1>All Stages</h1>
      </header>

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Stage Name</th>
              <th>Booking Day</th>

              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {stages.map(stage => (
              <tr key={stage._id}>
                <td>
                  <Link to={`/${stage._id}`}>{stage.stageName}</Link>
                </td>
                <td>{stage.day}</td>
                
                <td>
                  <Link to={`/${stage._id}/edit`}>edit</Link>|
                  <Link to={`/${stage._id}/destroy`}>delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Index;
