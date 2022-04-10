import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";


export const lightTheme = {
  accent: "#0095f6",
  bgColor: "#EF5252",
};

export const GlobalStyles = createGlobalStyle`
    
    ${reset}  
    
    input {
      all:unset;
    }
    
    * {
      box-sizing:border-box;
    }    
    
    body {
      background-color: #FAFAFA;
      font-size:14px;
      font-family: 'Noto Sans KR', sans-serif;
      color:rgb(38, 38, 38);
    }
  
    a {
    text-decoration: none;
    }
`;