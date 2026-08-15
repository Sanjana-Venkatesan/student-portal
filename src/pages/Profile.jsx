import { useState } from "react";
import "./Profile.css";

function Profile() {
  const [profile, setProfile] = useState({
    name: "Sanjana Venkatesan",
    bio: "Computer Science student, into web dev.",
  });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="profile-page">
      <h2>Profile</h2>
    </div>
  );
}

export default Profile;