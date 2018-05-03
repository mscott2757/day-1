import React from 'react';
import { Link, Account } from './utils';

const Info = ({ links, accounts }) => {
  return (
    <div className='info-wrapper'>
      <div className='info'>
        <ul className='info-accounts'>
          {accounts.map((account) => <Account {...account} key={account.id} /> )}
        </ul>
        <h2>Mason Chan</h2>
        <ul className='info-links'>
          {links.map((link) => <Link {...link} key={link.name} /> )}
        </ul>
      </div>
    </div>
  );
}

export default Info;
