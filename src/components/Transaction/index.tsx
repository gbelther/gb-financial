import { ModalTransaction } from "../ModalTransaction/ModalTransaction";

import {
  Container,
  Day,
  ContentWrapper,
  Category,
  Description,
  TransactionValueWrapper,
  IconsWrapper,
  EditIcon,
  DeleteIcon,
} from "./styles";

import { ITransaction } from "../../../types";
import { moneyFormat } from "../../util/numberFormat";
import { api } from "../../services/api";
import { useState } from "react";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

interface ITransactionProps {
  transaction: ITransaction;
}

export function Transaction({ transaction }: ITransactionProps) {
  const [showModalTransaction, setShowModalTransaction] = useState(false);

  const { deleteTransaction } = useContext(TransactionsContext);

  const { _id, value, description, category, day, type } = transaction;

  async function handleDeleteTransaction() {
    try {
      const response = await api.delete(`/transaction/${_id}`);

      if (response) {
        deleteTransaction(_id);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container defaultValue={type === "-" ? -value : value}>
      <Day>{day}</Day>
      <ContentWrapper>
        <Category>{category}</Category>
        <Description>{description}</Description>
      </ContentWrapper>
      <TransactionValueWrapper>{`${type === "-" ? "-" : ""}${moneyFormat(
        value
      )}`}</TransactionValueWrapper>
      <IconsWrapper>
        <EditIcon
          size="1.25rem"
          onClick={() => setShowModalTransaction(true)}
        />
        <DeleteIcon size="1.25rem" onClick={handleDeleteTransaction} />
      </IconsWrapper>
      {showModalTransaction && (
        <ModalTransaction
          show={showModalTransaction}
          onClose={() => setShowModalTransaction(false)}
          type="PUT"
          transaction={transaction}
        />
      )}
    </Container>
  );
}
