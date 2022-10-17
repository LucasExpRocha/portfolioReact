import styled from "styled-components";

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

        section {
            padding: 2rem 2rem 2rem;
            width: 100%;

            label {
                cursor: pointer;
            }
        }
    }

    @media (min-width: 1024px) {
        > main {
            section {
                padding: 4rem 6rem 4rem;
            }
        }
    }
`;

export const AboutMe = styled.section`
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%23070137' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%2308023d' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%230a0442' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%230d0647' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%230F084C' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%230a0645' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%2306053e' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23040636' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%2303072f' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23020727' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;

    > div {
        padding: 1rem 0;

        display: grid;
        gap: 1rem;

        p {
            overflow-wrap: break-word;
            word-wrap: break-word;
            -webkit-hyphens: auto;
            -ms-hyphens: auto;
            hyphens: auto;
            text-align: justify;
        }

        div {
            display: flex;
            justify-content: space-around;
        }
        a {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .5rem;

            padding: .5rem;
            border-radius: 1rem;
            height: 3rem;

            color: #fff;
            background: linear-gradient(to right, rgba(149, 114, 252, 0.5) 10%, rgba(67, 231, 173, .6) 50%, rgba(149,114,252,0.5) 90%);
        }
    }

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;

export const Objectives = styled.section`
    > form {
        display: flex;
        justify-content: space-around;
        margin-top: 2rem;

        input {
            display: none;
        }

        input[value="Personal"]:checked + label,
        input[value="Professional"]:checked + label {
            font-weight: 500;
            border-bottom: 1px solid #e1e1e1;
            box-shadow: rgb(255 255 255 / 50%) 0px 5px 2px -2px;
        }
    }

    @media (min-width: 768px) {
        form {
            margin-left: 50%;
            width: 50%;
        }
    }
`;

export const Abilities = styled.section`
    background-color: #13023E;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23090B32' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%2313023E' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23130341' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23130444' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23140547' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%2314054a' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%2315064d' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23150650' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23160653' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23160656' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23170659' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%2317075c' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23180760' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23180763' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%23190766' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%23190769' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%2319086c' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%231a0870' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%231A0873' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;

    > h1 {
        margin-bottom: 2rem;
    }

    > div {
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
    }
`;

export const Qualification = styled.section`
    > div {
        margin-top: 2rem;
        display: grid;
        gap: 1rem;
    }
    
    @media (min-width: 1024px) {
        > div {
            grid-template-columns: 1fr 1fr;
        }
    }
`;

export const Footer = styled.footer`
    width: 100%;
    height: 10rem;

    padding-bottom: 3rem;

    background-color: #060030;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%2335335A'/%3E%3Cstop offset='1' stop-color='%23090A3E'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%230B0C57'/%3E%3Cstop offset='1' stop-color='%230B0B29'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(0 0)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='rotate(0 800 450)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(0 0)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(0 0)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='rotate(0 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='rotate(0 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;

    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: 1fr 1.25rem;
    grid-template-areas: "icons"
    "copyright";

    > div {
        grid-area: icons;
    }
    
    > p {
        grid-area: copyright;
        text-align: center;
        color: #E6E8FF;
    }
`;

export const Images = styled.img`
    width: 100%;
    object-fit: cover;
    animation: moveUpDown 5s infinite ease-in-out;

    @keyframes moveUpDown {
        0% {
            transform: translate3d(0);
        }
        50% {
            transform: translate3d(5px, 20px, 0);
        }
    }
`;