import {
  Container,
  Day,
  ContentWrapper,
  Category,
  Description,
  TransactionValueWrapper,
  IconsWrapper,
} from "./styles";

import { FiEdit, FiTrash2 } from "react-icons/fi";

export function Transaction() {
  return (
    <Container>
      <Day>01</Day>
      <ContentWrapper>
        <Category>Mercado</Category>
        <Description>Compras do mês no supermercado</Description>
      </ContentWrapper>
      <TransactionValueWrapper>R$ 1000,00</TransactionValueWrapper>
      <IconsWrapper>
        <FiEdit size="1.25rem" />
        <FiTrash2 size="1.25rem" />
      </IconsWrapper>
    </Container>
  );
}
