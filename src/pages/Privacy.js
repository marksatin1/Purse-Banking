import { PrivacyPolicy } from '../helpers/data/WrittenContent';

import PageCard from '../components/UI/General/PageCard';

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
