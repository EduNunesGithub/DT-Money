import {
    Dispatch,
    FormEvent,
    SetStateAction,
    useEffect,
    useState
} from "react";

import Modal from "react-modal";

import { useTransactions } from "../../hooks/useTransactions";

import {
    BlockCheckboxContainer,
    BlockInputContainer,
    Checkbox,
    CloseModalButton,
    InputsContainer,
    NewTransactionModalContainer
} from "./NewTransactionModalStyles";

import iconClose from "../../assets/close.svg";
import iconIncome from "../../assets/income.svg";
import iconOutcome from "../../assets/outcome.svg";

interface BlockCheckboxProps {
    name: string;
    stateFunction: Dispatch<SetStateAction<any>>;
};

interface BlockInputProps {
    id: string;
    name: string;
    stateFunction: Dispatch<SetStateAction<any>>;
    type: "text" | "number";
};

interface NewTransactionModalProps {
    close: () => void;
    show: boolean,
};

Modal.setAppElement("#root");

const BlockCheckbox = ({
    name,
    stateFunction
}: BlockCheckboxProps) => {
    return (
        <BlockCheckboxContainer>
            <Checkbox mainColor={`rgba(${18}, ${164}, ${84}, ${0.1})`}>
                <input
                    name={name}
                    onChange={value => stateFunction(value.target.value)}
                    required
                    type="radio"
                    value="deposit"
                />
                <span>
                    <img
                        alt="Entrada"
                        src={iconIncome}
                    />

                    Entrada
                </span>
            </Checkbox>
            <Checkbox mainColor={`rgba(${230}, ${46}, ${78}, ${0.1})`}>
                <input
                    name={name}
                    onChange={value => stateFunction(value.target.value)}
                    type="radio"
                    value="withdrawal"
                />
                <span>
                    <img
                        alt="Saída"
                        src={iconOutcome}
                    />

                    Saída
                </span>
            </Checkbox>
        </BlockCheckboxContainer>
    );
}

const BlockInput = ({
    id,
    name,
    stateFunction,
    type
}: BlockInputProps) => {
    return (
        <BlockInputContainer>
            <label htmlFor={id}>{name}</label>
            <input
                id={id}
                min={0}
                placeholder={name}
                onChange={value => stateFunction(value.target.value)}
                required
                type={type}
            />
        </BlockInputContainer>
    );
}

export const NewTransactionModal = ({
    close,
    show
}: NewTransactionModalProps) => {
    const [valueCategory, setValueCategory] = useState<string>("");
    const [valueName, setValueName] = useState<string>("");
    const [valuePrice, setValuePrice] = useState<number>(0);
    const [valueRadio, setValueRadio] = useState<"deposit" | "withdrawal" | null>(null);

    const { newTransaction } = useTransactions();

    useEffect(() => {
        if (show === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [show]);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        await newTransaction({
            amount: valueRadio === "deposit" ? + valuePrice : - valuePrice,
            category: valueCategory,
            createdAt: new Date(),
            title: valueName,
            type: valueRadio
        });

        setValueCategory("");
        setValueName("");
        setValuePrice(0);
        setValueRadio(null);

        close();
    }

    return (
        <Modal
            className="new-transaction-modal-container"
            closeTimeoutMS={250}
            isOpen={show}
            onRequestClose={close}
            overlayClassName="new-transaction-modal-overlay"
        >
            <div className="mobile-overlay-fix"></div>

            <NewTransactionModalContainer
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <CloseModalButton
                    onClick={close}
                    type="button"
                >
                    <img
                        alt="Fechar modal"
                        src={iconClose}
                    />
                </CloseModalButton>

                <h2>Cadastrar transação</h2>

                <InputsContainer>
                    <BlockInput
                        id="name"
                        name="Nome"
                        stateFunction={setValueName}
                        type="text"
                    />
                    <BlockInput
                        id="price"
                        name="Preço"
                        stateFunction={setValuePrice}
                        type="number"
                    />
                    <BlockCheckbox
                        name="checkbox-container"
                        stateFunction={setValueRadio}
                    />
                    <BlockInput
                        id="category"
                        name="Categoria"
                        stateFunction={setValueCategory}
                        type="text"
                    />
                </InputsContainer>

                <button
                    className="submit-form"
                    type="submit"
                >
                    Cadastrar
                </button>
            </NewTransactionModalContainer>
        </Modal>
    );
}