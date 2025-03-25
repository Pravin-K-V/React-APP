import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function HomePage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [role, setRole] = useState("");

  useEffect(() => {
    const fetchUsers = (role = "") => {
      let url = `${process.env.REACT_APP_API_URL}/users`;

      if (role) {
        url = `${url}/role/${role}`;
      }

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setUsers(data);
          } else {
            console.error("Invalid data format:", data);
            setUsers([]);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError("Error fetching data");
          setLoading(false);
        });
    };

    fetchUsers(role);
  }, [role]);

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mt-5 ">
      <header role="banner" className="bg-primary text-white py-3">
        <div className="container">
          <h1>Welcome to the User List</h1>
        </div>
      </header>

      <div className="mb-3">
        <label htmlFor="roleSelect" className="form-label fw-bold text-primary">
          Filter by Role
        </label>
        <select
          id="roleSelect"
          className="form-select"
          onChange={handleRoleChange}
          style={{
            borderColor: "#007bff",
            borderRadius: "8px",
            padding: "10px",
            fontSize: "1.1rem",
          }}
        >
          <option value="">Select User</option>
          <option value="">All</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="moderator">moderator</option>
        </select>
      </div>
      <div>no of results: {users.length}</div>
      <br />
      <div className="row">
        {Array.isArray(users) && users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          users.map((user) => (
            <div className="col-md-4 col-sm-6 mb-4 bg-primary" key={user.id}>
              <Link
                to={`/users/search?id=${user.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="card">
                  <img
                    src={user.image}
                    className="card-img-top"
                    alt={`${user.firstName} ${user.lastName}`}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "50%",
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {user.firstName} {user.lastName}
                    </h5>
                    <p className="card-text">Email: {user.email}</p>
                    <p className="card-text">Username: {user.username}</p>
                    <p className="card-text">Age: {user.age}</p>
                    <p className="card-text">Gender: {user.gender}</p>
                    <p className="card-text">DOB: {user.birthDate}</p>
                    <p className="card-text">Role: {user.role}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
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
