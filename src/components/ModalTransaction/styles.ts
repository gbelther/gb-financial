import styled from "styled-components";

import { FiX } from "react-icons/fi";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  height: 1.5rem;
  width: 400px;
  padding-bottom: 1.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CloseIcon = styled(FiX)`
  cursor: pointer;
`;

export const Content = styled.section`
  padding: 1.5rem 0;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &:last-child {
    margin-bottom: 1rem;
  }
`;

export const TransactionTypeWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ItemType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

export const OptionText = styled.label`
  font-size: 1rem;
  font-weight: 500;
`;

function colorBorder(id: string) {
  switch (id) {
    case "deposit":
      return "var(--green-600)";
    case "withdraw":
      return "var(--red-600)";
    default:
      return "var(--black)";
  }
}

export const OptionRadio = styled.input`
  display: none;

  & + label:before {
    content: "";
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 1px solid var(--gray-600);
    display: inline-block;
    vertical-align: middle;
    margin-right: 4px;
  }

  &:checked + label:before {
    background-color: white;
    box-sizing: border-box;
    border: 5px solid;
    border-color: ${(props) => colorBorder(props.id)};
    padding: 4px;
  }
`;

export const InputTextWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  position: relative;
`;

export const InfoInputText = styled.input`
  flex-grow: 1;
  max-width: 320px;
  margin-left: 0.5rem;
`;

export const ValueDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ValueWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  position: relative;
`;

export const DateWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  position: relative;
`;

export const InfoInputNumber = styled.input`
  margin-left: 0.5rem;
  vertical-align: bottom;
`;

export const InfoInputDate = styled.input`
  font-size: 1rem;
`;

export const Warning = styled.p`
  color: var(--red-600);
  font-size: 0.75rem;
  font-weight: bold;

  position: absolute;
  bottom: -0.875rem;
  right: 0;
`;

export const Footer = styled.section`
  height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Button = styled.button`
  background: var(--gray-300);
  width: 30%;
  height: 2rem;
  font-size: 1rem;
  font-weight: bold;
  border: var(--gray-300);
  border-radius: 8px;

  &:hover {
    background: ${(props) =>
      props.type === "submit" ? "var(--green-600)" : "var(--red-600)"};
  }
`;
