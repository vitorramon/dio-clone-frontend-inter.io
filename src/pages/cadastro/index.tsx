import { MdEmail, MdLock } from 'react-icons/md';
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import {Button} from '../../components/Button';
import { Header } from '../../components/header';
import { Input } from '../../components/Input';

import { api } from '../../services/api'

import {Column, Container, CriarConta, Text, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from "./styles"
import { IFormData } from './types';

const schema = yup.object({
    email: yup.string().email().required('Email não é válido'),
    password: yup.string().required('No mínimo 3 caracteres'),
    name: yup.string().min(3).required('Digite seu nome completo'),
  }).required();

const Cadastro = () => {

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
                <SubtitleLogin>Cria sua conta e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="name"  control={control} errorMessage = {errors?.name?.message}  placeholder = 'Nome completo' leftIcon={<FaUser />} />

                    <Input name="email"  control={control} errorMessage = {errors?.email?.message} placeholder = 'E-mail' leftIcon={<MdEmail/>}/>

                    <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder = 'Senha' type = 'password' leftIcon={<MdLock/>}/>
                    <Button title='Criar minha conta' variant='secondary'  type = 'submit'/>
                </form>
                <Row>
                    <Text>
                        <p>Já tenho conta.</p> 
                    </Text>
                        
                    <CriarConta>
                        <a href="/login">Fazer Login</a>
                    </CriarConta>
                </Row>
            </Wrapper>
        </Column>
    </Container>
    
    </>)
}

export {Cadastro}