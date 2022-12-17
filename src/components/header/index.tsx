import React from "react";
import logo from "../../assets/logo-dio.png"
import { Button } from "../Button";
import {
    BuscarImputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
    UserPicture
} from './styles';
import { IHeader } from "./types";


const Header = ({autenticado}: IHeader) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                     <img src={logo} alt = 'logo da DIO' />
                     {autenticado ? (
                        <>
                         <BuscarImputContainer>
                             <Input placeholder="Buscar..."/>
                         </BuscarImputContainer>
                         <Menu>Live Code</Menu>
                         <Menu>Global</Menu>
                         </>
                     ) : null}
        
                </Row>

                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/92330087?s=96&v=4"/>
                    ) : (
                        <>
                        <MenuRight href="/">Home</MenuRight>
                        <Button title="Entrar" />
                        <Button title="Cadastrar" />
                        </>)}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }