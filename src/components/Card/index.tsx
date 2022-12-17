import React from 'react'
import {FiThumbsUp} from 'react-icons/fi'

import {CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture} from './styles'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <Content>
            <UserInfo>
                <UserPicture src = 'https://avatars.githubusercontent.com/u/92330087?s=96&v=4'/>
                <div>
                    <h4>Vitor Ramon</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS.</h4>
                <p>Projeto feito para o curso de HTML e CSS no Bootcamp dio Orange Tech+ ... <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JAVASCRIPT</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export {Card}
