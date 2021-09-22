import React, { StrictMode } from 'react';
import { WrapPageElementBrowserArgs } from 'gatsby';
import { createGlobalStyle } from 'styled-components';
import { Banners } from 'layouts/banners';
import { Footers } from 'layouts/footers';
import { Navigations } from 'layouts/navigations';

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
}
body {
  overflow: hidden auto;
  
}
html {
  font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif;
}
`;

export const wrapRootElement: React.FC<WrapPageElementBrowserArgs> = ({ element }) => (
  <StrictMode>
    <GlobalStyle />
    {/* <Banners/> */}
    {/* <Navigations /> */}
    {element}
    {/* <Footers /> */}
  </StrictMode>
);
