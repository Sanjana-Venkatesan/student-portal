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
    </div>
  );
}

export default Dashboard;