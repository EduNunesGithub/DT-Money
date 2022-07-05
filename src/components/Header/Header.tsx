import { useState } from "react";

import { NewTransactionModal } from "../NewTransactionModal/NewTransactionModal";

import {
    HeaderContainer,
    HeaderContent
} from "./HeaderStyles";

import iconLogo from "../../assets/logo.svg";

export const Header = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const closeModal = () => setShowModal(false);
    const openModal = () => setShowModal(true);

    return (
        <>
            <HeaderContainer>
                <HeaderContent>
                    <img
                        alt="dt money logo"
                        src={iconLogo}
                    />

                    <button onClick={openModal}>
                        Nova transação
                    </button>
                </HeaderContent>
            </HeaderContainer>

            <NewTransactionModal
                close={closeModal}
                show={showModal}
            />
        </>
    );
}