import { Container, Row, Col } from 'react-bootstrap';

const PageCard = ({ title, subtitle, children }) => {
  return (
    <Container>
      <Row>
        <div>
          <Col xs={12} md={11} lg={10} className='page'>
            <h1 className='title'>{{ title, subtitle, children }.title}</h1>
            <h2 className='subtitle'>
              <i>{{ title, subtitle, children }.subtitle}</i>
            </h2>
            <div className='content'>
              {{ title, subtitle, children }.children}
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default PageCard;
