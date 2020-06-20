import React from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    white: '#fff',
    light: '#f9f9f9',
  },
};

export const Theme = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
