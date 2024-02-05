import React from 'react';
import { Link } from 'react-router-dom';

import { ContentWrapper } from '@components/elements/ContentWrapper';

import { AppRoute } from '@utils/route';

export const PageNavigation: React.FC = () => (
  <nav className="page-navigation">
    <ContentWrapper>
      <h2>Page Navigation</h2>
      <ul>
        <li>
          <Link to={AppRoute.HOME}>Home</Link>
        </li>
      </ul>
    </ContentWrapper>
  </nav>
);
