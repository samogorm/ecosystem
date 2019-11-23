import { create } from '@storybook/theming';
import Logo from './../assets/branding/ecosystem-logo.svg';

export default create({
  base: 'light',
  appBg: '#fff',
  colorPrimary: '#62AC8D',
  colorSecondary: '#2A6B4F',

  brandTitle: 'Ecosystem',
  brandUrl: 'https://example.com',
  brandImage: Logo,
});
