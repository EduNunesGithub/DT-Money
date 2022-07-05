import styled from "styled-components";

import { pxToRem } from "../../utils/unitConversor";

interface ScrollButtonsContainerProps {
    size: number;
};

interface OverflowScrollabeContainerProps {
    borderRadius: number;
}

export const ScrollButtonsContainer = styled.div<ScrollButtonsContainerProps>`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    display: flex;

    align-items: center;
    justify-content: space-between;

    border-radius: inherit;

    pointer-events: none;

    width: 100%;
    max-width: calc(100vw - ${props => pxToRem(props.size)});
    height: 100%;

    button {
        background: rgba(255, 255, 255, 0.8);

        display: flex;

        align-items: center;
        justify-content: center;

        border: none;
        border-radius: 50%;

        pointer-events: all;

        transition: 0.2s;

        width: ${props => pxToRem(props.size)};
        height: ${props => pxToRem(props.size)};

        &:hover {
            background: rgba(255, 255, 255, 0.4);
        }

        &:first-child {
            margin-left: ${props => pxToRem(- props.size / 2)};
        }

        &:last-child {
            margin-right: ${props => pxToRem(- props.size / 2)};
        }

        img {
            width: 75%;
            height: 75%;
        }
    }

    @media (max-width: 532.5px) {
        display: none;
    }
`;

export const OverflowScrollabeContainer = styled.div<OverflowScrollabeContainerProps>`
    position: relative;

    border-radius: ${props => pxToRem(props.borderRadius)};
`;

export const Wrapper = styled.div`
    position: relative;
    
    display: flex;

    flex-wrap: nowrap;

    border-radius: inherit;

    overflow-x: auto;

    -ms-overflow-style: none;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
        display: none;
    }
`;