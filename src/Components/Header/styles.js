import styled from "styled-components";
import LogoImage from "../../assets/logo.png";


export const Container = styled.header`
    width: 100%;
    height: 3rem;
    padding: 0rem 2rem;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    background: linear-gradient(#F3FBE9, #ACE566) padding-box,
    linear-gradient(to right, rgba(149, 114, 252, 1) 10%, rgba(67, 231, 173, 1) 50%, rgba(149,114,252,1) 90%) border-box;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-bottom: 3px solid transparent;

    transition: all 0.5s;
    
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

    > input {
        display: none;
    }

    > ul {
        display: none;

        a {
            font-weight: 500;
            color: ${({theme}) => theme.COLORS.TEXT};
        }
    }

    @media (max-width: 1039px) {
        > ul {
            background: linear-gradient(to right, rgba(0, 0, 0, 0.5) 10%, rgba(125, 125, 125, 1) 50%, rgba(0, 0, 0, 0.5) 90%) border-box;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
            border-bottom: 2px solid transparent;

            li {
                background: linear-gradient(#ACE566, #C4ED92) padding-box;
                box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
                
                a {
                    width: 100%;
                    padding: .5rem 1rem;
                }
                &:hover {
                    filter: contrast(1.1);
                }
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
        > #navMainMenuTrigger:checked ~ .navigationBar  {
            display: block;
            position: absolute;
            top: 2.9rem;
            left: 0;
            right: 0;  
        }
    }

    @media (min-width: 1040px) {
        > label {
            display: none;
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
        cursor: pointer;

    }

    @media (max-width: 1039px) {
        padding: 0;

        > label {
            padding: .5rem 1rem;
            cursor: pointer;
            font-weight: 500;
        }

        > #navMenuLabel:checked ~ label > svg {
            transform: rotate(180deg);
            transition: all .3s;
        }

        svg {
            transition: all .3s;
        }
    
        > #navMenuLabel:checked ~ .menuMobile,
        &:hover ~ .menuMobile {
            display: block;

            li {
                background: ${({theme}) => theme.COLORS.LIST};
            }
            li:hover {
                filter: saturate(1.3);
            }
        }
    }
    
    @media (min-width: 1040px) {

        > label {
            height: 3rem;
            font-weight: 500;
        }

        > #navMenuLabel:checked ~ label > svg,
        > #navMenuLabel:hover ~ label > svg {
            transform: rotate(180deg);
            transition: all .3s;
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
                padding: .5rem 3rem;

                display: flex;

                position: absolute;
                top: 2.8rem;
                left: 0;
                right: 0;

                background: linear-gradient(#ACE566 10%, #C9CDCF 20%, rgba(255, 255, 255, 0)) padding-box;
            }
        }
    }
`;

