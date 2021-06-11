import styled from "styled-components";

export const Container = styled.main`
  background: var(--gray-900);

  width: 100%;
  border: 1px solid var(--gray-400);
  border-radius: 5px;
  padding: 0.5rem 1rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-flow: row;
  grid-gap: 0.25rem;
`;

export const ResumeItem = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

export const ItemTitle = styled.p`
  color: var(--gray-100);
  font-size: 1rem;
`;

interface IItemValueProps {
  value?: number;
}

function getColorByValue(value: number) {
  if (value > 0) return "var(--green-600)";
  if (value < 0) return "var(--red-600)";

  return "var(--gray-100)";
}

export const ItemValue = styled(ItemTitle)<IItemValueProps>`
  color: ${(props) => getColorByValue(props.value)};
  font-weight: bold;
`;
