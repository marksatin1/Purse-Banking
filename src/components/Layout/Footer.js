import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { importAll } from '../../helpers/functions/MiscFunctions';

const Footer = () => {
  const images = importAll(require.context('../../assets/Social-Logos'));

  return (
    <Container fluid>
      <Row>
        <Col className='footer'>
          <h3 className='help'>Help us help you manage your wealth</h3>
          <h5 className='follow'>Follow Us</h5>
          <div className='logo-bar'>
            <a
              href='https://www.facebook.com/realRickLax'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              <img src={images.FacebookLogo_25} alt='Facebook logo' />
            </a>
            <a
              href='https://twitter.com/IAMannalynnemcc'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={images.TwitterLogo_25} alt='Twitter logo' />
            </a>
            <a
              href='https://www.instagram.com/alex_stocks_independent_wealth/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={images.InstagramLogo_25} alt='Instagram logo' />
            </a>
            <a
              href='https://www.pinterest.com/ohjoy/_created/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={images.PinterestLogo_25} alt='Pinterest logo' />
            </a>
            <a
              href='https://www.reddit.com/r/wallstreetbets/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={images.RedditLogo_25} alt='Reddit logo' />
            </a>
            <a
              href='https://www.linkedin.com/in/dr-ruja-ignatova-74417161/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={images.LinkedInLogo_25} alt='LinkedIn logo' />
            </a>
            <a
              href='https://www.youtube.com/watch?v=Yj5ec0pS1XI'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={images.YoutubeLogo_25} alt='Youtube logo' />
            </a>{' '}
          </div>
          <div className='nav-bar'>
            <Link to='/find-branch'>
              <button type='button'>Locations</button>
            </Link>
            <span>|</span>
            <Link to='/contact'>
              <button type='button'>Contact</button>
            </Link>
            <span>|</span>
            <Link to='/help'>
              <button type='button'>Help</button>
            </Link>
            <span>|</span>
            <Link to='/privacy'>
              <button type='button'>Privacy</button>
            </Link>
            <span>|</span>
            <Link to='/careers'>
              <button type='button'>Careers</button>
            </Link>
            <span>|</span>
            <Link to='/advertising'>
              <button type='button'>Advertising Practices</button>
            </Link>
            <span>|</span>
            <Link to='/cyber-incident-2021'>
              <button type='button'>2021 Cyber Incident</button>
            </Link>
            <span>|</span>
            <Link to='/cyber-incident-2019'>
              <button type='button'>2019 Cyber Incident</button>
            </Link>
            <span>|</span>
            <Link to='/feedback'>
              <button type='button'>Share Your Feedback</button>
            </Link>
            <span>|</span>
            <Link to='/covid-19-support'>
              <button type='button'>COVID-19 Support</button>
            </Link>
            <span>|</span>
            <Link to='/patriot-act-certification'>
              <button type='button'>Patriot Act Certification</button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
