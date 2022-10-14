import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 4rem 1fr;
    grid-template-areas:
    "header"
    "container";

    header {
        grid-area: header;
    }

    main {
        grid-area: container;
        overflow-y: auto;
    }
`;