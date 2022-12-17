import {useNavigate} from 'react-router-dom';

import bannerImg from '../../assets/banner.png';
import {Button} from '../../components/Button';
import { Header } from '../../components/header';

import { Container, TextContent, Title, TitleHighLight } from "./styles"

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignin = () => {
        navigate('/login')
    }

    return (<>
    <Header />
    <Container>
        <div>
            <Title>
                <TitleHighLight>
                    Implemente <br />
                </TitleHighLight>
                    o seu futuro global agora!
            </Title>

            <TextContent>
                Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
            </TextContent>

            <Button title="Começar agora" variant='secondary' onClick={handleClickSignin}></Button>
        </div>
        <div>
            <img src={bannerImg} alt="imagem principal" />
        </div>
    </Container>
    
    </>)
}

export {Home}