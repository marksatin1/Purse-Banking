import { PrivacyPolicy } from '../helpers/data/WrittenContent';

import PageCard from '../components/UI/General/PageCard';

const Privacy = () => {
  return (
    <PageCard
      title='Statement On Your Privacy'
      subtitle='Transparency Is Tantamount'
    >
      <div className='privacy'>
        <p>
          At Purse we believe that total transparency is key to the longevity of
          any successful organization. So to celebrate 6000 years of
          organizational success (and trust us: it hasn't been easy!) we want to
          be completely transparent with you about all the ways we secretly sell
          your data to all kinds of companies looking for a "competitive edge"
          in the "economic marketplace". Although I guess it's not a secret
          anymore. Whoops! Cat's out of the bag!
        </p>
        <p>
          To put it simply: every company lies to you. There's no such thing as
          4 out of 5 certified dentists! There's no hot woman on the other end
          of that 1-900 line! You don't even need to shower every day! That's
          just Big Soap trying to control your skin! No one ever went into
          business because they were hellbent on taking care of <i>you</i>. And
          sure they <i>say</i> they won't sell your information to advertisers
          and psuedo-governmantal LLCs with nefarious schemes, but how the
          H-E-double-hockey-sticks would you ever know if they keep their word
          or not?
        </p>
        <h3 className='privacy--intertitle'>YOU DON'T KNOW!!!</h3>
        <p>
          After all, these shady players are lining the pockets of the very
          inpsectors sent out to provide oversight into the legality of their
          operations! There are so many backdoors coded into these apps, hidden
          agreements being made, secret wars being waged, and it's all buried
          underneath ten tons of legalese you wouldn't be able to tell which way
          is up even if you <i>did</i> have the time to sift through it all.
        </p>
        <p>
          That's where we come in: at Purse we value (y)our money. So we've made
          it our mission to be <i>completely honest</i> about the ways that we
          lie to you. And we hope you'll remember that the next time you see a
          $8.95 ATM Fee on your bank statement. After all we could have just
          taken that money out some other way. Which we will do. But in general
          we're trying to be less opaque about it. You know, because we're on
          this transparency kick. Hey, we're doing our best, alright!!
        </p>
        <p>Think of all the hard work you've done just to scrape by. </p>
        <h3 className='privacy--endtitle'>
          Isn't it about time you got the competitive advantage{' '}
          <b>
            <i>YOU</i>
          </b>{' '}
          deserve?
        </h3>
      </div>
    </PageCard>
  );
};

export default Privacy;
