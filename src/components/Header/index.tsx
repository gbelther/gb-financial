import { ResumeTransactions } from "../ResumeTransactions";

import { Container, Title } from "./styles";

export function Header() {
  return (
    <Container>
      <Title>Controle Financeiro</Title>
      <ResumeTransactions />
    </Container>
  );
}
