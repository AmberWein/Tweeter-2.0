import { useState, useEffect } from "react";
import TweetForm from "../TweetForm/TweetForm";
import TweetList from "../TweetList/TweetList";

const Home = () => {
  const [tweets, setTweets] = useState([]);

  // Load tweets from local storage on component mount
  useEffect(() => {
    const savedTweets = JSON.parse(localStorage.getItem("tweets") || "[]");
    setTweets(savedTweets);
  }, []);

  const addTweet = (content) => {
    const newTweet = {
      content,
      userName: "Moshe",
      date: new Date().toISOString(),
    };
    const updatedTweets = [newTweet, ...tweets];
    setTweets(updatedTweets);
    localStorage.setItem("tweets", JSON.stringify(updatedTweets));
  };

  return (
    <div>
      <h1>Tweeter 2.0</h1>
      <TweetForm addTweet={addTweet} />
      <TweetList tweets={tweets} />
    </div>
  );
};

export default Home;
