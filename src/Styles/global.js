import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: ${({theme}) => theme.COLORS.BACKGROUND};
        color: ${({theme}) => theme.COLORS.TEXT};

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body, input, button, textarea {
        font-family: 'IBM Plex Sans Arabic', sans-serif;
        font-size: 1rem;
        outline: none;
    }
    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
    }
    button, a, li{
        cursor: pointer;
        transition: filter .2s;
    }
    button:hover, a:hover {
        filter: brightness(.9);
    }

    @media (min-width: 1024px) {
        main {
            h1 {
            font-size: 2.5rem;
            }
            h3 {
                font-size: 1.5rem;
            }
            p, label {
                font-size: 1.25rem;
            }
        }
    }
`;