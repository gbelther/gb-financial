import { useEffect, useState } from "react";
import { createContext, ReactNode } from "react";
import { ITransaction } from "../../types";

interface ITransactionsContext {
  isLoading: boolean;
  allTransactions: ITransaction[];
  filteredTransactionsByDate: ITransaction[];
  filteredTransactions: ITransaction[];
  setIsLoading: (isLoading: boolean) => void;
  setAllTransactions: (transactions: ITransaction[]) => void;
  setFilteredTransactionsByDate: (transactions: ITransaction[]) => void;
  setFilteredTransactions: (transactions: ITransaction[]) => void;
  addTransaction: (transaction: ITransaction) => void;
  deleteTransaction: (transactionId: string) => void;
  editTransaction: (editedTransaction: ITransaction) => void;
}

interface ITransactionsProvider {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as ITransactionsContext);

export const TransactionsProvider = ({ children }: ITransactionsProvider) => {
  const [isLoading, setIsLoading] = useState(false);

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

  function editTransaction(editedTransaction: ITransaction) {
    setAllTransactions((prevTransactions) =>
      prevTransactions.map((transaction) => {
        if (transaction._id === editedTransaction._id) {
          return editedTransaction;
        }

        return transaction;
      })
    );
  }

  return (
    <TransactionsContext.Provider
      value={{
        isLoading,
        allTransactions,
        filteredTransactionsByDate,
        filteredTransactions,
        setIsLoading,
        setAllTransactions,
        setFilteredTransactionsByDate,
        setFilteredTransactions,
        addTransaction,
        deleteTransaction,
        editTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
