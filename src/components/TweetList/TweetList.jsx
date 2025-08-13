import TweetCard from '../TweetCard/TweetCard';

const TweetList = ({ tweets }) => {
  return (
    <div className="tweet-list">
      {tweets.map((tweet, index) => (
        <TweetCard key={index} tweet={tweet} />
      ))}
    </div>
  );
};

export default TweetList;