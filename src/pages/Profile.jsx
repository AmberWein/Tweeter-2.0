import { useState, useEffect } from "react";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  // load username from localStorage on mount
  useEffect(() => {
    const savedUsername = localStorage.getItem("username") || "";
    setUsername(savedUsername);
    setNewUsername(savedUsername);
  }, []);

  const handleSave = () => {
    setUsername(newUsername); 
    localStorage.setItem("username", newUsername);
    alert("User's name updated successfully!");
  };

  return (
    <div className="profile-page">
      <h1>Profile</h1>
      <p>Current username: {username}</p>
      <input
        type="text"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Profile;