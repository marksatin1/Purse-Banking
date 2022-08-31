import PageCard from '../components/UI/General/PageCard';
import RegisterButton from '../components/UI/General/RegisterButton';

const About = () => {
  return (
    <PageCard title='About Us' subtitle='Get in the bag today!'>
      <div className='about'>
        <div className='d-flex justify-content-between'>
          <h3>You know us!</h3>
          <h3>You love us!</h3>
        </div>
        <p>
          We're in your pocket, on your cellphone, in your thoughts, and on your
          mind! We're Planet Earth's Number One Supplier:
        </p>
        <h2>PURSE!</h2>
        <p>
          And for over 6000 years we've been serving you right where it counts:
          deep inside your pocket. Whether clams, cash, fatbacks, fat stacks,
          fat wads, bullion, dubloons, diamonds or just plain old-fashioned
          solid gold bricks-- We're your number one source for
        </p>
        <h3>PROTECTING</h3>
        <h3>YOUR</h3>
        <h3>ASSETS</h3>
        <p>and managing your</p>
        <h2>WEALTH!</h2>
        <p>
          If you're on your way back home you know what to do: Sign In button's
          on the home page, dummy! And if this is your first trip around this
          here sun then where in the H-E-Double-Hockey-Sticks have you been for
          the last 6000 years!?
        </p>
        <h3>Hurry up and</h3>
        <RegisterButton />
      </div>
    </PageCard>
  );
};

export default About;
