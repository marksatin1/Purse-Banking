import { Container, Row, Col } from 'react-bootstrap';

import Checkmark from '../../../assets/Emojis/Checkmark.webp';
import Crossmark from '../../../assets/Emojis/Crossmark.webp';

const CommentCard = ({
  recommend,
  username,
  age,
  location,
  memberDate,
  overallStars,
  commentDate,
  title,
  content,
  onlineStars,
  customerStars,
  accountStars,
}) => {
  let recImage;
  if (recommend === 'Yes, I recommend this card') {
    recImage = Checkmark;
  } else if (recommend === 'No, I do not recommend this card') {
    recImage = Crossmark;
  }

  return (
    <Container>
      <Row className='comment-card'>
        <Col sm={12} md={4} className='user-info'>
          <h3 className='username'>{username}</h3>
          <div>
            <p>
              Age: <b>{age}</b>
            </p>
            <p>
              Location: <b>{location}</b>
            </p>
            <p>
              Member since: <b>{memberDate}</b>
            </p>
          </div>
        </Col>
        <Col className='comment-info'>
          <Row className='header'>
            <Col sm={12} md='auto'>
              <img
                style={{ width: '140px' }}
                src={overallStars}
                alt='Overall Rating'
              />
            </Col>
            <Col sm={12} md={'auto'}>
              <p>{commentDate}</p>
            </Col>
          </Row>
          <h3 className='title'>{title}</h3>
          <p>{content}</p>
          <Row>
            <Col sm={12} lg={4} className='rating'>
              Online Experience
              <img
                style={{ width: '100px' }}
                src={onlineStars}
                alt='Online Experience Rating'
              />
            </Col>
            <Col sm={12} lg={4} className='rating'>
              Customer Service
              <img
                style={{ width: '100px' }}
                src={customerStars}
                alt='Customer Service Rating'
              />
            </Col>
            <Col sm={12} lg={4} className='rating'>
              Account Benefits
              <img
                style={{ width: '100px' }}
                src={accountStars}
                alt='Account Benefits Rating'
              />
            </Col>
          </Row>
          <div className='recommendation'>
            <img style={{ width: '40px' }} src={recImage} alt='checkmark' />
            <p>{recommend}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CommentCard;
