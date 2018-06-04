import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';

const Account = ({ icon, url }) => {
  return (
    <li>
      <a href={url}>
        <FontAwesomeIcon icon={icon} />
      </a>
    </li>
  );
}

Account.propTypes = {
  url: PropTypes.string.isRequired,
}

const Link = ({ name, url }) => {
  return (
    <li>
      <a href={url}>{name}</a>
    </li>
  );
}

Link.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export { Account };
export { Link }

