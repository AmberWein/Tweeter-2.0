import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TweetForm from "../components/TweetForm/TweetForm";
import TweetList from "../components/TweetList/TweetList";
import { supabase } from "../supabaseClient";

const Home = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const navigate = useNavigate();

  const fetchTweets = async () => {
    setFetching(true);
    try {
      const { data, error } = await supabase
        .from("Tweets")
        .select("*")
        .order("date", { ascending: false });

      if (error) throw error;

      if (Array.isArray(data)) setTweets(data);
      else console.error("unexpected response data:", data);
    } catch (error) {
      console.error("error fetching tweets:", error);
      alert("failed to load tweets");
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    const init = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/login");
        return;
      }
      await fetchTweets();
    };
    init();
  }, []);

  const addTweet = async (content) => {
    const username = localStorage.getItem("username");
    if (!username) {
      alert("please set a username in your profile before tweeting!");
      return;
    }

    const newTweet = {
      content,
      userName: username,
      date: new Date().toISOString(),
    };

    setLoading(true);

    try {
      const { data, error } = await supabase.from("Tweets").insert([newTweet]);
      if (error) throw error;
      setTweets((prev) => [newTweet, ...prev]);
    } catch (error) {
      console.error("error posting tweet:", error);
      alert("failed to post tweet");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Tweeter 2.0</h1>
      {fetching ? (
        <p>Loading tweets...</p>
      ) : (
        <>
          <TweetForm addTweet={addTweet} loading={loading} />
          <TweetList tweets={tweets} />
        </>
      )}
    </div>
  );
};

export default Home;