import { useEffect } from 'react';

import { PrivacyPolicy } from '../../helpers/WrittenContent';

import PageCard from '../../components/UI/PageCard';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageCard
      title='Statement On Your Privacy'
      subtitle='Transparency Is Tantamount'
    >
      {PrivacyPolicy.content}
    </PageCard>
  );
};

export default Privacy;
