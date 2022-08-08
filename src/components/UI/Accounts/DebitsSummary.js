import { Container, Row, Col } from 'react-bootstrap';

import { usdFormatter } from '../../../helpers/functions/MiscFunctions';

const DebitsSummary = ({ accountData, accountParam, selectHandler }) => {
  return (
    <Container>
      <div className='summary'>
        <div>
          <p>Available Balance</p>
          <h1>{usdFormatter.format(accountData.availBalance)}</h1>
        </div>
        {accountParam === 'checking' && (
          <select
            name='account'
            id='account'
            defaultValue='checking'
            onChange={selectHandler}
          >
            <option value='checking'>Purse Convenience Checking</option>
            <option value='savings'>Purse Spectacular Savings</option>
          </select>
        )}
        {accountParam === 'savings' && (
          <select
            name='account'
            id='account'
            defaultValue='savings'
            onChange={selectHandler}
          >
            <option value='checking'>Purse Convenience Checking</option>
            <option value='savings'>Purse Spectacular Savings</option>
          </select>
        )}
        <Row className='data'>
          <Col xs={12} sm={6}>
            <p>Today's Beginning Balance</p>
          </Col>
          <Col xs={12} sm={6}>
            <h5>{usdFormatter.format(accountData.begBalance)}</h5>
          </Col>
          <Col xs={12} sm={6}>
            <p>Pending</p>
          </Col>
          <Col xs={12} sm={6}>
            <h5>{usdFormatter.format(accountData.pending)}</h5>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default DebitsSummary;
