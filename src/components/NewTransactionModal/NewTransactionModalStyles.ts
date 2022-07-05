import styled from "styled-components";

import { pxToRem } from "../../utils/unitConversor";

interface CheckboxProps {
    mainColor: `rgba(${number}, ${number}, ${number}, ${number})`;
};

export const BlockCheckboxContainer = styled.div`
    display: flex;

    gap: ${pxToRem(8)};

    width: 100%;
`;

export const BlockInputContainer = styled.div`
    display: flex;

    width: 100%;

    label {
        position: absolute;
        top: 0;
        left: 0;

        overflow: hidden;

        width: 0px;
        height: 0px;
    }

    input {
        background: #E7E9EE;

        color: var(--textos);

        font-family: "Poppins", sans-serif;
        font-size: ${pxToRem(16)};
        font-weight: 400;

        line-height: ${pxToRem(24)};

        border: ${pxToRem(1)} solid #D7D7D7;
        border-radius: ${pxToRem(5)};

        padding: ${pxToRem(20 - 1)} ${pxToRem(24 - 1)};

        width: 100%;

        &::placeholder {
            color: var(--textos);

            font-family: "Poppins", sans-serif;
            font-size: ${pxToRem(16)};
            font-weight: 400;

            line-height: ${pxToRem(24)};
        }
    }

    @media (max-width: 532.5px) {
        input {
            font-size: ${pxToRem(14)};

            line-height: ${pxToRem(21)};

            padding: ${pxToRem(17.5 - 1)} ${pxToRem(16 - 1)};

            width: 100%;

            &::placeholder {
                font-size: ${pxToRem(14)};

                line-height: ${pxToRem(21)};
            }
        }
    }
`;

export const Checkbox = styled.label<CheckboxProps>`
    position: relative;

    flex-grow: 1;

    cursor: pointer;

    input {
        position: absolute;
        top: 0;
        left: 0;

        overflow: hidden;

        width: 0px;
        height: 0px;
    }

    input:checked ~ span {
        background: ${props => props.mainColor};

        border: none;

        padding: ${pxToRem(20)};
    }

    input:focus ~ span {
        outline-style: solid;
    }

    span {
        display: flex;

        gap: ${pxToRem(16)};

        align-items: center;
        justify-content: center;

        color: var(--titulos);

        font-family: "Poppins", sans-serif;
        font-size: ${pxToRem(16)};
        font-weight: 400;

        line-height: ${pxToRem(24)};

        border: ${pxToRem(1.5)} solid rgba(150, 156, 178, 0.2);
        border-radius: ${pxToRem(5)};

        padding: ${pxToRem(20 - 1.5)};

        transition: background-color 0.2s;

        &:hover {
            background: ${props => props.mainColor};
        }

        img {
            width: ${pxToRem(24)};
            height: ${pxToRem(24)};
        }
    }

    @media (max-width: 532.5px) {
        input:checked ~ span {
            padding: ${pxToRem(16)};
        }

        span {
            gap: ${pxToRem(8)};

            font-size: ${pxToRem(14)};
            font-weight: 400;

            line-height: ${pxToRem(21)};

            padding: ${pxToRem(16 - 1.5)};
        }
    }
`;

export const CloseModalButton = styled.button`
    background: none;

    position: absolute;
    top: ${pxToRem(8)};
    right: ${pxToRem(8)};

    display: flex;

    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 50%;

    transition: 0.2s;

    width: ${pxToRem(40)};
    height: ${pxToRem(40)};

    &:hover {
        background: rgba(0, 0, 0, 0.05);
    }

    img {
        width: ${pxToRem(14)};
        height: ${pxToRem(14)};
    }

    @media (max-width: 532.5px) {
        top: ${pxToRem(20)};
        right: ${pxToRem(12)};
    }
`;

export const InputsContainer = styled.div`
    display: flex;

    gap: ${pxToRem(16)};

    flex-direction: column;

    @media (max-width: 532.5px) {
        gap: ${pxToRem(8)};
    }
`;

export const NewTransactionModalContainer = styled.form`
    background: var(--background);
    
    display: flex;

    flex-direction: column;

    border-radius: ${pxToRem(5)};

    padding: ${pxToRem(64)} ${pxToRem(48)};

    width: calc(100vw - ${pxToRem(32)});
    max-width: ${pxToRem(576)};

    h2 {
        color: var(--titulos);

        font-family: "Poppins", sans-serif;
        font-size: ${pxToRem(24)};
        font-weight: 600;

        line-height: ${pxToRem(36)};

        margin-bottom: ${pxToRem(32)};
    }

    .submit-form {
        background: var(--green);

        color: var(--shape-principal);

        font-family: "Poppins", sans-serif;
        font-size: ${pxToRem(16)};
        font-weight: 600;

        line-height: ${pxToRem(24)};

        border: none;
        border-radius: ${pxToRem(5)};

        margin-top: ${pxToRem(24)};
        padding: ${pxToRem(20)};

        transition: filter 0.2s;

        width: 100%;

        &:hover {
            filter: brightness(0.8);
        }
    }

    @media (max-width: 532.5px) {
        border-radius: ${pxToRem(16)} ${pxToRem(16)} 0 0;

        padding: ${pxToRem(24)};

        width: 100%;

        h2 {
            font-size: ${pxToRem(20)};

            line-height: ${pxToRem(30)};

            margin-bottom: ${pxToRem(24)};
        }

        .submit-form {
            font-size: ${pxToRem(14)};
            font-weight: 500;

            line-height: ${pxToRem(21)};

            margin-top: ${pxToRem(24)};
            padding: ${pxToRem(17.5)};
        }
    }
`;