import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  border: 1px solid green;
  padding: 0.5rem 1rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-flow: row;
  grid-gap: 0.25rem;
`;

export const ResumeItem = styled.section`
  display: flex;
  justify-content: center;
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
