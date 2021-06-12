import Modal from "react-modal";

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
  InfoInputNumber,
  InfoInputDate,
  Footer,
  Button,
} from "./styles";
import { FormEvent } from "react";

export function ModalTransaction({ show, onClose }) {
  function handleSubmitForm(event: FormEvent) {
    event.preventDefault();
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
      <Container onSubmit={handleSubmitForm}>
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
                defaultChecked
              />
              <OptionText htmlFor="deposit">Receita</OptionText>
            </ItemType>
            <ItemType>
              <OptionRadio id="withdraw" name="transactionType" type="radio" />
              <OptionText htmlFor="withdraw">Despesa</OptionText>
            </ItemType>
          </TransactionTypeWrapper>
          <InputTextWrapper>
            <InfoInputText type="text" required />
            <OptionText>Categoria</OptionText>
          </InputTextWrapper>
          <InputTextWrapper>
            <InfoInputText type="text" required />
            <OptionText>Descrição</OptionText>
          </InputTextWrapper>
          <ValueDateWrapper>
            <ValueDateWrapper>
              <OptionText>Valor</OptionText>
              <InfoInputNumber type="number" required />
            </ValueDateWrapper>
            <InfoInputDate type="date" required />
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
