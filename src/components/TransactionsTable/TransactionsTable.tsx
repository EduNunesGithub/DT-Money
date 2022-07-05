import { OverflowScrollabe } from "../OverflowScrollable/OverflowScrollabe";

import { Transaction } from "../../database/db";

import {
    useTransactions,
} from "../../hooks/useTransactions";

import { valueToCurrency } from "../../utils/currencyFormater";

import {
    Table,
    TableRow,
    TransactionsTableContainer
} from "./TransactionsTableStyles";

interface TableRowComponentProps extends Omit<Transaction, "id"> { };

const TableRowComponent = ({
    amount,
    category,
    createdAt,
    title,
    type,
}: TableRowComponentProps) => {
    return (
        <TableRow>
            <td className="black"><span>{title}</span></td>
            <td className={
                type === "deposit" ? "green" : "red"
            }>
                <span>{valueToCurrency(amount ?? 0)}</span>
            </td>
            <td className="gray"><span>{category}</span></td>
            <td className="gray"><span>
                {new Intl.DateTimeFormat("pt-BR").format(createdAt)}
            </span></td>
        </TableRow>
    );
}

export const TransactionsTable = () => {
    const { transactions } = useTransactions();

    return (
        <TransactionsTableContainer>
            <OverflowScrollabe
                borderRadius={5}
                buttonSize={48}
                scrollAmount={1}
            >
                <Table>
                    <thead>
                        <tr className="table-header-row">
                            <th className="column-1"><span>Título</span></th>
                            <th className="column-2"><span>Preço</span></th>
                            <th className="column-3"><span>Categoria</span></th>
                            <th className="column-4"><span>Data</span></th>
                        </tr>
                    </thead>

                    <tbody>
                        {transactions?.map(({
                            amount,
                            category,
                            createdAt,
                            id,
                            title,
                            type
                        }, index) => {
                            return (
                                <TableRowComponent
                                    amount={amount}
                                    category={category}
                                    createdAt={createdAt}
                                    key={id}
                                    title={title}
                                    type={type}
                                />
                            );
                        })}
                    </tbody>
                </Table>
            </OverflowScrollabe>
        </TransactionsTableContainer>
    );
}