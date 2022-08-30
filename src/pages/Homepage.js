import { useNavigate } from 'react-router-dom';

import { usdFormatter } from '../helpers/functions/MiscFunctions';
import { accountsSummary } from '../helpers/data/BankingData';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import AccountBanner from '../components/UI/Accounts/AccountBanner';
import Slidebar from '../components/UI/General/Slidebar';

const Homepage = () => {
  const navigate = useNavigate();

  const { checkingData, savingsData, creditsData } = accountsSummary;
  const debitBalTotal = +checkingData.availBalance + +savingsData.availBalance;

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
                  {usdFormatter(checkingData.begBalance)}
                </td>
                <td className='d-none d-md-table-cell'>
                  {usdFormatter(checkingData.pending)}
                </td>
                <td className='green'>
                  {usdFormatter(checkingData.availBalance)}
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
                  {usdFormatter(savingsData.begBalance)}
                </td>
                <td className='d-none d-md-table-cell'>
                  {usdFormatter(savingsData.pending)}
                </td>
                <td className='green'>
                  {usdFormatter(savingsData.availBalance)}
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
                  {usdFormatter(creditsData.currentBalance)}
                </td>
                <td className='d-none d-md-table-cell'>
                  {creditsData.paymentDueDate}
                </td>
                <td className='green'>
                  {usdFormatter(creditsData.availCredit)}
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
                  {usdFormatter(creditsData.availCredit)}
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
