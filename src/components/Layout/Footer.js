import { importAll } from '../../helpers/functions/MiscFunctions';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
  const images = importAll(require.context('../../assets/Social-Logos'));

  return (
    <Container fluid className='d-flex flex-column align-items-center footer'>
      <h1 className='footer--title'>Help us help you manage your wealth</h1>
      <h2 className='footer--subtitle'>Follow Us</h2>
      <Nav className='footer--logos'>
        <Nav.Link
          href='https://www.facebook.com/realRickLax'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={images.FacebookLogo_25} alt='Facebook logo' />
        </Nav.Link>
        <Nav.Link
          href='https://twitter.com/IAMannalynnemcc'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={images.TwitterLogo_25} alt='Twitter logo' />
        </Nav.Link>
        <Nav.Link
          href='https://www.instagram.com/alex_stocks_independent_wealth/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={images.InstagramLogo_25} alt='Instagram logo' />
        </Nav.Link>
        <Nav.Link
          href='https://www.pinterest.com/ohjoy/_created/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={images.PinterestLogo_25} alt='Pinterest logo' />
        </Nav.Link>
        <Nav.Link
          href='https://www.reddit.com/r/wallstreetbets/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={images.RedditLogo_25} alt='Reddit logo' />
        </Nav.Link>
        <Nav.Link
          href='https://www.linkedin.com/in/dr-ruja-ignatova-74417161/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={images.LinkedInLogo_25} alt='LinkedIn logo' />
        </Nav.Link>
        <Nav.Link
          href='https://www.youtube.com/watch?v=Yj5ec0pS1XI'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={images.YoutubeLogo_25} alt='Youtube logo' />
        </Nav.Link>
      </Nav>
      <Nav className='d-flex justify-content-center align-items-center footer--nav-bar'>
        <Nav.Link href='/find-branch'>
          <h5>Locations</h5>
        </Nav.Link>
        <span>|</span>
        <Nav.Link href='/contact'>
          <h5>Contact</h5>
        </Nav.Link>
        <span>|</span>
        <Nav.Link href='/help'>
          <h5>Help</h5>
        </Nav.Link>
        <span>|</span>
        <Nav.Link href='/privacy'>
          <h5>Privacy</h5>
        </Nav.Link>
        <span>|</span>
        <Nav.Link href='/careers'>
          <h5>Careers</h5>
        </Nav.Link>
        <span>|</span>
        <Nav.Link href='/advertising'>
          <h5>Advertising Practices</h5>
        </Nav.Link>
        <span>|</span>
        <Nav.Link href='/cyber-incident-2021'>
          <h5>2021 Cyber Incident</h5>
        </Nav.Link>
        <span>|</span>
        <Nav.Link href='/cyber-incident-2019'>
          <h5>2019 Cyber Incident</h5>
        </Nav.Link>
        <span>|</span>
        <Nav.Link href='/feedback'>
          <h5>Share Your Feedback</h5>
        </Nav.Link>
        <span>|</span>
        <Nav.Link href='/covid-19-support'>
          <h5>COVID-19 Support</h5>
        </Nav.Link>
        <span>|</span>
        <Nav.Link href='/patriot-act-certification'>
          <h5>Patriot Act Certification</h5>
        </Nav.Link>
      </Nav>
    </Container>
  );
};

export default Footer;
