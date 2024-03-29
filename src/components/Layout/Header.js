import { useState } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import TopNav from './TopNav';
import MainNav from './MainNav';
import MyPurseNav from './MyPurseNav';
import Logo from './Logo';

import FlyingMoney from '../../assets/Emojis/FlyingMoney.png';

const Header = () => {
  const [collapseAnim, setCollapseAnim] = useState('');

  const animationHandler = () => {
    collapseAnim === '' || collapseAnim === 'collapse-disappear'
      ? setCollapseAnim('collapse-appear')
      : setCollapseAnim('collapse-disappear');
  };

  return (
    <>
      <Logo />
      <div className='header'>
        <Navbar expand='sm' className='d-flex flex-column'>
          <div className='d-sm-none'>
            <Navbar.Toggle onClick={animationHandler}>
              <img src={FlyingMoney} alt='Flying Money' />
            </Navbar.Toggle>
            <Navbar.Collapse className={collapseAnim}>
              <TopNav />
              <MainNav />
              <MyPurseNav />
            </Navbar.Collapse>
          </div>
          <div className='d-none d-sm-block'>
            <TopNav />
            <MainNav />
            <MyPurseNav />
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
