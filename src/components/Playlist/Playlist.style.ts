import styled from "styled-components";

export const PlaylistContainer = styled.section`
    width: 100%;
    flex-grow: 1;
    background-color: #554271;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 30px;

    h1, ul {
        width: 40%;
        min-width: 250px;
        margin: 0 auto;
        color: #f1f1f1;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    li {
        list-style-type: none;
        width: 100%;
        border-radius: 5px;

        button {
            width: 100%;
            height: 100%;
            background-color: #b3b0e8;
            color: #554271;
            padding: 5px 10px;
            text-align: start;
            font-weight: bold;
            border-radius: 5px;
            border: 1px solid #b3b0e8;
            cursor: pointer;

            &:hover {
                border: 1px solid #f1f1f1;
                color: #f1f1f1;
                background-color: #7a75d7;
            }


        }
    }
`;