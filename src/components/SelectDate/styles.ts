import styled from "styled-components";

export const Container = styled.main`
  gap: 0.25rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background: var(--gray-300);
  border: #cbd5e0;
  width: 40px;
  height: 2rem;
  font-size: 1.25rem;
  font-weight: bold;

  transition: 0.2s;

  &:hover {
    filter: brightness(0.7);
  }
`;

export const Select = styled.select`
  width: 150px;
  height: 2rem;
  font-size: 1rem;
  font-weight: 600;

  display: flex;
  justify-content: center;
  padding-left: 1.5rem;
`;

export const Option = styled.option`
  font-size: 0.875rem;
`;
