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

interface ITransactionProps {
  value: number;
}

export function Transaction({ value }: ITransactionProps) {
  return (
    <Container defaultValue={value}>
      <Day>01</Day>
      <ContentWrapper>
        <Category>Mercado</Category>
        <Description>Compras do mês no supermercado</Description>
      </ContentWrapper>
      <TransactionValueWrapper>R$ {value}</TransactionValueWrapper>
      <IconsWrapper>
        <FiEdit size="1.25rem" />
        <FiTrash2 size="1.25rem" />
      </IconsWrapper>
    </Container>
  );
}
