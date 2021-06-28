import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useRouter } from "next/router";
import { FormEvent, MouseEvent, useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  Container,
  LoginWrapper,
  Title,
  InputTextWrapper,
  InputTextSection,
  InputText,
  InputButtonWrapper,
  Button,
  Warning,
} from "./styles";

const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

export function SignIn() {
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
    event.preventDefault();
  }

  return (
    <LoginWrapper onSubmit={handleSubmit(handleLogin)}>
      <Title>Entrar</Title>
      <InputTextWrapper>
        <InputTextSection>
          <InputText type="text" placeholder="E-mail" {...register("email")} />
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
    </LoginWrapper>
  );
}
