import styled from "styled-components";
import LogoImage from "../../assets/logo.svg";


export const Container = styled.header`
    width: 100%;
    height: 4rem;
    padding: 0rem 2rem;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    background: linear-gradient(#0f171e, #0f171e) padding-box,
    linear-gradient(to right, rgba(149, 114, 252, 1) 10%, rgba(67, 231, 173, 1) 50%, rgba(149,114,252,1) 90%) border-box;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-bottom: 4px solid transparent;

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
    
    a {
        height: 100%;
        display: flex;
        align-items: center;
    }
`;

export const Navigation = styled.nav`
    display: flex;
    align-items: center;

    > input {
        display: none;
    }

    > ul {
        display: none;
        z-index: 500;

        a {
            font-weight: 500;
            color: ${({theme}) => theme.COLORS.TEXT};
        }
    }

    @media (max-width: 1039px) {
        > ul {
            margin-top: 1rem;
            border-bottom: 2px solid transparent;

            background: #262626;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

            li {
                height: 3rem;
                box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
                
                label {
                    display: flex;
                    justify-content: center;
                    height: 3rem;;
                }

                a {
                    width: 100%;
                    padding: .5rem 1rem;    
                    display: flex;
                    justify-content: center;                
                }
                &:hover {
                    filter: contrast(1.1);
                }
                &:hover {
                    background: #404040;
                }
            }
        }

        > label {

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

                background: #fff;
                box-shadow: 0 4px #fff, 0 -4px #fff;
                transition: all .3s;
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
            gap: 1.5rem;
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
                background: #404040;
            }
            li:hover {
                filter: brightness(1.5);
            }
        }
    }
    
    @media (min-width: 1040px) {

        > label {
            height: 4rem;
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
                gap: 1rem;

                position: absolute;
                top: 3.7rem;
                left: 0;
                right: 0;

                background: linear-gradient(#0f171e 10%, rgba(255, 255, 255, 0)) padding-box;
            }
        }
    }
`;

