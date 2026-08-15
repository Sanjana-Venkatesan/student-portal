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
      {!isEditing ? (
        <div className="profile-view">
          <h3>{profile.name}</h3>
          <p>{profile.bio}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      ) : null}
    </div>
  );
}

export default Profile;