import { Container, Row, Col } from 'react-bootstrap';

import Checkmark from '../../assets/Emojis/Checkmark.webp';
import Crossmark from '../../assets/Emojis/Crossmark.webp';

import classes from './CommentCard.module.css';

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
      <Row className={classes.layout}>
        <Col sm={12} md={4} className={classes['user-info']}>
          <h3 className={classes.username}>{username}</h3>
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
        <Col className={classes['comment-info']}>
          <Row className={classes['header']}>
            <Col sm={12} md={'auto'}>
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
          <h3 className={classes.title}>{title}</h3>
          <p>{content}</p>
          <Row>
            <Col sm={12} lg={4} className={classes.rating}>
              Online Experience
              <img
                style={{ width: '100px' }}
                src={onlineStars}
                alt='Online Experience Rating'
              />
            </Col>
            <Col sm={12} lg={4} className={classes.rating}>
              Customer Service
              <img
                style={{ width: '100px' }}
                src={customerStars}
                alt='Customer Service Rating'
              />
            </Col>
            <Col sm={12} lg={4} className={classes.rating}>
              Account Benefits
              <img
                style={{ width: '100px' }}
                src={accountStars}
                alt='Account Benefits Rating'
              />
            </Col>
          </Row>
          <div className={classes.recommendation}>
            <img style={{ width: '40px' }} src={recImage} alt='checkmark' />
            <p>{recommend}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CommentCard;
