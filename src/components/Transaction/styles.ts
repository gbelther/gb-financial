import styled from "styled-components";

export const Container = styled.div`
  background: var(--gray-100);
  border-radius: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Day = styled.p`
  width: 5rem;
  font-size: 1.5rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.section`
  width: 100%;
  padding-right: 1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

export const Category = styled.p`
  font-size: 1rem;
  font-weight: bold;
  text-align: justify;
`;

export const Description = styled.p`
  font-size: 0.875rem;
  font-weight: regular;
  text-align: justify;
`;

export const TransactionValueWrapper = styled.p`
  font-size: 1rem;
  font-weight: bold;
  width: 180px;
  margin-right: 1rem;
`;

export const IconsWrapper = styled.section`
  width: 5rem;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
