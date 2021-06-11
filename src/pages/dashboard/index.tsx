import { Header } from "../../components/Header";
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
  return (
    <Container>
      <Header />
      <Content>
        <InputsWrapper>
          <Button>ADICIONAR</Button>
          <InputFilter type="text" placeholder="Filtro" />
        </InputsWrapper>
        <TransactionsWrapper>
          <Transaction />
          <Transaction />
          <Transaction />
        </TransactionsWrapper>
      </Content>
    </Container>
  );
}
