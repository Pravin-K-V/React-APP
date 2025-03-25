import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BankDetails } from "./BankDetails";
import { PersonalDetails } from "./PersonalDetails";
import { AddressDetails } from "./AddressDetails";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function UserDetailPage() {
  const query = useQuery();
  const id = query.get("id");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}/users/search?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setUser(data);
        } else {
          setError("User not found");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
        setError("Error fetching user details");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <header role="banner" className="bg-primary text-white py-3">
        <div className="container">
          <h1>Welcome to the User List</h1>
        </div>
      </header>
      <button onClick={handleNavigateHome} className="btn btn-primary mb-3">
        Go to Homepage
      </button>
      <h1 className="text-center">
        {user.firstName} {user.lastName}'s Details
      </h1>

      <div className="card">
        <img
          src={user.image}
          className="card-img-top"
          alt={`${user.firstName} ${user.lastName}`}
          style={{
            width: "100%",
            maxWidth: "150px",
            objectFit: "cover",
            margin: "0 auto",
            display: "block",
          }}
        />
        <div className="card-body">
          <h5 className="card-title">
            {user.firstName} {user.lastName}
          </h5>
          <p className="card-text">Email: {user.email}</p>
          <p className="card-text">Username: {user.username}</p>
          <p className="card-text">Gender: {user.gender}</p>
          <p className="card-text">Role: {user.role}</p>
          <BankDetails data={user} />
          <br />
          <PersonalDetails data={user} />
          <br />
          <AddressDetails data={user} />
        </div>
      </div>
      <footer className="mt-4 text-center text-muted">
        <hr />
        <p>2025 Employee Info.com</p>
        <p>
          For more details, contact us at{" "}
          <a href="mailto:info@yourcompany.com">info@Employee.com</a>
        </p>
      </footer>
    </div>
  );
}
