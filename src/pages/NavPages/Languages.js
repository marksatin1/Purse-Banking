import { useEffect } from 'react';

import PageCard from '../../components/UI/PageCard';
import classes from './Languages.module.css';

const Languages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageCard title='Languages' subtitle='How many languages do you speak?'>
      <div className={classes.languages}>
        <h2>
          Если вы не говорите по-английски, вам нужно переоценить свою жизнь.
        </h2>
        <h2>
          यदि आप अंग्रेजी नहीं बोलते हैं तो आपको अपने जीवन का पुनर्मूल्यांकन
          करने की आवश्यकता है।
        </h2>
        <h2>Si vous ne parlez pas anglais, vous devez réévaluer votre vie.</h2>
        <h2>Om du inte talar engelska måste du omvärdera ditt liv.</h2>
        <h2>如果你不會說英語，你需要重新評估你的生活。</h2>
        <h2>
          Ако не зборувате англиски, треба да го преиспитате вашиот живот.
        </h2>
        <h2>
          Inā ʻaʻole ʻoe ʻōlelo Pelekania pono ʻoe e loiloi hou i kou ola.
        </h2>
        <h2>If you don't speak English you need to reevaluate your life.</h2>
      </div>
    </PageCard>
  );
};

export default Languages;
