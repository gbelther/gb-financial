import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { moneyFormat } from "../../util/numberFormat";
import { Container, ItemTitle, ItemValue, ResumeItem } from "./styles";

export function ResumeTransactions() {
  const [quantity, setQuantity] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const [withdraw, setWithdraw] = useState(0);

  const { filteredTransactions } = useContext(TransactionsContext);

  useEffect(() => {
    if (filteredTransactions) {
      const transactionsQuantity = filteredTransactions.length;

      const transactionsDeposit = filteredTransactions.reduce(
        (total, transaction) => {
          if (transaction.type === "+") {
            return total + transaction.value;
          }

          return total;
        },
        0
      );

      const transactionsWithdraw = filteredTransactions.reduce(
        (total, transaction) => {
          if (transaction.type === "-") {
            return total + transaction.value;
          }

          return total;
        },
        0
      );

      setQuantity(transactionsQuantity);
      setDeposit(transactionsDeposit);
      setWithdraw(transactionsWithdraw);
    }
  }, [filteredTransactions]);

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
        <ItemValue value={-withdraw}>{`-${moneyFormat(withdraw)}`}</ItemValue>
      </ResumeItem>
      <ResumeItem>
        <ItemTitle>Balanço:</ItemTitle>
        <ItemValue value={deposit - withdraw}>
          {moneyFormat(deposit - withdraw)}
        </ItemValue>
      </ResumeItem>
    </Container>
  );
}
