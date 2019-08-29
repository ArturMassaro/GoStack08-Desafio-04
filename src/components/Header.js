import React from 'react';

import logo from '../assets/logo.png';
import User1 from '../assets/user1.jpg'

function Header() {
  return (
    <>
      <div id="header">
        <img src={logo} alt="Logo" className="logo"/>

        <div className="profile_container">
          <p>Meu perfil</p>
          <img src={User1} alt="Meu perfil"/>
        </div>
      </div>
    </>
  );
}

export default Header;