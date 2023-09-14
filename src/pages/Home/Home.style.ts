import styled, { createGlobalStyle } from "styled-components";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GlobalStyle: any = createGlobalStyle`
    *, ::before, ::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        z-index: 1;
    }

    html, body, #root { 
        width: 100%;
        height: 100%;
    }

    .active {
        border: 1px solid #f1f1f1;
        color: #f1f1f1;
        background-color: #7a75d7;
    }

    audio {
        display: none;
    }
`;

export const HomeContainer = styled.main` 
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #b3b0e8;
`;