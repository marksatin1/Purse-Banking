import { Container } from 'react-bootstrap';

const PageCard = ({ title, subtitle, children }) => {
  return (
    <Container>
      <div className=' d-flex flex-column justify-content-around page-card'>
        <h1 className='page-card--title'>{title}</h1>
        <h3 className='page-card--subtitle'>
          <i>{subtitle}</i>
        </h3>
        <div className='page-card--content'>{children}</div>
      </div>
    </Container>
  );
};

export default PageCard;
