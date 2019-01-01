/* eslint no-unused-expressions: 0 */
import { injectGlobal } from 'emotion'

injectGlobal`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: #DAE1E7;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    background-color: #FFF;
    max-width: 1600px;
    margin: 0 auto;
    padding: 0;
  }
`
