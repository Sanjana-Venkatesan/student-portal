import Navbar from "./layout/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import CommunityFeed from "./pages/CommunityFeed";

function App() {
  const styles = {
    app: {
      minHeight: "100vh",
      backgroundColor: "#f8fafc",
      color: "#1e293b",
    },

    main: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "4rem 2rem",
      textAlign: "center",
    },

    title: {
      margin: 0,
      fontSize: "2.25rem",
      fontWeight: "600",
    },

    text: {
      marginTop: "1rem",
      fontSize: "1.1rem",
      color: "#64748b",
    },
  };

  return (
    <div style={styles.app}>
      <Navbar />

      <main style={styles.main}>
        <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/community" element={<CommunityFeed />} />
        </Routes>
        <h1 style={styles.title}>Student Portal</h1>
        <p style={styles.text}>
          Welcome to the Student Portal.
        </p>
      </main>
    </div>
  );
}

export default App;