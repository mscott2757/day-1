import React from 'react';
import { Link, Account } from './utils';
import PropTypes from 'prop-types';

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
        <h2>Mason Chao-Scott</h2>
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

Info.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired,
  accounts: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired
  })).isRequired
}

export default Info;
