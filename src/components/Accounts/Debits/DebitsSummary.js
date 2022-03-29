import { Container, Row, Col } from 'react-bootstrap';

import { usdFormatter } from '../../../helpers/Helpers';

import classes from './DebitsSummary.module.css';

const DebitsSummary = (props) => {
  return (
    <Container>
      <div className={classes.summary}>
        <div>
          <p>Available Balance</p>
          <h1>{usdFormatter.format(props.accountData.availBalance)}</h1>
        </div>
        {props.accountParam === 'checking' && (
          <select
            name='account'
            id='account'
            defaultValue='checking'
            onChange={props.selectHandler}
          >
            <option value='checking'>Purse Convenience Checking</option>
            <option value='savings'>Purse Spectacular Savings</option>
          </select>
        )}
        {props.accountParam === 'savings' && (
          <select
            name='account'
            id='account'
            defaultValue='savings'
            onChange={props.selectHandler}
          >
            <option value='checking'>Purse Convenience Checking</option>
            <option value='savings'>Purse Spectacular Savings</option>
          </select>
        )}
        <Row className={classes.data}>
          <Col xs={12} sm={6}>
            <p>Today's Beginning Balance</p>
          </Col>
          <Col xs={12} sm={6}>
            <h5>{usdFormatter.format(props.accountData.begBalance)}</h5>
          </Col>
          <Col xs={12} sm={6}>
            <p>Pending</p>
          </Col>
          <Col xs={12} sm={6}>
            <h5>{usdFormatter.format(props.accountData.pending)}</h5>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default DebitsSummary;
