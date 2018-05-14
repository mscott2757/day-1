import React from 'react';
import { Link, Account } from './utils';

const Info = ({ links, accounts, handleToggle }) => {
  const toggleResume = (e) => {
    e.preventDefault();
    handleToggle();
  }

  return (
    <div className='info-wrapper'>
      <div className='info'>
        <ul className='info-accounts'>
          {accounts.map((account) => <Account {...account} key={account.id} /> )}
        </ul>
        <h2>Mason Chan</h2>
        <ul className='info-links'>
          <li>
            <a href='/toggle-resume' onClick={toggleResume}>resume</a>
          </li>
          {links.map((link) => <Link {...link} key={link.name} /> )}
        </ul>
      </div>
    </div>
  );
}

export default Info;
