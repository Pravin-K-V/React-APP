import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { HomePage } from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserDetailPage } from "./components/UserDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users/search" element={<UserDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
