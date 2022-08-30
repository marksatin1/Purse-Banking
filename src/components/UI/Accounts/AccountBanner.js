import BannerRibbon from './BannerRibbon';

const AccountBanner = ({ className }) => {
  return (
    <div className={`account-banner ${className}`}>{<BannerRibbon />}</div>
  );
};

export default AccountBanner;
