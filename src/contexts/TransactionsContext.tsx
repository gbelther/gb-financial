import { useState } from "react";
import { createContext, ReactNode } from "react";
import { ITransaction } from "../../types";

interface ITransactionsContext {
  filteredTransactions: ITransaction[];
  setFilteredTransactions: (transactions: ITransaction[]) => void;
}

interface ITransactionsProvider {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as ITransactionsContext);

export const TransactionsProvider = ({ children }: ITransactionsProvider) => {
  const [filteredTransactions, setFilteredTransactions] = useState<
    ITransaction[]
  >([]);

  return (
    <TransactionsContext.Provider
      value={{ filteredTransactions, setFilteredTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
