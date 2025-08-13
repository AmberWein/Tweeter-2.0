import { createContext, useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export const TweetsContext = createContext();

export const TweetsProvider = ({ children }) => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTweets = async () => {
    try {
      const { data, error } = await supabase
        .from("Tweets")
        .select("*")
        .order("date", { ascending: false });

      if (error) throw error;
      if (Array.isArray(data)) setTweets(data);
    } catch (error) {
      console.error("error fetching tweets:", error);
    }
  };

  const addTweet = async (content) => {
    const username = localStorage.getItem("username");
    if (!username) {
      alert("please set your username in Profile before tweeting");
      return;
    }

    const newTweet = {
      content,
      userName: username,
      date: new Date().toISOString(),
    };

    setLoading(true);

    try {
      const { error } = await supabase.from("Tweets").insert([newTweet]);
      if (error) throw error;
      setTweets((prev) => [newTweet, ...prev]);
    } catch (error) {
      console.error("error posting tweet:", error);
      alert("failed to post tweet");
    } finally {
      setLoading(false);
    }
  };

  // polling for new tweets every 5 seconds
  useEffect(() => {
    fetchTweets();
    const interval = setInterval(fetchTweets, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <TweetsContext.Provider value={{ tweets, addTweet, loading }}>
      {children}
    </TweetsContext.Provider>
  );
};