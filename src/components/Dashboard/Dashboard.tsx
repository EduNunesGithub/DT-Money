import { Card } from "../Card/Card";
import { OverflowScrollabe } from "../OverflowScrollable/OverflowScrollabe";

import { useTransactions } from "../../hooks/useTransactions";

import {
    CardContainer,
    DashboardContainer,
} from "./DashboardStyles";

import iconIncome from "../../assets/income.svg";
import iconOutcome from "../../assets/outcome.svg";
import iconTotal from "../../assets/total.svg";

export const Dashboard = () => {
    const { transactions } = useTransactions();

    const sumary = transactions?.reduce(({
        deposit,
        depositDate,
        total,
        totalDate,
        withdrawal,
        withdrawalDate
    }, { amount, createdAt, type }) => {
        if (type === "deposit") {
            deposit = deposit + amount;
            depositDate = createdAt >= depositDate ? createdAt : depositDate;
        } else {
            withdrawal = withdrawal - amount;
            withdrawalDate = createdAt >= withdrawalDate ? createdAt : withdrawalDate;
        }

        total = deposit - withdrawal;
        totalDate = createdAt >= totalDate ? createdAt : totalDate;

        return {
            deposit,
            depositDate,
            total,
            totalDate,
            withdrawal,
            withdrawalDate
        };
    }, {
        deposit: 0,
        depositDate: new Date(0),
        total: 0,
        totalDate: new Date(0),
        withdrawal: 0,
        withdrawalDate: new Date(0)
    });

    return (
        <DashboardContainer>
            <OverflowScrollabe
                borderRadius={5}
                buttonSize={48}
                scrollAmount={1}
            >
                <CardContainer>
                    <Card
                        background="--shape-principal"
                        color="--titulos"
                        icon={iconIncome}
                        lastEntrance={sumary?.depositDate ?? new Date(0)}
                        name="Entradas"
                        value={sumary?.deposit ?? 0}
                    />
                    <Card
                        background="--shape-principal"
                        color="--titulos"
                        icon={iconOutcome}
                        lastEntrance={sumary?.withdrawalDate ?? new Date(0)}
                        name="Saídas"
                        value={sumary?.withdrawal ?? 0}
                    />
                    <Card
                        background="--green"
                        color="--shape-principal"
                        icon={iconTotal}
                        lastEntrance={sumary?.totalDate ?? new Date(0)}
                        name="Total"
                        value={sumary?.total ?? 0}
                    />
                </CardContainer>
            </OverflowScrollabe>
        </DashboardContainer>
    );
}