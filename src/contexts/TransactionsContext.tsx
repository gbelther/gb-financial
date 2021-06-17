import { useEffect, useState } from "react";
import { createContext, ReactNode } from "react";
import { ITransaction } from "../../types";

interface ITransactionsContext {
  allTransactions: ITransaction[];
  filteredTransactionsByDate: ITransaction[];
  filteredTransactions: ITransaction[];
  setAllTransactions: (transactions: ITransaction[]) => void;
  setFilteredTransactionsByDate: (transactions: ITransaction[]) => void;
  setFilteredTransactions: (transactions: ITransaction[]) => void;
  addTransaction: (transaction: ITransaction) => void;
  deleteTransaction: (transactionId: string) => void;
}

interface ITransactionsProvider {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as ITransactionsContext);

export const TransactionsProvider = ({ children }: ITransactionsProvider) => {
  const [allTransactions, setAllTransactions] = useState<ITransaction[]>([]);
  const [filteredTransactionsByDate, setFilteredTransactionsByDate] = useState<
    ITransaction[]
  >([]);
  const [filteredTransactions, setFilteredTransactions] = useState<
    ITransaction[]
  >([]);

  useEffect(() => {
    setFilteredTransactionsByDate(allTransactions);
  }, [allTransactions]);

  // useEffect(() => {
  //   const allTransactionsSorted = allTransactions.sort(
  //     (a, b) => +new Date(a.yearMonthDay) - +new Date(b.yearMonthDay)
  //   );
  // }, [allTransactions]);

  useEffect(() => {
    setFilteredTransactions(filteredTransactionsByDate);
  }, [filteredTransactionsByDate]);

  function addTransaction(transaction: ITransaction) {
    setAllTransactions(
      [...allTransactions, transaction].sort(
        (a, b) => +new Date(a.yearMonthDay) - +new Date(b.yearMonthDay)
      )
    );
  }

  function deleteTransaction(transactionId: string) {
    const updatedAllTransactions = allTransactions.filter(
      (transaction) => transaction._id !== transactionId
    );

    if (updatedAllTransactions) {
      setAllTransactions(updatedAllTransactions);
    }
  }

  return (
    <TransactionsContext.Provider
      value={{
        allTransactions,
        filteredTransactionsByDate,
        filteredTransactions,
        setAllTransactions,
        setFilteredTransactionsByDate,
        setFilteredTransactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
