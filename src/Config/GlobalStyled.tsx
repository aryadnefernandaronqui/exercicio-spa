import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    *, html {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Monteserrat', sans-serif;
    }

    body {
        width: 100vw;
        overflow-x: hidden;

    }

    #root {
        width: 100vw;
    }
`;

export default GlobalStyled;
