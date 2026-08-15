function App() {
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f8fafc",
      color: "#1e293b",
    },

    title: {
      fontSize: "2rem",
      fontWeight: "600",
      margin: 0,
    },

    text: {
      fontSize: "1rem",
      color: "#64748b",
      marginTop: "0.75rem",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Student Portal</h1>
      <p style={styles.text}>Welcome to the Student Portal.</p>
    </div>
  );
}

export default App;