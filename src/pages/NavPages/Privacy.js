import { PrivacyPolicy } from '../../helpers/WrittenContent';

import PageCard from '../../components/UI/PageCard';

const Privacy = () => {
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
