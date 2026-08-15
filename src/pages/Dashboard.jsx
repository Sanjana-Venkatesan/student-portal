import { useAuth } from "../context/AuthContext";
import "./Dashboard.css";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="dashboard-page">
       <h2>Dashboard</h2>
      <p className="welcome-msg">
        Welcome back{user ? `, ${user.name}` : ""}!
      </p>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>3</h3>
          <p>Posts Created</p>
        </div>
        <div className="stat-card">
          <h3>12</h3>
          <p>Comments Made</p>
        </div>
        <div className="stat-card">
          <h3>28</h3>
          <p>Likes Received</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;