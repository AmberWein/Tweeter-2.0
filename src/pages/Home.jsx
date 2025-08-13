import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TweetForm from "../components/TweetForm/TweetForm";
import TweetList from "../components/TweetList/TweetList";
import { TweetsContext } from "../context/TweetsContext";
import { supabase } from "../supabaseClient";

const Home = () => {
  const navigate = useNavigate();
  const { tweets, addTweet, loading } = useContext(TweetsContext);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/login");
      }
    };
    checkUser();
  }, []);

  return (
    <div>
      <h1>Tweeter 2.0</h1>
      <TweetForm addTweet={addTweet} loading={loading} />
      <TweetList tweets={tweets} />
    </div>
  );
};

export default Home;
