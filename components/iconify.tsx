'use client';
import { Icon } from '@iconify/react';
import { FunctionComponent } from 'react';

interface IconifyProps {
  icon: string;
  [key: string]: unknown;
}
export const Iconify: FunctionComponent<IconifyProps> = (props) => {
  return (
    <Icon
      {...props}
      icon={props.icon}
    />
  );
};
