import { create } from '@storybook/theming';
import Logo from './../assets/branding/ecosystem-logo.svg';

export default create({
  base: 'light',
  appBg: '#fff',
  colorPrimary: '#FFBA49',
  colorSecondary: '#20A39E',

  brandTitle: 'Ecosystem',
  brandUrl: 'https://example.com',
  brandImage: Logo,
});
