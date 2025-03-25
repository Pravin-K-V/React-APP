import React, { useState } from "react";

export function PersonalDetails({ data }) {
  const [showPersonalDetail, setShowPersonalDetail] = useState(false);

  const togglePersonalDetail = () => {
    setShowPersonalDetail((prevState) => !prevState);
  };
  return (
    <div>
      {showPersonalDetail && (
        <div>
          <h4>
            <strong>Personal Details</strong>
          </h4>
          <p className="card-text">Phone: {data.phone}</p>
          <p className="card-text">Blood Group: {data.bloodGroup}</p>
          <p className="card-text">Height: {data.height} cm</p>
          <p className="card-text">Weight: {data.weight} kg</p>
          <p className="card-text">Eye Color: {data.eyeColor}</p>
          <p className="card-text">DOB: {data.birthDate}</p>
          <p className="card-text">Age: {data.age}</p>
        </div>
      )}
      <br />
      <button className="btn btn-info" onClick={togglePersonalDetail}>
        {showPersonalDetail ? "Hide Personal Detail" : "Personal Details"}
      </button>
    </div>
  );
}
