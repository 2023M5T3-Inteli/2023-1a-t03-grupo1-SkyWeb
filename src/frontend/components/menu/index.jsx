import * as React from 'react';
import { Box, Container } from "@mui/system"
import styled from 'styled-components'; //Usei Styled Components
import userProfile from '../../assets/images/chloe-price.png';
import { Link } from 'react-router-dom';
import '../../style.css';

//Div do menu
const Sidebar = styled.div`
background-color: #0672CB;
height: 100vh;
width: 20vw;
display: flex;
flex-direction: column;
align-items: center;
min-width: max-content;
`

//Botão do perfil
const ProfileContainer = styled.button`
padding: 1.8rem;
display: flex;
align-items: center;
background-color: #fff;
box-shadow: .2rem .2rem .2rem #555;
border-radius: .6rem;
width: 70%;
outline: none;
border: none;
margin-top: 3rem;
`

//Nome do usuário
const UserName = styled.p`
font-weight: 600;
font-size: 1.6rem;
`

//Cargo do usuário
const UserRole = styled.p`
`

//Div para deixar o nome e o cargo um acima do outro
const NameRoleWrapper = styled.div`
padding-left: 1rem;
`

//Imagem do usuário
const UserImage = styled.div`
height: 2.4rem;
width: 2.4rem;
background-color: #000;
border-radius: 100%;
padding: 1rem;
`

//Botões de navegação
const SidebarItem = styled(Link)`
color: #fff;
text-decoration: none;
font-weight: 600;
font-size: 1.3rem;
padding-left: 4.6rem;
width: max-content;
text-align: left;
margin-top: 3rem;
&:hover {
    transition: .3s;
    border-left: 5px solid white
}
`

//Nav para agrupar os botões
const Nav = styled.nav`
height: 25rem;
width: 100%;
padding-top: 3rem;
display: flex;
flex-direction: column;
justify-content: space-between;
`

//Div para deixar os botões um acima do outro
const BottomWrapper = styled.div`
height: 35vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
position: absolute;
bottom: 0;
width: 20vw;
`

//Botão criar projeto
const BringButton = styled(ProfileContainer)`
padding: 1.5rem;
font-weight: 500;
width: 70%;
display: flex;
justify-content: center;
height: auto;
`

//Botão sair
const Leave = styled(SidebarItem)`
margin: 0;
padding: 0;
width: 100%;
padding-left: 3rem;
margin-left: 6.4rem;
padding-bottom: 1rem;
`

//Componente
export function Menu(props) {

    return (
        <Sidebar>
            <ProfileContainer>
                <UserImage>
                </UserImage>
                <NameRoleWrapper>
                    <UserName>{props.userName}</UserName>
                    <UserRole>{props.userRole}</UserRole>
                </NameRoleWrapper>
            </ProfileContainer>
            <Nav>
                <SidebarItem to='home'>My Dashboard</SidebarItem>
                <SidebarItem to='allprojects'>All Projects</SidebarItem>
                <SidebarItem to='manager'>Manager Pannel</SidebarItem>
                <SidebarItem to='about'>About</SidebarItem>
                <SidebarItem to='faq'>FAQ</SidebarItem>
            </Nav>
            <BottomWrapper>
                <BringButton>Bring your project</BringButton>
                <Leave>Leave</Leave>
            </BottomWrapper>
        </Sidebar>
    )

}