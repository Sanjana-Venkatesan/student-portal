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
      <div className="dashboard-container">
        <div className="dashboard-header">
    <h1>Welcome back, John</h1>
    <p>Here's an overview of your academic activity.</p>
  </div>

  <div className="dashboard-overview">
    <div className="overview-card">
      <h3>Current Semester</h3>
      <p>Fall 2026</p>
    </div>

    <div className="overview-card">
      <h3>Current GPA</h3>
      <p>3.72</p>
    </div>

    <div className="overview-card">
      <h3>Credits Completed</h3>
      <p>84 / 120</p>
    </div>

    <div className="overview-card">
      <h3>Attendance</h3>
      <p>92%</p>
    </div>
  </div>

  <div className="dashboard-grid">
    <section className="dashboard-section">
      <h2>Upcoming Classes</h2>

      <div className="class-item">
        <div>
          <h3>Database Systems</h3>
          <p>CS 301 · Room B204</p>
        </div>
        <span>10:00 AM</span>
      </div>

      <div className="class-item">
        <div>
          <h3>Software Engineering</h3>
          <p>CS 305 · Room A102</p>
        </div>
        <span>1:00 PM</span>
      </div>
    </section>

    <section className="dashboard-section">
      <h2>Upcoming Assignments</h2>

      <div className="assignment-item">
        <h3>Database Project</h3>
        <p>Due: August 20, 2026</p>
      </div>

      <div className="assignment-item">
        <h3>Software Engineering Report</h3>
        <p>Due: August 24, 2026</p>
      </div>
    </section>
  </div>

  <section className="dashboard-section announcements">
    <h2>Announcements</h2>

    <div className="announcement">
      <h3>Midterm Examination Schedule</h3>
      <p>
        The midterm examination schedule has been published.
      </p>
    </div>

    <div className="announcement">
      <h3>Library Hours Update</h3>
      <p>
        The library will remain open until 10:00 PM during examination week.
      </p>
    </div>
  </section>

  <section className="dashboard-section quick-actions">
    <h2>Quick Actions</h2>

    <div className="action-buttons">
      <button>View Courses</button>
      <button>View Grades</button>
      <button>View Schedule</button>
      <button>Update Profile</button>
    </div>
  </section>

  <section className="dashboard-section community-preview">
    <h2>Community</h2>
    <p>See what's happening in the student community.</p>
    <button>View Community</button>
  </section>
</div>
    </div>
  );
}

export default Dashboard;