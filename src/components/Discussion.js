import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CardTypeA from './CardTypeA';
import CardTypeB from './CardTypeB';
import './styles/DiscussionBoard.css';

const loadLocale = async (locale) => {
  const response = await fetch(`/locales/${locale}.json`);
  const data = await response.json();
  return data;
};

const DiscussionBoard = ({ discussions, setDiscussions, locale }) => {
  const navigate = useNavigate();
  const [texts, setTexts] = useState({});
  const [localizedDiscussions, setLocalizedDiscussions] = useState([]);

  useEffect(() => {
    const fetchTexts = async () => {
      const loadedTexts = await loadLocale(locale);
      setTexts(loadedTexts);
      setLocalizedDiscussions(loadedTexts.discussions);
    };
    fetchTexts();
  }, [locale]);

  useEffect(() => {
    if (discussions.length === 0) {
      fetch('/discussions.json')
        .then(response => response.json())
        .then(data => setDiscussions(data))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [discussions, setDiscussions]);

  const handleStartNewThread = () => {
    navigate('/new-thread');
  };

  return (
    <div className="discussion">
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="discTitle">{texts.discussionForum}</h1>
          <Button className="threadButton" onClick={handleStartNewThread}>{texts.startNewThread}</Button>
        </div>

        {localizedDiscussions.map((discussion, index) => (
          <div key={index}>
            <CardTypeA
              title={discussion.title}
              description={discussion.description}
              author={discussion.author}
              date={discussion.date}
              replies={discussion.replies}
            />
            {discussion.posts.map((post, idx) => (
              <CardTypeB
                key={idx}
                author={post.author}
                time={post.time}
                platform={post.platform}
                content={post.content}
                tags={post.tags}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionBoard;
