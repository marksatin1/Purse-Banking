import { useState, useEffect } from 'react';
import { usdFormatter } from '../helpers/functions/MiscFunctions';
import { CryptoContent } from '../helpers/data/WrittenContent';

const axios = require('axios');

const Crypto = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    axios
      .get('https://api.coincap.io/v2/assets?', {
        params: {
          limit: 10,
        },
      })
      .then((response) => {
        const { data } = response.data;
        const coincapData = [];

        for (const crypto in data) {
          coincapData.push({
            rank: data[crypto].rank,
            symbol: data[crypto].symbol,
            name: data[crypto].name,
            valueUSD: data[crypto].priceUsd,
            avgValue: data[crypto].vwap24Hr,
            changeIndex: data[crypto].changePercent24Hr,
            supply: data[crypto].supply,
            maxSupply: data[crypto].maxSupply,
            marketCapUSD: data[crypto].marketCapUsd,
            url: data[crypto].explorer,
          });
        }

        setCryptoData(coincapData);
      })
      .catch((error) => {
        console.error(error.message);
        setErrorMessage(
          'There was a problem retrieving your cryptocurrency data from the CoinCap API. Please wait a moment and refresh the page.'
        );
      });
  }, []);

  const tableData = cryptoData.map((item) => (
    <tr key={item.symbol}>
      <td>{item.rank}</td>
      <td>{item.symbol}</td>
      <td>
        <a href={item.url} target='_blank' rel='noopener noreferrer'>
          <b>{item.name}</b>
        </a>
      </td>
      <td className='money'>{usdFormatter.format(item.valueUSD)}</td>
      <td className='money'>{usdFormatter.format(item.avgValue)}</td>
      <td>{Number(item.changeIndex).toLocaleString('en-US')}&#37;</td>
      <td>{Number(item.supply).toLocaleString('en-US')}</td>
      <td>
        {Number(item.maxSupply) === 0
          ? 'No Cap'
          : Number(item.maxSupply).toLocaleString('en-US')}
      </td>
      <td className='money'>{usdFormatter.format(item.marketCapUSD)}</td>
    </tr>
  ));

  return (
    <div className='crypto'>
      <h1 className='crypto--title'>Cryptocurrency</h1>
      <h3 className='crypto--subtitle'>
        <i>Bitcoin? More like Shitcoin, am I right?!</i>
      </h3>
      {!errorMessage && (
        <>
          <table>
            <thead>
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
            <tbody>{tableData}</tbody>
          </table>
          <div className='tfoot'>
            <a
              href='https://docs.coincap.io/#ee0c0be6-513f-4466-bbb0-2016add462e9'
              target='_blank'
              rel='noopener noreferrer'
            >
              <h4>
                <i>Data Provided by CoinCap</i>
              </h4>
            </a>
          </div>
        </>
      )}
      {errorMessage && (
        <div className='crypto--apiError'>
          <h1>Error</h1>
          <p>{errorMessage}</p>
        </div>
      )}
      <div className='crypto--content'>{CryptoContent}</div>
    </div>
  );
};

export default Crypto;
