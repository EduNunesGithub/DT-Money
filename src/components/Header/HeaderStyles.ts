import styled from "styled-components";

import { pxToRem } from "../../utils/unitConversor";

export const HeaderContainer = styled.header`
    background: var(--blue);
`;

export const HeaderContent = styled.div`
    display: flex;

    justify-content: space-between;

    margin: auto;
    padding: ${pxToRem(32)} ${pxToRem(32)} ${pxToRem(132)};

    width: 100%;
    max-width: ${pxToRem(1120 + 32 + 32)};

    img {
        aspect-ratio: 172.8 / 40;
        width: ${pxToRem(172.8)};
        height: auto;
    }

    button {
        background: #6933FF;

        color: var(--shape-principal);

        font-family: "Poppins", sans-serif;
        font-size: ${pxToRem(16)};
        font-weight: 600;

        line-height: ${pxToRem(24)};

        border: none;
        border-radius: ${pxToRem(5)};

        padding: ${pxToRem(12)} ${pxToRem(32)};

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.85);
        }
    }

    @media (max-width: 532.5px) {
        padding: ${pxToRem(62)} ${pxToRem(24)} ${pxToRem(132)};

        img {
            width: ${pxToRem(135)};
        }

        button {
            font-size: ${pxToRem(12)};

            line-height: ${pxToRem(18)};

            padding: ${pxToRem(11)} ${pxToRem(16)};
        }
    }
`;