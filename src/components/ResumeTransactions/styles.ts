import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  border: 1px solid green;
  padding: 0.5rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ResumeItem = styled.section`
  display: flex;
  gap: 0.25rem;
`;

export const ItemTitle = styled.p`
  font-size: 1rem;
`;

interface IItemValueProps {
  value?: number;
}

function getColorByValue(value: number) {
  if (value > 0) return "green";
  if (value < 0) return "red";

  return "black";
}

export const ItemValue = styled(ItemTitle)<IItemValueProps>`
  color: ${(props) => getColorByValue(props.value)};
  font-weight: bold;
`;
