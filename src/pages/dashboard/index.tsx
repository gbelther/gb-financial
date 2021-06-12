import { useState } from "react";
import { Header } from "../../components/Header";
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

export default function Dashboard() {
  const [showModalTransaction, setShowModalTransaction] = useState(false);

  return (
    <Container>
      <Header />
      <Content>
        <InputsWrapper>
          <Button onClick={() => setShowModalTransaction(true)}>
            ADICIONAR
          </Button>
          <InputFilter type="text" placeholder="Filtro" />
        </InputsWrapper>
        <TransactionsWrapper>
          <Transaction value={1000} />
          <Transaction value={-1000} />
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
