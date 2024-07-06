import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CardTypeA from './CardTypeA';
import CardTypeB from './CardTypeB';
import './styles/DiscussionBoard.css';

const DiscussionBoard = ({ discussions, setDiscussions }) => {
  const navigate = useNavigate();

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
          <h1 className="discTitle">Discussion Forum</h1>
          <Button className="threadButton" onClick={handleStartNewThread}>Start New Thread</Button>
        </div>

        {discussions.map((discussion, index) => (
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
