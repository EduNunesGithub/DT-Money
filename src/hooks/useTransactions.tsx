import {
    createContext,
    ReactNode,
    useContext
} from "react";

import { useLiveQuery } from "dexie-react-hooks";

import {
    db,
    Transaction,
} from "../database/db";

interface DataTransactions {
    newTransaction: (transaction: Transaction) => void;
    transactions: Transaction[] | undefined;
};

interface DataTransactionsProviderProps {
    children: ReactNode
}

const DataTransactionsContext = createContext<DataTransactions>({} as DataTransactions);

export const DataTransactionsProvider = ({
    children
}: DataTransactionsProviderProps) => {
    const transactions = useLiveQuery(
        () => db.transactions.toArray()
    );

    async function newTransaction(transaction: Transaction) {
        try {
            await db.transactions.add({
                ...transaction
            });
        } catch (error) {
            alert("Database Error: error while updating database");
        }
    }

    return (
        <DataTransactionsContext.Provider value={{
            newTransaction,
            transactions
        }}>
            {children}
        </DataTransactionsContext.Provider>
    );
}

export const useTransactions = () => {
    const context = useContext(DataTransactionsContext);

    return context;
}