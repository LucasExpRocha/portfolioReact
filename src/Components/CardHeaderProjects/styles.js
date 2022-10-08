import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    width: 100%;
    max-height: 15rem;
    padding: .5rem;

    position: relative;

    > img {
        object-fit: cover;

        width: 100%;
        height: 13rem;
        border-radius: 1rem;

        background-color: rgba(255, 255, 255, 0.5);
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }

    > section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        position: absolute;

        top: 50%;

        border-radius: 1rem;
        padding: 1rem;

        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
        background-color: rgba(255, 255, 255, 0.8);
        backface-visibility: hidden;


        transform: rotateY(180deg);
        transition: all .5s cubic-bezier(0.2,0.5,0.5,1);

        color: black;

        &::-webkit-scrollbar {
            inset: 0;

            width: 100%;
            height: 100%;

            transform: rotateY(0def);
        }
    }

    transition: all .3s;

    &:hover {
        section {
            width: 100%;
            opacity: 1;
            inset: 0;
            transform: rotateX(0deg);
        }
    }
`;