import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 4rem 1fr;
    grid-template-areas:
    "header"
    "container";

    > header {
        grid-area: header;
    }

    > main {
        grid-area: container;
        overflow-y: auto;
    }
`;

export const Contant = styled.div`
    max-width: 50rem;
    margin: 0 auto;

    padding: 3rem 2rem 2rem 4rem;

    > img {
        width: 100%;
        max-height: 20rem;

        border-radius: .5rem;
        box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

        object-fit: cover;
        margin-bottom: 1.5rem;
    }

    > h3 {
        margin-bottom: 2rem;
    }


    > p {
        overflow-wrap: break-word;
        word-wrap: break-word;
        -webkit-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;
        text-align: justify;
    }

`;