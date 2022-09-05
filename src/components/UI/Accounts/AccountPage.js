import AccountBanner from '../../../components/UI/Accounts/AccountBanner';
import Slidebar from '../../../components/UI/General/Slidebar';

const AccountPage = ({ bannerImgName, pageTitle, slidebarPos, children }) => {
  return (
    <>
      <AccountBanner bannerImgName={bannerImgName} />
      <Slidebar pageTitle={pageTitle} slidebarPos={slidebarPos} />
      <div className='account-page'>{children}</div>
    </>
  );
};

export default AccountPage;
