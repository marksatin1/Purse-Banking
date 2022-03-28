import { Container, Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { PersonalityCardData } from '../../../helpers/PersonalityCardData';

import PersonalityCard from '../../UI/PersonalityCard';
import classes from './PersonalityBanner.module.css';

const PersonalityBanner = () => {
  return (
    <Container className={classes['personality-layout']}>
      <h1 className={classes.heading}>
        We're <span className={classes.green}>more</span> than just a bank!
      </h1>
      <Row>
        {PersonalityCardData.map((item) => (
          <Col key={uuidv4()} xs={11} lg={4} className={classes.wrapper}>
            <PersonalityCard
              name={item.name}
              title={item.title}
              subtitle={item.subtitle}
              href={item.href}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PersonalityBanner;
