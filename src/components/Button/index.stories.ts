import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
    size: 'lg',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
    size: 'md',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Button',
    size: 'sm',
  },
};

export const Text: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
    size: 'xs',
  },
};
