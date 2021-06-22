import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignWrapper = styled.form`
  background: var(--gray-400);
  border-radius: 5px;
  padding: 1rem 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.h2`
  width: 100%;
  text-align: center;
  margin: -10px 0;
`;

export const InputTextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InputTextSection = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
`;

export const InputText = styled.input`
  height: 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  padding: 0 0.5rem;
`;

export const InputButtonWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  width: 49%;
  height: 2rem;

  background: var(--gray-700);
  color: var(--gray-300);
  border: none;
  border-radius: 5px;

  transition: 0.2s;

  &:hover {
    background: var(--green-600);
  }
`;

export const Warning = styled.p`
  color: var(--red-600);
  font-size: 0.75rem;

  position: absolute;
  bottom: -18px;
`;
