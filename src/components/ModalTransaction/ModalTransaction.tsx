import Modal from "react-modal";
import { FormEvent } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Container,
  Header,
  CloseIcon,
  Content,
  TransactionTypeWrapper,
  ItemType,
  OptionRadio,
  OptionText,
  InputTextWrapper,
  InfoInputText,
  ValueDateWrapper,
  ValueWrapper,
  DateWrapper,
  InfoInputNumber,
  InfoInputDate,
  Warning,
  Footer,
  Button,
} from "./styles";
import { api } from "../../services/api";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { ITransaction } from "../../../types";

interface IFormInputs {
  transactionType: string;
  category: string;
  description: string;
  value: number;
  date: string;
}

interface IModalTransactionProps {
  show: boolean;
  onClose: () => void;
  type: "POST" | "PUT";
  transaction?: ITransaction;
}

const schema = yup.object().shape({
  transactionType: yup.string().required(),
  category: yup.string().required("Necessário colocar categoria"),
  description: yup.string().required("Necessário colocar a descrição"),
  value: yup
    .number()
    .min(0, "Maior ou igual a zero")
    .required("Valor absoluto maior ou igual a 0")
    .typeError("Inválido"),
  date: yup.string().required("Necessário colocar a data"),
});

export function ModalTransaction({
  show,
  onClose,
  type,
  transaction,
}: IModalTransactionProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const { addTransaction } = useContext(TransactionsContext);

  async function handleSubmitForm(data: IFormInputs) {
    const { date, value, description, category, transactionType } = data;

    if (type === "POST") {
      const response = await api.post("/transaction", {
        description,
        value,
        category,
        year: Number(date.slice(0, 4)),
        month: Number(date.slice(5, 7)),
        day: Number(date.slice(8, 10)),
        yearMonth: date.slice(0, 7),
        yearMonthDay: date,
        transactionType,
      });

      addTransaction(response.data);
    }

    if (type === "PUT") {
      const response = await api.put(`/transaction/${transaction._id}`, {
        description,
        value,
        category,
        year: Number(date.slice(0, 4)),
        month: Number(date.slice(5, 7)),
        day: Number(date.slice(8, 10)),
        yearMonth: date.slice(0, 7),
        yearMonthDay: date,
        transactionType,
      });
    }

    onClose();
  }

  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      <Container onSubmit={handleSubmit(handleSubmitForm)}>
        <Header>
          <h2>Adicionar Transação</h2>
          <CloseIcon size="1.5rem" onClick={onClose} />
        </Header>
        <Content>
          <TransactionTypeWrapper>
            <ItemType>
              <OptionRadio
                id="deposit"
                name="transactionType"
                type="radio"
                value="+"
                defaultChecked={
                  type === "PUT" ? transaction.type === "+" : true
                }
                {...register("transactionType")}
              />
              <OptionText htmlFor="deposit">Receita</OptionText>
            </ItemType>
            <ItemType>
              <OptionRadio
                id="withdraw"
                name="transactionType"
                type="radio"
                value="-"
                defaultChecked={
                  type === "PUT" ? transaction.type === "-" : false
                }
                {...register("transactionType")}
              />
              <OptionText htmlFor="withdraw">Despesa</OptionText>
            </ItemType>
          </TransactionTypeWrapper>
          <InputTextWrapper>
            <InfoInputText
              {...register("category")}
              defaultValue={type === "PUT" ? transaction.category : ""}
            />
            <OptionText>Categoria</OptionText>
            <Warning>{errors.category?.message}</Warning>
          </InputTextWrapper>
          <InputTextWrapper>
            <InfoInputText
              {...register("description")}
              defaultValue={type === "PUT" ? transaction.description : ""}
            />
            <Warning>{errors.description?.message}</Warning>
            <OptionText>Descrição</OptionText>
          </InputTextWrapper>
          <ValueDateWrapper>
            <ValueWrapper>
              <OptionText>Valor</OptionText>
              <InfoInputNumber
                {...register("value")}
                defaultValue={type === "PUT" ? transaction.value : 0}
              />
              <Warning>{errors.value?.message}</Warning>
            </ValueWrapper>
            <DateWrapper>
              <InfoInputDate
                type="date"
                {...register("date")}
                defaultValue={type === "PUT" ? transaction.yearMonthDay : ""}
              />
              <Warning>{errors.date?.message}</Warning>
            </DateWrapper>
          </ValueDateWrapper>
        </Content>
        <Footer>
          <Button type="button" onClick={onClose}>
            CANCELAR
          </Button>
          <Button type="submit">CONFIRMAR</Button>
        </Footer>
      </Container>
    </Modal>
  );
}
