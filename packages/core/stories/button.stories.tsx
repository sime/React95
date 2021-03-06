import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

export const Simple = () => <Button>Ok</Button>;

Simple.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A3',
  },
};
