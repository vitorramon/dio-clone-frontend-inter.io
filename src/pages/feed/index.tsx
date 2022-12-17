import { Header } from '../../components/header';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';


import { Container, Column, Title, TitleHighlight} from "./styles"

const Feed = () => {
    return (<>
    <Header autenticado = {true} />
    <Container>
        <Column flex = {3}>
            <Title>Feed</Title>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Column>

        <Column flex = {1}>
            <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
            <UserInfo percentual={80} nome = 'Vitor Ramon' image = 'https://avatars.githubusercontent.com/u/92330087?s=96&v=4'/>
            <UserInfo percentual={27} nome = 'Vitor Ramon' image = 'https://avatars.githubusercontent.com/u/92330087?s=96&v=4'/>
            <UserInfo percentual={89} nome = 'Vitor Ramon' image = 'https://avatars.githubusercontent.com/u/92330087?s=96&v=4'/>
            <UserInfo percentual={57} nome = 'Vitor Ramon' image = 'https://avatars.githubusercontent.com/u/92330087?s=96&v=4'/>
            <UserInfo percentual={12} nome = 'Vitor Ramon' image = 'https://avatars.githubusercontent.com/u/92330087?s=96&v=4'/>
        </Column>
        
       
    </Container>
    
    </>)
}

export {Feed}