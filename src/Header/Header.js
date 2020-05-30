import React from 'react';
import Sun from './Sun/Sun';
import HeaderButton from './HeaderButton/HeaderButton';
import { ReactComponent as CloudOne } from './../assets/svg/cloud1.svg';
import { ReactComponent as CloudTwo } from './../assets/svg/cloud2.svg';
import { ReactComponent as CloudThree } from './../assets/svg/cloud3.svg';
import { ReactComponent as CloudFour } from './../assets/svg/cloud4.svg';
import { ReactComponent as CloudFive } from './../assets/svg/cloud5.svg';
import { ReactComponent as CloudSix } from './../assets/svg/cloud6.svg';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header-component">
        <Sun />
        <div>
          <HeaderButton text="Summary" render={ ()=><CloudOne /> } />
          <HeaderButton text="Experience" render={ ()=><CloudTwo /> } />
          <HeaderButton text="Education" render={ ()=><CloudThree /> } />
          <HeaderButton text="Awards" render={ ()=><CloudFour /> } />
          <HeaderButton text="Photos" render={ ()=><CloudFive /> } />
          <HeaderButton text="Contact" render={ ()=><CloudSix /> } />
        </div>
      </header>
    );
  }
}

export default Header;
