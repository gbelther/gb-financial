import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useRouter } from "next/router";
import { FormEvent, MouseEvent, useEffect } from "react";
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
import { useState } from "react";

const schema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // useEffect(() => {
  //   router.push("/dashboard");
  // }, []);

  function handleLogin(event: FormEvent) {
    event.preventDefault();
  }

  function handleRegister(event: MouseEvent) {
    setIsLogin(false);
  }

  function handleBackToLogin() {
    setIsLogin(true);
  }

  return (
    <Container>
      {isLogin ? (
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
            <Button type="button" onClick={handleRegister}>
              CADASTRAR
            </Button>
          </InputButtonWrapper>
        </SignWrapper>
      ) : (
        <SignWrapper onSubmit={handleSubmit(handleLogin)}>
          <Title>Cadastrar</Title>
          <InputTextWrapper>
            <InputTextSection>
              <InputText type="text" placeholder="Nome" {...register("name")} />
              <Warning>{errors.name?.message}</Warning>
            </InputTextSection>
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
            <Button type="submit">CADASTRAR</Button>
            <Button type="button" onClick={handleBackToLogin}>
              VOLTAR
            </Button>
          </InputButtonWrapper>
        </SignWrapper>
      )}
    </Container>
  );
}
