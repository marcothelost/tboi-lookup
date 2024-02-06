import React from 'react';

import { Icon } from './Icon';

import type { IconName } from '@fortawesome/fontawesome-common-types';

interface Props {
  text: string;
  icon?: IconName;
}

export const Button: React.FC<Props> = ({ text, icon }) => (
  <button className="button">
    {icon ? <Icon name={icon} /> : null}
    <span>{text}</span>
  </button>
);
