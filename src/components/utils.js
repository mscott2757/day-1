import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export const Account = ({ icon, url }) => {
  return (
    <li>
      <a href={url}>
        <FontAwesomeIcon icon={icon} />
      </a>
    </li>
  );
}

export const Link = ({ name, url }) => {
  return (
    <li>
      <a href={url}>{name}</a>
    </li>
  );
}

