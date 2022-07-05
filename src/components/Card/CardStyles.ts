import styled from "styled-components";

import { pxToRem } from "../../utils/unitConversor";

interface CardContainerProps {
    background: string;
};

export const CardContainer = styled.div<CardContainerProps>`
    background: var(${props => props.background});

    position: relative;

    display: flex;

    gap: ${pxToRem(14)};

    flex-direction: column;
    flex-grow: 1;

    white-space: nowrap;

    border-radius: ${pxToRem(5)};

    padding: ${pxToRem(25)} ${pxToRem(32 * 3)} ${pxToRem(25)} ${pxToRem(32)};

    img {
        position: absolute;
        top: ${pxToRem(25)};
        right: ${pxToRem(32)};

        width: ${pxToRem(32)};
        height: ${pxToRem(32)};
    }

    h2 {
        color: var(${props => props.color});

        font-family: "Poppins", sans-serif;
        font-size: ${pxToRem(16)};
        font-weight: 400;

        line-height: ${pxToRem(24)};
    }

    strong {
        color: var(${props => props.color});

        font-family: "Poppins", sans-serif;
        font-size: ${pxToRem(36)};
        font-weight: 500;

        line-height: ${pxToRem(54)};

        span {
            font-weight: 400;
        }
    }

    .mobile-span {
        display: none;
    }

    @media (max-width: 532.5px) {
        gap: ${pxToRem(54)};

        padding: ${pxToRem(20)} ${pxToRem(88)} ${pxToRem(42)} ${pxToRem(24)};

        width: fit-content;

        img {
            top: ${pxToRem(20)};
            right: ${pxToRem(24)};

            width: ${pxToRem(40)};
            height: ${pxToRem(40)};
        }

        h2 {
            font-size: ${pxToRem(14)};

            line-height: ${pxToRem(21)};
        }

        strong {
            font-size: ${pxToRem(30)};

            line-height: ${pxToRem(45)};
        }

        .mobile-span {
            display: initial;

            color: var(${
                props => props.color === "--shape-principal" ? "--shape-principal" : "--textos"
            });

            font-family: "Poppins", sans-serif;
            font-size: ${pxToRem(12)};
            font-weight: 400;

            line-height: ${pxToRem(18)};

            margin-top: ${pxToRem(-54)};
        }
    }
`;