import styled from "styled-components"

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

    > main {
        grid-area: container;
        overflow-y: auto;
        
        background-color: #0A001E;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%230A001E' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%233A3C39'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
        
        > h3 {
            margin-top: 3rem;
            text-align: center;
        }

        > section {
            padding: 2rem 2rem 2rem;
            
            p {
                margin-bottom: 2rem;
                word-wrap: break-word;
                word-break: break-all;
                text-align: justify;
            }

            form {
                padding: 0 2rem;

                > div {
                    width: 100%;
                    display: flex;
                    align-items: center;

                    background-color: #29293d;
                    color: #e1e1e1;

                    margin-bottom: .5rem;
                    border-radius: .675rem;

                    > input {
                        height: 3.75rem;
                        width: 100%;

                        padding: 0.75rem;
                        color: #e1e1e1;
                        background: transparent;
                        border: 0;
                    }

                    > svg {
                        margin-left: 1rem;
                    }
                }

                > textarea {
                    width: 100%;
                    height: 9rem;

                    background-color: #29293d;
                    color: #e1e1e1;

                    border: none;
                    resize: none;

                    margin-bottom: .5rem;
                    border-radius: .625rem;

                    padding: 1rem;
                }

                button {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: .5rem;

                    padding: .5rem;
                    border-radius: 1rem;
                    height: 3rem;
                    border: none;

                    color: #fff;
                    background: linear-gradient(to right, rgba(149, 114, 252, 0.5) 10%, rgba(67, 231, 173, .6) 50%, rgba(149,114,252,0.5) 90%);
                }
            }
        }
    }
    
    @media (min-width: 768px) {
        main {
            > section:nth-child(2) {
                display: flex;
            
                > div {
                    margin: auto 0;
                    
                    p {
                        padding: 1rem;
                        word-break: normal;
                        text-align: center;
                    }
                }
                img{
                    width: 50%;
                }
            }
        }
    }

    @media (min-width: 1440px) {
        main {
            display: grid;
            grid-template-columns: 2fr 1fr;
            grid-template-rows: 6rem auto;
            grid-template-areas: 
            "title title"
            "midia form";

            > h3 {
                grid-area: title;
            }

            > section:nth-child(2) {
                grid-area: 2/1;
            }
            > section:nth-child(3) {
                grid-area: 2/2;

                margin: auto 0;
            }
        }
    }
`;

export const Images = styled.img`
    width: 100%;
    object-fit: cover;
`;