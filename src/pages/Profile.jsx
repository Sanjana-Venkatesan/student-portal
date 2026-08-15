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
      ) : (
        <div className="profile-edit">
          <input
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
          <textarea
            value={profile.bio}
            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
          />
          <button onClick={() => setIsEditing(false)}>Save</button>
        </div>
      )}
    </div>
  );
}

export default Profile;