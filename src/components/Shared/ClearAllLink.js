import React from 'react';

import {
  clearSelectedMatch,
  clearSelectedPlayer,
  clearSelectedTeam,
} from '../../store';
import { clearAllLocalStorage } from '../../utils/helpers';
import { Link } from './Link';

const ClearAllLink = () => (
  <div className="absolute top-3 right-6">
    <Link
      linkText={
        <span className="text-gray-300 material-icons hover:text-gray-600">
          close
        </span>
      }
      onClick={() => {
        clearSelectedMatch();
        clearSelectedPlayer();
        clearSelectedTeam();
        clearAllLocalStorage();
      }}
    />
  </div>
);

export { ClearAllLink };
