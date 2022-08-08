import { Container, Row, Col } from 'react-bootstrap';

import classes from './PageCard.module.css';

const PageCard = ({ title, subtitle, children }) => {
  return (
    <Container>
      <Row>
        <div>
          <Col xs={12} md={11} lg={10} className={classes.page}>
            <h1 className={classes.title}>
              {{ title, subtitle, children }.title}
            </h1>
            <h2 className={classes.subtitle}>
              <i>{{ title, subtitle, children }.subtitle}</i>
            </h2>
            <div className={classes.content}>
              {{ title, subtitle, children }.children}
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default PageCard;
