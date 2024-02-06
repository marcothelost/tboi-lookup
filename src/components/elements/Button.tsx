import React from 'react';

import { Icon } from './Icon';

import type { IconName } from '@fortawesome/fontawesome-common-types';

interface Props {
  text: string;
  link?: string;
  icon?: IconName;
}

export const Button: React.FC<Props> = ({ text, link, icon }) => {
  const Wrapper = (
    args:
      | React.ButtonHTMLAttributes<HTMLButtonElement>
      | React.ButtonHTMLAttributes<HTMLButtonElement>
  ) =>
    link ? (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        {...(args as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    ) : (
      <button {...(args as React.ButtonHTMLAttributes<HTMLButtonElement>)} />
    );

  return (
    <Wrapper className="button">
      {icon ? <Icon name={icon} /> : null}
      <span>{text}</span>
    </Wrapper>
  );
};
