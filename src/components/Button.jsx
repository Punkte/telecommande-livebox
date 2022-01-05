import styled from "styled-components";

export const Button = styled.button`
 -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
  border: none;
  background-color: #191922;
  color: #fff;
  box-shadow: -5px -5px 10px rgba(73, 73, 73, 0.05),
              5px 5px 10px rgba(0, 0, 0, 0.2);
              padding: 16px;
              
  &:active {
    background: #1b1b1b;
    box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.01),
              inset 5px 5px 10px rgba(0, 0, 0, 0.5);
  }
`
