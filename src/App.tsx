import styled from "styled-components";

import { Dashboard } from "./components/Dashboard/Dashboard";
import { Header } from "./components/Header/Header";
import { TransactionsList } from "./components/TransactionsList/TransactionsList";
import { TransactionsTable } from "./components/TransactionsTable/TransactionsTable";

import { DataTransactionsProvider } from "./hooks/useTransactions";

import { GlobalStyle } from "./styles/global";

export const App = () => {
	return (
		<PageWrapper>
			<GlobalStyle />

			<DataTransactionsProvider>
				<Header />
				<Dashboard />
				<TransactionsTable />
				<TransactionsList />
			</DataTransactionsProvider>
		</PageWrapper>
	);
}

const PageWrapper = styled.div`
	display: flex;

	flex-direction: column;

	padding-bottom: 2rem;
`;