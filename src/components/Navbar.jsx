import Navbar from "./components/Navbar.jsx";

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
        <h1 style={styles.title}>Student Portal</h1>
        <p style={styles.text}>
          Welcome to the Student Portal.
        </p>
      </main>
    </div>
  );
}

export default App;