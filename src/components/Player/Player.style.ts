import styled from "styled-components";

export const PlayerContainer = styled.section`
    width: 50%;
    height: 30%;
    padding-top: 40px;
    margin: 0 auto;
    position: relative;
`;

export const Title = styled.h2``;

export const Artist = styled.h3`
    font-weight: normal;
`;

export const Counter = styled.p`
    position: absolute;
    right: 10px;
    top: 45px;
    font-weight: bold;
`;

export const Controls = styled.div`
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
`;

export const Play = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 0 10px;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const Switch = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 2px;
    background-color: rgba(0,0,0,0.2);

    img {
        width: 100%;
        height: 100%;
    }
`;