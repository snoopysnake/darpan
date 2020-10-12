import React from 'react';
import Sun from './sun/Sun';
import HeaderButton from './header-button/HeaderButton';
import { ReactComponent as SumCloud } from './../assets/svg/cloud1.svg';
import { ReactComponent as ExpCloud } from './../assets/svg/cloud2.svg';
import { ReactComponent as EduCloud } from './../assets/svg/cloud3.svg';
import { ReactComponent as AwdCloud } from './../assets/svg/cloud4.svg';
import { ReactComponent as PhoCloud } from './../assets/svg/cloud5.svg';
import { ReactComponent as ConCloud } from './../assets/svg/cloud6.svg';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header-component">
        <Sun />
        <div>
          <HeaderButton text="Summary" cloud={<SumCloud/>} />
          <HeaderButton text="Experience" cloud={<ExpCloud/>} />
          <HeaderButton text="Education" cloud={<EduCloud/>} />
          <HeaderButton text="Awards" cloud={<AwdCloud/>} />
          <HeaderButton text="Photos" cloud={<PhoCloud/>} />
          <HeaderButton text="Contact" cloud={<ConCloud/>} />
        </div>
      </header>
    );
  }
}

export default Header;
