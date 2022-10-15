import styled from 'styled-components';

export const Container = styled.section`
    margin: 1.75rem 0;

    > h2 {
        border-bottom: 1px solid rgba(10, 10, 10, 0.5);

        padding-bottom: 1rem;
        margin-bottom: 1.5rem;

        color: gray;
        font-size: 1.25rem;
        font-weight: 400;
    }

    > div {
        display: flex;
        flex-wrap: wrap;
        gap: .5rem;

        > a {
            color: white;
        }
    }
`;