import styled from "styled-components";

export const Container = styled.main`
  background: var(--gray-700);
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.main`
  width: 100%;
  max-width: 1080px;
  padding: 1rem 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const InputsWrapper = styled.section`
  width: 70%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Button = styled.button`
  background: var(--gray-300);
  border: #cbd5e0;
  width: 160px;
  height: 2rem;
  font-size: 1.25rem;
  font-weight: bold;

  transition: 0.2s;

  &:hover {
    filter: brightness(0.7);
    background: var(--green-600);
  }
`;

export const InputFilter = styled.input`
  background: var(--gray-300);
  border: var(--gray-300);
  border-radius: 5px;
  max-width: 500px;
  min-width: 220px;
  height: 2rem;
  font-size: 1.25rem;
  flex-grow: 1;
  padding: 0 0.5rem;
`;

export const TransactionsWrapper = styled.section`
  width: 100%;
  height: 70vh;

  overflow-y: scroll !important;
  overflow-x: hidden !important;

  ::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
