import { Link } from 'react-router-dom';

import PageCard from '../../components/UI/PageCard';
import classes from './About.module.css';

const About = () => {
  return (
    <PageCard title='About Us' subtitle='Get in the bag today!'>
      <p>
        You know us!
        <br />
        <br />
        You love us!
        <br />
        <br />
        We're in your pocket, on your cellphone, in your thoughts, and on your
        mind!
        <br />
        <br />
        We're Planet Earth's Number One Supplier --{' '}
        <b className={classes.purple}>PURSE!</b>
        <br />
        <br />
        And for over 6000 years we've been serving you right where it counts:
        deep inside your pocket. Whether clams, cash, fatbacks, fat stacks, fat
        wads, bullion, dubloons, diamonds or just plain old-fashioned solid gold
        bricks--
        <br />
        <br /> We're your number one source for{' '}
        <b className={classes.goldenrod}>PROTECTING</b> your assets and managing
        your <b className={classes.green}>WEALTH</b>.
        <br />
        <br />
        If you're on your way back home you know what to do: Sign In button's on
        the home page, dummy!
        <br />
        <br />
        If this is your first time here then where the H-E-Double-Hockey-Sticks
        have you been for the last 6000 years!?!
      </p>
      <div className={classes['register-container']}>
        <div>
          <h2>Hurry up and</h2>
          <Link to='/register'>
            <button type='button'>REGISTER!!!!</button>
          </Link>
        </div>
      </div>
    </PageCard>
  );
};

export default About;
