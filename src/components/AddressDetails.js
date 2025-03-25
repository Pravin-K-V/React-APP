import React, { useState } from "react";

export function AddressDetails({ data }) {
  const [showAddressDetail, setShowAddressDetail] = useState(false);

  const toggleAddressDetail = () => {
    setShowAddressDetail((prevState) => !prevState);
  };
  return (
    <div>
      {showAddressDetail && (
        <div>
          <h4>
            <strong>Address Details</strong>
          </h4>
          <p className="card-text">Phone: {data.phone}</p>
          <p className="card-text">Address {data.address.address}</p>
          <p className="card-text">City: {data.address.city}</p>
          <p className="card-text">State: {data.address.state}</p>
          <p className="card-text">Statecode: {data.address.stateCode}</p>
          <p className="card-text">postalCode: {data.address.postalCode}</p>
          <p className="card-text">Country: {data.address.country}</p>
        </div>
      )}
      <br />
      <button className="btn btn-info" onClick={toggleAddressDetail}>
        {showAddressDetail ? "Hide Address Detail" : "Address Details"}
      </button>
    </div>
  );
}
