import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  border: 1px solid green;
  padding: 0.5rem 1rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
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
  if (value > 0) return "var(--green-600)";
  if (value < 0) return "var(--red-600)";

  return "var(--black)";
}

export const ItemValue = styled(ItemTitle)<IItemValueProps>`
  color: ${(props) => getColorByValue(props.value)};
  font-weight: bold;
`;
