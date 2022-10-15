import styled from "styled-components";

export const Container = styled.aside`
    height: calc(100% - 4rem);

    transition: all .5s linear;

    padding: 2rem 1rem;

    background: rgba(0, 0, 0, .75);
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;

    position: absolute;
    z-index: 50;

    > section {
        text-align: center;
        margin: 0 auto;

        padding-right: 1rem;

        max-width: 80%;
        height: 100%;

        overflow-y: auto;

        h4 {
            text-transform: capitalize;
            margin-top: 1rem;
            margin-bottom: 1rem;
            border-bottom: 1px solid rgba(255, 255, 255, .25);
        }

        ul {
            display: grid;
            gap: .5rem;
        }

        a {
            color: white;
            white-space: nowrap;
        }
    }

    section::-webkit-scrollbar {
        width: 5px;
    }

    section::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
    }
    section::-webkit-scrollbar-thumb  {
        background: ${({theme}) => theme.COLORS.BACKGROUND };
        border-radius: 10px;
    }
`;

export const ButtonMenu = styled.div`
    display: flex;
    align-items: center;

    position: absolute;

    top: 50%;
    right: -20px;
    transform: translateY(-50%);
    
    > input {
        display: none;
    }

    > label {
        height: 3rem;
        width: 3rem;

        border-radius: 50%;

        background-color: ${({theme}) => theme.COLORS.BACKGROUND };
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;