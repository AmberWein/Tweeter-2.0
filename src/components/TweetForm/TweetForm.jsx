import { useState } from 'react';

const TweetForm = ({ addTweet, maxLength = 140, loading }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.length === 0 || content.length > maxLength) return;
    addTweet(content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Please share your thought here..."
      />
      <button type="submit" disabled={content.length > maxLength || loading}>
        Tweet
      </button>
      <p>{content.length}/{maxLength}</p>
    </form>
  );
};

export default TweetForm;