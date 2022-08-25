import WelcomeBanner from '../components/UI/LandingPage/WelcomeBanner';
import RegisterBanner from '../components/UI/LandingPage/RegisterBanner';
import PersonalityBanner from '../components/UI/LandingPage/PersonalityBanner';
import LegalBanner from '../components/UI/LandingPage/LegalBanner';

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <WelcomeBanner />
      <RegisterBanner />
      <PersonalityBanner />
      <LegalBanner />
    </div>
  );
};

export default LandingPage;
