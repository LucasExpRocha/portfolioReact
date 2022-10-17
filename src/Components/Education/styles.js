import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    background: rgba(0, 0, 0, .2);

    display: grid;
    gap: .5rem;

    padding: 1.5rem;
    border-radius: .5rem;

    > p {
        overflow-wrap: break-word;
        word-wrap: break-word;
        -webkit-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;
        text-align: justify;
    }
`;