import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const ContentWrapper: React.FC<Props> = ({ children }) => (
  <div className="content-wrapper">{children}</div>
);
