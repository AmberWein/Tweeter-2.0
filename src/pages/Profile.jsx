import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

const Profile = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/login");
        return;
      }
      // load username from localStorage if session exists
      const savedUsername = localStorage.getItem("username") || "";
      setUsername(savedUsername);
      setNewUsername(savedUsername);
    };
    checkUser();
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