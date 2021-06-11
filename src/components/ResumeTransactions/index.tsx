import { useState } from "react";
import { moneyFormat } from "../../util/numberFormat";
import { Container, ItemTitle, ItemValue, ResumeItem } from "./styles";

export function ResumeTransactions() {
  const [quantity] = useState(23);
  const [deposit] = useState(2000);
  const [withdraw] = useState(-500);

  return (
    <Container>
      <ResumeItem>
        <ItemTitle>Quantidade:</ItemTitle>
        <ItemValue>{quantity}</ItemValue>
      </ResumeItem>
      <ResumeItem>
        <ItemTitle>Entradas:</ItemTitle>
        <ItemValue value={deposit}>{moneyFormat(deposit)}</ItemValue>
      </ResumeItem>
      <ResumeItem>
        <ItemTitle>Saídas:</ItemTitle>
        <ItemValue value={withdraw}>{moneyFormat(withdraw)}</ItemValue>
      </ResumeItem>
      <ResumeItem>
        <ItemTitle>Balanço:</ItemTitle>
        <ItemValue value={deposit - withdraw}>
          {moneyFormat(deposit + withdraw)}
        </ItemValue>
      </ResumeItem>
    </Container>
  );
}
