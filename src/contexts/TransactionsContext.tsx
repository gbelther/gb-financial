import { useEffect, useState } from "react";
import { createContext, ReactNode } from "react";
import { ITransaction } from "../../types";

interface ITransactionsContext {
  allTransactions: ITransaction[];
  filteredTransactions: ITransaction[];
  setAllTransactions: (transactions: ITransaction[]) => void;
  setFilteredTransactions: (transactions: ITransaction[]) => void;
}

interface ITransactionsProvider {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as ITransactionsContext);

export const TransactionsProvider = ({ children }: ITransactionsProvider) => {
  const [allTransactions, setAllTransactions] = useState<ITransaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<
    ITransaction[]
  >([]);

  useEffect(() => {
    setFilteredTransactions(allTransactions);
  }, [allTransactions]);

  return (
    <TransactionsContext.Provider
      value={{
        allTransactions,
        filteredTransactions,
        setAllTransactions,
        setFilteredTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
