import Dexie, { Table } from "dexie";

export interface Transaction {
    amount: number;
    category: string;
    createdAt: Date;
    id?: number;
    title: string;
    type: "deposit" | "withdrawal" | null;
};

export class MySubClassedDexie extends Dexie {
    transactions!: Table<Transaction>;

    constructor() {
        super("database");
        this.version(1).stores({
            transactions: "++id, amount, category, title, type"
        });
    }
}

export const db = new MySubClassedDexie();