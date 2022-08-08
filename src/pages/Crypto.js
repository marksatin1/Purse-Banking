import { useState, useEffect } from 'react';
import { usdFormatter } from '../helpers/functions/MiscFunctions';
import { CryptoContent } from '../helpers/data/WrittenContent';
import { v4 as uuidv4 } from 'uuid';

const Crypto = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    fetch('https://api.coincap.io/v2/assets?limit=10', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (response) => {
        if (response.ok) {
          return response.json();
        } else {
          const data = await response.json();
          if (data.error.message) {
            throw new Error(data.error.message);
          }
        }
      })
      .then((responseData) => {
        const coincapData = [];

        for (const crypto in responseData.data) {
          coincapData.push({
            id: responseData.data[crypto].symbol,
            rank: responseData.data[crypto].rank,
            symbol: responseData.data[crypto].symbol,
            name: responseData.data[crypto].name,
            valueUSD: responseData.data[crypto].priceUsd,
            avgValue: responseData.data[crypto].vwap24Hr,
            changeIndex: responseData.data[crypto].changePercent24Hr,
            supply: responseData.data[crypto].supply,
            maxSupply: responseData.data[crypto].maxSupply,
            marketCapUSD: responseData.data[crypto].marketCapUsd,
            url: responseData.data[crypto].explorer,
          });
        }
        const tableData = coincapData.map((item) => (
          <tr key={uuidv4()} className='row'>
            <td>{item.rank}</td>
            <td>{item.symbol}</td>
            <td>
              <a href={item.url} target='_blank' rel='noopener noreferrer'>
                <b>{item.name}</b>
              </a>
            </td>
            <td className='money'>{usdFormatter.format(item.valueUSD)}</td>
            <td className='money'>{usdFormatter.format(item.avgValue)}</td>
            <td>{Number(item.changeIndex).toLocaleString('en-US')}%</td>
            <td>{Number(item.supply).toLocaleString('en-US')}</td>
            <td>
              {Number(item.maxSupply) === 0
                ? 'No Cap'
                : Number(item.maxSupply).toLocaleString('en-US')}
            </td>
            <td className='money'>{usdFormatter.format(item.marketCapUSD)}</td>
          </tr>
        ));

        setCryptoData(tableData);
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage(
          'There was a problem retrieving your cryptocurrency data from the CoinCap API. Please wait a moment and refresh the page.'
        );
      });
  }, []);

  return (
    <div className='crypto'>
      <h1 className='title'>Cryptocurrency</h1>
      <h2 className='subtitle'>
        <i>Bitcoin? More like Shitcoin, am I right!?</i>
      </h2>
      {!errorMessage && (
        <>
          <div className='crypto-table'>
            <table>
              <thead className='thead'>
                <tr>
                  <th title='Cryptocurrency ranks are determined by Market Cap and listed in descending order'>
                    Rank
                  </th>
                  <th title='Cryptocurrency symbol'>Symbol</th>
                  <th title='Cryptocurrency name'>Name</th>
                  <th title='Cryptocurrency value in USD as of the most recent page load'>
                    Current Value
                  </th>
                  <th title='Cryptocurrency value in USD averaged over the 24 hour period preceding the most recent page load'>
                    Average Value
                  </th>
                  <th title='Percent rise or fall of cryptocurrency value over the 24 hour period preceding the most recent page load'>
                    Change Index
                  </th>
                  <th title="The amount of the given cryptocurrency's coins currently in circulation">
                    Current Supply
                  </th>
                  <th title="The maximum amount of the given cryptocurrency's coins that can be issued in perpetuity">
                    Max Supply
                  </th>
                  <th title="The maximum value in USD of the given cryptocurrency's generative value determined by Current Value x Current Supply">
                    Market Cap
                  </th>
                </tr>
              </thead>
              <tbody className='tbody'>{cryptoData}</tbody>
            </table>
          </div>
          <div className='footer'>
            <a
              href='https://docs.coincap.io/#ee0c0be6-513f-4466-bbb0-2016add462e9'
              target='_blank'
              rel='noopener noreferrer'
            >
              <h4>
                <i>Data Provided by the CoinCap API</i>
              </h4>
            </a>
          </div>
        </>
      )}
      {errorMessage && (
        <div className='apiError'>
          <h1>Error</h1>
          <p>{errorMessage}</p>
        </div>
      )}
      <div className='content'>{CryptoContent}</div>
    </div>
  );
};

export default Crypto;
