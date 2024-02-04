import React, { useEffect } from 'react';

import { PageNavigation } from '@components/blocks/PageNavigation';
import { PageAside } from '@components/blocks/PageAside';
import { PageFooter } from '@components/blocks/PageFooter';

import { PAGE_TITLE_BASE, PAGE_TITLE_SPLITTER } from '@utils/route';

interface Props {
  children: React.ReactNode;
  title?: string;
}

export const DefaultLayout: React.FC<Props> = ({ children, title }) => {
  useEffect(() => {
    document.title = `${title ? `${title}${PAGE_TITLE_SPLITTER}` : ''}${PAGE_TITLE_BASE}`;
  }, [title]);

  return (
    <React.Fragment>
      <PageNavigation />
      <PageAside />
      <main className="page-content">{children}</main>
      <PageFooter />
    </React.Fragment>
  );
};
