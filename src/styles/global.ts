import { createGlobalStyle } from "styled-components";

import { pxToRem } from "../utils/unitConversor";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F0F2F5;
        --blue: #5429CC;
        --green: #33CC95;
        --red: #E62E4D;
        --shape-principal: #FFFFFF;
        --textos: #969CB3;
        --titulos: #363F5F;
    }

    * {
        box-sizing: border-box;

        outline-color: var(--green);
        outline-offset: ${pxToRem(2)};
        outline-width: ${pxToRem(2)};

        margin: 0;
        padding: 0;
    }

    body {
        background: var(--background);
    }

    button {
        cursor: pointer;
    }

    .new-transaction-modal-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        border-radius: ${pxToRem(5)};

        overflow: auto;

        max-width: calc(100vw - ${pxToRem(32)});
        max-height: calc(100vh - ${pxToRem(32)});
        max-height: calc(-webkit-fill-available - ${pxToRem(32)});

        @media (max-width: 532.5px) {
            position: relative;
            top: unset;
            left: unset;
            transform: unset;

            border-radius: ${pxToRem(16)} ${pxToRem(16)} 0 0;

            z-index: 14;

            width: 100%;
            max-width: unset;
        }
    }

    .new-transaction-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        inset: ${pxToRem(0)};

        display: block;

        z-index: 10;

        @media (max-width: 532.5px) {
            background: none;

            display: flex;

            align-items: flex-end;
            justify-content: center;

            width: 100vw;
            height: 100vh;
            height: -webkit-fill-available;

            .mobile-overlay-fix {
                background: rgba(0, 0, 0, 0.7);

                position: fixed;
                top: 0;
                left: 0;

                z-index: -12;

                width: 100vw;
                height: 100vh;
                height: -webkit-fill-available;
            }
        }
    }

    .ReactModal__Overlay {
        opacity: 0;

        transition: 250ms ease-in-out;

        @media (max-width: 532.5px) {
            top: 100vh;
            top: -webkit-fill-available;
        }
    }

    .ReactModal__Overlay--after-open{
        opacity: 1;

        @media (max-width: 532.5px) {
            top: 0;
        }
    }

    .ReactModal__Overlay--before-close{
        opacity: 0;

        @media (max-width: 532.5px) {
            top: 100vh;
            top: -webkit-fill-available;
        }
    }

    @media (max-width: 375px) {
        html {
            font-size: 4.2666vw;
        }
    }

    @media (min-width: 1440px) {
        html {
            font-size: 1.1111vw;
        }
    }
`;