import { useState } from "react";
import "./Settings.css";

function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="settings-page">
      <h2>Settings</h2>
      <div className="setting-row">
        <label>Dark Mode</label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
      </div>
    </div>
  );
}

export default Settings;