import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useRouter } from "next/router";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";

import {
  Container,
  SignWrapper,
  Title,
  InputTextWrapper,
  InputTextSection,
  InputText,
  InputButtonWrapper,
  Button,
  Warning,
} from "./styles-home";

interface ILoginFormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

export default function Home() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInputs>({
    resolver: yupResolver(schema),
  });

  function handleLogin(event: FormEvent) {
    router.push("/dashboard");
  }

  return (
    <Container>
      <SignWrapper onSubmit={handleSubmit(handleLogin)}>
        <Title>Entrar</Title>
        <InputTextWrapper>
          <InputTextSection>
            <InputText
              type="text"
              placeholder="E-mail"
              {...register("email")}
            />
            <Warning>{errors.email?.message}</Warning>
          </InputTextSection>
          <InputTextSection>
            <InputText
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            <Warning>{errors.password?.message}</Warning>
          </InputTextSection>
        </InputTextWrapper>
        <InputButtonWrapper>
          <Button type="submit">ENTRAR</Button>
          <Button type="button">CADASTRAR</Button>
        </InputButtonWrapper>
      </SignWrapper>
    </Container>
  );
}
