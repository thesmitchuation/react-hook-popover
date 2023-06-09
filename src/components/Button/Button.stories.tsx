import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import { Button } from './Button';

export default {
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const md = Template.bind({});
md.args = {
    onClick:(event) => { alert('Hello, world!'); }
};
