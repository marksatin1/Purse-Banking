import { Container, Row, Col } from 'react-bootstrap';

import Checkmark from '../../assets/Emojis/Checkmark.webp';
import Crossmark from '../../assets/Emojis/Crossmark.webp';

import classes from './CommentCard.module.css';

const CommentCard = (props) => {
  let recImage;
  if (props.recommend === 'Yes, I recommend this card') {
    recImage = Checkmark;
  } else if (props.recommend === 'No, I do not recommend this card') {
    recImage = Crossmark;
  }

  return (
    <Container>
      <Row className={classes.layout}>
        <Col xs={12} sm={4} className={classes['user-info']}>
          <h3 className={classes.username}>{props.username}</h3>
          <div>
            <p>
              Age: <b>{props.age}</b>
            </p>
            <p>
              Location: <b>{props.location}</b>
            </p>
            <p>
              Member since: <b>{props.memberDate}</b>
            </p>
          </div>
        </Col>
        <Col className={classes['comment-info']}>
          <Row className={classes['header']}>
            <Col xs={12} md={'auto'}>
              <img
                style={{ width: '140px' }}
                src={props.overallStars}
                alt='Overall Rating'
              />
            </Col>
            <Col xs={12} md={'auto'}>
              <p>{props.commentDate}</p>
            </Col>
          </Row>
          <h3 className={classes.title}>{props.title}</h3>
          <p>{props.content}</p>
          <Row>
            <Col xs={12} lg={4} className={classes.rating}>
              Online Experience
              <img
                style={{ width: '100px' }}
                src={props.onlineStars}
                alt='Online Experience Rating'
              />
            </Col>
            <Col xs={12} lg={4} className={classes.rating}>
              Customer Service
              <img
                style={{ width: '100px' }}
                src={props.customerStars}
                alt='Customer Service Rating'
              />
            </Col>
            <Col xs={12} lg={4} className={classes.rating}>
              Account Benefits
              <img
                style={{ width: '100px' }}
                src={props.accountStars}
                alt='Account Benefits Rating'
              />
            </Col>
          </Row>
          <div className={classes.recommendation}>
            <img style={{ width: '40px' }} src={recImage} alt='checkmark' />
            <p>{props.recommend}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CommentCard;
