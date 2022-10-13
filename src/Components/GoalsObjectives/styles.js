import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2rem;
    display: grid;


    > img {
        width: 100%;
        object-fit: cover;
        animation: moveUpDown 5s infinite ease-in-out;
    }

    > h3 {
        line-height: 150%;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    div {
        > p {
            word-wrap: break-word;
            word-break: break-all;
            text-align: justify;
        }

        > p + p {
            margin-top: .5rem;
        } 
    }

    

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;

        > div {
            display: grid;
            grid-template-rows: 1fr 1fr;
        }
    }

    @media (min-width: 1440px) {
        img {
            width: 50%;
            margin: 0 auto;
        }
    }
`;