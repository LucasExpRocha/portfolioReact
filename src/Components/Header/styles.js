import styled from "styled-components";
import LogoImage from "../../assets/logo.png";


export const Container = styled.header`
    width: 100%;
    background-color: #ACE566;

    display: flex;
    justify-content: space-between;
    align-items: center;

    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

    transition: all 0.5s;

    height: 3rem;
    padding: 0rem 2rem;

    @media (min-width: 540px) {
        padding: 0rem 3rem;
    }

    @media (min-width: 720px) {
    padding: 0rem 4rem;
    }

    @media (min-width: 1040px) {
    padding: 0 5rem;
    }
`;

export const Logo = styled.div`
    width: 7rem;
    height: 2rem;
    object-fit: cover;
    background: url(${LogoImage}) no-repeat center center;
`;



export const Navigation = styled.nav`
    display: flex;
    align-items: center;

    > input {display: none;}

    > ul {
        display: none;
        a {
            font-weight: 500;
            color: ${({theme}) => theme.COLORS.TEXT};
        }
    }

    @media (max-width: 1039px) {
        > ul > li {
            background-color: #DBF4BE;
            word-wrap: break-word;
            a {
                width: 100%;
                padding: .5rem 1rem;
            }
            &:hover {
                filter: contrast(1.1);
            }
        }

        > label {
            height: 3rem;
            display: flex;
            align-items: center;
            gap: .5rem;
            
            cursor: pointer;

            span {
                font-weight: 500;
                cursor: pointer;
            }

            &::before {
                content: '';
                display: inline-block;
                height: 2px;
                width: 14px;
                background: #000;
                box-shadow: 0 4px #000, 0 -4px #000;
                transition: all .3s;
            }

            &:hover::before {
                box-shadow: 0 4px #000, 0 -4px #000;
                transform: rotate(90deg);
            }
        }

        > #navMainMenuTrigger:checked ~ label::before {
            transform: rotate(90deg);
        }

        > .navigationBar:hover,
        > #navMainMenuTrigger:hover ~ .navigationBar,
        > #navMainMenuTrigger:checked ~ .navigationBar  {
            display: block;
            position: absolute;
            top: 3rem;
            left: 0;
            right: 0;  
        }
    }

    @media (min-width: 1040px) {
        > label {
            display: none;
        }


        > #navMenuLabel:checked ~ ul {
            position: relative;
            top: 0;
            display: flex;

            li {
                background-color: transparent;
                padding: 0;
                border-bottom: none;
            }

        }

        > ul {
            display: flex;
            gap: 1rem;
        }   
    }
`;


export const MenuLabel = styled.li`
    > ul, input {
        display: none;
    }

    > label {
        display: flex;
        align-items: center;
    }

    @media (max-width: 1039px) {
        padding: 0 !important;

        > label {
            padding: .5rem 1rem;
            cursor: pointer;
            font-weight: 500;
        }

        > #navMenuLabel:checked ~ label{
            svg {
                transform: rotate(180deg);
                transition: all .3s;
            }
        }

        svg {
                transition: all .3s;
        }
    
        > #navMenuLabel:checked ~ .menuMobile,
        > #navMenuLabel ~ .menuMobile:hover,
        &:hover ~ .menuMobile {
            display: block;
            position: static;
        }
    }
    
    @media (min-width: 1040px) {

        > label {
            height: 3rem;
            align-items: center;
            font-weight: 500;
        }

        > #navMenuLabel:checked ~ label,
        > #navMenuLabel:hover ~ label{
            svg {
                transform: rotate(180deg);
                transition: all .3s;
            }
        }

        svg {
                transition: all .3s;
        }

        > #navMenuLabel:checked ~ .menu,
        > #navMenuLabel:hover ~ .menu,
        > #navMenuLabel ~ .menu:hover,
        &:hover ~ .menu {
            display: block;

            div {
                position: absolute;
                width: 100vw;
                top: 3rem;
                left: 0;
                right: 0;
                background-color: #DBF4BE;
            }
        }
    }
`;

