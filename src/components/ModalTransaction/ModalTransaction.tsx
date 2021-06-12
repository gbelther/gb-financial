import Modal from "react-modal";
import { FormEvent } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { FiX } from "react-icons/fi";

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

interface IFormInputs {
  transactionType: string;
  category: string;
  description: string;
  value: number;
  date: string;
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

export function ModalTransaction({ show, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  function handleSubmitForm(data: IFormInputs) {
    console.log(data);
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
                value="deposit"
                defaultChecked
                {...register("transactionType")}
              />
              <OptionText htmlFor="deposit">Receita</OptionText>
            </ItemType>
            <ItemType>
              <OptionRadio
                id="withdraw"
                name="transactionType"
                type="radio"
                value="withdraw"
                {...register("transactionType")}
              />
              <OptionText htmlFor="withdraw">Despesa</OptionText>
            </ItemType>
          </TransactionTypeWrapper>
          <InputTextWrapper>
            <InfoInputText {...register("category")} />
            <OptionText>Categoria</OptionText>
            <Warning>{errors.category?.message}</Warning>
          </InputTextWrapper>
          <InputTextWrapper>
            <InfoInputText {...register("description")} />
            <Warning>{errors.description?.message}</Warning>
            <OptionText>Descrição</OptionText>
          </InputTextWrapper>
          <ValueDateWrapper>
            <ValueWrapper>
              <OptionText>Valor</OptionText>
              <InfoInputNumber {...register("value")} defaultValue={0} />
              <Warning>{errors.value?.message}</Warning>
            </ValueWrapper>
            <DateWrapper>
              <InfoInputDate type="date" {...register("date")} />
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
