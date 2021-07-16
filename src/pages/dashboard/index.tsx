import { ChangeEvent, useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { SelectDate } from "../../components/SelectDate";
import { ModalTransaction } from "../../components/ModalTransaction/ModalTransaction";
import { Transaction } from "../../components/Transaction";

import {
  Container,
  Content,
  InputsWrapper,
  Button,
  InputFilter,
  TransactionsWrapper,
} from "./styles-dashboard";
import { GetServerSideProps } from "next";
import connectToDatabase from "../../util/mongodb";
import { ITransaction } from "../../../types";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

interface IDashboardProps {
  data: ITransaction[];
}

export default function Dashboard({ data }: IDashboardProps) {
  const [showModalTransaction, setShowModalTransaction] = useState(false);

  const {
    isLoading,
    filteredTransactionsByDate,
    filteredTransactions,
    setAllTransactions,
    setFilteredTransactions,
    setIsLoading,
  } = useContext(TransactionsContext);

  useEffect(() => {
    if (data) {
      setAllTransactions(data);
      setIsLoading(false);
    }
  }, []);

  function handleFilter(event: ChangeEvent<HTMLInputElement>) {
    const inputText = event.target.value;

    const filtered = filteredTransactionsByDate.filter((transaction) =>
      transaction.description
        .toLocaleLowerCase()
        .includes(inputText.toLocaleLowerCase())
    );

    setFilteredTransactions(filtered);
  }

  console.log(isLoading);

  return (
    <Container>
      <Header />
      <Content>
        <InputsWrapper>
          <SelectDate />
        </InputsWrapper>
        <InputsWrapper>
          <Button onClick={() => setShowModalTransaction(true)}>
            ADICIONAR
          </Button>
          <InputFilter
            type="text"
            placeholder="Filtro"
            onChange={handleFilter}
          />
        </InputsWrapper>
        <TransactionsWrapper>
          {filteredTransactions.map((transaction) => (
            <Transaction key={transaction._id} transaction={transaction} />
          ))}
        </TransactionsWrapper>
      </Content>
      {showModalTransaction && (
        <ModalTransaction
          show={showModalTransaction}
          onClose={() => setShowModalTransaction(false)}
          type="POST"
        />
      )}
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { db } = await connectToDatabase();

  const data: ITransaction[] = await db
    .collection("transactions")
    .find({})
    .sort({ year: 1, month: 1, day: 1 })
    .toArray();

  return {
    props: { data: JSON.parse(JSON.stringify(data)) },
  };
};
