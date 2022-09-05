import BannerRibbon from './BannerRibbon';

const AccountBanner = ({ bannerImgName }) => {
  return (
    <div className={`account-banner ${bannerImgName}`}>{<BannerRibbon />}</div>
  );
};

export default AccountBanner;
