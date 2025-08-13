import { useState, useEffect } from "react";

const Profile = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const savedUsername = localStorage.getItem("username") || "";
    setUsername(savedUsername);
  }, []);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSave = () => {
    localStorage.setItem("username", username);
    alert("user's name saved");
  };

  return (
    <div>
      <h1>Profile</h1>
      <label>
        Username:
        <input type="text" value={username} onChange={handleChange} />
      </label>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Profile;
