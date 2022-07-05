import styled from "styled-components";

import { pxToRem } from "../../utils/unitConversor";

export const Table = styled.table`
    flex-grow: 1;

    text-align: left;

    white-space: nowrap;

    border-collapse: collapse;
    border-spacing: 0;

    .table-header-row {
        th {
            span {
                display: flex;

                color: var(--textos);

                font-family: "Poppins", sans-serif;
                font-size: ${pxToRem(16)};
                font-weight: 400;

                line-height: ${pxToRem(24)};

                margin-bottom: ${pxToRem(20)};
                padding-right: ${pxToRem(32)};
            }

            &:first-child {
                span {
                    padding-left: ${pxToRem(32)};
                }
            }
        }

        .column-1 {
            width: 48.58%;
        }

        .column-2 {
            width: 18.92%;
        }

        .column-3 {
            width: 21.70%;
        }

        .column-4 {
            width: 10.8%;
        }
    }
`;

export const TableRow = styled.tr`
    td {
        span {
            background: var(--shape-principal);

            display: flex;

            font-family: "Poppins", sans-serif;
            font-size: ${pxToRem(16)};
            font-weight: 400;

            line-height: ${pxToRem(24)};

            margin-bottom: ${pxToRem(8)};
            padding: ${pxToRem(20)} ${pxToRem(32)} ${pxToRem(20)} 0;

            width: 100%;
        }

        &:first-child {
            span {
                border-radius: ${pxToRem(5)} 0 0 ${pxToRem(5)};

                padding-left: ${pxToRem(32)};
            }
        }

        &:last-child {
            span {
                border-radius: 0 ${pxToRem(5)} ${pxToRem(5)} 0;
            }
        }
    }

    &:last-child {
        td {
            span {
                margin-bottom: 0;
            }
        }
    }

    .black {
        color: var(--titulos);
    }

    .gray {
        color: var(--textos);
    }

    .green {
        color: var(--green);
    }

    .red {
        color: var(--red);
    }
`;

export const TransactionsTableContainer = styled.section`
    margin: ${pxToRem(64)} auto 0 auto;
    padding: 0 ${pxToRem(32)};

    width: 100%;
    max-width: ${pxToRem(1120 + 32 + 32)};

    @media (max-width: 532.5px) {
        display: none;
    }
`;