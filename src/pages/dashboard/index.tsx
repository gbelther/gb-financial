import ResumeTransactions from "../../components/ResumeTransactions";
import { Container, Title } from "./styles-dashboard";

export default function Dashboard() {
  return (
    <Container>
      <Title>Controle Financeiro</Title>
      <ResumeTransactions />
    </Container>
  );
}
