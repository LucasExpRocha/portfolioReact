import styled from "styled-components";

export const Container = styled.aside`
    height: calc(100% - 4rem);

    transition: all .5s linear;

    background: rgba(0, 0, 0, .5);
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;

    position: absolute;
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