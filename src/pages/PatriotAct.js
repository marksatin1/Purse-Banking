import { importAll } from '../helpers/functions/MiscFunctions';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageCard from '../components/UI/General/PageCard';

const PatriotAct = () => {
  const images = importAll(require.context('../assets'));

  return (
    <PageCard
      title='Patriot Act Certification'
      subtitle="Rest Assured: We're Certified"
    >
      <Container className='d-flex flex-column justify-content-center align-items-center patriot-act'>
        <Row>
          <Col xs={12}>
            <h4>
              <i>
                The information contained in this Certification is sought
                pursuant to Sections 5318(j) and 5318(k) of Title 31 of the
                United State Code, as added by sections 313 and 319(b) of the
                USA PATRIOT Act of 2001 (Public Law 107-56).
              </i>
            </h4>
          </Col>
          <Col md={6}>
            <img
              src={images.CyberCommandLogo}
              srcSet={`${images.CyberCommandLogo} 1200w, ${images.CyberCommandLogo_66} 792w`}
              alt='Cyber Command logo'
            />
          </Col>
          <Col md={6}>
            <img
              src={images.IAOLogo}
              srcSet={`${images.IAOLogo} 658w, ${images.IAOLogo_66} 434w`}
              alt='Information Awareness Office logo'
            />
          </Col>
        </Row>
        <p>
          In the wake of the September 11 and anthrax attacks, President Bush
          signed the <span className='red'>U</span>niting and{' '}
          <span className='red'>S</span>trengthening{' '}
          <span className='red'>A</span>merica by <span className='red'>P</span>
          roviding <span className='red'>A</span>ppropriate{' '}
          <span className='red'>T</span>ools <span className='red'>R</span>
          equired to <span className='red'>I</span>ntercept and{' '}
          <span className='red'>O</span>bstruct <span className='red'>T</span>
          errorism (<span className='red'>USA PATRIOT</span>) Act into law.
          Enacted on October 26, 2001, this landmark legislation calls for a
          major expansion of: U.S. law enforcement's surveillance abilities,
          including the tapping of domestic and international phones;
          interagency communication among federal agencies involved in
          counterterrorism efforts; anti-money laundering compliance obligations
          for all U.S. financial institutions; anti-terrorism compliance
          obligations for all U.S. financial institutions; the inclusion of an
          increased number of activities that qualify as terrorism; and the
          inclusion of additional penalties associated with these terrorism
          charges.
        </p>
        <p>
          Pursuant to the USA PATRIOT Act and final rules issued by the U.S.
          Treasury Department, financial institutions operating in the United
          States are required to obtain "certain information" from any "Foreign
          Bank" that maintains a "correspondent account" with it in the United
          States. A "Foreign Bank" is a bank organized under foreign law and
          located outside of the United States (see definition at 31 CFR
          1010.100(u)). A "bank" includes offices, branches, sections,
          departments, organizations, firms, bureaus, and agencies of commercial
          banks or trust companies, private banks, national banks, thrift
          institutions, thrift stores, credit unions, labor unions, and any
          other fiduciary organizations chartered under banking laws and
          supervised by banking supervisors of any state (see definition at 31
          CFR 1010.100(d)).
        </p>
        <p>
          A correspondent account for a foreign bank is any account that
          receives deposits from, makes payments to, or disburses funds on
          behalf of a foreign bank, or handles other financial transactions
          related to the foreign bank. Financial Institutions operating in the
          Cayman Islands, Singapore, and Switzerland are exempt from "foreign
          bank" status. Under the final rules any and all collected information
          is collated during the certification process.
        </p>
        <p>
          If you are a representative of a foreign bank that wishes to establish
          a professional working relationship with Purse do not hesitate to
        </p>
        <a href='/contact' className='link'>
          <h3 className='patriot-act--intertitle'>Contact Us</h3>
        </a>
        <p>
          We will be happy to supply you with the necessary paperwork to
          complete the certification process.
        </p>
        <p>
          For more information on the now-defunct USA PATRIOT Act as well as its
          undead successor, the <span className='red'>U</span>niting and{' '}
          <span className='red'>S</span>trengthening{' '}
          <span className='red'>A</span>merica by <span className='red'>F</span>
          ulfilling <span className='red'>R</span>ights and{' '}
          <span className='red'>E</span>nsuring <span className='red'>E</span>
          ffective <span className='red'>D</span>iscipline{' '}
          <span className='red'>O</span>ver <span className='red'>M</span>
          onitoring (<span className='red'>USA FREEDOM</span>) Act
        </p>
        <a
          href='https://en.wikipedia.org/wiki/USA_Freedom_Act'
          target='_blank'
          rel='noopener noreferrer'
          className='link'
        >
          <h2 className='patriot-act--endtitle'>click here</h2>
        </a>
      </Container>
    </PageCard>
  );
};

export default PatriotAct;
