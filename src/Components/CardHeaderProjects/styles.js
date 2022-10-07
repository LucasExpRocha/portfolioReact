import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    width: 100%;
    max-height: 15rem;
    padding: .5rem;

    display: grid;
    grid-template-columns: 1fr ;

    position: relative;

    > img {
        grid-area: 0/2;
        object-fit: cover;

        width: 80%;
        height: 100%;
        border-radius: 1rem;

        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }

    > section {
        position: absolute;
        left: 10%;
        top: 10%;

        height: 80%;
        border-radius: 1rem;
        padding: 1rem;

        width: 80%;

        background-color: rgba(255, 255, 255, 0.8);
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;

        transition: all .3s;
    }

    transition: all .3s;

    &:hover {
        transform: scale(1.05);
        section {
            width: 90%;
            left: 0;
        }
    }
`;