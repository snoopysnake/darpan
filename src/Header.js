import React from 'react';
import HeaderButton from './HeaderButton';
import { ReactComponent as CloudOne } from './assets/svg/cloud1.svg';
import { ReactComponent as CloudTwo } from './assets/svg/cloud2.svg';
import { ReactComponent as CloudThree } from './assets/svg/cloud3.svg';
import { ReactComponent as CloudFour } from './assets/svg/cloud4.svg';
import { ReactComponent as CloudFive } from './assets/svg/cloud5.svg';
import { ReactComponent as CloudSix } from './assets/svg/cloud6.svg';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header-component">
        <HeaderButton text="Summary" render={ ()=><CloudOne /> } />
        <HeaderButton text="My Experience" render={ ()=><CloudTwo /> } />
        <HeaderButton text="Education" render={ ()=><CloudThree /> } />
        <HeaderButton text="Awards" render={ ()=><CloudFour /> } />
        <HeaderButton text="Photos" render={ ()=><CloudFive /> } />
        <HeaderButton text="Let's Chat" render={ ()=><CloudSix /> } />
      </header>
    );
  }
}

export default Header;
