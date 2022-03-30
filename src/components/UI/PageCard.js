import { Container, Row, Col } from 'react-bootstrap';

import classes from './PageCard.module.css';

const PageCard = (props) => {
  return (
    <Container>
      <Row>
        <div>
          <Col xs={12} md={11} lg={10} className={classes.page}>
            <h1 className={classes.title}>{props.title}</h1>
            <h2 className={classes.subtitle}>
              <i>{props.subtitle}</i>
            </h2>
            <div className={classes.content}>{props.children}</div>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default PageCard;
