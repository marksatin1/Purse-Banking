import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
  let recImage =
    recommend === 'Yes, I recommend this card' ? Checkmark : Crossmark;

  return (
    <Container className='comment-card'>
      <Row>
        <Col sm={12} md={4} className='user'>
          <h3 className='user--username'>{username}</h3>
          <p>
            Age: <b>{age}</b>
          </p>
          <p>
            Location: <b>{location}</b>
          </p>
          <p>
            Member since: <b>{memberDate}</b>
          </p>
        </Col>
        <Col className='comment'>
          <h3 className='comment--title'>{title}</h3>
          <img src={overallStars} alt='Overall Rating' />
          <p className='comment--date'>
            <i>{commentDate}</i>
          </p>
          <p className='comment--review'>{content}</p>
          <Row>
            <Col sm={12} lg={4} className='comment--rating'>
              Online Experience
              <img src={onlineStars} alt='Online Experience Rating' />
            </Col>
            <Col sm={12} lg={4} className='comment--rating'>
              Customer Service
              <img src={customerStars} alt='Customer Service Rating' />
            </Col>
            <Col sm={12} lg={4} className='comment--rating'>
              Account Benefits
              <img src={accountStars} alt='Account Benefits Rating' />
            </Col>
          </Row>
          <div className='comment--recommendation'>
            <img src={recImage} alt='checkmark' />
            <p>{recommend}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CommentCard;
