import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`//trong video thì k cần export vẫn làm được
    *{
        box-sizing: border-box;
        margin: 0;
        padding:0;
        font-family :sans-serif;
    }
`;

export const Container = styled.div`
    z-index:1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-left:auto;
    padding-right:auto;

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left:30px;
    }
`;
