import { create } from '@storybook/theming';
import Logo from './../assets/branding/ecosystem-logo.svg';

export default create({
  base: 'light',
  appBg: '#fff',
  colorPrimary: '#ff6464',
  colorSecondary: '#543864',

  brandTitle: 'Ecosystem',
  brandUrl: 'https://example.com',
  brandImage: Logo,
});
