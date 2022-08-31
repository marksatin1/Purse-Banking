import { useNavigate } from 'react-router-dom';

import { usdFormatter } from '../helpers/functions/MiscFunctions';
import { accountsSummary } from '../helpers/data/BankingData';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import AccountBanner from '../components/UI/Accounts/AccountBanner';
import Slidebar from '../components/UI/General/Slidebar';

const Homepage = () => {
  const navigate = useNavigate();

  const { checkingSummary, savingsSummary, creditsSummary } = accountsSummary;
  const debitBalTotal =
    +checkingSummary.availBalance + +savingsSummary.availBalance;

  return (
    <>
      <AccountBanner className='bg-img--cops' />
      <Slidebar title='Welcome Home!' />
      <Container className='homepage'>
        <div className='homepage--table'>
          <h1 className='homepage--title'>Debit Accounts</h1>
          <Table borderless className='account-table'>
            <thead>
              <tr>
                <td></td>
                <td className='d-none d-md-table-cell'>
                  Today's Beginning Balance
                </td>
                <td className='d-none d-md-table-cell'>Pending Transactions</td>
                <td>Available Balance</td>
              </tr>
            </thead>
            <tbody>
              <tr
                className='account-table--row'
                onClick={() =>
                  navigate('/my-purse/debit-accounts?account=checking')
                }
              >
                <th>Purse Convenience Checking</th>
                <td className='d-none d-md-table-cell'>
                  {usdFormatter(checkingSummary.begBalance)}
                </td>
                <td className='d-none d-md-table-cell'>
                  {usdFormatter(checkingSummary.pending)}
                </td>
                <td className='green'>
                  {usdFormatter(checkingSummary.availBalance)}
                </td>
              </tr>
              <tr
                className='account-table--row'
                onClick={() =>
                  navigate('/my-purse/debit-accounts?account=savings')
                }
              >
                <th>Purse Spectacular Savings</th>
                <td className='d-none d-md-table-cell'>
                  {usdFormatter(savingsSummary.begBalance)}
                </td>
                <td className='d-none d-md-table-cell'>
                  {usdFormatter(savingsSummary.pending)}
                </td>
                <td className='green'>
                  {usdFormatter(savingsSummary.availBalance)}
                </td>
              </tr>
              <tr>
                <td
                  colSpan={4}
                  className='account-table--advert'
                  onClick={() => navigate('/crypto')}
                >
                  Want to invest in cryptocurrency? Become an expert TODAY!
                </td>
              </tr>
              <tr>
                <th>Total</th>
                <td colSpan={3} className='green'>
                  {usdFormatter(debitBalTotal)}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className='homepage--table'>
          <h1 className='homepage--title'>Credit Cards</h1>
          <Table borderless className='account-table'>
            <thead>
              <tr>
                <td></td>
                <td className='d-none d-md-table-cell'>Balance Owed</td>
                <td className='d-none d-md-table-cell'>Payment Due Date</td>
                <td>Available Credit</td>
              </tr>
            </thead>
            <tbody>
              <tr
                className='account-table--row'
                onClick={() => navigate('/my-purse/credit-card-accounts')}
              >
                <th>Purse Infinity Cash Card</th>
                <td className='d-none d-md-table-cell'>
                  {usdFormatter(creditsSummary.currentBalance)}
                </td>
                <td className='d-none d-md-table-cell'>
                  {creditsSummary.paymentDueDate}
                </td>
                <td className='green'>
                  {usdFormatter(creditsSummary.availCredit)}
                </td>
              </tr>
              <tr>
                <td
                  colSpan={4}
                  className='account-table--advert'
                  onClick={() => navigate('/credit-offer?card=star-card')}
                >
                  Have you considered signing up for another credit card? It's
                  EASY and FUN!
                </td>
              </tr>
              <tr>
                <th>Total</th>
                <td colSpan={3} className='green'>
                  {usdFormatter(creditsSummary.availCredit)}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
};

export default Homepage;
