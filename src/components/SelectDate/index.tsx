import { Container, Button, Select, Option } from "./styles";

export function SelectDate() {
  return (
    <Container>
      <Button>{"<"}</Button>
      <Select>
        <Option value="">12/11/2020</Option>
        <Option value="">12/11/2020</Option>
        <Option value="">12/11/2020</Option>
        <Option value="">12/11/2020</Option>
      </Select>
      <Button>{">"}</Button>
    </Container>
  );
}
