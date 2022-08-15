import { Link } from 'react-router-dom';

import PageCard from '../components/UI/General/PageCard';

const About = () => {
  return (
    <PageCard title='About Us' subtitle='Get in the bag today!'>
      <h3>You know us! You love us!</h3>
      <p>
        We're in your pocket, on your cellphone, in your thoughts, and on your
        mind! We're Planet Earth's Number One Supplier --
      </p>
      <h1>PURSE!</h1>
      <p>
        And for over 6000 years we've been serving you right where it counts:
        deep inside your pocket. Whether clams, cash, fatbacks, fat stacks, fat
        wads, bullion, dubloons, diamonds or just plain old-fashioned solid gold
        bricks-- We're your number one source for
      </p>
      <div>
        <h3 className='d-flex justify-content-start'>PROTECTING</h3>
        <h3>YOUR</h3>
        <h3 className='d-flex justify-content-end'>ASSETS</h3>
      </div>
      <h3>and managing your WEALTH!</h3>
      <p>
        If you're on your way back home you know what to do: Sign In button's on
        the home page, dummy! And if this is your first trip around this here
        sun then where in the H-E-Double-Hockey-Sticks have you been for the
        last 6000 years!?
      </p>
      <div className='reg-btn--container'>
        <h2>Hurry up and</h2>
        <Link to='/register'>
          <button className='special-btn'>REGISTER!!!</button>
        </Link>
      </div>
    </PageCard>
  );
};

export default About;
