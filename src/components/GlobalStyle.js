import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GoyangDeogyang';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GoyangDeogyang.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'GoyangIlsan';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GoyangIlsan.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  html {
    scroll-behavior: smooth;
    font-size: 20px;
    @media (max-width: 1261px) {
      font-size: 16px;
    }
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  body {
    font-family: 'GoyangIlsan';
    color: #444444;
    font-size: 1rem;
  }
  ::placeholder {
    font-family: 'GoyangIlsan';
  }
  h1, h2, h3, h4 {
    font-family: 'GoyangDeogyang';
  }
  img {
    display: block;
    max-width: 100%;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    margin: 0;
    padding: 0;
    background: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
  }
  input,select {
    margin: 0;
    padding: 0;
    background: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
  }
  input:focus::-webkit-input-placeholder,
  textarea:focus::-webkit-input-placeholder {
    color: transparent;
  }
  input:focus::-moz-input-placeholder,
  textarea:focus::-moz-input-placeholder {
    color: transparent;
  }
  input:focus::-moz-placeholder,
  textarea:focus::-moz-placeholder { 
    color: transparent; 
  }
  input:focus:-ms-input-placeholder,
  textarea:focus:-ms-input-placeholder { 
    color: transparent; 
  }
  table{
    text-indent: 0;
  }
  input[type='checkbox']{
    position: absolute;
    padding: 0;
    left: -3000%;
  }
`;

export default GlobalStyle;