import { MdEmail, MdLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import {Button} from '../../components/Button';
import { Header } from '../../components/header';
import { Input } from '../../components/Input';

import { api } from '../../services/api'

import {Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from "./styles"
import { IFormData } from './types';

const schema = yup.object({
    email: yup.string().email().required('Email não é válido'),
    password: yup.string().min(3).required('No mínimo 3 caracteres'),
  }).required();

const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors} } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });




    const onSubmit = async (formData: IFormData) => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1){
                navigate('/feed')
            } else {
                alert('Email ou senha inválido')
            }
        } catch {
            alert('Houve um erro, tente novamente.')
        }
    };
  

    return (<>
    <Header />
    <Container>
        <Column>
            <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
        </Column>
        <Column>
            <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="email"  control={control} errorMessage = {errors?.email?.message} placeholder = 'E-mail' leftIcon={<MdEmail/>}/>
                    <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder = 'Senha' type = 'password' leftIcon={<MdLock/>}/>
                    <Button title='Entrar' variant='secondary'  type = 'submit'/>
                </form>
                <Row>
                    <EsqueciText> <a href="#">Esqueci minha senha</a></EsqueciText>
                    <CriarText> <a href="/cadastro"> Criar conta</a></CriarText>
                </Row>
            </Wrapper>
        </Column>
    </Container>
    
    </>)
}

export {Login}