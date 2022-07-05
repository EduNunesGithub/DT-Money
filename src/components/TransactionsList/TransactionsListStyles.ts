import styled from "styled-components";

import { pxToRem } from "../../utils/unitConversor";

export const ListContainer = styled.ul`
    display: flex;

    gap: ${pxToRem(8)};

    flex-direction: column;

    list-style: none;
`;

export const ListItem = styled.li`
    background: var(--shape-principal);

    position: relative;

    display: flex;

    gap: ${pxToRem(2)};

    flex-direction: column;

    border-radius: ${pxToRem(5)};

    padding: ${pxToRem(18)} ${pxToRem(24)} ${pxToRem(58)};

    h3 {
        color: var(--titulos);

        font-family: "Poppins", sans-serif;
        font-size: ${pxToRem(14)};
        font-weight: 400;

        line-height: ${pxToRem(21)};

        text-overflow: ellipsis;

        overflow: hidden;
    }

    p {
        color: var(--green);

        font-family: "Poppins", sans-serif;
        font-size: ${pxToRem(20)};
        font-weight: 400;

        line-height: ${pxToRem(30)};

        text-overflow: ellipsis;

        overflow: hidden;
    }

    .green {
        color: var(--green);
    }

    .red {
        color: var(--red);
    }

    .float {
        position: absolute;
        bottom: 0;
        left: 0;

        display: flex;

        gap: ${pxToRem(8)};

        align-items: center;
        justify-content: space-between;

        padding: ${pxToRem(18)} ${pxToRem(24)};

        width: 100%;

        span {
            color: var(--textos);

            font-family: "Poppins", sans-serif;
            font-size: ${pxToRem(14)};
            font-weight: 400;

            line-height: ${pxToRem(21)};

            text-overflow: ellipsis;

            overflow: hidden;

            &:last-child {
                flex-shrink: 0;
            }
        }
    }
`;

export const ListTitle = styled.div`
    display: flex;

    align-items: center;
    justify-content: space-between;

    width: 100%;

    h2 {
        color: var(--titulos);

        font-family: "Poppins", sans-serif;
        font-size: ${pxToRem(20)};
        font-weight: 400;

        line-height: ${pxToRem(30)};
    }

    span {
        color: var(--textos);

        font-family: "Poppins", sans-serif;
        font-size: ${pxToRem(14)};
        font-weight: 500;

        line-height: ${pxToRem(21)};
    }
`;

export const TransactionsListContainer = styled.section`
    display: flex;

    gap: ${pxToRem(16)};

    flex-direction: column;

    margin-top: ${pxToRem(32)};
    padding: 0 ${pxToRem(25)};

    width: 100%;
    max-width: ${pxToRem(1120 + 32 + 32)};

    @media (min-width: 532.5px) {
        display: none;
    }
`;