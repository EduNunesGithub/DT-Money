import styled from "styled-components";

import { pxToRem } from "../../utils/unitConversor";

export const CardContainer = styled.div`
    display: flex;

    gap: ${pxToRem(32)};

    flex-grow: 1;

    @media (max-width: 532.5px) {
        gap: ${pxToRem(12)};

        padding: 0 ${pxToRem(25)};
    }
`;

export const DashboardContainer = styled.main`
    margin: ${pxToRem(- 142 / 2)} auto auto auto;
    padding: 0 ${pxToRem(32)};

    width: 100%;
    max-width: ${pxToRem(1120 + 32 + 32)};

    @media (max-width: 532.5px) {
        margin: ${pxToRem(- 200 / 2)} auto auto auto;
        padding: 0;
    }
`;