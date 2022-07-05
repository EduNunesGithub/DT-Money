import { useTransactions } from "../../hooks/useTransactions";

import { valueToCurrency } from "../../utils/currencyFormater";

import {
    ListContainer,
    ListItem,
    ListTitle,
    TransactionsListContainer
} from "./TransactionsListStyles";

interface ListItemComponentProps {
    amount: number;
    category: string;
    createdAt: Date;
    title: string;
    type: string;
};

const ListItemComponent = ({
    amount,
    category,
    createdAt,
    title,
    type
}: ListItemComponentProps) => {
    return (
        <ListItem>
            <h3>{title}</h3>

            <p className={
                type === "deposit" ? "green" : "red"
            }>
                {valueToCurrency(amount)}
            </p>

            <span className="float">
                <span>{category}</span>
                <span>
                    {new Intl.DateTimeFormat("pt-BR").format(createdAt)}
                </span>
            </span>
        </ListItem>
    );
}

export const TransactionsList = () => {
    const { transactions } = useTransactions();

    return (
        <TransactionsListContainer>
            <ListTitle>
                {transactions?.length !== 0 && (
                    <>
                        <h2>Listagem</h2>

                        <span>{transactions?.length + " itens"}</span>
                    </>
                )}
            </ListTitle>

            <ListContainer>
                {transactions?.map(({
                    amount,
                    category,
                    createdAt,
                    id,
                    title,
                    type
                }) => {
                    return (
                        <ListItemComponent
                            amount={amount}
                            category={category}
                            createdAt={createdAt}
                            key={id}
                            title={title}
                            type={type!}
                        />
                    );
                })}
            </ListContainer>
        </TransactionsListContainer>
    );
}