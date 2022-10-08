import styled from 'styled-components';

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
    
    div {
        grid-area: container;
        overflow-y: auto;
        
        padding: 2rem 1.5rem;

        transition: all .3s;

        @media (min-width: 540px) {
        padding: 2rem 2.5rem;
        }

        @media (min-width: 720px) {
        padding: 2rem 3.5rem;
        }

        @media (min-width: 1040px) {
        padding: 2 4.5rem;
        }

        main {
            background-color: rgba(255, 255, 255, 0.5);
            width: 100%;
            height: 100vh;
            border-radius: 1rem;

            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        }
    }
`;