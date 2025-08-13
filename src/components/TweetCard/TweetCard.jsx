const TweetCard = ({ tweet }) => {
  return (
    <div className="tweet-card">
      <p><strong>{tweet.userName}</strong> - {new Date(tweet.date).toLocaleString()}</p>
      <p>{tweet.content}</p>
    </div>
  );
};

export default TweetCard;