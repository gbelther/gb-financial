import { useState } from "react";

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

interface IDashboardProps {
  data: ITransaction[];
}

export default function Dashboard({ data }: IDashboardProps) {
  const [showModalTransaction, setShowModalTransaction] = useState(false);

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
          <InputFilter type="text" placeholder="Filtro" />
        </InputsWrapper>
        <TransactionsWrapper>
          <Transaction value={1000} />
          <Transaction value={1000} />
          <Transaction value={1000} />
        </TransactionsWrapper>
      </Content>
      {showModalTransaction && (
        <ModalTransaction
          show={showModalTransaction}
          onClose={() => setShowModalTransaction(false)}
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
    .toArray();

  return {
    props: { data: JSON.parse(JSON.stringify(data)) },
  };
};
