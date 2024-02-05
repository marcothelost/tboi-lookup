import React from 'react';

interface Props {
  children: React.ReactNode;
  classNames?: string[];
}

export const ContentWrapper: React.FC<Props> = ({ children, classNames }) => (
  <div
    className={`content-wrapper${classNames?.length ? ' ' + classNames.join(' ') : ''}`}
  >
    {children}
  </div>
);
