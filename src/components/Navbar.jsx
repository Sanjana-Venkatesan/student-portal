import { Link } from "react-router-dom";

function Navbar() {
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      backgroundColor: "#1e293b",
      color: "white",
    },

    title: {
      fontSize: "1.25rem",
      fontWeight: "600",
      margin: 0,
    },

    links: {
      display: "flex",
      gap: "1.5rem",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },

    link: {
      color: "white",
      textDecoration: "none",
      fontSize: "0.95rem",
    },
  };

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>Student Portal</h1>

      <ul style={styles.links}>
        <li>
          <Link to="/dashboard" style={styles.link}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/community" style={styles.link}>
            Community
          </Link>
        </li>
        <li>
          <Link to="/profile" style={styles.link}>
            Profile
          </Link>
        </li>
        <li>
          <Link to="/settings" style={styles.link}>
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;