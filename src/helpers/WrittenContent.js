import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import classes from './WrittenContent.module.css';

export const UserAgreement = {
  title: 'User Agreement',
  subtitle: 'Ready to be a part of something bigger?',
  content: (
    <div className={classes.content}>
      <p>
        Take a look out that window. See the snow falling? The leaves blowing?
        The cars driving down the street and that happy couple walking
        arm-in-arm? We own that. We own all of that. A big, wide world out there
        and we got our hands in all of it.
      </p>
      <h2 className={classes.intertitle}>
        Isn't it about time <b>YOU</b> joined us?
      </h2>
      <p>
        By agreeing to our terms you can join the billions of people who have
        cemented their place - however small! - in 6000 years of human history.
        These are the unique individuals quietly carving out their spots in the{' '}
        <i>next</i> 6000 years of our species' future -- assuming our species
        still has a future of course! Ha ha ha!!
        <br />
        <br />
        But don't worry about that! You have so many little problems to deal
        with every day and we know how time just seems to slip through your
        fingers more and more with each passing day. So don't wait a second
        longer! Make your life that much easier and put a Purse™ in your
        personal life.
        <br />
        <br />
        All you have to do is agree to release all of your personal
        identification information, browsing history, and firstborn child to
        Purse, LLC. You're not using them anyway!
        <br />
        <br />
        Of course, we reserve the right to sell your data to whomever we'd like,
        whenever we'd like, for whatever price we choose! So you don't have to
        worry about getting bombarded by annoying spam emails reporting on any
        dividends owed to you because there won't ever be any!
        <br />
        <br />
        <span className={classes.centered}>
          This decision is so easy it's practically already been made for you:
        </span>
      </p>
      <h1 className={classes.endtitle}>Just let it all go, guy!!</h1>
    </div>
  ),
};

export const PrivacyPolicy = {
  title: 'Privacy Policy',
  subtitle: 'Transparency Is Tantamount',
  content: (
    <div className={classes.content}>
      <p>
        At Purse we believe that total transparency is key to the longevity of
        any successful organization. So to celebrate 6000 years of
        organizational success (and trust us: it hasn't been easy!) we want to
        be completely transparent with you about all the ways we secretly sell
        your data to all kinds of companies looking for a "competitive edge" in
        the "economic marketplace". Although I guess it's not a secret anymore.
        Whoops! Cat's out of the bag!
        <br />
        <br />
        To put it simply: every company lies to you. There's no such thing as 4
        out of 5 certified dentists! There's no hot woman on the other end of
        that 1-900 line! You don't even need to shower every day! That's just
        Big Soap trying to control your skin! No one ever went into business
        because they were hellbent on taking care of <i>you</i>. And sure they{' '}
        <i>say</i> they won't sell your information to advertisers and
        psuedo-governmantal LLCs with nefarious schemes, but how the
        H-E-double-hockey-sticks would you ever know if they keep their word or
        not?
      </p>
      <h2 className={classes.intertitle}>YOU DON'T KNOW!!!</h2>
      <p>
        After all, these shady players are lining the pockets of the very
        inpsectors sent out to provide oversight into the legality of their
        operations! There are so many backdoors coded into these apps, hidden
        agreements being made, secret wars being waged, and it's all buried
        underneath ten tons of legalese you wouldn't be able to tell which way
        is up even if you <i>did</i> have the time to sift through it all.
        <br />
        <br />
        That's where we come in: at Purse we value (y)our money. So we've made
        it our mission to be <i>completely honest</i> about the ways that we lie
        to you. And we hope you'll remember that the next time you see a $8.95
        ATM Fee on your bank statement. After all we could have just taken that
        money out some other way. Which we will do. But in general we're trying
        to be less opaque about it. You know, because we're on this transparency
        kick. Hey, we're doing our best, alright!!
        <br />
        <br />
        Think of all the hard work you've done just to scrape by.{' '}
      </p>
      <h2 className={classes.endtitle}>
        Isn't it about time
        <br />
        you got the competitive
        <br />
        advantage
        <b>
          <i> YOU</i>
        </b>
        <br />
        deserve?
      </h2>
    </div>
  ),
};

export const RegistrationSuccess = (
  <div className={classes.content}>
    <p>
      Welcome to Purse! You've just made your first foray into the wonderful
      world of an elite group of banking's most powerful movers and shakers.
      We're proud to count history's most prominent players as members of our
      little club. Ever heard of the Borgias? Or the Medici? How about the
      Freemasons and the Illuminati? Bohemian Grove, anyone? You must be
      familiar with Q. And now we have you!
      <br />
      <br />
      Without the generous support of plebes like you Purse would not be able to
      invest in the most exciting plans and technologies that have shaped, are
      shaping, and will shape the course of human events. After all, money
      doesn't just grow on trees, dummy! (Trust us: we've tried and failed at
      that little game).
      <br />
      <br />
      Take some time to get to know us. We have lots of helpful links and
      information contained within this site. And as always we welcome your{' '}
      feedback so be to sure to drop us a line with any questions or comments.
      Otherwise get out there and start depositing that cash. Just remember:
    </p>
    <h2 className={classes.endtitle}>Don't break the bank!! Ha ha ha!!</h2>
  </div>
);

export const CryptoContent = (
  <Fragment>
    <p>
      Dogecoin? Catcoin? Shiba Inu? Are we trading in people's pets or their
      hard-earned dollars? That's a great question. Since the inception of
      Bitcoin, the world's first cryptocurrency, way back in the good old Year
      Of Our Lord two-thousand-and-nine hundreds if not thousands of
      strangely-inspired coins have cropped up in our supreme and glorious
      economic marketplace, each with their own purported raisons d'être. But
      just what, you may be asking yourself, even <i>is</i> a
      crypto-whatcha-ma-call-it anyways?
      <br />
      <br />
      Well, we're glad you asked! Cryptocurrency is a new future-proof
      decentralized digital currency that operates as an intangible medium of
      exchange running on digital ledgers hosted on computer servers connected
      by the internet. It's all really quite simple. Of course cryptocurrencies
      aren't currencies <i>per se</i> -- they're actually much more expansive
      and confusing: picture a mashup between a commodity, a security, a stock,
      a bond, traditional credit, cold hard cash, and the barter system with a
      little bit of an entirely new type of asset sprinkled on top. Pretty
      exciting stuff, huh!
      <br />
      <br />
      The main thing to know is that cryptocurrencies are <i>decentralized</i>.
      That means no one political or financial authority backs their values or
      regulates their use. It's the pecuniary Wild West, pardner! Pretty
      exciting stuff, indeed! Of course I can already hear you whistling that
      familiar tune: adventuring is all well and good, you say, but we do need{' '}
      <i>some</i> law and order....... don't we? Well, sir, you're absolutely
      right! We can't just have the biggest baddies coming through <i>our</i>{' '}
      towns, stealing <i>our</i> cattle, and raping <i>our</i> whores. That
      would be complete lawlessness! And combatting the lawlessness of the
      masses is what got Purse into this financial gambit in the first place.
      <br />
      <br />
      Thankfully the Crypto-ographers have come up with a great solution to
      combat any would-be Michael Burry's. All crypto transactions occur on a
      digital ledger -- a giant online database that uses really, really, really
      secure cryptographic computations to make sure all the transactions are
      public and no funny business can go on. And as honest bankers we think
      that's really just fine and dandy! You see, cryptocurrencies don't
      actually exist in the physical world -- they're simply a consensual
      hallucination we all agree to buy into. Kind of like the government. But
      even better because the government can't get its grubby hands on our
      (excuse us, <i>your</i>) hard-earned dough. At the end of the day these
      fantastical fiduciary filaments just boil on down to good old ones and
      zeros, the very same things that created this glorious simulation we call
      "reality", so you just <i>know</i> they have to be legit.
      <br />
      <br />
      And what does all of this have to do with cats and dogs? Well, since
      cryptocurrencies aren't overseen by any one person or group, anyone (and
      we mean <i>anyone</i>) is free to create one. The value of any particular
      cryptocurrency is directly tied into how many people choose to buy into it
      -- it really is that simple. In fact, the hardest part of creating a
      crypto is finding just the right name and logo, an obstacle increasingly
      overcome by slapping an animal's namesake on the brand! Like we said, it's
      all quite simple and makes perfect sense!
      <br />
      <br />
      So how does one go about getting started in this crypto-game, you ask?
      It's an easy four-step process. First, create your own crypto wallet.
      Second, get a hold of some boring, old <i>real</i> money and trade it in
      for some fancy, new, fun <i>digital</i> assets. Third, hold on to your new
      assets really, really tightly for a really, really, really long time. Then
      fourth and finally get down on your hands and knees and PRAY they don't
      drop in value! And if you don't have enough money for even one measly
      crypto coin, fear not! The glorious Crypto-ographers - those beautiful,
      beautiful men - enabled fractional purchasing functionality so that even
      you can get a tiny slice of the pie without worrying about breaking the
      bank!!
      <br />
      <br />
      Get started now by creating your very own Crypto Wallet{' '}
      <Link to='/cyber-incident-2021' className='link'>
        here
      </Link>
      . As always, signing up is as easy as signing over all your personal data,
      firstborn child, and Miranda Rights to Purse. And you can be sure that
      your Crypto Wallet is protected by the same security blocks that keep your
      Purse Checking and Savings Accounts locked down tight, so you never have
      to worry about anyone accessing your valuable coins but us (and you, of
      course!).
      <br />
      <br />
      <br />
      What are you waiting for??
    </p>
    <h1 className={classes.action}>ACT NOW!!</h1>
  </Fragment>
);
